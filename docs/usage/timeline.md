# Timeline

Every tool execution is recorded in the timeline with inputs, outputs, latency, and error status.

## Viewing

Switch to the **Timeline** tab. Each entry shows the tool name, timestamp, latency, and a status indicator. Click an entry to expand and see the full request and response.

## Replaying

Click any entry to replay it - the tool is re-executed with the same input parameters. The new execution is recorded as a separate entry.

## Clearing

Use the trash icon at the top of the timeline to delete all entries.

## Persistence

Timeline data is stored in a local SQLite database and survives browser refreshes and server restarts. See [Configuration](../reference/configuration.md#data-storage) for storage paths.

## Export

Timeline entries can be exported as:

- **JSON-RPC** - Standard MCP protocol format
- **Python** - `session.call_tool(...)` snippet
- **curl** - HTTP request for testing
