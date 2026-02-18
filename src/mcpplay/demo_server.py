"""Built-in demo MCP server for testing mcpplay without writing any code.

Designed to feel like a realistic MCP server with a mix of return types:
- JSON for structured data (weather, file listing, queries)
- Plain text for simple output (echo)
- Markdown for document/knowledge content (search_docs, read_file)
"""

from __future__ import annotations

import json
import math
import os
from datetime import UTC, datetime
from pathlib import Path

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("mcpplay-demo")


# ---------------------------------------------------------------------------
# Filesystem tools — the most common MCP server pattern
# ---------------------------------------------------------------------------


@mcp.tool()
def list_files(directory: str = ".") -> str:
    """List files and directories at the given path.

    Args:
        directory: Directory path to list (defaults to current directory)
    """
    try:
        entries = []
        for entry in sorted(os.scandir(directory), key=lambda e: e.name):
            stat = entry.stat()
            entries.append(
                {
                    "name": entry.name,
                    "type": "directory" if entry.is_dir() else "file",
                    "size": stat.st_size if entry.is_file() else None,
                }
            )
        return json.dumps(
            {
                "directory": str(Path(directory).resolve()),
                "count": len(entries),
                "entries": entries,
            }
        )
    except OSError as exc:
        return json.dumps({"error": str(exc)})


@mcp.tool()
def read_file(path: str, max_lines: int = 100) -> str:
    """Read the contents of a text file.

    Args:
        path: Path to the file to read
        max_lines: Maximum number of lines to return (1-500)
    """
    max_lines = max(1, min(500, max_lines))
    try:
        p = Path(path)
        if not p.exists():
            return json.dumps({"error": f"File not found: {path}"})
        if not p.is_file():
            return json.dumps({"error": f"Not a file: {path}"})
        if p.stat().st_size > 1_000_000:
            return json.dumps({"error": "File too large (>1MB)"})

        lines = p.read_text(encoding="utf-8", errors="replace").splitlines()
        truncated = len(lines) > max_lines
        content = "\n".join(lines[:max_lines])
        if truncated:
            content += f"\n\n... ({len(lines) - max_lines} more lines)"
        return content
    except Exception as exc:
        return json.dumps({"error": str(exc)})


# ---------------------------------------------------------------------------
# API wrapper tools — structured JSON output
# ---------------------------------------------------------------------------


@mcp.tool()
def get_weather(city: str, units: str = "celsius") -> str:
    """Get current weather for a city.

    Args:
        city: City name (e.g., "New York", "London", "Tokyo")
        units: Temperature units - "celsius" or "fahrenheit"
    """
    weather_data = {
        "new york": {
            "temp_c": 22,
            "condition": "Partly cloudy",
            "humidity": 65,
            "wind_kph": 12,
        },
        "london": {
            "temp_c": 15,
            "condition": "Overcast",
            "humidity": 80,
            "wind_kph": 18,
        },
        "tokyo": {
            "temp_c": 28,
            "condition": "Sunny",
            "humidity": 70,
            "wind_kph": 5,
        },
        "paris": {
            "temp_c": 18,
            "condition": "Light rain",
            "humidity": 75,
            "wind_kph": 22,
        },
        "sydney": {
            "temp_c": 25,
            "condition": "Clear",
            "humidity": 55,
            "wind_kph": 8,
        },
    }

    data = weather_data.get(
        city.lower(),
        {
            "temp_c": 20,
            "condition": "Clear",
            "humidity": 60,
            "wind_kph": 10,
        },
    )
    temp = data["temp_c"]
    if units == "fahrenheit":
        temp = round(temp * 9 / 5 + 32)
        unit_label = "\u00b0F"
    else:
        unit_label = "\u00b0C"

    return json.dumps(
        {
            "city": city,
            "temperature": f"{temp}{unit_label}",
            "condition": data["condition"],
            "humidity_pct": data["humidity"],
            "wind_kph": data["wind_kph"],
            "timestamp": datetime.now(UTC).isoformat(),
        }
    )


@mcp.tool()
def calculate(expression: str) -> str:
    """Evaluate a mathematical expression safely.

    Args:
        expression: Math expression (e.g., "2 + 3 * 4", "sqrt(16)")
    """
    allowed_names = {
        "abs": abs,
        "round": round,
        "min": min,
        "max": max,
        "sum": sum,
        "pow": pow,
        "sqrt": math.sqrt,
        "sin": math.sin,
        "cos": math.cos,
        "tan": math.tan,
        "log": math.log,
        "log10": math.log10,
        "pi": math.pi,
        "e": math.e,
    }

    try:
        result = eval(expression, {"__builtins__": {}}, allowed_names)  # noqa: S307
        return json.dumps({"expression": expression, "result": result})
    except Exception as exc:
        return json.dumps({"expression": expression, "error": str(exc)})


# ---------------------------------------------------------------------------
# Database-style tool — structured tabular results
# ---------------------------------------------------------------------------


_MOCK_DB = {
    "users": [
        {"id": 1, "name": "Alice", "email": "alice@example.com", "role": "admin"},
        {"id": 2, "name": "Bob", "email": "bob@example.com", "role": "user"},
        {"id": 3, "name": "Carol", "email": "carol@example.com", "role": "user"},
        {"id": 4, "name": "Dave", "email": "dave@example.com", "role": "admin"},
        {"id": 5, "name": "Eve", "email": "eve@example.com", "role": "user"},
    ],
    "orders": [
        {"id": 101, "user_id": 1, "product": "Widget A", "amount": 29.99},
        {"id": 102, "user_id": 2, "product": "Widget B", "amount": 49.99},
        {"id": 103, "user_id": 1, "product": "Gadget X", "amount": 99.50},
        {"id": 104, "user_id": 3, "product": "Widget A", "amount": 29.99},
        {"id": 105, "user_id": 5, "product": "Gadget Y", "amount": 149.00},
    ],
}


