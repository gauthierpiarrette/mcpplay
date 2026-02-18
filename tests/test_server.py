"""Tests for the Starlette WebSocket server."""

from __future__ import annotations

from unittest.mock import AsyncMock

import pytest
from starlette.testclient import TestClient

from mcpplay.process_manager import ProcessManager
from mcpplay.proxy import MCPProxy
from mcpplay.server import create_app
from mcpplay.timeline_store import TimelineStore


@pytest.fixture
def mock_proxy() -> MCPProxy:
    proxy = MCPProxy()
    proxy.tools = [
        {
            "name": "echo",
            "description": "Echo message",
            "inputSchema": {"type": "object", "properties": {"message": {"type": "string"}}},
            "capabilities": [],
            "requiresConfirmation": False,
        }
    ]
    proxy.list_tools = AsyncMock(return_value=proxy.tools)
    proxy.call_tool = AsyncMock(
        return_value={
            "content": [{"type": "text", "text": "hello"}],
            "isError": False,
        }
    )
    return proxy


@pytest.fixture
def test_app(mock_proxy: MCPProxy, memory_timeline_store: TimelineStore) -> TestClient:
    process_mgr = ProcessManager(mock_proxy)
    app = create_app(mock_proxy, memory_timeline_store, process_mgr, port=8321)
    return TestClient(app)


def drain_initial_messages(ws) -> dict:  # noqa: ANN001
    """Consume server_info + tools messages sent on connect, return the tools message."""
    msg1 = ws.receive_json()
    msg2 = ws.receive_json()
    # server_info comes first, then tools
    if msg1["type"] == "server_info":
        assert msg2["type"] == "tools"
        return msg2
    # Fallback: if order differs
    assert msg1["type"] == "tools"
    return msg1


class TestWebSocketEndpoint:
    def test_websocket_connect_receives_server_info_and_tools(
        self, test_app: TestClient, mock_proxy: MCPProxy
    ) -> None:
        with test_app.websocket_connect("/ws") as ws:
            info = ws.receive_json()
            assert info["type"] == "server_info"
            assert info["transport"] == "stdio"

            tools = ws.receive_json()
            assert tools["type"] == "tools"
            assert len(tools["tools"]) == 1
            assert tools["tools"][0]["name"] == "echo"

    def test_websocket_get_tools(self, test_app: TestClient) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "get_tools"})
            data = ws.receive_json()
            assert data["type"] == "tools"

    def test_websocket_call_tool(self, test_app: TestClient, mock_proxy: MCPProxy) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json(
                {
                    "type": "call_tool",
                    "id": "test-1",
                    "tool_name": "echo",
                    "arguments": {"message": "hi"},
                }
            )

            data = ws.receive_json()
            assert data["type"] == "tool_result"
            assert data["id"] == "test-1"
            assert data["content"][0]["text"] == "hello"
            assert data["is_error"] is False
            assert data["latency_ms"] >= 0

            # Timeline broadcast is now sent to ALL clients including requester
            timeline = ws.receive_json()
            assert timeline["type"] == "timeline"
            assert len(timeline["entries"]) >= 1
            assert timeline["total_count"] >= 1

    def test_websocket_get_timeline(self, test_app: TestClient) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "get_timeline"})
            data = ws.receive_json()
            assert data["type"] == "timeline"
            assert isinstance(data["entries"], list)

    def test_websocket_invalid_message(self, test_app: TestClient) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_text("not valid json{{{")
            data = ws.receive_json()
            assert data["type"] == "error"

    def test_websocket_unknown_message_type(self, test_app: TestClient) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "nonexistent"})
            data = ws.receive_json()
            assert data["type"] == "error"

    def test_websocket_call_tool_error(self, test_app: TestClient, mock_proxy: MCPProxy) -> None:
        """Tool execution exception sends error message to client."""
        mock_proxy.call_tool = AsyncMock(side_effect=RuntimeError("MCP connection lost"))
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json(
                {
                    "type": "call_tool",
                    "id": "err-1",
                    "tool_name": "echo",
                    "arguments": {},
                }
            )
            data = ws.receive_json()
            assert data["type"] == "error"
            assert "connection lost" in data["message"].lower()

    def test_websocket_clear_timeline(
        self, test_app: TestClient, memory_timeline_store: TimelineStore
    ) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "clear_timeline"})
            data = ws.receive_json()
            assert data["type"] == "timeline"
            assert data["entries"] == []
            assert data["total_count"] == 0

    def test_websocket_replay(
        self, test_app: TestClient, memory_timeline_store: TimelineStore
    ) -> None:
        """Replay re-executes a past timeline entry."""
        from mcpplay.timeline_store import TimelineEntry, now_iso

        entry_id = memory_timeline_store.record(
            TimelineEntry(None, now_iso(), "echo", {"message": "hi"}, {}, 10, False)
        )
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "replay", "entry_id": entry_id})
            data = ws.receive_json()
            assert data["type"] == "tool_result"
            assert data["id"].startswith("replay-")

    def test_websocket_get_timeline_with_filter(self, test_app: TestClient) -> None:
        with test_app.websocket_connect("/ws") as ws:
            drain_initial_messages(ws)
            ws.send_json({"type": "get_timeline", "filter": {"tool_name": "echo", "limit": 5}})
            data = ws.receive_json()
            assert data["type"] == "timeline"
            assert "total_count" in data


class TestStaticFiles:
    def test_index_html_served(self, test_app: TestClient) -> None:
        resp = test_app.get("/", headers={"Host": "localhost:8321"})
        # Should serve the Svelte build output
        assert resp.status_code == 200
        assert "html" in resp.headers.get("content-type", "")
