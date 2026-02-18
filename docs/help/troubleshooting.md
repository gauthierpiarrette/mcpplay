# Troubleshooting

## Server won't start

**"Provide a server script or use --command"**

```bash
mcpplay run server.py              # Python script
mcpplay run --command "node app.js" # Custom command
```

**"Server script not found"**

Check the path is correct. Use a relative or absolute path:

```bash
mcpplay run ./src/server.py
```

**Server crashes immediately**

Run with `--verbose` to see the error:

```bash
mcpplay run server.py --verbose
```

Common causes: missing dependencies, import errors, or the script doesn't define an MCP server.

## Connection issues

**Tools don't appear**

The MCP server may still be initializing. Wait a moment and refresh. Use `--verbose` to see the MCP protocol exchange.

**"Address already in use"**

Another process is using port 8321:

```bash
lsof -i :8321              # Find what's using it
mcpplay run server.py --port 9000  # Use a different port
```

## Hot reload not working

- Only `.py`, `.js`, `.ts`, `.mjs` files trigger reloads
- Hot reload is disabled with `--command` (mcpplay doesn't know which directory to watch)
- Check `--verbose` output for syntax errors preventing restart

## Form issues

If a form doesn't match your schema, switch to the **Schema** tab to inspect the raw JSON Schema, or use the **JSON** tab to edit the payload directly.

## Getting help

Run with `--verbose` and [open an issue](https://github.com/gauthierpiarrette/mcpplay/issues) with the output and steps to reproduce.
