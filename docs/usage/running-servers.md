# Running Servers

mcpplay works with any MCP server that communicates over stdio.

## Python servers

```bash
mcpplay run server.py
```

mcpplay runs the script with your current Python interpreter, so it uses whatever virtual environment is active.

## Non-Python servers

Use `--command` for anything else:

```bash
mcpplay run --command "node server.js"
mcpplay run --command "uvx my-mcp-server"
mcpplay run --command "./my-server --port 3000"
```

## Environment variables

Pass environment variables to the server process:

```bash
mcpplay run server.py --env API_KEY=sk-xxx --env DATABASE_URL=postgres://...
```

These are merged on top of your current shell environment.

## Common options

```bash
# Custom port
mcpplay run server.py --port 9000

# Don't open the browser
mcpplay run server.py --no-open

# Disable hot reload
mcpplay run server.py --no-reload

# Debug logging
mcpplay run server.py --verbose
```

See the [CLI Reference](../reference/cli.md) for all options.
