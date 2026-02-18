"""SQLite storage for tool execution timeline."""

from __future__ import annotations

import json
import sqlite3
import textwrap
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

SCHEMA_VERSION = 1

CREATE_TABLE = """\
CREATE TABLE IF NOT EXISTS timeline (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT NOT NULL,
    tool_name TEXT NOT NULL,
    input_json TEXT NOT NULL,
    output_json TEXT NOT NULL,
    latency_ms INTEGER NOT NULL,
    is_error INTEGER NOT NULL DEFAULT 0,
    error_message TEXT
);
"""


@dataclass(slots=True)
class TimelineEntry:
    id: int | None
    timestamp: str
    tool_name: str
    input_params: dict[str, Any]
    output: dict[str, Any]
    latency_ms: int
    is_error: bool
    error_message: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "timestamp": self.timestamp,
            "tool_name": self.tool_name,
            "input_params": self.input_params,
            "output": self.output,
            "latency_ms": self.latency_ms,
            "is_error": self.is_error,
            "error_message": self.error_message,
        }


@dataclass(slots=True)
class TimelineFilter:
    tool_name: str | None = None
    status: str | None = None  # "success" | "error"
    limit: int | None = None


class TimelineStore:
    def __init__(self, db_path: Path | str) -> None:
        self._db_path = str(db_path)
        self._conn = sqlite3.connect(self._db_path, check_same_thread=False)
        self._conn.row_factory = sqlite3.Row
        self._init_schema()

    def _init_schema(self) -> None:
        cur = self._conn.cursor()
        version = cur.execute("PRAGMA user_version").fetchone()[0]
        if version < SCHEMA_VERSION:
            cur.executescript(CREATE_TABLE)
            cur.execute(f"PRAGMA user_version = {SCHEMA_VERSION}")
            self._conn.commit()

    def record(self, entry: TimelineEntry) -> int:
        cur = self._conn.execute(
            "INSERT INTO timeline "
            "(timestamp, tool_name, input_json, output_json, latency_ms, is_error, error_message) "
            "VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                entry.timestamp,
                entry.tool_name,
                json.dumps(entry.input_params),
                json.dumps(entry.output),
                entry.latency_ms,
                int(entry.is_error),
                entry.error_message,
            ),
        )
        self._conn.commit()
        return cur.lastrowid  # type: ignore[return-value]

    def list_entries(self, filter: TimelineFilter | None = None) -> list[TimelineEntry]:
        query = "SELECT * FROM timeline"
        params: list[str | int] = []
        conditions: list[str] = []

        if filter:
            if filter.tool_name:
                conditions.append("tool_name = ?")
                params.append(filter.tool_name)
            if filter.status == "error":
                conditions.append("is_error = 1")
            elif filter.status == "success":
                conditions.append("is_error = 0")

        if conditions:
            query += " WHERE " + " AND ".join(conditions)
        query += " ORDER BY id DESC"

        if filter and filter.limit:
            query += " LIMIT ?"
            params.append(filter.limit)

        rows = self._conn.execute(query, params).fetchall()
        return [self._row_to_entry(row) for row in rows]

    def get_entry(self, entry_id: int) -> TimelineEntry | None:
        row = self._conn.execute("SELECT * FROM timeline WHERE id = ?", (entry_id,)).fetchone()
        if row is None:
            return None
        return self._row_to_entry(row)

    def export_jsonrpc(self, entry_id: int) -> str | None:
        entry = self.get_entry(entry_id)
        if entry is None:
            return None
        return json.dumps(
            {
                "jsonrpc": "2.0",
                "method": "tools/call",
                "params": {"name": entry.tool_name, "arguments": entry.input_params},
                "id": 1,
            },
            indent=2,
        )

    def export_curl(self, entry_id: int, url: str = "http://localhost:8321/mcp") -> str | None:
        entry = self.get_entry(entry_id)
        if entry is None:
            return None
        body = json.dumps(
            {
                "jsonrpc": "2.0",
                "method": "tools/call",
                "params": {"name": entry.tool_name, "arguments": entry.input_params},
                "id": 1,
            },
        )
        return f"curl -X POST {url} \\\n  -H 'Content-Type: application/json' \\\n  -d '{body}'"

    def export_python(self, entry_id: int) -> str | None:
        entry = self.get_entry(entry_id)
        if entry is None:
            return None
        args_str = json.dumps(entry.input_params, indent=4)
        return textwrap.dedent(f"""\
            result = await session.call_tool(
                "{entry.tool_name}",
                {args_str},
            )""")

    def count(self) -> int:
        row = self._conn.execute("SELECT COUNT(*) FROM timeline").fetchone()
        return row[0]

    def clear(self) -> None:
        self._conn.execute("DELETE FROM timeline")
        self._conn.commit()

    def close(self) -> None:
        self._conn.close()

    @staticmethod
    def _row_to_entry(row: sqlite3.Row) -> TimelineEntry:
        return TimelineEntry(
            id=row["id"],
            timestamp=row["timestamp"],
            tool_name=row["tool_name"],
            input_params=json.loads(row["input_json"]),
            output=json.loads(row["output_json"]),
            latency_ms=row["latency_ms"],
            is_error=bool(row["is_error"]),
            error_message=row["error_message"],
        )


def now_iso() -> str:
    return datetime.now(UTC).isoformat()
