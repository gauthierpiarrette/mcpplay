# Contributing to mcpplay

Thanks for your interest in contributing! mcpplay is open source under the [Apache 2.0 license](LICENSE).

## Quick setup

```bash
git clone https://github.com/gauthierpiarrette/mcpplay
cd mcpplay

# Python backend
uv sync --dev
uv run task check   # lint + format + test

# Frontend (Svelte)
cd frontend
npm install
npm run dev          # Dev server with HMR
npm run build        # Build to src/mcpplay/static/
```

## Code quality

Run the full check before submitting:

```bash
uv run task check
```

This runs `ruff check` (lint), `ruff format --check` (formatting), and `pytest` (tests) in one command.

## Project structure

```
src/mcpplay/          Python backend (Starlette + WebSocket)
  cli.py              Click CLI entry point
  server.py           WebSocket handler + static files
  proxy.py            MCP client session
  timeline_store.py   SQLite storage
  process_manager.py  Hot reload + child process
  capability.py       Tool capability detection
  security.py         Localhost security middleware
  protocol.py         Message types
  demo_server.py      Built-in demo server
  static/             Compiled frontend

frontend/             Svelte 5 + Vite + TypeScript
  src/
    App.svelte
    lib/              WebSocket client, types, schema utils
    components/       UI components

tests/                pytest suite (mirrors src/mcpplay/)
```

## Pull requests

1. Fork the repo and create a feature branch from `main`
2. Make your changes
3. Run `uv run task check` and ensure it passes
4. Submit a PR with a clear description of what and why

Keep PRs focused -- one concern per PR. If you're fixing a bug and also refactoring nearby code, send two PRs.

## Reporting issues

[Open an issue](https://github.com/gauthierpiarrette/mcpplay/issues/new/choose) with:

- Steps to reproduce
- Expected vs actual behavior
- Output from `mcpplay --version` and `mcpplay run --verbose`

## Code standards

- Python 3.11+, type hints on all public functions
- `ruff` for linting and formatting (config in `pyproject.toml`)
- Tests mirror source files: `src/mcpplay/proxy.py` -> `tests/test_proxy.py`
- Frontend: Svelte 5 runes, TypeScript strict mode, no `any` types
