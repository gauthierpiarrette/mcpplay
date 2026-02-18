"""Tests for WebSocket message protocol."""

from __future__ import annotations

import json

import pytest

from mcpplay.protocol import (
    CallToolMessage,
    ClearTimelineMessage,
    ErrorMessage,
    GetTimelineMessage,
    GetToolsMessage,
    ReloadMessage,
    ReplayMessage,
    ServerInfoMessage,
    TimelineMessage,
    ToolResultMessage,
    ToolsMessage,
    decode_client_message,
    encode_message,
)


class TestEncodeMessage:
    def test_encode_tools_message(self) -> None:
        msg = ToolsMessage(tools=[{"name": "echo", "description": "test"}])
        result = json.loads(encode_message(msg))
        assert result["type"] == "tools"
        assert result["tools"] == [{"name": "echo", "description": "test"}]

    def test_encode_tool_result(self) -> None:
        msg = ToolResultMessage(
            id="123",
            tool_name="echo",
            content=[{"type": "text", "text": "hello"}],
            is_error=False,
            latency_ms=42,
        )
        result = json.loads(encode_message(msg))
        assert result["type"] == "tool_result"
        assert result["id"] == "123"
        assert result["latency_ms"] == 42
        assert result["is_error"] is False

    def test_encode_timeline_message(self) -> None:
        msg = TimelineMessage(entries=[], total_count=5)
        result = json.loads(encode_message(msg))
        assert result["type"] == "timeline"
        assert result["entries"] == []
        assert result["total_count"] == 5

    def test_encode_reload_message(self) -> None:
        msg = ReloadMessage(status="reloading")
        result = json.loads(encode_message(msg))
        assert result["type"] == "reload"
        assert result["status"] == "reloading"
        assert result["tools"] is None

    def test_encode_reload_with_tools(self) -> None:
        msg = ReloadMessage(status="ready", tools=[{"name": "t"}])
        result = json.loads(encode_message(msg))
        assert result["tools"] == [{"name": "t"}]

    def test_encode_server_info(self) -> None:
        msg = ServerInfoMessage(
            command="python3",
            server_name="python3 server.py",
            transport="stdio",
        )
        result = json.loads(encode_message(msg))
        assert result["type"] == "server_info"
        assert result["command"] == "python3"
        assert result["server_name"] == "python3 server.py"
        assert result["transport"] == "stdio"

    def test_encode_error_message(self) -> None:
        msg = ErrorMessage(message="something broke")
        result = json.loads(encode_message(msg))
        assert result["type"] == "error"
        assert result["message"] == "something broke"


class TestDecodeClientMessage:
    def test_decode_get_tools(self) -> None:
        msg = decode_client_message('{"type": "get_tools"}')
        assert isinstance(msg, GetToolsMessage)

    def test_decode_call_tool(self) -> None:
        raw = json.dumps(
            {
                "type": "call_tool",
                "id": "abc",
                "tool_name": "echo",
                "arguments": {"message": "hi"},
            }
        )
        msg = decode_client_message(raw)
        assert isinstance(msg, CallToolMessage)
        assert msg.id == "abc"
        assert msg.tool_name == "echo"
        assert msg.arguments == {"message": "hi"}

    def test_decode_call_tool_empty_args(self) -> None:
        raw = json.dumps({"type": "call_tool", "id": "x", "tool_name": "t"})
        msg = decode_client_message(raw)
        assert isinstance(msg, CallToolMessage)
        assert msg.arguments == {}

    def test_decode_get_timeline(self) -> None:
        raw = json.dumps({"type": "get_timeline", "filter": {"tool_name": "echo"}})
        msg = decode_client_message(raw)
        assert isinstance(msg, GetTimelineMessage)
        assert msg.filter == {"tool_name": "echo"}

    def test_decode_get_timeline_no_filter(self) -> None:
        msg = decode_client_message('{"type": "get_timeline"}')
        assert isinstance(msg, GetTimelineMessage)
        assert msg.filter is None

    def test_decode_replay(self) -> None:
        msg = decode_client_message('{"type": "replay", "entry_id": 5}')
        assert isinstance(msg, ReplayMessage)
        assert msg.entry_id == 5

    def test_decode_clear_timeline(self) -> None:
        msg = decode_client_message('{"type": "clear_timeline"}')
        assert isinstance(msg, ClearTimelineMessage)

    def test_decode_unknown_type(self) -> None:
        with pytest.raises(ValueError, match="Unknown message type"):
            decode_client_message('{"type": "foobar"}')

    def test_decode_invalid_json(self) -> None:
        with pytest.raises(json.JSONDecodeError):
            decode_client_message("not json")

    def test_decode_missing_type(self) -> None:
        with pytest.raises(ValueError, match="Unknown message type"):
            decode_client_message('{"id": "123"}')
