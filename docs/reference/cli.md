# CLI Reference

## mcpplay run

```bash
mcpplay run [SERVER_SCRIPT] [OPTIONS]
```

| Option | Default | Description |
|--------|---------|-------------|
| `SERVER_SCRIPT` | - | Path to a Python MCP server script |
| `--port` | `8321` | Port for the web UI |
| `--command` | - | Custom command (e.g., `"node server.js"`) |
| `--env` | - | Environment variable as `KEY=VALUE` (repeatable) |
| `--no-open` | `false` | Don't auto-open the browser |
| `--no-reload` | `false` | Disable hot reload |
| `--verbose` | `false` | Enable debug logging |
| `--data-dir` | platform default | Directory for timeline database |

Either `SERVER_SCRIPT` or `--command` is required.

### Examples

```bash
mcpplay run server.py
mcpplay run server.py --port 9000 --no-reload
mcpplay run --command "node server.js"
mcpplay run server.py --env API_KEY=sk-xxx --env DEBUG=true
```

---

## mcpplay demo

```bash
mcpplay demo [OPTIONS]
```

| Option | Default | Description |
|--------|---------|-------------|
| `--port` | `8321` | Port for the web UI |
| `--no-open` | `false` | Don't auto-open the browser |
| `--verbose` | `false` | Enable debug logging |

### Examples

```bash
mcpplay demo
mcpplay demo --port 9000
```

---

## mcpplay --version

```bash
mcpplay --version
```

## mcpplay --help

```bash
mcpplay --help
mcpplay run --help
mcpplay demo --help
```
