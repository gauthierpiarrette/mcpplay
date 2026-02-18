"""WebSocket message protocol between frontend and backend."""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass, field
from typing import Any, TypeAlias

# --- Client -> Server messages ---


@dataclass(slots=True)
class GetToolsMessage:
    type: str = field(default="get_tools", init=False)


@dataclass(slots=True)
class CallToolMessage:
    id: str
    tool_name: str
    arguments: dict[str, Any]
    type: str = field(default="call_tool", init=False)


@dataclass(slots=True)
class GetTimelineMessage:
    filter: dict[str, Any] | None = None
    type: str = field(default="get_timeline", init=False)


@dataclass(slots=True)
class ReplayMessage:
    entry_id: int
    type: str = field(default="replay", init=False)


@dataclass(slots=True)
class ClearTimelineMessage:
    type: str = field(default="clear_timeline", init=False)


# --- Server -> Client messages ---


@dataclass(slots=True)
class ToolsMessage:
    tools: list[dict[str, Any]]
    type: str = field(default="tools", init=False)


@dataclass(slots=True)
class ToolResultMessage:
    id: str
    tool_name: str
    content: list[dict[str, Any]]
    is_error: bool
    latency_ms: int
    type: str = field(default="tool_result", init=False)


@dataclass(slots=True)
class TimelineMessage:
    entries: list[dict[str, Any]]
    total_count: int = 0
    type: str = field(default="timeline", init=False)


@dataclass(slots=True)
class ReloadMessage:
    status: str  # "reloading" | "ready"
    tools: list[dict[str, Any]] | None = None
    type: str = field(default="reload", init=False)


@dataclass(slots=True)
class ServerInfoMessage:
    command: str
    server_name: str
    transport: str
    version: str = ""
    type: str = field(default="server_info", init=False)


@dataclass(slots=True)
class ErrorMessage:
    message: str
    type: str = field(default="error", init=False)


ServerMessage: TypeAlias = (
    ToolsMessage
    | ToolResultMessage
    | TimelineMessage
    | ReloadMessage
    | ServerInfoMessage
    | ErrorMessage
)
ClientMessage: TypeAlias = (
    GetToolsMessage | CallToolMessage | GetTimelineMessage | ReplayMessage | ClearTimelineMessage
)


def encode_message(msg: ServerMessage | ClientMessage) -> str:
    return json.dumps(asdict(msg))


def decode_client_message(raw: str) -> ClientMessage:
    """Decode a JSON string into a typed client message."""
    data = json.loads(raw)
    msg_type = data.get("type")
    match msg_type:
        case "get_tools":
            return GetToolsMessage()
        case "call_tool":
            return CallToolMessage(
                id=data["id"],
                tool_name=data["tool_name"],
                arguments=data.get("arguments", {}),
            )
        case "get_timeline":
            return GetTimelineMessage(filter=data.get("filter"))
        case "replay":
            return ReplayMessage(entry_id=data["entry_id"])
        case "clear_timeline":
            return ClearTimelineMessage()
        case _:
            raise ValueError(f"Unknown message type: {msg_type}")
