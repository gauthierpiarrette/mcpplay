<script lang="ts">
  import type { Component } from "svelte";
  import {
    Folder,
    Globe,
    Terminal,
    Database,
    Eye,
    Pencil,
    HelpCircle,
  } from "lucide-svelte";

  let { capability }: { capability: string } = $props();

  const BADGE_MAP: Record<
    string,
    { icon: Component; label: string; classes: string }
  > = {
    filesystem: {
      icon: Folder,
      label: "FS",
      classes:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    },
    network: {
      icon: Globe,
      label: "Net",
      classes:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    },
    shell: {
      icon: Terminal,
      label: "Shell",
      classes:
        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
    },
    database: {
      icon: Database,
      label: "DB",
      classes:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    },
    read_only: {
      icon: Eye,
      label: "Read",
      classes:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
    },
    write: {
      icon: Pencil,
      label: "Write",
      classes:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    },
  };

  let info = $derived(
    BADGE_MAP[capability] ?? {
      icon: HelpCircle,
      label: capability,
      classes: "bg-secondary text-secondary-foreground border-border",
    },
  );

  let Icon = $derived(info.icon);
</script>

<span
  class={`inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium shadow-sm transition-colors ${info.classes}`}
  title={capability}
>
  <Icon size={10} />
  <span>{info.label}</span>
</span>
