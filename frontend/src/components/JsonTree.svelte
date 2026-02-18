<script lang="ts">
  import { untrack } from "svelte";
  import { ChevronRight, ChevronDown } from "lucide-svelte";
  import JsonTree from "./JsonTree.svelte";

  let { data, depth = 0 }: { data: unknown; depth?: number } = $props();

  let collapsed = $state(untrack(() => depth > 2));

  let isObject = $derived(typeof data === "object" && data !== null && !Array.isArray(data));
  let isArray = $derived(Array.isArray(data));
  let entries = $derived(
    isObject
      ? Object.entries(data as Record<string, unknown>)
      : isArray
        ? (data as unknown[]).map((v, i) => [String(i), v] as [string, unknown])
        : [],
  );
  let count = $derived(entries.length);
  let bracket = $derived(isArray ? ["[", "]"] : ["{", "}"]);

  function formatPrimitive(val: unknown): string {
    if (val === null) return "null";
    if (typeof val === "string") return `"${val}"`;
    return String(val);
  }

  function getTypeColor(val: unknown): string {
    if (val === null) return "text-muted-foreground italic";
    switch (typeof val) {
      case "string": return "text-green-600 dark:text-green-400";
      case "number": return "text-blue-600 dark:text-blue-400";
      case "boolean": return "text-red-600 dark:text-red-400";
      default: return "text-foreground";
    }
  }
</script>

{#if isObject || isArray}
  <div class="inline-block align-top font-mono text-xs leading-6">
    <button 
      class="inline-flex h-4 w-4 items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-foreground mr-0.5"
      onclick={() => (collapsed = !collapsed)}
    >
      {#if collapsed}
        <ChevronRight size={10} />
      {:else}
        <ChevronDown size={10} />
      {/if}
    </button>
    
    <span class="text-muted-foreground">{bracket[0]}</span>
    
    {#if collapsed}
      <button 
        class="mx-1 text-muted-foreground hover:text-foreground italic"
        onclick={() => (collapsed = false)}
      >
        {count} item{count !== 1 ? "s" : ""}
      </button>
      <span class="text-muted-foreground">{bracket[1]}</span>
    {:else}
      <div class="ml-2 border-l pl-3 my-0.5">
        {#each entries as [key, val], i (key)}
          <div class="whitespace-pre-wrap">
            {#if !isArray}
              <span class="text-purple-600 dark:text-purple-400">{key}</span>
              <span class="text-muted-foreground">: </span>
            {/if}
            
            {#if typeof val === "object" && val !== null}
              <JsonTree data={val} depth={depth + 1} />
            {:else}
              <span class={getTypeColor(val)}>{formatPrimitive(val)}</span>
            {/if}
            {#if i < entries.length - 1}<span class="text-muted-foreground">,</span>{/if}
          </div>
        {/each}
      </div>
      <span class="text-muted-foreground">{bracket[1]}</span>
    {/if}
  </div>
{:else}
  <span class={`font-mono text-xs ${getTypeColor(data)}`}>{formatPrimitive(data)}</span>
{/if}