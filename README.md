# AUI MCP Server (`aui-mcp`)

<p align="center">
  <a href="https://svsrva.com/aui/"><img src="https://svsrva.com/img/aui-neon.png" alt="AUI V2.6 — Agentic User Interface" width="680"></a>
</p>

<p align="center">
  <strong>Stop trapping AI agents inside 10-paragraph walls of Markdown text.</strong><br>
  Turn raw JSON arrays, SQL rows, CSVs, and URLs into interactive <strong>DataTables</strong>, <strong>Apache ECharts</strong>, <strong>60fps Spatial Timelines</strong>, and <strong>DayPilot 2D Resource Tapes</strong> in <code>&lt;50ms</code>.
</p>

<p align="center">
  <a href="https://svsrva.com/aui/"><strong>🎬 Watch 3-Prompt Live Demo</strong></a> •
  <a href="https://svsrva.com/aui/demo.html"><strong>🚀 Browser Sandbox (No Login)</strong></a> •
  <a href="https://svsrva.com/aui/llms.txt"><strong>📄 llms.txt Agent Spec</strong></a> •
  <a href="https://svsrva.com/agency"><strong>📖 Essay: Agents &amp; HMI</strong></a>
</p>

---

## ✨ Four Specialized Visual Engines (`ui_type`)

1. **`dt` — Signature 2-Line DataTables + Internal Power Bar**: Multi-colored initials avatars, cyan ID badges, status pills, expandable `>` child-row detail drawers, auto-detected categorical facet filter pills, reactive Sum/Avg summary footers, 1-click CSV/JSON export, and cross-domain `postMessage` action buttons.
2. **`cg` — Interactive Apache ECharts**: Bar, Pie/Doughnut, Time-Series Line, Radar, and Scatter charts with rich hover tooltips, dark/light auto-theming, and opt-in click drill-downs.
3. **`tl` — Omni-Time V3 Chrono-Spatial Timeline + 32% Synced Side Fold List**: Smooth 60fps zoom from `10 seconds` to `500 years`, 6-lane collision clustering (`+N Events`), duration span bars, Wikipedia photo enrichment, and a bi-directional synced side index.
4. **`dp` — DayPilot-Style 2D Resource × Time Scheduler Tape**: Sticky resource column, `Hour / Day / Week` zoom, per-slot Occupancy % strip, sub-lane stacking, and double-booking conflict alerts.

---

## ⚡ Quick Start (Zero Dependencies — Works Immediately)

`aui-mcp` works **out of the box with zero API key** (deterministic `<50ms` sandbox mode), or you can pass an `AUI_API_KEY` (`trial-...` 100 free BYOK credits or a Hosted Production Key) for LLM-curated layouts + Twilio SMS / Mailgun Email widget sharing.

### Option 1: Local `stdio` Bridge (Claude Desktop, Cursor, Antigravity, Windsurf)

Requires Node.js `>= 18` (zero npm packages downloaded):

```json
{
  "mcpServers": {
    "aui": {
      "command": "npx",
      "args": ["-y", "github:rpmccormick/aui-mcp"],
      "env": {
        "AUI_API_KEY": "optional-trial-or-paid-key"
      }
    }
  }
}
```

### Option 2: Direct Remote Streamable HTTP MCP Server

If your MCP client supports remote Streamable HTTP (`2024-11-05` / `2025-03-26`), point it straight at:

```text
https://svsrva.com/mcp
```

*(Optional header: `Authorization: Bearer <YOUR_AUI_KEY>`)*

---

## 🛠️ Exposed MCP Tools

| Tool | Description |
| :--- | :--- |
| **`aui_generate_ui`** | Compile raw `data` (JSON array/object or CSV) or a public `url` into a cached, XSS-isolated interactive `embed_url` (`dt`, `cg`, `tl`, `dp`, or `auto`). |
| **`aui_claim_free_trial`** | Machine-to-machine onboarding: pass a BYOK Google Gemini key (`AIza...`) to mint a **100-credit `trial-...` key** automatically with zero human signup. |
| **`aui_verify_solana_key`** | Verify a `0.1 SOL` transfer to `Gn4B5GnuR5dWhP9dGWJgsaWDNnhkSBTjDyrPSyrevM23` on Solana mainnet and claim a **500-run Hosted Production Key** (hosted Gemini inference + SMS/Email sharing included). |
| **`aui_share_widget`** | Text or email any generated AUI visualization (`cache_id`) directly via Twilio A2P SMS or Mailgun Email. |

---

## 🔑 Free Trial & Production Keys

- **Zero-Key Sandbox:** Omit `AUI_API_KEY` to test deterministic `<50ms` compilation immediately, or play interactively at **[svsrva.com/aui/demo.html](https://svsrva.com/aui/demo.html)**.
- **Free 100-Credit BYOK Trial (`$0`):** Mint instantly via `aui_claim_free_trial` or at **[svsrva.com/aui/#pricing](https://svsrva.com/aui/#pricing)**.
- **Hosted Production Key (`0.1 SOL` ~\$18 or USD Invoice — 500 Runs):** Includes hosted Gemini inference (no BYOK key needed) + Twilio A2P SMS & Mailgun Email sharing at **[svsrva.com/aui/#pricing](https://svsrva.com/aui/#pricing)**.

---

## 📄 License

MIT © [Surround View Systems RVA Inc](https://svsrva.com) ([Ryan McCormick](https://github.com/rpmccormick))
