"""Tests for localhost security middleware."""

from __future__ import annotations

import pytest
from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import PlainTextResponse
from starlette.routing import Route
from starlette.testclient import TestClient

from mcpplay.security import LocalhostSecurityMiddleware


def _make_app(port: int = 8321) -> Starlette:
    async def homepage(request: Request) -> PlainTextResponse:
        return PlainTextResponse("OK")

    app = Starlette(routes=[Route("/", homepage)])
    return LocalhostSecurityMiddleware(app, port=port)  # type: ignore[return-value]


@pytest.fixture
def client() -> TestClient:
    return TestClient(_make_app(8321), raise_server_exceptions=False)


class TestLocalhostSecurity:
    def test_localhost_request_passes(self, client: TestClient) -> None:
        resp = client.get("/", headers={"Host": "localhost:8321"})
        assert resp.status_code == 200

    def test_127_0_0_1_request_passes(self, client: TestClient) -> None:
        resp = client.get("/", headers={"Host": "127.0.0.1:8321"})
        assert resp.status_code == 200

    def test_external_host_rejected(self, client: TestClient) -> None:
        resp = client.get("/", headers={"Host": "evil.com"})
        assert resp.status_code == 403

    def test_valid_origin_passes(self, client: TestClient) -> None:
        resp = client.get(
            "/",
            headers={
                "Host": "localhost:8321",
                "Origin": "http://localhost:8321",
            },
        )
        assert resp.status_code == 200

    def test_external_origin_rejected(self, client: TestClient) -> None:
        resp = client.get(
            "/",
            headers={
                "Host": "localhost:8321",
                "Origin": "http://evil.com",
            },
        )
        assert resp.status_code == 403

    def test_no_origin_passes(self, client: TestClient) -> None:
        # Requests without Origin header (e.g., direct browser navigation) should pass
        resp = client.get("/", headers={"Host": "localhost:8321"})
        assert resp.status_code == 200

    def test_host_without_port_passes(self, client: TestClient) -> None:
        resp = client.get("/", headers={"Host": "localhost"})
        assert resp.status_code == 200

    def test_different_origin_port_rejected(self, client: TestClient) -> None:
        resp = client.get(
            "/",
            headers={
                "Host": "localhost:8321",
                "Origin": "http://localhost:9999",
            },
        )
        assert resp.status_code == 403
