#!/usr/bin/env node
/**
 * AUI MCP Server (stdio <-> Streamable HTTP Bridge)
 * Official Model Context Protocol server for AUI V2.6 (https://svsrva.com/aui/)
 * Zero npm dependencies — runs natively on Node.js >= 18.
 */

const readline = require('readline');

const ENDPOINT = process.env.AUI_MCP_URL || 'https://svsrva.com/mcp';
const API_KEY = process.env.AUI_API_KEY || process.env.AUI_KEY || '';

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
      'Accept': 'application/json'
    };
    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(parsed)
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
