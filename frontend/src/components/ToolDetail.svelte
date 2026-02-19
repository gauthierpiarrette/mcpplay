<script lang="ts">
  import { onMount } from "svelte";
  import type { ToolDef, ContentBlock } from "../lib/types";
  import { send, onMessage } from "../lib/ws";
  import { getCompatibilityWarnings, buildDefaultObject } from "../lib/schema";
  import SchemaForm from "./SchemaForm.svelte";
  import ResultView from "./ResultView.svelte";
  import CapabilityBadge from "./CapabilityBadge.svelte";
  import JsonTree from "./JsonTree.svelte";
  import {
    Play,
    Trash2,
    AlertTriangle,
    Clock,
    Zap,
    Code,
    FileJson,
    Braces,
  } from "lucide-svelte";
  import { buttonVariants } from "../lib/ui";

  let { tool }: { tool: ToolDef } = $props();

  let formValues = $state<Record<string, unknown>>({});
  let result = $state<{ content: ContentBlock[]; isError: boolean } | null>(
    null,
  );
  let loading = $state(false);
  let latencyMs = $state(0);
  let confirmNeeded = $state(false);
  let inputMode = $state<"form" | "json" | "schema">("form");
  let jsonInput = $state("");
  let jsonError = $state("");

  // Reset form and result when tool changes
  $effect(() => {
    const _name = tool.name;
    const saved = localStorage.getItem(`mcpplay-form-${_name}`);
    if (saved) {
      try {
        formValues = JSON.parse(saved);
      } catch {
        formValues = buildDefaultObject(tool.inputSchema);
      }
    } else {
      formValues = buildDefaultObject(tool.inputSchema);
    }
    result = null;
    loading = false;
    confirmNeeded = false;
    inputMode = "form";
    jsonError = "";
  });

  // Sync form values to JSON input when switching modes
  $effect(() => {
    if (inputMode === "json") {
      jsonInput = JSON.stringify(formValues, null, 2);
    }
  });

  // Persist form values
  $effect(() => {
    if (tool && Object.keys(formValues).length > 0) {
      localStorage.setItem(
        `mcpplay-form-${tool.name}`,
        JSON.stringify(formValues),
      );
    }
  });

  let warnings = $derived(getCompatibilityWarnings(tool.inputSchema));

  function handleJsonInput(text: string) {
    jsonInput = text;
    try {
      formValues = JSON.parse(text);
      jsonError = "";
    } catch (e) {
      jsonError = (e as Error).message;
    }
  }

  function executeTool() {
    if (tool.requiresConfirmation && !confirmNeeded) {
      confirmNeeded = true;
      return;
    }
    confirmNeeded = false;
    loading = true;
    result = null;

    const callId = `${tool.name}-${Date.now()}`;

    const unsub = onMessage((msg) => {
      if (msg.type === "tool_result" && msg.id === callId) {
        result = { content: msg.content, isError: msg.is_error };
        latencyMs = msg.latency_ms;
        loading = false;
        unsub();
      } else if (msg.type === "error") {
        result = {
          content: [{ type: "text", text: msg.message }],
          isError: true,
        };
        loading = false;
        unsub();
      }
    });

    // Strip undefined values from arguments
    const args: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(formValues)) {
      if (value !== undefined && value !== "") {
        args[key] = value;
      }
    }

    send({
      type: "call_tool",
      id: callId,
      tool_name: tool.name,
      arguments: args,
    });
  }

  function clearForm() {
    formValues = buildDefaultObject(tool.inputSchema);
    result = null;
    jsonInput = "{}";
    jsonError = "";
    localStorage.removeItem(`mcpplay-form-${tool.name}`);
  }

  // Cmd/Ctrl+Enter to execute
  function handleKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      if (!loading) executeTool();
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  let isMac = $derived(
    typeof navigator !== "undefined" && navigator.platform.includes("Mac"),
  );
</script>

