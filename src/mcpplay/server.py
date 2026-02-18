"""Starlette application: WebSocket endpoint + static file serving."""

from __future__ import annotations

import json
import logging
import time
from pathlib import Path
from typing import Any

from starlette.applications import Starlette
from starlette.routing import Mount, WebSocketRoute
from starlette.staticfiles import StaticFiles
from starlette.websockets import WebSocket, WebSocketDisconnect

from mcpplay import __version__
from mcpplay.process_manager import ProcessManager
from mcpplay.protocol import (
    ErrorMessage,
    ReloadMessage,
    ServerInfoMessage,
    TimelineMessage,
    ToolResultMessage,
    ToolsMessage,
    decode_client_message,
    encode_message,
)
from mcpplay.proxy import MCPProxy
from mcpplay.security import LocalhostSecurityMiddleware
from mcpplay.timeline_store import (
    TimelineEntry,
    TimelineFilter,
    TimelineStore,
    now_iso,
)

logger = logging.getLogger(__name__)


class ConnectionManager:
    """Manages WebSocket client connections."""

    def __init__(self) -> None:
        self.clients: set[WebSocket] = set()

    def add(self, ws: WebSocket) -> None:
        self.clients.add(ws)

    def remove(self, ws: WebSocket) -> None:
        self.clients.discard(ws)

    async def broadcast(self, message: str, exclude: WebSocket | None = None) -> None:
        """Send a message to all connected clients, optionally excluding one."""
        disconnected: list[WebSocket] = []
        for ws in self.clients:
            if ws is exclude:
                continue
            try:
                await ws.send_text(message)
            except Exception:
                disconnected.append(ws)
        for ws in disconnected:
            self.clients.discard(ws)


def create_app(
    proxy: MCPProxy,
    timeline: TimelineStore,
    process_mgr: ProcessManager,
    port: int = 8321,
    server_command: str = "",
    server_args: list[str] | None = None,
) -> Starlette:
    """Create the Starlette ASGI application."""

    connections = ConnectionManager()

    # Derive display name for the server
    _args = server_args or []
    _server_name = " ".join([server_command, *_args]) if server_command else "unknown"

    async def ws_endpoint(websocket: WebSocket) -> None:
        await websocket.accept()
        connections.add(websocket)
        logger.info("WebSocket client connected (total: %d)", len(connections.clients))

        # Send server info and current tool list on connect
        try:
            await websocket.send_text(
                encode_message(
                    ServerInfoMessage(
                        command=server_command,
                        server_name=_server_name,
                        transport="stdio",
                        version=__version__,
                    )
                )
            )
            tools = await proxy.list_tools()
            await websocket.send_text(encode_message(ToolsMessage(tools=tools)))
        except Exception:
            logger.exception("Failed to send initial data")

        try:
            while True:
                raw = await websocket.receive_text()
                await _handle_message(websocket, raw, proxy, timeline, connections)
        except WebSocketDisconnect:
            pass
        except Exception:
            logger.exception("WebSocket error")
        finally:
            connections.remove(websocket)
            logger.info("WebSocket client disconnected (total: %d)", len(connections.clients))

    async def _handle_message(
        websocket: WebSocket,
        raw: str,
        proxy: MCPProxy,
        timeline: TimelineStore,
        connections: ConnectionManager,
    ) -> None:
        try:
            msg = decode_client_message(raw)
        except (json.JSONDecodeError, ValueError, KeyError) as exc:
            await websocket.send_text(
                encode_message(ErrorMessage(message=f"Invalid message: {exc}"))
            )
            return

        match msg.type:
            case "get_tools":
                tools = await proxy.list_tools()
                await websocket.send_text(encode_message(ToolsMessage(tools=tools)))

            case "call_tool":
                await _execute_tool(
                    websocket, msg.id, msg.tool_name, msg.arguments, proxy, timeline, connections
                )

            case "get_timeline":
                tf = None
                if msg.filter:
                    tf = TimelineFilter(
                        tool_name=msg.filter.get("tool_name"),
                        status=msg.filter.get("status"),
                        limit=msg.filter.get("limit"),
                    )
                entries = timeline.list_entries(tf)
                total = timeline.count()
                await websocket.send_text(
                    encode_message(
                        TimelineMessage(
                            entries=[e.to_dict() for e in entries],
                            total_count=total,
                        )
                    )
                )

            case "replay":
                entry = timeline.get_entry(msg.entry_id)
                if entry:
                    await _execute_tool(
                        websocket,
                        f"replay-{msg.entry_id}",
                        entry.tool_name,
                        entry.input_params,
                        proxy,
                        timeline,
                        connections,
                    )

            case "clear_timeline":
                timeline.clear()
                empty_msg = encode_message(TimelineMessage(entries=[], total_count=0))
                await connections.broadcast(empty_msg)

    async def _execute_tool(
        websocket: WebSocket,
        call_id: str,
        tool_name: str,
        arguments: dict[str, Any],
        proxy: MCPProxy,
        timeline: TimelineStore,
        connections: ConnectionManager,
    ) -> None:
        start = time.monotonic()
        try:
            result = await proxy.call_tool(tool_name, arguments)
            latency_ms = int((time.monotonic() - start) * 1000)

            entry = TimelineEntry(
                id=None,
                timestamp=now_iso(),
                tool_name=tool_name,
                input_params=arguments,
                output=result,
                latency_ms=latency_ms,
                is_error=result.get("isError", False),
            )
            entry_id = timeline.record(entry)
            entry.id = entry_id

            await websocket.send_text(
                encode_message(
                    ToolResultMessage(
                        id=call_id,
                        tool_name=tool_name,
                        content=result.get("content", []),
                        is_error=result.get("isError", False),
                        latency_ms=latency_ms,
                    )
                )
            )

            # Broadcast timeline update to ALL clients
            recent = timeline.list_entries(TimelineFilter(limit=200))
            total = timeline.count()
            timeline_msg = encode_message(
                TimelineMessage(
                    entries=[e.to_dict() for e in recent],
                    total_count=total,
                )
            )
            await connections.broadcast(timeline_msg)

        except Exception as exc:
            latency_ms = int((time.monotonic() - start) * 1000)
            logger.exception("Tool execution failed: %s", tool_name)

            entry = TimelineEntry(
                id=None,
                timestamp=now_iso(),
                tool_name=tool_name,
                input_params=arguments,
                output={"content": [], "isError": True},
                latency_ms=latency_ms,
                is_error=True,
                error_message=str(exc),
            )
            timeline.record(entry)

            await websocket.send_text(encode_message(ErrorMessage(message=str(exc))))

    # Set up reload callbacks for the process manager
    async def on_reload_start() -> None:
        await connections.broadcast(encode_message(ReloadMessage(status="reloading")))

    async def on_reload_done() -> None:
        tools = await proxy.list_tools()
        await connections.broadcast(encode_message(ReloadMessage(status="ready", tools=tools)))

    process_mgr.on_reload_start = on_reload_start
    process_mgr.on_reload_done = on_reload_done

    # Static files path
    static_dir = Path(__file__).parent / "static"

    routes: list[WebSocketRoute | Mount] = [
        WebSocketRoute("/ws", ws_endpoint),
    ]

    # Only mount static files if the directory has content
    if static_dir.exists() and any(static_dir.iterdir()):
        routes.append(Mount("/", app=StaticFiles(directory=str(static_dir), html=True)))

    app = Starlette(routes=routes)
    app = LocalhostSecurityMiddleware(app, port=port)  # type: ignore[assignment]

    return app  # type: ignore[return-value]
