// JSON Schema types
export interface JSONSchema {
  type?: string;
  properties?: Record<string, JSONSchema>;
  required?: string[];
  items?: JSONSchema;
  enum?: unknown[];
  oneOf?: JSONSchema[];
  anyOf?: JSONSchema[];
  allOf?: JSONSchema[];
  default?: unknown;
  description?: string;
  title?: string;
  format?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  const?: unknown;
}

export interface ToolDef {
  name: string;
  description: string;
  inputSchema: JSONSchema;
  capabilities: string[];
  requiresConfirmation: boolean;
}

export interface ContentBlock {
  type: string;
  text?: string;
  data?: string;
  mimeType?: string;
}

export interface TimelineEntry {
  id: number;
  timestamp: string;
  tool_name: string;
  input_params: Record<string, unknown>;
  output: {
    content: ContentBlock[];
    isError: boolean;
  };
  latency_ms: number;
  is_error: boolean;
  error_message: string | null;
}

export interface ServerInfo {
  command: string;
  server_name: string;
  transport: string;
  version: string;
}

// Server -> Client messages
export type ServerMessage =
  | { type: "tools"; tools: ToolDef[] }
  | {
      type: "tool_result";
      id: string;
      tool_name: string;
      content: ContentBlock[];
      is_error: boolean;
      latency_ms: number;
    }
  | { type: "timeline"; entries: TimelineEntry[]; total_count: number }
  | { type: "reload"; status: "reloading" | "ready"; tools?: ToolDef[] }
  | {
      type: "server_info";
      command: string;
      server_name: string;
      transport: string;
      version: string;
    }
  | { type: "error"; message: string };

// Client -> Server messages
export type ClientMessage =
  | { type: "get_tools" }
  | {
      type: "call_tool";
      id: string;
      tool_name: string;
      arguments: Record<string, unknown>;
    }
  | {
      type: "get_timeline";
      filter?: {
        tool_name?: string;
        status?: "success" | "error";
        limit?: number;
      };
    }
  | { type: "replay"; entry_id: number }
  | { type: "clear_timeline" };
