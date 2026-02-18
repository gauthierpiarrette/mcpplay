import type { JSONSchema } from "./types";

export type FieldType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "enum"
  | "object"
  | "array"
  | "oneOf"
  | "anyOf"
  | "unknown";

export function getFieldType(schema: JSONSchema): FieldType {
  if (schema.enum) return "enum";
  if (schema.oneOf) return "oneOf";
  if (schema.anyOf) return "anyOf";

  switch (schema.type) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "integer":
      return "integer";
    case "boolean":
      return "boolean";
    case "object":
      return "object";
    case "array":
      return "array";
    default:
      return "unknown";
  }
}

export function getDefaultValue(schema: JSONSchema): unknown {
  if (schema.default !== undefined) return schema.default;

  switch (getFieldType(schema)) {
    case "string":
      return "";
    case "number":
    case "integer":
      return undefined;
    case "boolean":
      return false;
    case "object":
      return buildDefaultObject(schema);
    case "array":
      return [];
    case "enum":
      return schema.enum?.[0] ?? "";
    default:
      return undefined;
  }
}

export function buildDefaultObject(
  schema: JSONSchema,
): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  const props = schema.properties ?? {};
  const required = new Set(schema.required ?? []);

  for (const [key, propSchema] of Object.entries(props)) {
    if (propSchema.default !== undefined) {
      obj[key] = propSchema.default;
    } else if (required.has(key)) {
      obj[key] = getDefaultValue(propSchema);
    }
  }
  return obj;
}

/** Check if a schema uses constructs known to cause issues with some MCP clients. */
export function getCompatibilityWarnings(schema: JSONSchema): string[] {
  const warnings: string[] = [];

  if (schema.anyOf) {
    warnings.push(
      "This tool uses anyOf in its schema. Some MCP clients (Claude Code, Claude API) may reject schemas using anyOf.",
    );
  }
  if (schema.oneOf) {
    warnings.push(
      "This tool uses oneOf in its schema. Some MCP clients may have limited support for oneOf discriminators.",
    );
  }
  if (schema.allOf) {
    warnings.push(
      "This tool uses allOf in its schema. Not all MCP clients fully support allOf composition.",
    );
  }

  // Check nested properties too
  if (schema.properties) {
    for (const propSchema of Object.values(schema.properties)) {
      warnings.push(...getCompatibilityWarnings(propSchema));
    }
  }

  return [...new Set(warnings)];
}
