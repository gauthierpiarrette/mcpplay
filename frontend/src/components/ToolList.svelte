<script lang="ts">
  import type { ToolDef } from "../lib/types";
  import CapabilityBadge from "./CapabilityBadge.svelte";
  import { Search, Package, Command } from "lucide-svelte";

  let {
    tools,
    selectedTool,
    executionCounts = {},
    onSelect,
  }: {
    tools: ToolDef[];
    selectedTool: ToolDef | null;
    executionCounts?: Record<string, number>;
    onSelect: (tool: ToolDef) => void;
  } = $props();

  let search = $state("");
  let focusedIndex = $state(-1);

  let filtered = $derived(
    search
      ? tools.filter(
          (t) =>
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase()),
        )
      : tools,
  );

  function handleKeydown(e: KeyboardEvent) {
    if (filtered.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusedIndex = Math.min(focusedIndex + 1, filtered.length - 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusedIndex = Math.max(focusedIndex - 1, 0);
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filtered.length) {
          onSelect(filtered[focusedIndex]);
        }
        break;
    }
  }
</script>

<div class="flex h-full flex-col">
  <div class="border-b p-4">
    <div class="relative">
      <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search tools..."
        bind:value={search}
        onkeydown={handleKeydown}
        class="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      />
    </div>
  </div>

  <div class="flex-1 overflow-y-auto p-2">
    <div class="space-y-1">
      {#each filtered as tool, i (tool.name)}
        {@const count = executionCounts[tool.name] ?? 0}
        <button
          onclick={() => onSelect(tool)}
          onpointerenter={() => (focusedIndex = i)}
          class={`group flex w-full flex-col items-start gap-1 rounded-md p-3 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${selectedTool?.name === tool.name ? "bg-accent text-accent-foreground shadow-sm ring-1 ring-border" : i === focusedIndex ? "bg-muted/50" : "text-muted-foreground"}`}
        >
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center gap-2">
              <div
                class={`flex h-6 w-6 items-center justify-center rounded border bg-background/50 ${selectedTool?.name === tool.name ? "border-primary/20" : "border-border"}`}
              >
                <Command size={12} />
              </div>
              <span
                class={`font-semibold ${selectedTool?.name === tool.name ? "text-foreground" : "text-muted-foreground"}`}
              >
                {tool.name}
              </span>
            </div>
            {#if count > 0}
              <span
                class="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground"
              >
                {count}
              </span>
            {/if}
          </div>

          {#if tool.description}
            <div class="line-clamp-2 w-full text-left text-xs opacity-80">
              {tool.description}
            </div>
          {/if}

          {#if tool.capabilities.length > 0}
            <div class="mt-1 flex flex-wrap gap-1">
              {#each tool.capabilities as cap}
                <CapabilityBadge capability={cap} />
              {/each}
            </div>
          {/if}
        </button>
      {/each}

      {#if filtered.length === 0}
        <div
          class="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"
        >
          <Package class="mb-2 h-8 w-8 opacity-20" />
          <p class="text-xs">
            {tools.length === 0 ? "No tools available" : "No matching tools"}
          </p>
        </div>
      {/if}
    </div>
  </div>

  <div
    class="flex items-center justify-between border-t bg-muted/20 px-4 py-2 text-xs text-muted-foreground"
  >
    <span>{tools.length} tool{tools.length !== 1 ? "s" : ""}</span>
    <span>Local</span>
  </div>
</div>
