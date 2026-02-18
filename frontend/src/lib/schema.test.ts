import { describe, it, expect } from "vitest";
import {
  getFieldType,
  getDefaultValue,
  buildDefaultObject,
  getCompatibilityWarnings,
} from "./schema";
import type { JSONSchema } from "./types";

describe("getFieldType", () => {
  it("returns 'string' for string schema", () => {
    expect(getFieldType({ type: "string" })).toBe("string");
  });

  it("returns 'number' for number schema", () => {
    expect(getFieldType({ type: "number" })).toBe("number");
  });

  it("returns 'integer' for integer schema", () => {
    expect(getFieldType({ type: "integer" })).toBe("integer");
  });

  it("returns 'boolean' for boolean schema", () => {
    expect(getFieldType({ type: "boolean" })).toBe("boolean");
  });

  it("returns 'object' for object schema", () => {
    expect(getFieldType({ type: "object" })).toBe("object");
  });

  it("returns 'array' for array schema", () => {
    expect(getFieldType({ type: "array" })).toBe("array");
  });

  it("returns 'enum' when enum is present regardless of type", () => {
    expect(getFieldType({ type: "string", enum: ["a", "b"] })).toBe("enum");
  });

  it("returns 'oneOf' when oneOf is present", () => {
    expect(getFieldType({ oneOf: [{ type: "string" }, { type: "number" }] })).toBe("oneOf");
  });

  it("returns 'anyOf' when anyOf is present", () => {
    expect(getFieldType({ anyOf: [{ type: "string" }, { type: "number" }] })).toBe("anyOf");
  });

  it("returns 'unknown' for empty schema", () => {
    expect(getFieldType({})).toBe("unknown");
  });

  it("enum takes priority over oneOf", () => {
    expect(getFieldType({ enum: ["a"], oneOf: [{ type: "string" }] })).toBe("enum");
  });
});

describe("getDefaultValue", () => {
  it("returns explicit default when present", () => {
    expect(getDefaultValue({ type: "string", default: "hello" })).toBe("hello");
  });

  it("returns empty string for string without default", () => {
    expect(getDefaultValue({ type: "string" })).toBe("");
  });

  it("returns undefined for number without default", () => {
    expect(getDefaultValue({ type: "number" })).toBeUndefined();
  });

  it("returns false for boolean without default", () => {
    expect(getDefaultValue({ type: "boolean" })).toBe(false);
  });

  it("returns empty array for array without default", () => {
    expect(getDefaultValue({ type: "array" })).toEqual([]);
  });

  it("returns first enum value for enum without default", () => {
    expect(getDefaultValue({ enum: ["celsius", "fahrenheit"] })).toBe("celsius");
  });

  it("returns default 0 for number", () => {
    expect(getDefaultValue({ type: "number", default: 0 })).toBe(0);
  });

  it("returns default false for boolean", () => {
    expect(getDefaultValue({ type: "boolean", default: false })).toBe(false);
  });
});

describe("buildDefaultObject", () => {
  it("returns empty object for schema with no properties", () => {
    expect(buildDefaultObject({ type: "object" })).toEqual({});
  });

  it("includes required fields with their defaults", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: {
        name: { type: "string" },
        age: { type: "number" },
      },
      required: ["name"],
    };
    const result = buildDefaultObject(schema);
    expect(result).toEqual({ name: "" });
  });

  it("includes fields with explicit defaults even if not required", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: {
        units: { type: "string", default: "celsius" },
        verbose: { type: "boolean" },
      },
    };
    const result = buildDefaultObject(schema);
    expect(result).toEqual({ units: "celsius" });
  });

  it("handles nested objects", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: {
        config: {
          type: "object",
          properties: {
            timeout: { type: "number", default: 30 },
          },
        },
      },
      required: ["config"],
    };
    const result = buildDefaultObject(schema);
    expect(result.config).toEqual({ timeout: 30 });
  });
});

describe("getCompatibilityWarnings", () => {
  it("returns empty for simple schema", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: { name: { type: "string" } },
    };
    expect(getCompatibilityWarnings(schema)).toEqual([]);
  });

  it("warns about anyOf", () => {
    const schema: JSONSchema = {
      anyOf: [{ type: "string" }, { type: "number" }],
    };
    const warnings = getCompatibilityWarnings(schema);
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain("anyOf");
  });

  it("warns about oneOf", () => {
    const schema: JSONSchema = {
      oneOf: [{ type: "string" }, { type: "number" }],
    };
    const warnings = getCompatibilityWarnings(schema);
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain("oneOf");
  });

  it("warns about allOf", () => {
    const schema: JSONSchema = {
      allOf: [{ type: "object" }, { properties: { x: { type: "string" } } }],
    };
    const warnings = getCompatibilityWarnings(schema);
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain("allOf");
  });

  it("detects warnings in nested properties", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: {
        data: { anyOf: [{ type: "string" }, { type: "number" }] },
      },
    };
    const warnings = getCompatibilityWarnings(schema);
    expect(warnings.length).toBeGreaterThan(0);
    expect(warnings[0]).toContain("anyOf");
  });

  it("deduplicates identical warnings from nested properties", () => {
    const schema: JSONSchema = {
      type: "object",
      properties: {
        a: { anyOf: [{ type: "string" }] },
        b: { anyOf: [{ type: "number" }] },
      },
    };
    const warnings = getCompatibilityWarnings(schema);
    expect(warnings).toHaveLength(1);
  });
});
