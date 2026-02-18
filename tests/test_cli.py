"""Tests for CLI entry point."""

from __future__ import annotations

from pathlib import Path
from unittest.mock import patch

from click.testing import CliRunner

from mcpplay.cli import _resolve_data_dir, main


class TestCLI:
    def test_help(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["--help"])
        assert result.exit_code == 0
        assert "mcpplay" in result.output

    def test_version(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["--version"])
        assert result.exit_code == 0
        assert "0.1.0" in result.output

    def test_run_help(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["run", "--help"])
        assert result.exit_code == 0
        assert "--port" in result.output
        assert "--no-open" in result.output
        assert "--no-reload" in result.output
        assert "--command" in result.output
        assert "--env" in result.output
        assert "--verbose" in result.output

    def test_demo_help(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["demo", "--help"])
        assert result.exit_code == 0
        assert "--port" in result.output

    def test_run_requires_script_or_command(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["run"])
        assert result.exit_code != 0

    def test_run_nonexistent_script(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["run", "/nonexistent/server.py"])
        assert result.exit_code != 0

    def test_run_invalid_env_format(self) -> None:
        runner = CliRunner()
        result = runner.invoke(main, ["run", "--command", "echo", "--env", "NOEQUALS"])
        # Should fail because env format is invalid
        assert result.exit_code != 0


class TestResolveDataDir:
    def test_explicit_path(self, tmp_path: Path) -> None:
        result = _resolve_data_dir(tmp_path)
        assert result == tmp_path

    def test_darwin_default(self, tmp_path: Path) -> None:
        with (
            patch("mcpplay.cli.platform.system", return_value="Darwin"),
            patch("mcpplay.cli.Path.home", return_value=tmp_path),
        ):
            result = _resolve_data_dir(None)
            assert "Library" in str(result)
            assert "mcpplay" in str(result)

    def test_linux_default(self, tmp_path: Path) -> None:
        xdg_state = str(tmp_path / "state")
        with (
            patch("mcpplay.cli.platform.system", return_value="Linux"),
            patch("mcpplay.cli.Path.home", return_value=tmp_path),
            patch.dict("os.environ", {"XDG_STATE_HOME": xdg_state}, clear=False),
        ):
            result = _resolve_data_dir(None)
            assert "mcpplay" in str(result)
