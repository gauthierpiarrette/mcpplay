# Configuration

mcpplay works with zero configuration. Everything is set via CLI flags.

```bash
mcpplay run server.py --port 9000 --no-reload --verbose
```

See the [CLI Reference](cli.md) for all options.

## Environment variables

Pass env vars to the MCP server with `--env`:

```bash
mcpplay run server.py --env API_KEY=sk-xxx --env DATABASE_URL=postgres://localhost/mydb
```

These are merged on top of your shell environment.

## Data storage

Timeline data is stored in a SQLite database. Default paths:

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/mcpplay/timeline.db` |
| Linux | `$XDG_STATE_HOME/mcpplay/timeline.db` or `~/.local/state/mcpplay/timeline.db` |
| Windows | `%LOCALAPPDATA%\mcpplay\timeline.db` |

Override with `--data-dir`:

```bash
mcpplay run server.py --data-dir /tmp/mcpplay-data
```

## Security

mcpplay binds to `127.0.0.1` only - it is not accessible from other machines. A security middleware validates `Host` and `Origin` headers on every request to prevent cross-site attacks against your local instance.

!!! warning
    mcpplay is a development tool. Don't expose it to the public internet via port forwarding or tunnels. Only run MCP servers you trust.
