import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ---------------------------------------------------------------------------
// Polyfill CloseEvent for Node (not available outside jsdom)
// ---------------------------------------------------------------------------

class CloseEvent extends Event {
  code: number;
  reason: string;
  wasClean: boolean;
  constructor(type: string, init?: { code?: number; reason?: string; wasClean?: boolean }) {
    super(type);
    this.code = init?.code ?? 1000;
    this.reason = init?.reason ?? "";
    this.wasClean = init?.wasClean ?? true;
  }
}
vi.stubGlobal("CloseEvent", CloseEvent);

// ---------------------------------------------------------------------------
// Mock WebSocket & location
// ---------------------------------------------------------------------------

class MockWebSocket {
  static OPEN = 1;
  static CONNECTING = 0;
  static CLOSING = 2;
  static CLOSED = 3;

  static instances: MockWebSocket[] = [];

  url: string;
  readyState = MockWebSocket.CONNECTING;
  onopen: ((ev: Event) => void) | null = null;
  onclose: ((ev: CloseEvent) => void) | null = null;
  onmessage: ((ev: MessageEvent) => void) | null = null;
  onerror: ((ev: Event) => void) | null = null;
  sent: string[] = [];

  constructor(url: string) {
    this.url = url;
    MockWebSocket.instances.push(this);
  }

  send(data: string) {
    this.sent.push(data);
  }

  /** Simulate the server opening the connection. */
  simulateOpen() {
    this.readyState = MockWebSocket.OPEN;
    this.onopen?.(new Event("open"));
  }

  /** Simulate the server sending a message. */
  simulateMessage(data: unknown) {
    this.onmessage?.(new MessageEvent("message", { data: JSON.stringify(data) }));
  }

  /** Simulate connection close. */
  simulateClose() {
    this.readyState = MockWebSocket.CLOSED;
    this.onclose?.(new CloseEvent("close"));
  }

  /** Simulate an error followed by close (browser behavior). */
  simulateError() {
    this.onerror?.(new Event("error"));
    this.simulateClose();
  }
}

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

/** Fresh-import ws.ts to reset module-level state between tests. */
async function freshImport() {
  return await import("./ws");
}

// ---------------------------------------------------------------------------
// Test suite
// ---------------------------------------------------------------------------

