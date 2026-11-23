#!/usr/bin/env node
/**
 * AUI MCP Server (stdio <-> Streamable HTTP Bridge)
 * Official Model Context Protocol server for AUI V2.6 (https://svsrva.com/aui/)
 * Zero npm dependencies — runs natively on Node.js >= 18.
 */

const readline = require('readline');
const pkg = require('./package.json');

if (process.argv.includes('--version') || process.argv.includes('-v')) {
  process.stdout.write(`${pkg.version}\n`);
  process.exit(0);
}
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  process.stdout.write(
    `aui-mcp v${pkg.version} — Zero-dependency MCP stdio <-> Streamable HTTP bridge for AUI (https://svsrva.com/aui/)\n` +
    `Usage: AUI_API_KEY=<optional> npx -y github:rpmccormick/aui-mcp\n`
  );
  process.exit(0);
}

const ENDPOINT = process.env.AUI_MCP_URL || 'https://svsrva.com/mcp';
const API_KEY = process.env.AUI_API_KEY || process.env.AUI_KEY || '';
const TIMEOUT_MS = Number(process.env.AUI_TIMEOUT_MS || 25000);

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

async function forwardRpc(line) {
  const trimmed = line.trim();
  if (!trimmed) return;

  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch (err) {
    process.stdout.write(JSON.stringify({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' }
    }) + '\n');
    return;
  }

  // Notifications (no id) do not emit a response over stdio
  const isNotification = !Array.isArray(parsed) && parsed.id === undefined;

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': `aui-mcp/${pkg.version}`
    };
    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(parsed),
      signal: typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? AbortSignal.timeout(TIMEOUT_MS) : undefined
    });

    if (isNotification || res.status === 202 || res.status === 204) {
      return;
    }

    const text = await res.text();
    if (text && text.trim()) {
      // Ensure single-line JSON output per MCP stdio specification
      const compact = JSON.stringify(JSON.parse(text));
      process.stdout.write(compact + '\n');
    }
  } catch (err) {
    if (!isNotification) {
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: parsed && parsed.id !== undefined ? parsed.id : null,
        error: { code: -32603, message: `AUI upstream error: ${err.message}` }
      }) + '\n');
    }
  }
}

rl.on('line', (line) => {
  forwardRpc(line);
});
