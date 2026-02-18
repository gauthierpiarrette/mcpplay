# Changelog

All notable changes to mcpplay will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-02-18

### Added

- **CLI**: `mcpplay run server.py` and `mcpplay demo` commands
- **Proxy**: stdio transport support via the official MCP Python SDK
- **Schema forms**: auto-generated from JSON Schema -- strings, numbers, booleans, enums, nested objects, arrays, oneOf/anyOf unions, defaults, required fields
- **Result rendering**: JSON tree viewer, markdown rendering, plain text, error panels
- **Timeline**: persistent SQLite storage of all tool executions with inputs, outputs, latency, and errors
- **Timeline export**: copy as JSON-RPC, curl, or Python `session.call_tool()` snippet
- **Replay**: re-execute any past timeline entry with one click
- **Hot reload**: file watcher restarts the MCP server on save, preserving UI session and timeline
- **Capability badges**: automatic scope detection (filesystem, network, shell, database) from tool metadata
- **Confirmation prompts**: required before executing tools with shell, write, or database capabilities
- **Security**: localhost-only middleware with Origin/Host validation (CVE-2025-49596 pattern)
- **Dark/light theme**: toggle with localStorage persistence
- **Demo server**: built-in MCP server with weather, calculator, database, filesystem, and docs tools

[0.1.0]: https://github.com/gauthierpiarrette/mcpplay/releases/tag/v0.1.0