@mcp.tool()
def query_database(table: str, limit: int = 10) -> str:
    """Query a table from the demo database.

    Args:
        table: Table name to query ("users" or "orders")
        limit: Maximum rows to return (1-100)
    """
    limit = max(1, min(100, limit))
    if table not in _MOCK_DB:
        available = ", ".join(_MOCK_DB.keys())
        return json.dumps({"error": f"Table '{table}' not found. Available: {available}"})
    rows = _MOCK_DB[table][:limit]
    return json.dumps(
        {
            "table": table,
            "row_count": len(rows),
            "columns": list(rows[0].keys()) if rows else [],
            "rows": rows,
        }
    )


# ---------------------------------------------------------------------------
# Knowledge/docs tool — returns markdown (realistic for docs servers)
# ---------------------------------------------------------------------------


_DOCS = {
    "mcp": (
        "## Model Context Protocol (MCP)\n\n"
        "MCP is an open protocol that standardizes how applications "
        "provide context to LLMs.\n\n"
        "### Key Concepts\n\n"
        "- **Tools** \u2014 Functions the LLM can call "
        "(e.g., search, read files, query databases)\n"
        "- **Resources** \u2014 Data the LLM can read "
        "(e.g., file contents, API responses)\n"
        "- **Prompts** \u2014 Reusable prompt templates\n\n"
        "### Transport\n\n"
        "MCP supports two transport mechanisms:\n\n"
        "1. **stdio** \u2014 Communication over stdin/stdout "
        "(most common for local servers)\n"
        "2. **SSE** \u2014 Server-Sent Events over HTTP\n\n"
        "### Example Server\n\n"
        "```python\n"
        "from mcp.server.fastmcp import FastMCP\n\n"
        'mcp = FastMCP("my-server")\n\n'
        "@mcp.tool()\n"
        "def hello(name: str) -> str:\n"
        '    return f"Hello, {name}!"\n\n'
        'mcp.run(transport="stdio")\n'
        "```"
    ),
    "tools": (
        "## MCP Tools\n\n"
        "Tools are the primary way LLMs interact with external systems "
        "through MCP.\n\n"
        "### Defining Tools\n\n"
        "Each tool has:\n"
        "- A **name** \u2014 unique identifier\n"
        "- A **description** \u2014 helps the LLM decide when to use it\n"
        "- An **input schema** \u2014 JSON Schema defining parameters\n\n"
        "### Input Schema Types\n\n"
        "| Type | JSON Schema | Example |\n"
        "|------|------------|----------|\n"
        '| String | `{"type": "string"}` | `"hello"` |\n'
        '| Number | `{"type": "number"}` | `42` |\n'
        '| Boolean | `{"type": "boolean"}` | `true` |\n'
        '| Enum | `{"enum": [...]}` | `"celsius"` |\n'
        '| Object | `{"type": "object"}` | `{"key": "val"}` |\n'
        '| Array | `{"type": "array"}` | `[1, 2, 3]` |\n\n'
        "### Return Values\n\n"
        "Tools return content blocks:\n"
        "```json\n"
        "{\n"
        '  "content": [\n'
        '    {"type": "text", "text": "result here"}\n'
        "  ]\n"
        "}\n"
        "```"
    ),
    "python": (
        "## Python MCP SDK\n\n"
        "The official Python SDK for building MCP servers and clients.\n\n"
        "### Installation\n\n"
        "```bash\npip install mcp\n```\n\n"
        "### Quick Start\n\n"
        "```python\n"
        "from mcp.server.fastmcp import FastMCP\n\n"
        'mcp = FastMCP("my-server")\n\n'
        "@mcp.tool()\n"
        "def greet(name: str, formal: bool = False) -> str:\n"
        '    """Greet someone by name."""\n'
        "    if formal:\n"
        '        return f"Good day, {name}."\n'
        '    return f"Hey {name}!"\n\n'
        'mcp.run(transport="stdio")\n'
        "```\n\n"
        "### Running Your Server\n\n"
        "Test locally with mcpplay:\n"
        "```bash\nmcpplay run server.py\n```"
    ),
}


@mcp.tool()
def search_docs(query: str, topic: str = "mcp") -> str:
    """Search the MCP documentation.

    Args:
        query: Search query
        topic: Documentation topic - "mcp", "tools", or "python"
    """
    doc = _DOCS.get(topic)
    if doc is None:
        available = ", ".join(f'"{k}"' for k in _DOCS)
        return f'Topic not found: "{topic}". Available: {available}'

    # Simple relevance: if query words appear in the doc, return it
    query_lower = query.lower()
    if not any(word in doc.lower() for word in query_lower.split()):
        return (
            f'No results for "{query}" in topic "{topic}".\n\n'
            f"Try a broader search or a different topic."
        )

    return doc


# ---------------------------------------------------------------------------
# Utility tool — plain text output
# ---------------------------------------------------------------------------


@mcp.tool()
def echo(message: str, uppercase: bool = False, repeat: int = 1) -> str:
    """Echo a message back, optionally transformed.

    Args:
        message: The message to echo
        uppercase: Convert message to uppercase
        repeat: Number of times to repeat the message (1-10)
    """
    repeat = max(1, min(10, repeat))
    text = message.upper() if uppercase else message
    lines = [text] * repeat
    return "\n".join(lines)


def main() -> None:
    """Run the demo server (called as a subprocess by mcpplay)."""
    mcp.run(transport="stdio")


if __name__ == "__main__":
    main()
