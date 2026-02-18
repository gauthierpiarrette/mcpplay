"""Tests for the built-in demo MCP server tool functions."""

from __future__ import annotations

import json

from mcpplay.demo_server import (
    calculate,
    echo,
    get_weather,
    list_files,
    query_database,
    read_file,
    search_docs,
)


class TestListFiles:
    def test_list_current_directory(self) -> None:
        result = json.loads(list_files("."))
        assert "directory" in result
        assert "count" in result
        assert "entries" in result
        assert isinstance(result["entries"], list)

    def test_list_with_known_directory(self, tmp_path: object) -> None:
        # Create some files
        d = tmp_path  # type: ignore[assignment]
        (d / "file_a.txt").write_text("hello")
        (d / "file_b.py").write_text("print()")
        (d / "subdir").mkdir()

        result = json.loads(list_files(str(d)))
        assert result["count"] == 3
        names = [e["name"] for e in result["entries"]]
        assert "file_a.txt" in names
        assert "file_b.py" in names
        assert "subdir" in names

        # Check types
        by_name = {e["name"]: e for e in result["entries"]}
        assert by_name["file_a.txt"]["type"] == "file"
        assert by_name["subdir"]["type"] == "directory"

    def test_list_nonexistent_directory(self) -> None:
        result = json.loads(list_files("/nonexistent_dir_12345"))
        assert "error" in result

    def test_entries_sorted_alphabetically(self, tmp_path: object) -> None:
        d = tmp_path  # type: ignore[assignment]
        (d / "zebra.txt").write_text("")
        (d / "alpha.txt").write_text("")
        (d / "middle.txt").write_text("")

        result = json.loads(list_files(str(d)))
        names = [e["name"] for e in result["entries"]]
        assert names == sorted(names)


class TestReadFile:
    def test_read_existing_file(self, tmp_path: object) -> None:
        d = tmp_path  # type: ignore[assignment]
        f = d / "test.txt"
        f.write_text("line1\nline2\nline3")

        result = read_file(str(f))
        assert "line1" in result
        assert "line2" in result
        assert "line3" in result

    def test_read_nonexistent_file(self) -> None:
        result = json.loads(read_file("/nonexistent_file_12345.txt"))
        assert "error" in result
        assert "not found" in result["error"].lower()

    def test_read_directory_returns_error(self, tmp_path: object) -> None:
        result = json.loads(read_file(str(tmp_path)))
        assert "error" in result

    def test_max_lines_respected(self, tmp_path: object) -> None:
        d = tmp_path  # type: ignore[assignment]
        f = d / "long.txt"
        f.write_text("\n".join(f"line {i}" for i in range(200)))

        result = read_file(str(f), max_lines=5)
        assert "line 0" in result
        assert "line 4" in result
        assert "more lines" in result

    def test_max_lines_clamped(self, tmp_path: object) -> None:
        d = tmp_path  # type: ignore[assignment]
        f = d / "test.txt"
        f.write_text("hello")

        # max_lines below 1 should be clamped to 1
        result = read_file(str(f), max_lines=-5)
        assert "hello" in result


class TestGetWeather:
    def test_known_city(self) -> None:
        result = json.loads(get_weather("London"))
        assert result["city"] == "London"
        assert "temperature" in result
        assert "condition" in result
        assert "°C" in result["temperature"]

    def test_fahrenheit(self) -> None:
        result = json.loads(get_weather("London", units="fahrenheit"))
        assert "°F" in result["temperature"]

    def test_unknown_city_returns_defaults(self) -> None:
        result = json.loads(get_weather("Atlantis"))
        assert result["city"] == "Atlantis"
        assert "temperature" in result

    def test_case_insensitive(self) -> None:
        result = json.loads(get_weather("TOKYO"))
        assert result["condition"] == "Sunny"

    def test_has_timestamp(self) -> None:
        result = json.loads(get_weather("Paris"))
        assert "timestamp" in result


class TestCalculate:
    def test_simple_expression(self) -> None:
        result = json.loads(calculate("2 + 3"))
        assert result["result"] == 5

    def test_complex_expression(self) -> None:
        result = json.loads(calculate("sqrt(16) + 2 * 3"))
        assert result["result"] == 10.0

    def test_math_constants(self) -> None:
        result = json.loads(calculate("pi"))
        assert abs(result["result"] - 3.14159) < 0.001

    def test_invalid_expression(self) -> None:
        result = json.loads(calculate("invalid_func()"))
        assert "error" in result

    def test_division_by_zero(self) -> None:
        result = json.loads(calculate("1/0"))
        assert "error" in result

    def test_no_builtins_access(self) -> None:
        result = json.loads(calculate("__import__('os')"))
        assert "error" in result


class TestQueryDatabase:
    def test_query_users(self) -> None:
        result = json.loads(query_database("users"))
        assert result["table"] == "users"
        assert result["row_count"] > 0
        assert "id" in result["columns"]
        assert "name" in result["columns"]

    def test_query_orders(self) -> None:
        result = json.loads(query_database("orders"))
        assert result["table"] == "orders"
        assert result["row_count"] > 0

    def test_query_nonexistent_table(self) -> None:
        result = json.loads(query_database("nonexistent"))
        assert "error" in result
        assert "not found" in result["error"].lower()

    def test_limit_respected(self) -> None:
        result = json.loads(query_database("users", limit=2))
        assert result["row_count"] == 2

    def test_limit_clamped(self) -> None:
        result = json.loads(query_database("users", limit=-1))
        assert result["row_count"] >= 1  # clamped to 1


class TestSearchDocs:
    def test_search_mcp_topic(self) -> None:
        result = search_docs("protocol", topic="mcp")
        assert "MCP" in result
        assert "#" in result  # markdown heading

    def test_search_tools_topic(self) -> None:
        result = search_docs("schema", topic="tools")
        assert "Tools" in result

    def test_search_python_topic(self) -> None:
        result = search_docs("install", topic="python")
        assert "pip install" in result

    def test_nonexistent_topic(self) -> None:
        result = search_docs("anything", topic="nonexistent")
        assert "not found" in result.lower()

    def test_no_results_for_query(self) -> None:
        result = search_docs("xyznonexistent123", topic="mcp")
        assert "No results" in result


class TestEcho:
    def test_simple_echo(self) -> None:
        assert echo("hello") == "hello"

    def test_uppercase(self) -> None:
        assert echo("hello", uppercase=True) == "HELLO"

    def test_repeat(self) -> None:
        result = echo("hi", repeat=3)
        assert result == "hi\nhi\nhi"

    def test_repeat_clamped_max(self) -> None:
        result = echo("x", repeat=100)
        assert result.count("x") == 10  # clamped to 10

    def test_repeat_clamped_min(self) -> None:
        result = echo("x", repeat=-5)
        assert result == "x"  # clamped to 1

    def test_uppercase_and_repeat(self) -> None:
        result = echo("hi", uppercase=True, repeat=2)
        assert result == "HI\nHI"
