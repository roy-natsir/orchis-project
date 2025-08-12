# Smart Contracts

Smart contracts untuk Eripmav Portfolio menggunakan Foundry framework.

## Kontrak

1. **ProfessionalCV.sol**: Menyimpan data CV di blockchain
2. **NFTBusinessCard.sol**: NFT business card

## Setup

```bash
cd packages/contracts
forge install
forge build
forge test
```

## Deploy

```bash
forge script script/Deploy.s.sol --rpc-url $RPC_URL --broadcast
```
