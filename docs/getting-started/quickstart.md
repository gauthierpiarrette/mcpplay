# Quickstart

## 1. Install

```bash
pip install mcpplay
```

## 2. Try the demo

```bash
mcpplay demo
```

Your browser opens to `http://localhost:8321` with a demo MCP server loaded.

<p align="center">
  <img src="../../assets/mcpplay_demo.png" alt="mcpplay UI" width="800" style="border-radius: 12px;" />
</p>

## 3. Use the playground

1. **Pick a tool** from the sidebar
2. **Fill in the form** - fields are generated from the tool's schema
3. **Click Execute** (or press cmd+enter)
4. **See the result** in the right pane

Switch to the **Timeline** tab to see all past executions with inputs, outputs, and latency.

## 4. Point it at your own server

```bash
mcpplay run server.py
```

Works with any MCP server that communicates over stdio - [FastMCP](https://gofastmcp.com), the official MCP SDK, or any language.

```bash
# Non-Python servers
mcpplay run --command "node server.js"
mcpplay run --command "uvx my-mcp-server"
```
