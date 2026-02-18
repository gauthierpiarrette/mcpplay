"""Tests for capability detection."""

from __future__ import annotations

from mcpplay.capability import Capability, detect_capabilities, requires_confirmation


class TestDetectCapabilities:
    def test_filesystem_from_name(self) -> None:
        caps = detect_capabilities("read_file", "Read contents of a file", {})
        assert Capability.FILESYSTEM in caps

    def test_filesystem_from_description(self) -> None:
        caps = detect_capabilities("do_stuff", "Lists files in a directory", {})
        assert Capability.FILESYSTEM in caps

    def test_network_detection(self) -> None:
        caps = detect_capabilities("fetch_url", "Fetch data from a URL via HTTP", {})
        assert Capability.NETWORK in caps

    def test_shell_detection(self) -> None:
        caps = detect_capabilities("run_command", "Execute a shell command", {})
        assert Capability.SHELL in caps

    def test_database_detection(self) -> None:
        caps = detect_capabilities("query_db", "Run a SQL query against the database", {})
        assert Capability.DATABASE in caps

    def test_write_detection(self) -> None:
        caps = detect_capabilities("create_user", "Create a new user record", {})
        assert Capability.WRITE in caps

    def test_read_only_detection(self) -> None:
        caps = detect_capabilities("search_items", "Search for items in the catalog", {})
        assert Capability.READ_ONLY in caps

    def test_write_overrides_read_only(self) -> None:
        # When both write and read_only keywords are present, read_only is dropped
        caps = detect_capabilities("update_file", "Read a file then write updates", {})
        assert Capability.WRITE in caps
        assert Capability.READ_ONLY not in caps

    def test_no_capabilities(self) -> None:
        caps = detect_capabilities("echo", "Echoes back the input message", {})
        assert caps == []

    def test_multiple_capabilities(self) -> None:
        caps = detect_capabilities(
            "exec_http",
            "Execute an HTTP request to fetch a URL and write the response to a file",
            {},
        )
        assert Capability.NETWORK in caps
        assert Capability.WRITE in caps
        assert Capability.FILESYSTEM in caps

    def test_detection_from_schema_properties(self) -> None:
        schema = {
            "properties": {
                "file_path": {"type": "string", "description": "Path to the file"},
            }
        }
        caps = detect_capabilities("process", "Process something", schema)
        assert Capability.FILESYSTEM in caps

    def test_detection_from_schema_property_descriptions(self) -> None:
        schema = {
            "properties": {
                "target": {"type": "string", "description": "The URL to fetch"},
            }
        }
        caps = detect_capabilities("process", "Process something", schema)
        assert Capability.NETWORK in caps

    def test_capabilities_are_sorted(self) -> None:
        caps = detect_capabilities(
            "dangerous_tool",
            "Execute shell commands, write files, query database",
            {},
        )
        cap_values = [c.value for c in caps]
        assert cap_values == sorted(cap_values)


class TestRequiresConfirmation:
    def test_shell_requires_confirmation(self) -> None:
        assert requires_confirmation([Capability.SHELL]) is True

    def test_write_requires_confirmation(self) -> None:
        assert requires_confirmation([Capability.WRITE]) is True

    def test_database_requires_confirmation(self) -> None:
        assert requires_confirmation([Capability.DATABASE]) is True

    def test_read_only_does_not(self) -> None:
        assert requires_confirmation([Capability.READ_ONLY]) is False

    def test_network_does_not(self) -> None:
        assert requires_confirmation([Capability.NETWORK]) is False

    def test_filesystem_does_not(self) -> None:
        assert requires_confirmation([Capability.FILESYSTEM]) is False

    def test_empty_list(self) -> None:
        assert requires_confirmation([]) is False

    def test_mixed_capabilities(self) -> None:
        assert requires_confirmation([Capability.NETWORK, Capability.SHELL]) is True
