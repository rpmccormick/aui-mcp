FROM node:20-alpine
LABEL org.opencontainers.image.title="aui-mcp" \
      org.opencontainers.image.description="Zero-dependency Model Context Protocol (MCP) server for AUI V2.6" \
      org.opencontainers.image.source="https://github.com/rpmccormick/aui-mcp" \
      org.opencontainers.image.licenses="MIT"
WORKDIR /app
COPY package.json index.js ./
USER node
ENTRYPOINT ["node", "index.js"]
