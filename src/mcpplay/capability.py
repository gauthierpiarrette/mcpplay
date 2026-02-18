"""Detect tool capabilities from names, descriptions, and schemas."""

from __future__ import annotations

import re
from enum import StrEnum
from typing import Any

_PATTERNS: dict[str, list[str]] = {
    "filesystem": [
        r"\bfiles?\b",
        r"\bpaths?\b",
        r"\bdirector(?:y|ies)\b",
        r"\bread_file\b",
        r"\bwrite_file\b",
        r"\bfolder\b",
        r"\bmkdir\b",
        r"\bdelete_file\b",
        r"\brename\b",
    ],
    "network": [
        r"\bhttps?\b",
        r"\burls?\b",
        r"\bfetch\b",
        r"\brequest\b",
        r"\bdownload\b",
        r"\bupload\b",
        r"\bapi\b",
        r"\bwebhook\b",
    ],
    "shell": [
        r"\bshell\b",
        r"\bexec(?:ute)?\b",
        r"\bcommand\b",
        r"\brun\b",
        r"\bsubprocess\b",
        r"\bbash\b",
        r"\bterminal\b",
    ],
    "database": [
        r"\bsql\b",
        r"\bquer(?:y|ies)\b",
        r"\bdatabase\b",
        r"\bdb\b",
        r"\btable\b",
        r"\binsert\b",
        r"\bselect\b",
    ],
    "write": [
        r"\bwrite\b",
        r"\bcreate\b",
        r"\bdelete\b",
        r"\bremove\b",
        r"\bupdate\b",
        r"\bmodify\b",
        r"\bput\b",
        r"\bpost\b",
        r"\bpatch\b",
    ],
    "read_only": [
        r"\bread\b",
        r"\bget\b",
        r"\blist\b",
        r"\bsearch\b",
        r"\bfind\b",
        r"\bshow\b",
        r"\bview\b",
        r"\bfetch\b",
    ],
}

# Compile all patterns once
_COMPILED: dict[str, list[re.Pattern[str]]] = {
    cap: [re.compile(p, re.IGNORECASE) for p in patterns] for cap, patterns in _PATTERNS.items()
}

# Capabilities that require user confirmation before execution
_DANGEROUS = frozenset({"shell", "write", "database"})


class Capability(StrEnum):
    FILESYSTEM = "filesystem"
    NETWORK = "network"
    SHELL = "shell"
    DATABASE = "database"
    READ_ONLY = "read_only"
    WRITE = "write"


def detect_capabilities(
    tool_name: str, description: str, input_schema: dict[str, Any] | None = None
) -> list[Capability]:
    """Scan tool metadata for capability keywords."""
    text = f"{tool_name} {description}"
    if input_schema:
        # Include property names and descriptions from the schema
        for prop_name, prop_def in input_schema.get("properties", {}).items():
            text += f" {prop_name}"
            if isinstance(prop_def, dict) and "description" in prop_def:
                text += f" {prop_def['description']}"

    found: set[str] = set()
    for cap_name, patterns in _COMPILED.items():
        for pattern in patterns:
            if pattern.search(text):
                found.add(cap_name)
                break

    # If both read_only and write are detected, drop read_only
    if "read_only" in found and "write" in found:
        found.discard("read_only")

    return sorted([Capability(c) for c in found], key=lambda c: c.value)


def requires_confirmation(capabilities: list[Capability]) -> bool:
    """Check if any capability requires user confirmation."""
    return any(c.value in _DANGEROUS for c in capabilities)
