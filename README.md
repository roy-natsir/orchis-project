# Eripmav Portfolio

🚀 **Web3 Portfolio DApp** yang menampilkan profil profesional menggunakan teknologi blockchain, smart contracts, dan decentralized technologies.

## 🌟 Fitur Utama

- 📝 **Professional CV on Blockchain**: Simpan data CV di smart contract
- 🎨 **NFT Business Card**: Business card dalam bentuk NFT
- 🌐 **Decentralized Frontend**: Next.js DApp dengan Web3 integration
- 📊 **Subgraph Indexing**: Data indexing menggunakan The Graph Protocol
- 🔗 **Multi-chain Support**: Ethereum, Polygon, dan network lainnya

## 🏗️ Arsitektur

Proyek ini menggunakan arsitektur **monorepo** dengan tiga komponen utama:

### 📦 Packages

1. **`packages/contracts/`** - Smart contracts (Foundry)
   - `ProfessionalCV.sol` - Contract untuk data CV
   - `NFTBusinessCard.sol` - Contract untuk NFT business card

2. **`packages/frontend/`** - Frontend DApp (Next.js 14)
   - App Router dengan TypeScript
   - Tailwind CSS untuk styling
   - wagmi + viem untuk Web3 integration
   - RainbowKit untuk wallet connection

3. **`packages/subgraph/`** - Data indexing (The Graph)
   - GraphQL API untuk query blockchain data
   - Real-time data synchronization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- Foundry (untuk smart contracts)
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/username/eripmav-portfolio.git
cd eripmav-portfolio

# Install dependencies
pnpm install

# Setup smart contracts
cd packages/contracts
forge install
forge build
forge test

# Setup dan jalankan frontend
cd ../frontend
pnpm dev
```

### 🔧 Development Commands

```bash
# Frontend development
pnpm dev

# Build semua packages
pnpm build

# Test smart contracts
pnpm contracts:test

# Deploy smart contracts
pnpm contracts:deploy --network sepolia

# Build subgraph
pnpm subgraph:build

# Clean semua build artifacts
pnpm clean
```

## 🛠️ Tech Stack

### Blockchain & Smart Contracts
- **Solidity** - Smart contract language
- **Foundry** - Smart contract development framework
- **OpenZeppelin** - Security-audited contract libraries

### Frontend
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **wagmi** - React hooks untuk Ethereum
- **viem** - TypeScript interface untuk Ethereum
- **RainbowKit** - Wallet connection UI

### Indexing & API
- **The Graph Protocol** - Decentralized indexing
- **GraphQL** - Query language untuk API

### DevOps & Tools
- **GitHub Actions** - CI/CD pipeline
- **pnpm** - Fast package manager dengan workspace support
- **ESLint & Prettier** - Code linting dan formatting

## 📁 Struktur Proyek

```
eripmav-portfolio/
├── .github/workflows/         # GitHub Actions CI/CD
├── docs/                      # Dokumentasi proyek
├── packages/
│   ├── contracts/             # Smart contracts (Foundry)
│   ├── frontend/              # Next.js DApp
│   └── subgraph/              # The Graph subgraph
├── .gitignore
├── LICENSE
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # pnpm workspace config
└── README.md
```

## 🌐 Deployment

### Smart Contracts
```bash
cd packages/contracts
forge script script/Deploy.s.sol --rpc-url $RPC_URL --broadcast --verify
```

### Frontend
```bash
cd packages/frontend
pnpm build
# Deploy ke Vercel, Netlify, atau platform pilihan
```

### Subgraph
```bash
cd packages/subgraph
graph auth --product hosted-service $ACCESS_TOKEN
graph deploy --product hosted-service username/eripmav-portfolio
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙋‍♂️ Contact

Roy Eripmav - [@username](https://twitter.com/username)

Project Link: [https://github.com/username/eripmav-portfolio](https://github.com/username/eripmav-portfolio)

## 🙏 Acknowledgments

- [Foundry](https://getfoundry.sh/) - Smart contract development
- [Next.js](https://nextjs.org/) - React framework
- [The Graph](https://thegraph.com/) - Indexing protocol
- [wagmi](https://wagmi.sh/) - React hooks untuk Ethereum
- [OpenZeppelin](https://openzeppelin.com/) - Smart contract libraries
