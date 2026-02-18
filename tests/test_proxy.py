"""Tests for MCP proxy."""

from __future__ import annotations

from contextlib import asynccontextmanager
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from mcpplay.proxy import MCPProxy


@asynccontextmanager
async def _mock_stdio_client(params):
    """Mock stdio_client that yields mock streams."""
    read_stream = AsyncMock()
    write_stream = AsyncMock()
    yield read_stream, write_stream


@asynccontextmanager
async def _mock_client_session(read, write):
    """Mock ClientSession context manager."""
    session = AsyncMock()

    # Set up list_tools
    mock_tool = MagicMock()
    mock_tool.name = "echo"
    mock_tool.description = "Echo a message"
    mock_tool.inputSchema = {
        "type": "object",
        "properties": {"message": {"type": "string"}},
        "required": ["message"],
    }

    list_result = MagicMock()
    list_result.tools = [mock_tool]
    session.list_tools.return_value = list_result

    # Set up call_tool
    text_content = MagicMock()
    text_content.type = "text"
    text_content.text = "Hello!"

    call_result = MagicMock()
    call_result.content = [text_content]
    call_result.isError = False
    session.call_tool.return_value = call_result

    session.initialize = AsyncMock()

    yield session


class TestMCPProxy:
    @pytest.mark.asyncio
    async def test_connect_and_list_tools(self) -> None:
        proxy = MCPProxy()

        with (
            patch("mcpplay.proxy.stdio_client", _mock_stdio_client),
            patch("mcpplay.proxy.ClientSession", _mock_client_session),
        ):
            await proxy.connect("python", ["server.py"])

            tools = await proxy.list_tools()
            assert len(tools) == 1
            assert tools[0]["name"] == "echo"
            assert tools[0]["description"] == "Echo a message"
            assert "inputSchema" in tools[0]
            assert "capabilities" in tools[0]

            await proxy.disconnect()

    @pytest.mark.asyncio
    async def test_call_tool(self) -> None:
        proxy = MCPProxy()

        with (
            patch("mcpplay.proxy.stdio_client", _mock_stdio_client),
            patch("mcpplay.proxy.ClientSession", _mock_client_session),
        ):
            await proxy.connect("python", ["server.py"])

            result = await proxy.call_tool("echo", {"message": "hello"})
            assert result["content"][0]["type"] == "text"
            assert result["content"][0]["text"] == "Hello!"
            assert result["isError"] is False

            await proxy.disconnect()

    @pytest.mark.asyncio
    async def test_call_tool_not_connected(self) -> None:
        proxy = MCPProxy()
        with pytest.raises(RuntimeError, match="Not connected"):
            await proxy.call_tool("echo", {})

    @pytest.mark.asyncio
    async def test_disconnect_clears_state(self) -> None:
        proxy = MCPProxy()

        with (
            patch("mcpplay.proxy.stdio_client", _mock_stdio_client),
            patch("mcpplay.proxy.ClientSession", _mock_client_session),
        ):
            await proxy.connect("python", ["server.py"])
            assert proxy.session is not None
            assert len(proxy.tools) == 1

            await proxy.disconnect()
            assert proxy.session is None
            assert proxy.tools == []

    @pytest.mark.asyncio
    async def test_reconnect(self) -> None:
        proxy = MCPProxy()

        with (
            patch("mcpplay.proxy.stdio_client", _mock_stdio_client),
            patch("mcpplay.proxy.ClientSession", _mock_client_session),
        ):
            await proxy.connect("python", ["server.py"])
            first_tools = await proxy.list_tools()

            await proxy.reconnect()
            second_tools = await proxy.list_tools()

            assert len(first_tools) == len(second_tools)
            assert first_tools[0]["name"] == second_tools[0]["name"]

    @pytest.mark.asyncio
    async def test_call_tool_error_result(self) -> None:
        proxy = MCPProxy()

        @asynccontextmanager
        async def _mock_session_with_error(read, write):
            session = AsyncMock()
            session.initialize = AsyncMock()

            mock_tool = MagicMock()
            mock_tool.name = "broken"
            mock_tool.description = "A broken tool"
            mock_tool.inputSchema = {"type": "object", "properties": {}}
            list_result = MagicMock()
            list_result.tools = [mock_tool]
            session.list_tools.return_value = list_result

            text_content = MagicMock()
            text_content.type = "text"
            text_content.text = "Error occurred"
            call_result = MagicMock()
            call_result.content = [text_content]
            call_result.isError = True
            session.call_tool.return_value = call_result

            yield session

        with (
            patch("mcpplay.proxy.stdio_client", _mock_stdio_client),
            patch("mcpplay.proxy.ClientSession", _mock_session_with_error),
        ):
            await proxy.connect("python", ["server.py"])
            result = await proxy.call_tool("broken", {})
            assert result["isError"] is True
            await proxy.disconnect()
