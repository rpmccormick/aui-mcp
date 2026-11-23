# Security Policy

## Architecture & Supply-Chain Posture

- **Zero Third-Party Dependencies:** `aui-mcp` uses **0 npm runtime or transitive dependencies**, relying exclusively on Node.js `>=18` built-in modules (`readline`, `fetch`, `AbortSignal`) to eliminate supply-chain attack surface.
- **Least-Privilege Container Execution:** The official `Dockerfile` runs unprivileged as `USER node` on `node:20-alpine`.
- **Isolated Widget Rendering:** Generated AUI visualizations (`embed_url`) render inside isolated iframes on `https://svsrva.com/aui/v2/embed.html` with strict HTML escaping across DataTables (`dt`), ECharts tooltips (`cg`), Omni-Time timelines (`tl`), and DayPilot resource schedules (`dp`).
- **Credential Handling:** Optional `AUI_API_KEY` credentials are passed strictly via environment variable (`Authorization: Bearer`) over TLS 1.3 to `https://svsrva.com/mcp` and are never written to public widget cache files.

## Supported Versions

| Version | Supported |
| :--- | :---: |
| `2.6.x` | ✅ |
| `< 2.6.0` | ❌ |

## Reporting a Vulnerability

Please report security vulnerabilities privately via [GitHub Private Vulnerability Reporting](https://github.com/rpmccormick/aui-mcp/security/advisories/new) or by emailing **surroundviewsystems@gmail.com** rather than opening a public issue. We acknowledge reports within 24 hours and ship verified fixes promptly.
