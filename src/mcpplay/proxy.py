"""MCP proxy: manages client session lifecycle with a target MCP server."""

from __future__ import annotations

import logging
from contextlib import AsyncExitStack
from typing import Any

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

from mcpplay.capability import Capability, detect_capabilities

logger = logging.getLogger(__name__)


class MCPProxy:
    """Proxy that maintains a session with an MCP server via stdio."""

    def __init__(self) -> None:
        self.session: ClientSession | None = None
        self._exit_stack: AsyncExitStack | None = None
        self._command: str = ""
        self._args: list[str] = []
        self._env: dict[str, str] | None = None
        self.tools: list[dict[str, Any]] = []

    async def connect(
        self,
        command: str,
        args: list[str],
        env: dict[str, str] | None = None,
    ) -> None:
        """Spawn MCP server subprocess and initialize session."""
        self._command = command
        self._args = args
        self._env = env

        self._exit_stack = AsyncExitStack()

        server_params = StdioServerParameters(
            command=command,
            args=args,
            env=env,
        )

        logger.info("Connecting to MCP server: %s %s", command, " ".join(args))

        stdio_transport = await self._exit_stack.enter_async_context(stdio_client(server_params))
        read_stream, write_stream = stdio_transport

        self.session = await self._exit_stack.enter_async_context(
            ClientSession(read_stream, write_stream)
        )

        await self.session.initialize()
        logger.info("MCP session initialized")

        await self._refresh_tools()

    async def disconnect(self) -> None:
        """Shut down session and child process."""
        if self._exit_stack:
            logger.info("Disconnecting from MCP server")
            await self._exit_stack.aclose()
            self._exit_stack = None
            self.session = None
            self.tools = []

    async def reconnect(self) -> None:
        """Disconnect then reconnect (used for hot reload)."""
        await self.disconnect()
        await self.connect(self._command, self._args, self._env)

    async def list_tools(self) -> list[dict[str, Any]]:
        """Return cached tool list as JSON-serializable dicts."""
        return self.tools

    async def call_tool(self, name: str, arguments: dict[str, Any]) -> dict[str, Any]:
        """Execute a tool and return JSON-serializable result."""
        if not self.session:
            raise RuntimeError("Not connected to MCP server")

        logger.debug("Calling tool: %s with args: %s", name, arguments)

        result = await self.session.call_tool(name, arguments)

        content: list[dict[str, Any]] = []
        for block in result.content:
            match block.type:
                case "text":
                    content.append({"type": "text", "text": block.text})
                case "image":
                    content.append(
                        {
                            "type": "image",
                            "data": block.data,
                            "mimeType": block.mimeType,
                        }
                    )
                case _:
                    content.append({"type": block.type, "text": str(block)})

        return {
            "content": content,
            "isError": bool(result.isError),
        }

    async def _refresh_tools(self) -> None:
        """Fetch tools from server and cache with capabilities."""
        if not self.session:
            return

        response = await self.session.list_tools()
        self.tools = []
        for tool in response.tools:
            schema = tool.inputSchema if tool.inputSchema else {}
            caps = detect_capabilities(
                tool.name,
                tool.description or "",
                schema,
            )
            self.tools.append(
                {
                    "name": tool.name,
                    "description": tool.description or "",
                    "inputSchema": schema,
                    "capabilities": [c.value for c in caps],
                    "requiresConfirmation": any(
                        c in (Capability.SHELL, Capability.WRITE, Capability.DATABASE) for c in caps
                    ),
                }
            )

        logger.info("Discovered %d tools", len(self.tools))
