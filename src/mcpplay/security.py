"""Localhost security middleware to prevent CSRF attacks."""

from __future__ import annotations

from starlette.requests import Request
from starlette.responses import Response
from starlette.types import ASGIApp, Receive, Scope, Send

ALLOWED_HOSTS = frozenset({"localhost", "127.0.0.1", "[::1]"})


class LocalhostSecurityMiddleware:
    """Reject requests from non-localhost origins.

    Prevents CSRF-to-RCE attacks where a malicious website sends requests
    to the dev tool running on localhost (CVE-2025-49596 pattern).
    """

    def __init__(self, app: ASGIApp, port: int) -> None:
        self.app = app
        self.allowed_origins = {
            f"http://localhost:{port}",
            f"http://127.0.0.1:{port}",
        }

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] == "http":
            request = Request(scope)
            if not self._is_allowed(request):
                response = Response("Forbidden: invalid origin", status_code=403)
                await response(scope, receive, send)
                return

        elif scope["type"] == "websocket":
            headers = dict(scope.get("headers", []))
            origin = headers.get(b"origin", b"").decode(errors="replace")
            if origin and origin not in self.allowed_origins:
                # Reject WebSocket upgrade with forbidden origin
                response = Response("Forbidden: invalid origin", status_code=403)
                await response(scope, receive, send)
                return

        await self.app(scope, receive, send)

    def _is_allowed(self, request: Request) -> bool:
        # Validate Host header
        host = request.headers.get("host", "")
        hostname = host.split(":")[0] if ":" in host else host
        if hostname not in ALLOWED_HOSTS:
            return False

        # Validate Origin header if present (state-changing requests)
        origin = request.headers.get("origin")
        return not (origin and origin not in self.allowed_origins)
