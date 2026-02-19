import type { ToolDef } from "./types";

/** Describe what changed between two snapshots of the tool list (used on hot-reload). */
export function describeReloadDiff(
  oldTools: ToolDef[],
  newTools: ToolDef[],
): string {
  const oldNames = new Set(oldTools.map((t) => t.name));
  const newNames = new Set(newTools.map((t) => t.name));
  const added = newTools.filter((t) => !oldNames.has(t.name));
  const removed = oldTools.filter((t) => !newNames.has(t.name));
  const changed = newTools.filter((t) => {
    const old = oldTools.find((o) => o.name === t.name);
    return (
      old && JSON.stringify(old.inputSchema) !== JSON.stringify(t.inputSchema)
    );
  });

  const parts: string[] = [];
  if (added.length) parts.push(`${added.length} added`);
  if (removed.length) parts.push(`${removed.length} removed`);
  if (changed.length) parts.push(`${changed.length} schema changed`);

  if (parts.length === 0) return "Server reloaded (no tool changes)";
  return `Server reloaded: ${parts.join(", ")}`;
}
