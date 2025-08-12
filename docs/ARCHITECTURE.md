# Eripmav Portfolio Architecture

## Gambaran Umum
Portfolio ini merupakan DApp (Decentralized Application) yang menampilkan profil profesional menggunakan teknologi Web3.

## Komponen Utama

### 1. Smart Contracts (`packages/contracts/`)
- **ProfessionalCV.sol**: Smart contract untuk menyimpan data CV di blockchain
- **NFTBusinessCard.sol**: Smart contract untuk NFT business card
- Menggunakan Foundry framework untuk development dan testing

### 2. Frontend (`packages/frontend/`)
- **Framework**: Next.js 14 dengan App Router
- **Styling**: Tailwind CSS
- **Web3 Integration**: wagmi, viem
- **UI Components**: shadcn/ui

### 3. Subgraph (`packages/subgraph/`)
- **Indexing**: The Graph Protocol untuk indexing data blockchain
- **GraphQL**: Query layer untuk frontend

## Tech Stack
- **Blockchain**: Ethereum/Polygon
- **Smart Contracts**: Solidity + Foundry
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Indexing**: The Graph Protocol
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions
