"""CLI entry point for mcpplay."""

from __future__ import annotations

import logging
import os
import platform
import shlex
import sys
import webbrowser
from pathlib import Path

import click
import uvicorn

from mcpplay import __version__


def _resolve_data_dir(data_dir: Path | None) -> Path:
    """Resolve the data directory for timeline storage."""
    if data_dir:
        return data_dir

    system = platform.system()
    if system == "Darwin":
        base = Path.home() / "Library" / "Application Support"
    elif system == "Windows":
        base = Path(os.environ.get("LOCALAPPDATA", str(Path.home() / "AppData" / "Local")))
    else:
        default = str(Path.home() / ".local" / "state")
        base = Path(os.environ.get("XDG_STATE_HOME", default))

    path = base / "mcpplay"
    path.mkdir(parents=True, exist_ok=True)
    return path


def _setup_logging(verbose: bool) -> None:
    level = logging.DEBUG if verbose else logging.INFO
    logging.basicConfig(
        level=level,
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
        datefmt="%H:%M:%S",
    )


@click.group()
@click.version_option(__version__, prog_name="mcpplay")
def main() -> None:
    """mcpplay -- The Python-native playground for MCP servers."""


@main.command()
@click.argument("server_script", required=False)
@click.option("--port", default=8321, help="Port for the web UI (default: 8321)")
@click.option("--no-open", is_flag=True, help="Don't auto-open the browser")
@click.option("--no-reload", is_flag=True, help="Disable hot reload")
@click.option("--command", help="Custom command to run (e.g., 'node server.js')")
@click.option("--env", multiple=True, help="Environment variables as KEY=VALUE")
@click.option("--verbose", is_flag=True, help="Enable debug logging")
@click.option("--data-dir", type=click.Path(path_type=Path), help="Data directory for timeline DB")
def run(
    server_script: str | None,
    port: int,
    no_open: bool,
    no_reload: bool,
    command: str | None,
    env: tuple[str, ...],
    verbose: bool,
    data_dir: Path | None,
) -> None:
    """Run mcpplay with a target MCP server.

    Examples:

        mcpplay run server.py

        mcpplay run --command "node server.js"

        mcpplay run server.py --port 9000 --no-reload
    """
    _setup_logging(verbose)

    if not server_script and not command:
        raise click.UsageError("Provide a server script or use --command")

    # Determine command and args
    if command:
        parts = shlex.split(command)
        cmd, args = parts[0], parts[1:]
    else:
        # server_script is not None here (checked above)
        script_path = Path(server_script).resolve()
        if not script_path.exists():
            raise click.FileError(str(script_path), hint="Server script not found")
        cmd = sys.executable
        args = [str(script_path)]

    # Parse env vars
    env_dict: dict[str, str] | None = None
    if env:
        env_dict = dict(os.environ)
        for pair in env:
            if "=" not in pair:
                raise click.BadParameter(f"Invalid env format: {pair} (expected KEY=VALUE)")
            key, value = pair.split("=", 1)
            env_dict[key] = value

    # Resolve data directory and watch paths
    resolved_data_dir = _resolve_data_dir(data_dir)
    watch_paths: list[Path] = []
    if not no_reload and server_script:
        script_path = Path(server_script).resolve()
        watch_paths = [script_path.parent]

    _run_server(cmd, args, env_dict, port, no_open, watch_paths, resolved_data_dir)


@main.command()
@click.option("--port", default=8321, help="Port for the web UI (default: 8321)")
@click.option("--no-open", is_flag=True, help="Don't auto-open the browser")
@click.option("--verbose", is_flag=True, help="Enable debug logging")
def demo(port: int, no_open: bool, verbose: bool) -> None:
    """Run mcpplay with the built-in demo server."""
    _setup_logging(verbose)

    demo_script = Path(__file__).parent / "demo_server.py"
    _run_server(
        sys.executable,
        [str(demo_script)],
        None,
        port,
        no_open,
        [],
        _resolve_data_dir(None),
    )


def _run_server(
    cmd: str,
    args: list[str],
    env_dict: dict[str, str] | None,
    port: int,
    no_open: bool,
    watch_paths: list[Path],
    data_dir: Path,
) -> None:
    """Start the mcpplay backend server."""
    import asyncio

    from mcpplay.process_manager import ProcessManager
    from mcpplay.proxy import MCPProxy
    from mcpplay.server import create_app
    from mcpplay.timeline_store import TimelineStore

    proxy = MCPProxy()
    timeline = TimelineStore(data_dir / "timeline.db")
    process_mgr = ProcessManager(proxy)

    app = create_app(
        proxy,
        timeline,
        process_mgr,
        port=port,
        server_command=cmd,
        server_args=args,
    )

    async def startup() -> None:
        await process_mgr.start(cmd, args, env_dict, watch_paths)
        if not no_open:
            webbrowser.open(f"http://localhost:{port}")

    async def shutdown() -> None:
        await process_mgr.stop()
        timeline.close()

    config = uvicorn.Config(
        app,
        host="127.0.0.1",
        port=port,
        log_level="info",
        access_log=False,
    )
    server = uvicorn.Server(config)

    async def run_with_lifecycle() -> None:
        await startup()
        try:
            await server.serve()
        finally:
            await shutdown()

    click.echo(f"mcpplay v{__version__} starting on http://localhost:{port}")
    click.echo(f"Server: {cmd} {' '.join(args)}")

    try:
        asyncio.run(run_with_lifecycle())
    except KeyboardInterrupt:
        click.echo("\nmcpplay stopped.")
