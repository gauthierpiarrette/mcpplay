# mcpplay

**The `FastAPI /docs` experience, for MCP servers.**

mcpplay gives you a browser-based playground for any [MCP](https://modelcontextprotocol.io) server. One command, and you get auto-generated forms, live results, and a full execution timeline.

```bash
pip install mcpplay
mcpplay run server.py
```

<p align="center">
  <img src="assets/mcpplay_demo.png" alt="mcpplay screenshot" width="800" style="border-radius: 12px;" />
</p>

---

## Key features

**Auto-generated forms** - Reads your tool's JSON Schema and renders form controls: strings, numbers, booleans, enums, nested objects, arrays, defaults, and descriptions.

**Live results** - Execute tools and see results instantly as collapsible JSON trees, rendered markdown, or plain text.

**Timeline** - Every execution is logged with inputs, outputs, latency, and errors. Replay past calls with one click.

**Hot reload** - Save your server code and mcpplay restarts it automatically. Browser session and history are preserved.

**Capability badges** - Tools are tagged with scope labels (filesystem, network, shell, database) based on their schemas.

---

## Quick comparison

| | **mcpplay** | MCP Inspector | MCPJam Inspector |
|---|---|---|---|
| Install | `pip install` | `npx` (requires Node) | Docker |
| Forms | Full JSON Schema | Basic inputs | Basic inputs |
| Hot reload | Yes | No | No |
| Timeline | Persistent, replayable | Basic log | Log |
| Python native | Yes | No | No |

---

## Next steps

<div class="grid cards" markdown>

- [**Installation**](getting-started/installation.md) - pip, uv, or from source
- [**Quickstart**](getting-started/quickstart.md) - Running in under a minute
- [**Demo server**](getting-started/demo-server.md) - Try it without writing code

</div>
