# Changelog

All notable changes to `aui-mcp` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.6.4] - 2026-11-23

### Added
- **Zero-Clip Sankey Flows (`chart_type: "sankey"`):** Synced documentation and metadata with AUI V2.6.2's `<50ms` deterministic `{source, target, value}` DAG Sankey compiler (inward-facing mobile-safe node labels, cycle guard, and comma-formatted `Source → Target` tooltips).
- **CLI Ergonomics & Timeout Guard (`index.js`):** Added `--version` / `--help` flags, `User-Agent: aui-mcp/<version>` telemetry header, and `AbortSignal.timeout` (`AUI_TIMEOUT_MS`, default `25000ms`) so stalled upstream sockets never block MCP stdio clients.
- **Automated GitHub Actions CI & Container Hardening:** Added `.github/workflows/ci.yml` (`Node 20` / `22` live MCP `tools/list` verification), `SECURITY.md`, OCI image labels, and non-root `USER node` execution in `Dockerfile`.
- **Glama Registry Verification:** Added live Glama quality score badge and synced `aui_verify_solana_key` mainnet treasury address.

## [2.6.3] - 2026-11-19

### Changed
- Synced `README.md` and package metadata with the 5-tool MCP `2025-11-25` Streamable HTTP schema (`aui_generate_ui`, `aui_get_status`, `aui_claim_free_trial`, `aui_verify_solana_key`, `aui_share_widget`), tool annotations, and structured `outputSchema`.

## [2.6.2] - 2026-11-17

### Added
- Initial open-source release of `aui-mcp` — zero-dependency Node.js `>=18` `stdio <-> Streamable HTTP` MCP bridge for AUI (`dt`, `cg`, `tl`, and `dp` interactive widget engines), `Dockerfile`, `smithery.yaml`, and `glama.json`.