describe("ws", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.resetModules();
    MockWebSocket.instances = [];

    vi.stubGlobal("WebSocket", MockWebSocket);
    vi.stubGlobal("location", { protocol: "https:", host: "example.com" });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  // -- connect ----------------------------------------------------------------

  describe("connect", () => {
    it("creates a WebSocket with the correct wss URL", async () => {
      const { connect } = await freshImport();
      connect();
      expect(MockWebSocket.instances).toHaveLength(1);
      expect(MockWebSocket.instances[0].url).toBe("wss://example.com/ws");
    });

    it("uses ws: for http: pages", async () => {
      vi.stubGlobal("location", { protocol: "http:", host: "localhost:8321" });
      const { connect } = await freshImport();
      connect();
      expect(MockWebSocket.instances[0].url).toBe("ws://localhost:8321/ws");
    });

    it("does nothing if already open", async () => {
      const { connect } = await freshImport();
      connect();
      MockWebSocket.instances[0].simulateOpen();
      connect(); // second call
      expect(MockWebSocket.instances).toHaveLength(1);
    });

    it("sends get_tools and get_timeline on open", async () => {
      const { connect } = await freshImport();
      connect();
      const ws = MockWebSocket.instances[0];
      ws.simulateOpen();

      const messages = ws.sent.map((s) => JSON.parse(s));
      expect(messages).toEqual([
        { type: "get_tools" },
        { type: "get_timeline", filter: { limit: 50 } },
      ]);
    });
  });

  // -- send -------------------------------------------------------------------

  describe("send", () => {
    it("sends JSON when socket is open", async () => {
      const { connect, send } = await freshImport();
      connect();
      MockWebSocket.instances[0].simulateOpen();
      MockWebSocket.instances[0].sent = []; // clear init messages

      send({ type: "get_tools" });
      expect(MockWebSocket.instances[0].sent).toEqual([
        JSON.stringify({ type: "get_tools" }),
      ]);
    });

    it("silently drops messages when socket is not open", async () => {
      const { send } = await freshImport();
      // no connect() called
      send({ type: "get_tools" });
      expect(MockWebSocket.instances).toHaveLength(0);
    });

    it("silently drops messages when socket is connecting", async () => {
      const { connect, send } = await freshImport();
      connect();
      // don't simulateOpen — still CONNECTING
      MockWebSocket.instances[0].sent = [];
      send({ type: "get_tools" });
      expect(MockWebSocket.instances[0].sent).toEqual([]);
    });
  });

  // -- onMessage --------------------------------------------------------------

  describe("onMessage", () => {
    it("dispatches parsed server messages to handlers", async () => {
      const { connect, onMessage } = await freshImport();
      const handler = vi.fn();
      onMessage(handler);
      connect();
      MockWebSocket.instances[0].simulateOpen();

      const msg = { type: "tools", tools: [] };
      MockWebSocket.instances[0].simulateMessage(msg);

      expect(handler).toHaveBeenCalledWith(msg);
    });

    it("dispatches to multiple handlers", async () => {
      const { connect, onMessage } = await freshImport();
      const h1 = vi.fn();
      const h2 = vi.fn();
      onMessage(h1);
      onMessage(h2);
      connect();
      MockWebSocket.instances[0].simulateOpen();

      const msg = { type: "error", message: "boom" };
      MockWebSocket.instances[0].simulateMessage(msg);

      expect(h1).toHaveBeenCalledWith(msg);
      expect(h2).toHaveBeenCalledWith(msg);
    });

    it("returns an unsubscribe function", async () => {
      const { connect, onMessage } = await freshImport();
      const handler = vi.fn();
      const unsub = onMessage(handler);
      connect();
      MockWebSocket.instances[0].simulateOpen();

      unsub();

      MockWebSocket.instances[0].simulateMessage({ type: "error", message: "x" });
      expect(handler).not.toHaveBeenCalled();
    });

    it("does not crash on invalid JSON", async () => {
      const { connect, onMessage } = await freshImport();
      const handler = vi.fn();
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      onMessage(handler);
      connect();
      MockWebSocket.instances[0].simulateOpen();

      // Send raw invalid JSON (bypass simulateMessage which stringifies)
      MockWebSocket.instances[0].onmessage?.(
        new MessageEvent("message", { data: "not json{" }),
      );

      expect(handler).not.toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  // -- reconnection -----------------------------------------------------------

  describe("reconnection", () => {
    it("schedules reconnect on close", async () => {
      const { connect } = await freshImport();
      connect();
      const ws = MockWebSocket.instances[0];
      ws.simulateOpen();
      ws.simulateClose();

      expect(MockWebSocket.instances).toHaveLength(1); // not yet reconnected

      vi.advanceTimersByTime(1000);
      expect(MockWebSocket.instances).toHaveLength(2); // reconnected
    });

    it("uses exponential backoff capped at 10s", async () => {
      const { connect } = await freshImport();

      // First connection
      connect();
      MockWebSocket.instances[0].simulateOpen();
      MockWebSocket.instances[0].simulateClose();

      // 1st reconnect at 1000ms
      vi.advanceTimersByTime(1000);
      expect(MockWebSocket.instances).toHaveLength(2);
      MockWebSocket.instances[1].simulateClose(); // fail immediately

      // 2nd reconnect at 2000ms
      vi.advanceTimersByTime(1999);
      expect(MockWebSocket.instances).toHaveLength(2); // not yet
      vi.advanceTimersByTime(1);
      expect(MockWebSocket.instances).toHaveLength(3);
      MockWebSocket.instances[2].simulateClose();

      // 3rd reconnect at 4000ms
      vi.advanceTimersByTime(3999);
      expect(MockWebSocket.instances).toHaveLength(3);
      vi.advanceTimersByTime(1);
      expect(MockWebSocket.instances).toHaveLength(4);
      MockWebSocket.instances[3].simulateClose();

      // 4th reconnect at 8000ms
      vi.advanceTimersByTime(7999);
      expect(MockWebSocket.instances).toHaveLength(4);
      vi.advanceTimersByTime(1);
      expect(MockWebSocket.instances).toHaveLength(5);
      MockWebSocket.instances[4].simulateClose();

      // 5th reconnect capped at 10000ms (not 16000ms)
      vi.advanceTimersByTime(9999);
      expect(MockWebSocket.instances).toHaveLength(5);
      vi.advanceTimersByTime(1);
      expect(MockWebSocket.instances).toHaveLength(6);
    });

    it("resets backoff delay after successful connection", async () => {
      const { connect } = await freshImport();

      connect();
      MockWebSocket.instances[0].simulateOpen();
      MockWebSocket.instances[0].simulateClose();

      // 1st reconnect at 1000ms
      vi.advanceTimersByTime(1000);
      MockWebSocket.instances[1].simulateClose();

      // 2nd reconnect at 2000ms (backoff doubled)
      vi.advanceTimersByTime(2000);
      MockWebSocket.instances[2].simulateOpen(); // success — should reset delay
      MockWebSocket.instances[2].simulateClose();

      // Next reconnect should be back to 1000ms, not 4000ms
      vi.advanceTimersByTime(999);
      expect(MockWebSocket.instances).toHaveLength(3);
      vi.advanceTimersByTime(1);
      expect(MockWebSocket.instances).toHaveLength(4);
    });

    it("does not schedule duplicate reconnects", async () => {
      const { connect } = await freshImport();
      connect();
      MockWebSocket.instances[0].simulateOpen();

      // Trigger close twice rapidly
      MockWebSocket.instances[0].simulateClose();
      MockWebSocket.instances[0].onclose?.(new CloseEvent("close"));

      vi.advanceTimersByTime(1000);
      // Should only have created one reconnect, not two
      expect(MockWebSocket.instances).toHaveLength(2);
    });
  });
});
