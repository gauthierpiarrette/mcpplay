# Contributing

mcpplay is open source under the [Apache 2.0 license](https://github.com/gauthierpiarrette/mcpplay/blob/main/LICENSE). Contributions are welcome.

## Setup

```bash
git clone https://github.com/gauthierpiarrette/mcpplay
cd mcpplay
uv sync --dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Code quality

```bash
uv run task lint      # Ruff lint
uv run task format    # Ruff format
uv run task test      # pytest
uv run task check     # All of the above
```

Run `uv run task check` before submitting a PR.

## Project structure

```
src/mcpplay/          # Python backend (Starlette + WebSocket)
  cli.py              # Click CLI entry point
  server.py            # WebSocket handler + static files
  proxy.py             # MCP client session
  timeline_store.py    # SQLite storage
  process_manager.py   # Hot reload + child process
  capability.py        # Tool capability detection
  security.py          # Localhost security middleware
  protocol.py          # Message types
  demo_server.py       # Built-in demo server
  static/              # Compiled frontend

frontend/             # Svelte 5 + Vite + TypeScript
  src/
    App.svelte
    lib/              # WebSocket client, types
    components/       # UI components

tests/                # pytest suite
```

## Pull requests

1. Fork the repo and create a feature branch
2. Make your changes
3. Run `uv run task check`
4. Submit a PR with a clear description

## Reporting issues

[Open an issue](https://github.com/gauthierpiarrette/mcpplay/issues) with steps to reproduce and `--verbose` output.
