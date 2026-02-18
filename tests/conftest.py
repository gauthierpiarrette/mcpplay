"""Shared test fixtures for mcpplay."""

from __future__ import annotations

from pathlib import Path
from unittest.mock import AsyncMock, MagicMock

import pytest

from mcpplay.timeline_store import TimelineStore


@pytest.fixture
def timeline_store(tmp_path: Path) -> TimelineStore:
    """In-memory-like timeline store using a temp path."""
    return TimelineStore(tmp_path / "test_timeline.db")


@pytest.fixture
def memory_timeline_store() -> TimelineStore:
    """Purely in-memory timeline store."""
    return TimelineStore(":memory:")


@pytest.fixture
def sample_tool_data() -> list[dict]:
    """Sample tool definitions as returned by MCPProxy.list_tools()."""
    return [
        {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City name"},
                    "units": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "default": "celsius",
                    },
                },
                "required": ["city"],
            },
            "capabilities": ["network"],
            "requiresConfirmation": False,
        },
        {
            "name": "run_command",
            "description": "Execute a shell command",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "command": {"type": "string", "description": "Shell command to run"},
                },
                "required": ["command"],
            },
            "capabilities": ["shell", "write"],
            "requiresConfirmation": True,
        },
    ]


@pytest.fixture
def mock_mcp_tool() -> MagicMock:
    """A mock MCP Tool object."""
    tool = MagicMock()
    tool.name = "test_tool"
    tool.description = "A test tool"
    tool.inputSchema = {
        "type": "object",
        "properties": {
            "input": {"type": "string"},
        },
        "required": ["input"],
    }
    return tool


@pytest.fixture
def mock_mcp_session() -> AsyncMock:
    """A mocked MCP ClientSession."""
    session = AsyncMock()

    # Mock list_tools response
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

    # Mock call_tool response
    text_content = MagicMock()
    text_content.type = "text"
    text_content.text = "Hello!"

    call_result = MagicMock()
    call_result.content = [text_content]
    call_result.isError = False
    session.call_tool.return_value = call_result

    return session
