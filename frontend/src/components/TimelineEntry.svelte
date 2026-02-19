<script lang="ts">
  import type { TimelineEntry, ToolDef } from "../lib/types";
  import ResultView from "./ResultView.svelte";
  import JsonTree from "./JsonTree.svelte";
  import { copyToClipboard } from "../lib/ui";
  import {
    ChevronRight,
    ChevronDown,
    CheckCircle2,
    XCircle,
    Clock,
    Play,
    Copy,
    Code,
    Terminal,
    FileCode,
  } from "lucide-svelte";

  let {
    entry,
    tools = [],
    onReplay,
  }: {
    entry: TimelineEntry;
    tools?: ToolDef[];
    onReplay: (entry: TimelineEntry) => void;
  } = $props();

  let expanded = $state(false);
  let copiedRpc = $state(false);
  let copiedPy = $state(false);
  let copiedCurl = $state(false);
  let showSchema = $state(false);

  // Look up the tool schema from current tools list
  let toolSchema = $derived(
    tools.find((t) => t.name === entry.tool_name)?.inputSchema,
  );

  let time = $derived.by(() => {
    try {
      const d = new Date(entry.timestamp);
      return d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } catch {
      return entry.timestamp;
    }
  });

  async function copyAsJsonRpc(e: Event) {
    e.stopPropagation();
    const jsonrpc = JSON.stringify(
      {
        jsonrpc: "2.0",
        method: "tools/call",
        params: { name: entry.tool_name, arguments: entry.input_params },
        id: 1,
      },
      null,
      2,
    );
    await copyToClipboard(jsonrpc);
    copiedRpc = true;
    setTimeout(() => (copiedRpc = false), 2000);
  }

  async function copyAsPython(e: Event) {
    e.stopPropagation();
    const args = JSON.stringify(entry.input_params, null, 4);
    const snippet = `result = await session.call_tool(\n    "${entry.tool_name}",\n    ${args},\n)`;
    await copyToClipboard(snippet);
    copiedPy = true;
    setTimeout(() => (copiedPy = false), 2000);
  }

  async function copyAsCurl(e: Event) {
    e.stopPropagation();
    const body = JSON.stringify({
      jsonrpc: "2.0",
      method: "tools/call",
      params: { name: entry.tool_name, arguments: entry.input_params },
      id: 1,
    });
    const curl = `curl -X POST http://localhost:8321/mcp \\\n  -H 'Content-Type: application/json' \\\n  -d '${body}'`;
    await copyToClipboard(curl);
    copiedCurl = true;
    setTimeout(() => (copiedCurl = false), 2000);
  }

  function handleReplay(e: Event) {
    e.stopPropagation();
    onReplay(entry);
  }
</script>

<div
  class={`group overflow-hidden rounded-lg border transition-all ${entry.is_error ? "border-red-200 bg-red-50/30 dark:border-red-900/50 dark:bg-red-950/10" : "border-border bg-card"}`}
>
  <button
    class="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-muted/50"
    onclick={() => (expanded = !expanded)}
  >
    <div class="flex h-5 w-5 items-center justify-center text-muted-foreground">
      {#if expanded}
        <ChevronDown size={16} />
      {:else}
        <ChevronRight size={16} />
      {/if}
    </div>

    <div class="flex items-center justify-center">
      {#if entry.is_error}
        <XCircle size={18} class="text-destructive" />
      {:else}
        <CheckCircle2 size={18} class="text-green-500" />
      {/if}
    </div>

    <span class="flex-1 font-mono text-sm font-semibold text-foreground">
      {entry.tool_name}
    </span>

    <div class="flex items-center gap-3 text-xs text-muted-foreground">
      <div
        class="flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 font-mono"
      >
        <Clock size={12} />
        {entry.latency_ms}ms
      </div>
      <span class="w-16 text-right font-mono tabular-nums opacity-70">
        {time}
      </span>
    </div>
  </button>

  {#if expanded}
    <div class="border-t bg-muted/20 p-4">
      <div class="mb-6 grid gap-6 md:grid-cols-2">
        <div class="space-y-2">
          <h4
            class="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Input Arguments
          </h4>
          <div class="rounded-md border bg-muted/50 p-3 font-mono text-xs">
            <pre
              class="overflow-x-auto whitespace-pre-wrap break-words">{JSON.stringify(
                entry.input_params,
                null,
                2,
              )}</pre>
          </div>
        </div>

        {#if entry.error_message}
          <div class="space-y-2">
            <h4
              class="text-xs font-semibold uppercase tracking-wider text-destructive"
            >
              Error
            </h4>
            <div
              class="rounded-md border border-destructive/20 bg-destructive/10 p-3 font-mono text-xs text-destructive"
            >
              <pre
                class="overflow-x-auto whitespace-pre-wrap break-words">{entry.error_message}</pre>
            </div>
          </div>
        {/if}
      </div>

      <!-- Feature 7: Schema raw view -->
      {#if toolSchema}
        <div class="mb-6">
          <button
            class="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            onclick={() => (showSchema = !showSchema)}
          >
            {#if showSchema}
              <ChevronDown size={12} />
            {:else}
              <ChevronRight size={12} />
            {/if}
            <FileCode size={12} />
            Expected Schema
          </button>
          {#if showSchema}
            <div class="rounded-md border bg-muted/30 p-3">
              <JsonTree data={toolSchema} />
            </div>
          {/if}
        </div>
      {/if}

      <div class="space-y-2">
        <h4
          class="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Result
        </h4>
        {#if entry.output?.content}
          <ResultView content={entry.output.content} isError={entry.is_error} />
        {:else}
          <div class="rounded-md border bg-muted/50 p-3 font-mono text-xs">
            <pre
              class="overflow-x-auto whitespace-pre-wrap break-words">{JSON.stringify(
                entry.output,
                null,
                2,
              )}</pre>
          </div>
        {/if}
      </div>

      <div class="mt-6 flex flex-wrap gap-2 border-t pt-4">
        <button
          class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          onclick={handleReplay}
        >
          <Play size={14} />
          Replay
        </button>
        <div class="flex-1"></div>
        <button
          class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
          onclick={copyAsJsonRpc}
        >
          {#if copiedRpc}
            <CheckCircle2 size={14} class="text-green-500" />
            <span>Copied!</span>
          {:else}
            <Code size={14} />
            <span>JSON-RPC</span>
          {/if}
        </button>
        <button
          class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
          onclick={copyAsCurl}
        >
          {#if copiedCurl}
            <CheckCircle2 size={14} class="text-green-500" />
            <span>Copied!</span>
          {:else}
            <Terminal size={14} />
            <span>curl</span>
          {/if}
        </button>
        <button
          class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground"
          onclick={copyAsPython}
        >
          {#if copiedPy}
            <CheckCircle2 size={14} class="text-green-500" />
            <span>Copied!</span>
          {:else}
            <Copy size={14} />
            <span>Python</span>
          {/if}
        </button>
      </div>
    </div>
  {/if}
</div>
