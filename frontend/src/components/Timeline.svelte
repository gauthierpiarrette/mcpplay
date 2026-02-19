<script lang="ts">
  import type { TimelineEntry, ToolDef } from "../lib/types";
  import TimelineEntryComponent from "./TimelineEntry.svelte";
  import { Search, Filter, History, Trash2 } from "lucide-svelte";
  import { inputClass } from "../lib/ui";

  let {
    entries,
    tools = [],
    totalCount = 0,
    onReplay,
    onClear,
    onLoadAll,
  }: {
    entries: TimelineEntry[];
    tools?: ToolDef[];
    totalCount?: number;
    onReplay: (entry: TimelineEntry) => void;
    onClear: () => void;
    onLoadAll?: () => void;
  } = $props();

  let filterTool = $state("");
  let filterStatus = $state<"" | "success" | "error">("");
  let newestId = $state<number | null>(null);

  // Track newest entry for highlight animation
  $effect(() => {
    if (entries.length > 0) {
      const latest = entries[0].id;
      if (newestId !== null && latest !== newestId) {
        newestId = latest;
      } else if (newestId === null) {
        newestId = latest;
      }
    }
  });

  let filtered = $derived(
    entries.filter((e) => {
      if (
        filterTool &&
        !e.tool_name.toLowerCase().includes(filterTool.toLowerCase())
      )
        return false;
      if (filterStatus === "error" && !e.is_error) return false;
      if (filterStatus === "success" && e.is_error) return false;
      return true;
    }),
  );

  let hasMore = $derived(totalCount > entries.length);
</script>

<div class="space-y-4">
  <div class="flex items-center gap-3 rounded-lg border bg-card p-2 shadow-sm">
    <div class="relative flex-1">
      <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        class="{inputClass} pl-9"
        placeholder="Filter by tool name..."
        bind:value={filterTool}
      />
    </div>

    <div class="relative w-[180px]">
      <Filter class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <select class="{inputClass} pl-9" bind:value={filterStatus}>
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="error">Errors</option>
      </select>
    </div>

    <div class="px-2 text-xs font-medium text-muted-foreground tabular-nums">
      {#if hasMore}
        {filtered.length} of {totalCount}
      {:else}
        {filtered.length}
      {/if}
    </div>

    {#if entries.length > 0}
      <button
        class="inline-flex h-9 items-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-destructive/10 hover:text-destructive"
        onclick={onClear}
        title="Clear all timeline entries"
      >
        <Trash2 size={14} />
        Clear
      </button>
    {/if}
  </div>

  {#if hasMore}
    <button
      class="w-full rounded-md border border-dashed py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
      onclick={onLoadAll}
    >
      Showing {entries.length} of {totalCount} entries — click to load all
    </button>
  {/if}

  <div class="space-y-3">
    {#each filtered as entry (entry.id)}
      <div class={entry.id === newestId ? "animate-in" : ""}>
        <TimelineEntryComponent {entry} {tools} {onReplay} />
      </div>
    {/each}

    {#if entries.length === 0}
      <div
        class="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center text-muted-foreground"
      >
        <History class="mb-4 h-10 w-10 opacity-20" />
        <h3 class="text-lg font-semibold text-foreground">No executions yet</h3>
        <p class="text-sm">
          Run a tool from the console to see it appear here.
        </p>
      </div>
    {:else if filtered.length === 0}
      <div
        class="flex flex-col items-center justify-center py-12 text-center text-muted-foreground"
      >
        <p class="text-sm">No matching entries found.</p>
        <button
          class="mt-2 text-xs text-primary hover:underline"
          onclick={() => {
            filterTool = "";
            filterStatus = "";
          }}
        >
          Clear filters
        </button>
      </div>
    {/if}
  </div>
</div>
