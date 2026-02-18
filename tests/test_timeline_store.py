"""Tests for SQLite timeline storage."""

from __future__ import annotations

import json

from mcpplay.timeline_store import TimelineEntry, TimelineFilter, TimelineStore, now_iso


class TestTimelineStore:
    def test_record_and_retrieve(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        entry = TimelineEntry(
            id=None,
            timestamp=now_iso(),
            tool_name="echo",
            input_params={"message": "hello"},
            output={"content": [{"type": "text", "text": "hello"}], "isError": False},
            latency_ms=10,
            is_error=False,
        )
        entry_id = store.record(entry)
        assert entry_id >= 1

        retrieved = store.get_entry(entry_id)
        assert retrieved is not None
        assert retrieved.tool_name == "echo"
        assert retrieved.input_params == {"message": "hello"}
        assert retrieved.latency_ms == 10
        assert retrieved.is_error is False

    def test_record_error_entry(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        entry = TimelineEntry(
            id=None,
            timestamp=now_iso(),
            tool_name="broken",
            input_params={},
            output={"content": [], "isError": True},
            latency_ms=5,
            is_error=True,
            error_message="Tool not found",
        )
        entry_id = store.record(entry)
        retrieved = store.get_entry(entry_id)
        assert retrieved is not None
        assert retrieved.is_error is True
        assert retrieved.error_message == "Tool not found"

    def test_list_entries_returns_newest_first(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        for i in range(3):
            store.record(
                TimelineEntry(
                    id=None,
                    timestamp=now_iso(),
                    tool_name=f"tool_{i}",
                    input_params={},
                    output={},
                    latency_ms=i * 10,
                    is_error=False,
                )
            )
        entries = store.list_entries()
        assert len(entries) == 3
        assert entries[0].tool_name == "tool_2"  # newest first

    def test_list_entries_empty(self, memory_timeline_store: TimelineStore) -> None:
        assert memory_timeline_store.list_entries() == []

    def test_filter_by_tool_name(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        store.record(TimelineEntry(None, now_iso(), "echo", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "calculate", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "echo", {}, {}, 10, False))

        filtered = store.list_entries(TimelineFilter(tool_name="echo"))
        assert len(filtered) == 2
        assert all(e.tool_name == "echo" for e in filtered)

    def test_filter_by_error_status(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        store.record(TimelineEntry(None, now_iso(), "ok_tool", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "bad_tool", {}, {}, 10, True, "oops"))

        errors = store.list_entries(TimelineFilter(status="error"))
        assert len(errors) == 1
        assert errors[0].tool_name == "bad_tool"

        successes = store.list_entries(TimelineFilter(status="success"))
        assert len(successes) == 1
        assert successes[0].tool_name == "ok_tool"

    def test_filter_with_limit(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        for _i in range(10):
            store.record(TimelineEntry(None, now_iso(), "tool", {}, {}, 10, False))
        entries = store.list_entries(TimelineFilter(limit=3))
        assert len(entries) == 3

    def test_get_nonexistent_entry(self, memory_timeline_store: TimelineStore) -> None:
        assert memory_timeline_store.get_entry(999) is None

    def test_to_dict(self) -> None:
        entry = TimelineEntry(
            id=1,
            timestamp="2024-01-01T00:00:00Z",
            tool_name="echo",
            input_params={"msg": "hi"},
            output={"content": []},
            latency_ms=42,
            is_error=False,
            error_message=None,
        )
        d = entry.to_dict()
        assert d["id"] == 1
        assert d["tool_name"] == "echo"
        assert d["latency_ms"] == 42

    def test_export_jsonrpc(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        entry_id = store.record(
            TimelineEntry(None, now_iso(), "echo", {"message": "hello"}, {}, 10, False)
        )
        result = store.export_jsonrpc(entry_id)
        assert result is not None
        parsed = json.loads(result)
        assert parsed["jsonrpc"] == "2.0"
        assert parsed["method"] == "tools/call"
        assert parsed["params"]["name"] == "echo"
        assert parsed["params"]["arguments"] == {"message": "hello"}

    def test_export_jsonrpc_nonexistent(self, memory_timeline_store: TimelineStore) -> None:
        assert memory_timeline_store.export_jsonrpc(999) is None

    def test_export_python(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        entry_id = store.record(
            TimelineEntry(None, now_iso(), "calculate", {"expression": "2+2"}, {}, 10, False)
        )
        result = store.export_python(entry_id)
        assert result is not None
        assert "session.call_tool" in result
        assert '"calculate"' in result
        assert '"expression"' in result

    def test_export_python_nonexistent(self, memory_timeline_store: TimelineStore) -> None:
        assert memory_timeline_store.export_python(999) is None

    def test_export_curl(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        entry_id = store.record(
            TimelineEntry(None, now_iso(), "echo", {"message": "hello"}, {}, 10, False)
        )
        result = store.export_curl(entry_id)
        assert result is not None
        assert "curl -X POST" in result
        assert "Content-Type: application/json" in result
        assert '"echo"' in result

    def test_export_curl_nonexistent(self, memory_timeline_store: TimelineStore) -> None:
        assert memory_timeline_store.export_curl(999) is None

    def test_count(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        assert store.count() == 0
        store.record(TimelineEntry(None, now_iso(), "a", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "b", {}, {}, 10, False))
        assert store.count() == 2

    def test_clear(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        store.record(TimelineEntry(None, now_iso(), "a", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "b", {}, {}, 10, False))
        assert store.count() == 2
        store.clear()
        assert store.count() == 0
        assert store.list_entries() == []

    def test_filter_combined(self, memory_timeline_store: TimelineStore) -> None:
        """Filter by tool_name AND status together."""
        store = memory_timeline_store
        store.record(TimelineEntry(None, now_iso(), "echo", {}, {}, 10, False))
        store.record(TimelineEntry(None, now_iso(), "echo", {}, {}, 10, True, "err"))
        store.record(TimelineEntry(None, now_iso(), "calc", {}, {}, 10, True, "err"))

        filtered = store.list_entries(TimelineFilter(tool_name="echo", status="error"))
        assert len(filtered) == 1
        assert filtered[0].tool_name == "echo"
        assert filtered[0].is_error is True

    def test_filter_with_limit_and_tool_name(self, memory_timeline_store: TimelineStore) -> None:
        store = memory_timeline_store
        for _ in range(5):
            store.record(TimelineEntry(None, now_iso(), "echo", {}, {}, 10, False))
        for _ in range(5):
            store.record(TimelineEntry(None, now_iso(), "calc", {}, {}, 10, False))

        filtered = store.list_entries(TimelineFilter(tool_name="echo", limit=3))
        assert len(filtered) == 3
        assert all(e.tool_name == "echo" for e in filtered)

    def test_close_and_reopen(self, tmp_path) -> None:
        db_path = tmp_path / "close_test.db"
        store = TimelineStore(db_path)
        store.record(TimelineEntry(None, now_iso(), "tool", {}, {}, 10, False))
        store.close()

        # Reopen and verify data persisted
        store2 = TimelineStore(db_path)
        assert store2.count() == 1
        store2.close()

    def test_schema_version_preserved(self, tmp_path) -> None:
        db_path = tmp_path / "test.db"
        store1 = TimelineStore(db_path)
        store1.record(TimelineEntry(None, now_iso(), "tool", {}, {}, 10, False))
        store1.close()

        # Reopen - should work fine with existing schema
        store2 = TimelineStore(db_path)
        entries = store2.list_entries()
        assert len(entries) == 1
        store2.close()
