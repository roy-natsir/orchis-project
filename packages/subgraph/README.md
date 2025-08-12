# Subgraph

The Graph Protocol subgraph untuk indexing data dari smart contracts.

## Setup

```bash
cd packages/subgraph
pnpm install -g @graphprotocol/graph-cli
graph auth --product hosted-service <ACCESS_TOKEN>
```

## Deploy

```bash
graph build
graph deploy --product hosted-service username/eripmav-portfolio
```
