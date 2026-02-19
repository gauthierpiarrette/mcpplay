<script lang="ts">
  import { marked } from "marked";
  import type { ContentBlock } from "../lib/types";
  import JsonTree from "./JsonTree.svelte";
  import { Copy, Check, Code, FileText } from "lucide-svelte";
  import { copyToClipboard } from "../lib/ui";

  let {
    content,
    isError = false,
  }: {
    content: ContentBlock[];
    isError?: boolean;
  } = $props();

  let copiedIndex = $state<number | null>(null);
  let viewModes = $state<Record<number, "rich" | "raw">>({});

  function tryParseJson(text: string): { parsed: unknown; isJson: boolean } {
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed === "object" && parsed !== null) {
        return { parsed, isJson: true };
      }
    } catch {
      // not JSON
    }
    return { parsed: null, isJson: false };
  }

  /**
   * Detect if text contains markdown formatting worth rendering.
   * Requires a strong signal (header, table, or fenced code block)
   * or at least 2 weaker signals (lists, bold, inline code, links).
   */
  function hasMarkdown(text: string): boolean {
    // Skip anything that looks like JSON/code
    const trimmed = text.trimStart();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) return false;

    // Strong signals — any one of these is enough
    const strong =
      /^#{1,6}\s/m.test(text) || // markdown headers
      /^\|.+\|.+\|/m.test(text) || // table rows
      /^```/m.test(text); // fenced code blocks
    if (strong) return true;

    // Weak signals — need 2+ to trigger
    let weak = 0;
    if (/^\*\s|^-\s{1,2}\S/m.test(text)) weak++; // unordered list
    if (/^\d+\.\s/m.test(text)) weak++; // ordered list
    if (/\*\*[^*]+\*\*/.test(text)) weak++; // bold
    if (/`[^`]+`/.test(text)) weak++; // inline code
    if (/\[[^\]]+\]\([^)]+\)/.test(text)) weak++; // links
    if (/^>\s/m.test(text)) weak++; // blockquote
    return weak >= 2;
  }

  /** Strip HTML tags for XSS safety, keeping only safe elements. */
  function sanitize(html: string): string {
    const allowed =
      /^(h[1-6]|p|br|strong|em|code|pre|ul|ol|li|a|blockquote|table|thead|tbody|tr|th|td|hr|img|span|div|del|sup|sub|input)$/i;
    const safeAttrs = /^(href|src|alt|title|class|id|type|checked|disabled)$/i;
    const tmp = document.createElement("div");
    tmp.innerHTML = html;

    function walk(node: Element) {
      for (const child of Array.from(node.children)) {
        if (!allowed.test(child.tagName)) {
          child.replaceWith(...Array.from(child.childNodes));
          continue;
        }
        // Strip dangerous attributes
        for (const attr of Array.from(child.attributes)) {
          if (!safeAttrs.test(attr.name)) {
            child.removeAttribute(attr.name);
          }
        }
        // Enforce safe href (no javascript:)
        if (child.hasAttribute("href")) {
          const href = child.getAttribute("href") ?? "";
          if (href.startsWith("javascript:")) {
            child.setAttribute("href", "#");
          }
          child.setAttribute("target", "_blank");
          child.setAttribute("rel", "noopener noreferrer");
        }
        walk(child);
      }
    }
    walk(tmp);
    return tmp.innerHTML;
  }

  function renderMarkdown(text: string): string {
    const raw = marked.parse(text, { async: false, gfm: true }) as string;
    return sanitize(raw);
  }

  async function copyText(text: string, index: number) {
    await copyToClipboard(text);
    copiedIndex = index;
    setTimeout(() => {
      if (copiedIndex === index) copiedIndex = null;
    }, 2000);
  }

  function toggleView(index: number) {
    const current = viewModes[index] ?? "rich";
    viewModes[index] = current === "rich" ? "raw" : "rich";
  }
</script>

<div
  class={`overflow-hidden rounded-lg border ${isError ? "border-destructive/50 bg-destructive/5" : "bg-card text-card-foreground"}`}
