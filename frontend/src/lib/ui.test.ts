import { describe, it, expect, vi, beforeEach } from "vitest";
import { inputClass, buttonClass, buttonVariants, copyToClipboard } from "./ui";

describe("CSS class constants", () => {
  it("exports inputClass as a non-empty string", () => {
    expect(typeof inputClass).toBe("string");
    expect(inputClass.length).toBeGreaterThan(0);
  });

  it("exports buttonClass as a non-empty string", () => {
    expect(typeof buttonClass).toBe("string");
    expect(buttonClass.length).toBeGreaterThan(0);
  });

  it("exports all button variants", () => {
    expect(Object.keys(buttonVariants)).toEqual([
      "default",
      "destructive",
      "outline",
      "ghost",
    ]);
  });

  it("each variant includes the base buttonClass", () => {
    for (const variant of Object.values(buttonVariants)) {
      expect(variant).toContain(buttonClass);
    }
  });
});

describe("copyToClipboard", () => {
  beforeEach(() => {
    vi.stubGlobal("navigator", {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it("calls navigator.clipboard.writeText with the given text", async () => {
    await copyToClipboard("hello world");
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("hello world");
  });

  it("passes through empty strings", async () => {
    await copyToClipboard("");
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("");
  });

  it("propagates clipboard errors", async () => {
    const error = new Error("Clipboard blocked");
    vi.stubGlobal("navigator", {
      clipboard: { writeText: vi.fn().mockRejectedValue(error) },
    });

    await expect(copyToClipboard("x")).rejects.toThrow("Clipboard blocked");
  });
});
