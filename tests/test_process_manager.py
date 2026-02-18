"""Tests for process manager."""

from __future__ import annotations

import asyncio
from unittest.mock import AsyncMock, patch

import pytest

from mcpplay.process_manager import ProcessManager
from mcpplay.proxy import MCPProxy


class TestProcessManager:
    @pytest.mark.asyncio
    async def test_start_and_stop(self) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()

        mgr = ProcessManager(proxy)
        await mgr.start("python", ["server.py"])

        proxy.connect.assert_called_once_with("python", ["server.py"], None)

        await mgr.stop()
        proxy.disconnect.assert_called_once()

    @pytest.mark.asyncio
    async def test_restart_calls_reconnect(self) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()
        proxy.reconnect = AsyncMock()

        reload_start = AsyncMock()
        reload_done = AsyncMock()

        mgr = ProcessManager(proxy, on_reload_start=reload_start, on_reload_done=reload_done)
        await mgr.start("python", ["server.py"])

        await mgr.restart()

        proxy.reconnect.assert_called_once()
        reload_start.assert_called_once()
        reload_done.assert_called_once()

    @pytest.mark.asyncio
    async def test_restart_prevents_reentrant(self) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()
        proxy.reconnect = AsyncMock()

        mgr = ProcessManager(proxy)
        await mgr.start("python", ["server.py"])

        # Simulate already reloading
        mgr._reloading = True
        await mgr.restart()

        # reconnect should not be called because _reloading was already True
        proxy.reconnect.assert_not_called()

    @pytest.mark.asyncio
    async def test_restart_handles_exception(self) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()
        proxy.reconnect = AsyncMock(side_effect=RuntimeError("connection failed"))

        mgr = ProcessManager(proxy)
        await mgr.start("python", ["server.py"])

        # Should not raise
        await mgr.restart()
        assert mgr._reloading is False  # Reset after failure

    @pytest.mark.asyncio
    async def test_restart_propagates_cancelled_error(self) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()
        proxy.reconnect = AsyncMock(side_effect=asyncio.CancelledError())

        mgr = ProcessManager(proxy)
        await mgr.start("python", ["server.py"])

        with pytest.raises(asyncio.CancelledError):
            await mgr.restart()

    @pytest.mark.asyncio
    async def test_start_with_watch_paths(self, tmp_path) -> None:
        proxy = MCPProxy()
        proxy.connect = AsyncMock()
        proxy.disconnect = AsyncMock()

        mgr = ProcessManager(proxy)

        # Patch awatch to avoid real filesystem watching
        with patch("mcpplay.process_manager.awatch"):
            await mgr.start("python", ["server.py"], watch_paths=[tmp_path])
            assert mgr._watch_task is not None

            await mgr.stop()