>
  {#each content as block, i}
    {#if block.type === "text" && block.text}
      {@const { parsed, isJson } = tryParseJson(block.text)}
      {@const isMarkdown = !isJson && hasMarkdown(block.text)}
      {@const viewMode = viewModes[i] ?? "rich"}
      <div class={`relative p-4 ${i < content.length - 1 ? "border-b" : ""}`}>
        <div class="absolute right-2 top-2 z-10 flex items-center gap-1">
          {#if isMarkdown}
            <button
              class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"
              onclick={() => toggleView(i)}
              title={viewMode === "rich" ? "View raw" : "View rendered"}
            >
              {#if viewMode === "rich"}
                <Code size={14} />
              {:else}
                <FileText size={14} />
              {/if}
            </button>
          {/if}
          <button
            class="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"
            onclick={() => copyText(block.text ?? "", i)}
            title="Copy content"
          >
            {#if copiedIndex === i}
              <Check size={14} class="text-green-500" />
            {:else}
              <Copy size={14} />
            {/if}
          </button>
        </div>

        {#if isJson}
          <div class="overflow-x-auto">
            <JsonTree data={parsed} />
          </div>
        {:else if isMarkdown && viewMode === "rich"}
          <div class="prose-result">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- sanitized by sanitize() -->
            {@html renderMarkdown(block.text)}
          </div>
        {:else}
          <pre
            class={`overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-muted/50 p-3 text-xs font-mono leading-relaxed ${isError ? "text-destructive" : "text-foreground"}`}>{block.text}</pre>
        {/if}
      </div>
    {:else if block.type === "image" && block.data}
      <div
        class={`flex justify-center bg-muted/20 p-4 ${i < content.length - 1 ? "border-b" : ""}`}
      >
        <img
          src={`data:${block.mimeType ?? "image/png"};base64,${block.data}`}
          alt="Tool result"
          class="max-w-full rounded-md shadow-sm ring-1 ring-border"
        />
      </div>
    {:else}
      <div class="p-4">
        <pre
          class="overflow-x-auto whitespace-pre-wrap break-words text-xs font-mono text-muted-foreground">{JSON.stringify(
            block,
            null,
            2,
          )}</pre>
      </div>
    {/if}
  {/each}

  {#if content.length === 0}
    <div
      class="flex items-center justify-center p-8 text-sm text-muted-foreground italic"
    >
      No output returned
    </div>
  {/if}
</div>

<style>
  .prose-result {
    font-size: 0.875rem;
    line-height: 1.7;
    color: var(--text);
  }
  /* First child should have no top margin */
  .prose-result :global(> :first-child) {
    margin-top: 0;
  }
  .prose-result :global(h1) {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1.25rem 0 0.5rem;
    line-height: 1.3;
  }
  .prose-result :global(h2) {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0 0.375rem;
    line-height: 1.35;
  }
  .prose-result :global(h3) {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0.875rem 0 0.25rem;
  }
  .prose-result :global(p) {
    margin: 0.5em 0;
  }
  /* Collapse <p> inside tight list items */
  .prose-result :global(li > p:only-child) {
    margin: 0;
  }
  .prose-result :global(strong) {
    font-weight: 600;
    color: var(--text);
  }
  .prose-result :global(em) {
    font-style: italic;
    color: var(--muted-foreground);
  }
  .prose-result :global(code) {
    font-family: var(--font-mono);
    font-size: 0.8em;
    background: var(--muted);
    padding: 0.15em 0.4em;
    border-radius: 0.25rem;
    color: var(--text);
  }
  .prose-result :global(pre) {
    background: var(--muted);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 0.75em 0;
    font-size: 0.8rem;
    line-height: 1.6;
    border: 1px solid var(--border);
  }
  .prose-result :global(pre code) {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: inherit;
  }
  .prose-result :global(ul),
  .prose-result :global(ol) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }
  .prose-result :global(ul) {
    list-style-type: disc;
  }
  .prose-result :global(ol) {
    list-style-type: decimal;
  }
  .prose-result :global(li) {
    margin: 0.15em 0;
  }
  .prose-result :global(li::marker) {
    color: var(--muted-foreground);
  }
  .prose-result :global(blockquote) {
    border-left: 3px solid var(--primary);
    padding: 0.5em 1em;
    margin: 0.75em 0;
    background: color-mix(in srgb, var(--muted) 50%, transparent);
    border-radius: 0 0.375rem 0.375rem 0;
    color: var(--muted-foreground);
  }
  .prose-result :global(blockquote p) {
    margin: 0.25em 0;
  }
  .prose-result :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75em 0;
    font-size: 0.8rem;
    border: 1px solid var(--border);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  .prose-result :global(th),
  .prose-result :global(td) {
    border: 1px solid var(--border);
    padding: 0.5em 0.75em;
    text-align: left;
  }
  .prose-result :global(th) {
    background: var(--muted);
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: var(--muted-foreground);
  }
  .prose-result :global(tr:nth-child(even) td) {
    background: color-mix(in srgb, var(--muted) 25%, transparent);
  }
  .prose-result :global(hr) {
    border: none;
    border-top: 1px solid var(--border);
    margin: 1em 0;
  }
  .prose-result :global(a) {
    color: var(--ring);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-color: color-mix(in srgb, var(--ring) 40%, transparent);
  }
  .prose-result :global(a:hover) {
    text-decoration-color: var(--ring);
  }
</style>