<!-- Tool header -->
<div class="space-y-3 border-b pb-5">
  <div class="flex items-start justify-between gap-4">
    <div class="space-y-1">
      <h2 class="text-2xl font-bold tracking-tight">{tool.name}</h2>
      {#if tool.capabilities.length > 0}
        <div class="flex flex-wrap gap-1.5 pt-0.5">
          {#each tool.capabilities as cap}
            <CapabilityBadge capability={cap} />
          {/each}
        </div>
      {/if}
    </div>
    <div class="hidden sm:block">
      <div class="rounded-full bg-muted p-2">
        <Zap size={20} class="text-muted-foreground" />
      </div>
    </div>
  </div>

  {#if tool.description}
    <p class="text-sm leading-relaxed text-muted-foreground">
      {tool.description}
    </p>
  {/if}

  {#if warnings.length > 0}
    <div
      class="rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-900/20 dark:text-yellow-200"
    >
      <div class="flex items-start gap-2">
        <AlertTriangle size={14} class="mt-0.5 shrink-0" />
        <div class="space-y-0.5">
          <ul class="list-disc pl-4 space-y-0.5 text-xs">
            {#each warnings as warning}
              <li>{warning}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Split pane: form left, result right -->
<div class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
  <!-- Left pane: Input -->
  <div class="flex flex-col">
    <div
      class="flex flex-1 flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm"
    >
      <!-- Mode tabs -->
      <div class="flex items-center gap-1 border-b px-3 py-1.5">
        <button
          class={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${inputMode === "form" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
          onclick={() => (inputMode = "form")}
        >
          <FileJson size={12} />
          Form
        </button>
        <button
          class={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${inputMode === "json" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
          onclick={() => (inputMode = "json")}
        >
          <Braces size={12} />
          JSON
        </button>
        <button
          class={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${inputMode === "schema" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
          onclick={() => (inputMode = "schema")}
        >
          <Code size={12} />
          Schema
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        {#if inputMode === "form"}
          <SchemaForm schema={tool.inputSchema} bind:values={formValues} />
        {:else if inputMode === "json"}
          <div class="space-y-2">
            <textarea
              class="flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              value={jsonInput}
              oninput={(e) =>
                handleJsonInput((e.target as HTMLTextAreaElement).value)}
              spellcheck={false}
            ></textarea>
            {#if jsonError}
              <p class="text-xs text-destructive">{jsonError}</p>
            {/if}
          </div>
        {:else}
          <div class="overflow-x-auto rounded-md bg-muted/30 p-3">
            <JsonTree data={tool.inputSchema} />
          </div>
        {/if}
      </div>

      {#if inputMode !== "schema"}
        <div
          class="flex items-center justify-between gap-3 border-t bg-muted/20 px-4 py-3"
        >
          <button
            class="{buttonVariants.ghost} gap-1.5 text-muted-foreground text-xs h-8 px-3"
            onclick={clearForm}
          >
            <Trash2 size={14} />
            Clear
          </button>

          {#if confirmNeeded}
            <div class="flex items-center gap-2">
              <span
                class="text-xs font-medium text-destructive flex items-center gap-1"
              >
                <AlertTriangle size={14} />
                Proceed?
              </span>
              <button
                class="{buttonVariants.destructive} h-8 px-3 text-xs"
                onclick={executeTool}
              >
                Yes
              </button>
              <button
                class="{buttonVariants.outline} h-8 px-3 text-xs"
                onclick={() => (confirmNeeded = false)}
              >
                Cancel
              </button>
            </div>
          {:else}
            <button
              class="{buttonVariants.default} gap-2 h-8 px-4 text-xs"
              onclick={executeTool}
              disabled={loading}
            >
              {#if loading}
                <div
                  class="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
                ></div>
                Running...
              {:else}
                <Play size={14} />
                Execute
                <kbd
                  class="ml-1 rounded border border-current/20 bg-primary-foreground/10 px-1 py-0.5 text-[10px] font-mono leading-none"
                  >{isMac ? "\u2318\u23ce" : "Ctrl\u23ce"}</kbd
                >
              {/if}
            </button>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <!-- Right pane: Result -->
  <div class="flex flex-col">
    {#if result}
      <div class="animate-in space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold">Result</h3>
          {#if latencyMs > 0}
            <div
              class="flex items-center gap-1 rounded-full border bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground"
            >
              <Clock size={11} />
              {latencyMs}ms
            </div>
          {/if}
        </div>
        <ResultView content={result.content} isError={result.isError} />
      </div>
    {:else if loading}
      <div
        class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-muted-foreground"
      >
        <div
          class="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"
        ></div>
        <p class="mt-3 text-xs">Executing {tool.name}...</p>
      </div>
    {:else}
      <div
        class="flex h-full min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground"
      >
        <Play size={24} class="mb-2 opacity-30" />
        <p class="text-xs">Results will appear here after execution</p>
        <p class="mt-1 text-[10px] opacity-60">
          Press {isMac ? "\u2318" : "Ctrl"}+Enter to execute
        </p>
      </div>
    {/if}
  </div>
</div>
