import { describe, it, expect } from "vitest";
import { describeReloadDiff } from "./diff";
import type { ToolDef } from "./types";

function tool(name: string, schema: Record<string, unknown> = {}): ToolDef {
  return {
    name,
    description: `${name} tool`,
    inputSchema: { type: "object", ...schema },
    capabilities: [],
    requiresConfirmation: false,
  };
}

describe("describeReloadDiff", () => {
  it("reports no changes when lists are identical", () => {
    const tools = [tool("a"), tool("b")];
    expect(describeReloadDiff(tools, tools)).toBe(
      "Server reloaded (no tool changes)",
    );
  });

  it("reports no changes for empty lists", () => {
    expect(describeReloadDiff([], [])).toBe(
      "Server reloaded (no tool changes)",
    );
  });

  it("detects added tools", () => {
    const old = [tool("a")];
    const next = [tool("a"), tool("b"), tool("c")];
    expect(describeReloadDiff(old, next)).toBe("Server reloaded: 2 added");
  });

  it("detects removed tools", () => {
    const old = [tool("a"), tool("b")];
    const next = [tool("a")];
    expect(describeReloadDiff(old, next)).toBe("Server reloaded: 1 removed");
  });

  it("detects schema changes", () => {
    const old = [tool("a", { properties: { x: { type: "string" } } })];
    const next = [tool("a", { properties: { x: { type: "number" } } })];
    expect(describeReloadDiff(old, next)).toBe(
      "Server reloaded: 1 schema changed",
    );
  });

  it("does not flag unchanged schemas", () => {
    const schema = { properties: { x: { type: "string" } } };
    const old = [tool("a", schema)];
    const next = [tool("a", schema)];
    expect(describeReloadDiff(old, next)).toBe(
      "Server reloaded (no tool changes)",
    );
  });

  it("combines added, removed, and changed in one message", () => {
    const old = [
      tool("keep", { properties: { v: { type: "string" } } }),
      tool("gone"),
    ];
    const next = [
      tool("keep", { properties: { v: { type: "number" } } }),
      tool("fresh"),
    ];
    const result = describeReloadDiff(old, next);
    expect(result).toContain("1 added");
    expect(result).toContain("1 removed");
    expect(result).toContain("1 schema changed");
  });

  it("reports singular count correctly", () => {
    const result = describeReloadDiff([], [tool("a")]);
    expect(result).toBe("Server reloaded: 1 added");
  });

  it("reports multiple counts correctly", () => {
    const result = describeReloadDiff([], [tool("a"), tool("b"), tool("c")]);
    expect(result).toBe("Server reloaded: 3 added");
  });
});
