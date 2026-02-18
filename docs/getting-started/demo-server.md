# Demo Server

mcpplay ships with a built-in demo server. Run it with:

```bash
mcpplay demo
```

The demo provides 7 tools that cover common MCP patterns.

## Tools

### list_files

Lists files and directories at a given path.

| Parameter | Type | Default |
|-----------|------|---------|
| `directory` | string | `"."` |

### read_file

Reads a text file's contents.

| Parameter | Type | Default |
|-----------|------|---------|
| `path` | string | required |
| `max_lines` | integer | `100` |

### get_weather

Returns mock weather data for a city (New York, London, Tokyo, Paris, Sydney).

| Parameter | Type | Default |
|-----------|------|---------|
| `city` | string | required |
| `units` | `"celsius"` or `"fahrenheit"` | `"celsius"` |

### calculate

Evaluates math expressions. Supports `abs`, `round`, `min`, `max`, `sum`, `pow`, `sqrt`, `sin`, `cos`, `tan`, `log`, `log10`, and constants `pi`, `e`.

| Parameter | Type | Default |
|-----------|------|---------|
| `expression` | string | required |

### query_database

Queries a mock in-memory database with `users` and `orders` tables.

| Parameter | Type | Default |
|-----------|------|---------|
| `table` | `"users"` or `"orders"` | required |
| `limit` | integer | `10` |

### search_docs

Searches mock documentation. Returns formatted markdown.

| Parameter | Type | Default |
|-----------|------|---------|
| `query` | string | required |
| `topic` | `"mcp"`, `"tools"`, or `"python"` | `"mcp"` |

### echo

Echoes a message back with optional transformations.

| Parameter | Type | Default |
|-----------|------|---------|
| `message` | string | required |
| `uppercase` | boolean | `false` |
| `repeat` | integer | `1` |

These tools return different content types (JSON, markdown, plain text) to showcase mcpplay's result rendering.
