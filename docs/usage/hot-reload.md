# Hot Reload

Edit your server code, save, and mcpplay restarts the MCP server automatically.

## How it works

1. mcpplay watches your server's parent directory for changes
2. When a source file changes, the server is restarted
3. The browser UI updates with the new tool list

Your WebSocket connection, timeline history, and form state are all preserved.

## Watched file types

Only these extensions trigger a reload: `.py`, `.js`, `.ts`, `.mjs`

Changes to `.json`, `.toml`, `.yaml`, and other files are ignored.

## Disabling

```bash
mcpplay run server.py --no-reload
```

!!! note
    Hot reload is only available with script paths. When using `--command`, it's automatically disabled since mcpplay doesn't know which directory to watch.
