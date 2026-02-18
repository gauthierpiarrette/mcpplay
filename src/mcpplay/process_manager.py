"""Manages target MCP server subprocess and hot-reload via watchfiles."""

from __future__ import annotations

import asyncio
import contextlib
import logging
from collections.abc import Callable, Coroutine
from pathlib import Path
from typing import Any, TypeAlias

from watchfiles import awatch

from mcpplay.proxy import MCPProxy

logger = logging.getLogger(__name__)

ReloadCallback: TypeAlias = Callable[[], Coroutine[Any, Any, None]]


class ProcessManager:
    """Manages the MCP server lifecycle and watches for file changes."""

    def __init__(
        self,
        proxy: MCPProxy,
        on_reload_start: ReloadCallback | None = None,
        on_reload_done: ReloadCallback | None = None,
    ) -> None:
        self._proxy = proxy
        self.on_reload_start = on_reload_start
        self.on_reload_done = on_reload_done
        self._command: str = ""
        self._args: list[str] = []
        self._env: dict[str, str] | None = None
        self._watch_paths: list[Path] = []
        self._watch_task: asyncio.Task[None] | None = None
        self._reloading = False

    async def start(
        self,
        command: str,
        args: list[str],
        env: dict[str, str] | None = None,
        watch_paths: list[Path] | None = None,
    ) -> None:
        """Start the MCP server and begin watching for changes."""
        self._command = command
        self._args = args
        self._env = env
        self._watch_paths = watch_paths or []

        await self._proxy.connect(command, args, env)

        if self._watch_paths:
            self._watch_task = asyncio.create_task(self._watch_loop())
            logger.info("Watching for changes: %s", [str(p) for p in self._watch_paths])

    async def stop(self) -> None:
        """Stop watching and disconnect the server."""
        if self._watch_task and not self._watch_task.done():
            self._watch_task.cancel()
            with contextlib.suppress(asyncio.CancelledError):
                await self._watch_task
            self._watch_task = None

        await self._proxy.disconnect()

    async def restart(self) -> None:
        """Restart the MCP server (hot reload)."""
        if self._reloading:
            return

        self._reloading = True
        try:
            logger.info("Hot-reloading MCP server...")
            if self.on_reload_start:
                await self.on_reload_start()

            await self._proxy.reconnect()

            if self.on_reload_done:
                await self.on_reload_done()
            logger.info("Hot-reload complete")
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.exception("Hot-reload failed")
        finally:
            self._reloading = False

    async def _watch_loop(self) -> None:
        """Watch file system for changes and trigger restarts."""
        try:
            str_paths = [str(p) for p in self._watch_paths]
            async for changes in awatch(*str_paths):
                changed_files = [Path(path) for _, path in changes]
                # Only reload for Python/JS/TS files
                relevant = [f for f in changed_files if f.suffix in (".py", ".js", ".ts", ".mjs")]
                if relevant:
                    logger.info("File changes detected: %s", [str(f) for f in relevant])
                    await self.restart()
        except asyncio.CancelledError:
            pass
