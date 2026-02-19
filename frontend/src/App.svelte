<script lang="ts">
  import { onMount } from "svelte";
  import { connect, onMessage, send } from "./lib/ws";
  import type { ToolDef, TimelineEntry, ServerMessage, ServerInfo } from "./lib/types";
  import { describeReloadDiff } from "./lib/diff";
  import ToolList from "./components/ToolList.svelte";
  import ToolDetail from "./components/ToolDetail.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Toast from "./components/Toast.svelte";
  import {
    Moon,
    Sun,
    Zap,
    Activity,
    Command,
    LayoutTemplate,
    Server
  } from "lucide-svelte";

  let tools = $state<ToolDef[]>([]);
  let selectedTool = $state<ToolDef | null>(null);
  let timelineEntries = $state<TimelineEntry[]>([]);
  let activeTab = $state<"tool" | "timeline">("tool");
  let toastMessage = $state<string>("");
  let toastType = $state<"info" | "error" | "success">("info");
  let wsConnected = $state(false);
  let serverInfo = $state<ServerInfo | null>(null);
  let timelineTotalCount = $state(0);

  // Feature 8: execution counts derived from timeline
  let executionCounts = $derived.by(() => {
    const counts: Record<string, number> = {};
    for (const entry of timelineEntries) {
      counts[entry.tool_name] = (counts[entry.tool_name] ?? 0) + 1;
    }
    return counts;
  });

  function showToast(msg: string, type: "info" | "error" | "success" = "info") {
    toastMessage = msg;
    toastType = type;
    setTimeout(() => (toastMessage = ""), 3000);
  }

  function handleMessage(msg: ServerMessage) {
    switch (msg.type) {
      case "tools": {
        const wasConnected = wsConnected;
        tools = msg.tools;
        wsConnected = true;
        if (!selectedTool && tools.length > 0) {
          selectedTool = tools[0];
        }
        if (selectedTool) {
          const updated = tools.find((t) => t.name === selectedTool!.name);
          if (updated) selectedTool = updated;
          else if (tools.length > 0) selectedTool = tools[0];
          else selectedTool = null;
        }
        if (!wasConnected) {
          showToast(`Connected — ${tools.length} tool${tools.length !== 1 ? "s" : ""} available`, "success");
        }
        break;
      }

      case "timeline":
        timelineEntries = msg.entries;
        timelineTotalCount = msg.total_count;
        break;

      case "reload": {
        if (msg.status === "reloading") {
          showToast("Server reloading...", "info");
        } else if (msg.status === "ready") {
          // Feature 9: diff on hot reload
          if (msg.tools) {
            const diff = describeReloadDiff(tools, msg.tools);
            tools = msg.tools;
            showToast(diff || "Server reloaded", "success");
          } else {
            showToast("Server reloaded", "success");
          }
        }
        break;
      }

      case "server_info":
        serverInfo = {
          command: msg.command,
          server_name: msg.server_name,
          transport: msg.transport,
          version: msg.version,
        };
        break;

      case "error":
        showToast(msg.message, "error");
        break;
    }
  }

  function handleSelectTool(tool: ToolDef) {
    selectedTool = tool;
    activeTab = "tool";
  }

  function handleReplay(entry: TimelineEntry) {
    send({ type: "replay", entry_id: entry.id });
    activeTab = "tool";
    const tool = tools.find((t) => t.name === entry.tool_name);
    if (tool) selectedTool = tool;
  }

  function handleClearTimeline() {
    send({ type: "clear_timeline" });
  }

  function handleLoadAllTimeline() {
    send({ type: "get_timeline" });
  }

  let darkMode = $state(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("mcpplay-theme") === "dark"
      : false,
  );

  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem("mcpplay-theme", darkMode ? "dark" : "light");
  }

  $effect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  onMount(() => {
    const unsub = onMessage(handleMessage);
    connect();
    return unsub;
  });
</script>

<div class="flex h-screen w-full flex-col bg-background text-foreground transition-colors duration-200">
  <!-- Top Navigation Bar -->
  <header class="flex h-14 items-center justify-between border-b bg-secondary/30 px-4 backdrop-blur-sm">
    <div class="flex items-center gap-3">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Command size={18} />
      </div>
      <div class="flex flex-col leading-none">
        <h1 class="text-sm font-bold tracking-tight">mcpplay</h1>
        <span class="text-[10px] text-muted-foreground">{serverInfo?.version ? `v${serverInfo.version}` : ''}</span>
      </div>
      <div class="ml-4 flex items-center gap-2 rounded-full border bg-background px-2.5 py-0.5 text-xs font-medium">
        <div class={`h-2 w-2 rounded-full ${wsConnected ? 'bg-green-500 animate-pulse-dot' : 'bg-red-500'}`}></div>
        <span class={wsConnected ? 'text-foreground' : 'text-muted-foreground'}>
          {wsConnected ? "Connected" : "Disconnected"}
        </span>
      </div>

      <!-- Feature 6: Server info -->
      {#if serverInfo}
        <div class="ml-2 flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
          <Server size={12} />
          <span class="max-w-[200px] truncate font-mono" title={serverInfo.server_name}>
            {serverInfo.server_name}
          </span>
          <span class="rounded bg-muted px-1 py-0.5 text-[10px] uppercase">{serverInfo.transport}</span>
        </div>
      {/if}
    </div>

    <div class="flex items-center gap-2">
      <button
        onclick={toggleTheme}
        class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        {#if darkMode}
          <Sun size={16} />
        {:else}
          <Moon size={16} />
        {/if}
      </button>
    </div>
  </header>

  <!-- Main Layout -->
  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 border-r bg-muted/20 flex flex-col">
      <ToolList {tools} {selectedTool} {executionCounts} onSelect={handleSelectTool} />
    </aside>

    <!-- Main Content Area -->
    <main class="flex flex-1 flex-col overflow-hidden bg-background">
      <!-- Tabs / View Switcher -->
      <div class="flex items-center border-b px-4">
        <button
          class={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${activeTab === 'tool' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'}`}
          onclick={() => (activeTab = "tool")}
        >
          <LayoutTemplate size={16} />
          Tool Console
        </button>
        <button
          class={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors hover:text-foreground ${activeTab === 'timeline' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'}`}
          onclick={() => (activeTab = "timeline")}
        >
          <Activity size={16} />
          Timeline
          <span class="ml-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {timelineEntries.length}
          </span>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-6">
        {#if activeTab === "tool"}
          {#if selectedTool}
            <div class="animate-in mx-auto max-w-6xl">
              <ToolDetail tool={selectedTool} />
            </div>
          {:else}
            <div class="mx-auto max-w-5xl">
              <div class="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground">
                <div class="mb-4 rounded-full bg-muted p-4">
                  <Zap size={32} class="opacity-50" />
                </div>
                <h3 class="text-lg font-medium text-foreground">No tool selected</h3>
                <p class="max-w-sm text-sm">Select a tool from the sidebar to verify its schema and execute it.</p>
              </div>
            </div>
          {/if}
        {:else}
          <div class="animate-in mx-auto max-w-5xl">
            <Timeline
              entries={timelineEntries}
              {tools}
              totalCount={timelineTotalCount}
              onReplay={handleReplay}
              onClear={handleClearTimeline}
              onLoadAll={handleLoadAllTimeline}
            />
          </div>
        {/if}
      </div>
    </main>
  </div>

</div>

{#if toastMessage}
  <Toast message={toastMessage} type={toastType} />
{/if}
