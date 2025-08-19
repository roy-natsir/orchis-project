# Orchis Portfolio: My On-Chain Professional Portfolio

Welcome to the repository for my main portfolio project. I am building this **On-Chain Professional Portfolio** in parallel with my comprehensive Full Stack Web3 developer roadmap.

This project is my way of applying every concept I learn—from frontend fundamentals to advanced smart contract engineering—into a single, tangible showcase. It's not just a project; it's the living record of my journey as a developer.

---

## 🎯 My Project Goal

My goal is to build my professional portfolio directly on-chain. This will serve as a verifiable, immutable record of my skills, experience, and completed projects.

Instead of just listing my skills on a traditional CV, I'm building a platform to **demonstrate** them. This project is designed to be my unique "digital CV" and a practical showcase of my abilities for recruiters, technical interviewers, and the Web3 community.

---

## 🚀 Live Demo & Status

*   **Live Demo:** [orchis-portfolio.vercel.app](https://orchis-project.vercel.app/) *(This will be the live URL after deployment)*
*   **CI/CD Pipeline Status:** ![CI]([[https://github.com/royweb3dev/orchis-portfolio](https://github.com/roy-natsir/orchis-project)](https://github.com/roy-natsir/orchis-project)/actions/workflows/ci.yml/badge.svg)

---

## 🏗️ Architecture Overview

This project utilizes a **monorepo** architecture managed with `pnpm workspaces`. This keeps the code organized and allows for better management of the different parts of the application.

The three core components are:

1.  **`packages/contracts/`**: Contains all the Solidity smart contracts. This is where the on-chain logic lives. It's developed and tested with Foundry.
2.  **`packages/frontend/`**: The user-facing DApp. It's a Next.js 14 application that allows users (and myself) to interact with the smart contracts.
3.  **`packages/subgraph/`**: The data indexing layer. This uses The Graph Protocol to efficiently query data from the blockchain, ensuring the frontend is fast and responsive.

---

## 🛠️ My Tech Stack

My tech stack for this project evolves as I progress through my learning roadmap.

*   **Smart Contracts:** Solidity, Foundry, OpenZeppelin Contracts
*   **Frontend:** Next.js, TypeScript, Tailwind CSS, ethers.js, wagmi, viem, RainbowKit
*   **Data Indexing:** The Graph Protocol, GraphQL, AssemblyScript
*   **DevOps & Tooling:** GitHub Actions (CI/CD), pnpm, Git

---

## ⚡ Core Features (Developed in Stages)

I'm developing the features in incremental stages to ensure a sustainable pace and high-quality outcome.

### **Stage 1: Foundational MVP**
1.  **A Professional Portfolio Website:** An 'About Me' section, skills showcase, and a project gallery (initially with static data).
2.  **Initial Web3 Integration:** Wallet connection functionality and display of the connected wallet address and ENS name.

### **Stage 2: On-Chain Functionality**
3.  **The Smart Contract CV:** An on-chain data structure for my professional experience and skills, with owner-only functions to add or update information.
4.  **NFT Business Cards:** A mintable ERC-721 token representing my professional business card, with dynamic metadata from IPFS.

### **Stage 3: Professional & Advanced Features**
5.  **An On-Chain Achievement System:** A system for linking on-chain badges for completed courses or verified skills.
6.  **Multi-Chain Support:** Contracts deployed to multiple testnets (e.g., Ethereum Sepolia, Arbitrum Sepolia), with a network switching UI on the frontend.

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   pnpm (v8 or later)
*   Foundry
*   Git

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/royweb3dev/orchis-portfolio.git](https://github.com/roy-natsir/orchis-project)
    cd orchis-project
    ```

2.  **Install all dependencies from the root directory:**
    ```bash
    pnpm install
    ```

3.  **Set up the smart contracts:**
    *   Navigate to the contracts package: `cd packages/contracts`
    *   Install Foundry libraries: `forge install`
    *   Build the contracts: `forge build`
    *   Run the tests: `forge test`

4.  **Run the frontend development server:**
    *   Navigate to the frontend package: `cd packages/frontend`
    *   Start the server: `pnpm dev`
    *   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 My Development Philosophy: A Learn-in-Public Journey

My development philosophy for this project is **"learn and apply immediately."** I am building features in parallel with my learning roadmap to ensure every theoretical concept is reinforced with practical application. This is a living project that documents my growth.

*   **Phase 1: Foundation (Parallel with Roadmap Phases 1-2)**
    *   I built the static portfolio website while mastering HTML/CSS/JS. I established my Git workflow and deployed the first version to Vercel.

*   **Phase 2: React Integration (Parallel with Roadmap Phases 3-4)**
    *   I migrated the static site to a Next.js & TypeScript application and implemented my first frontend tests.

*   **Phase 3: Web3 Integration (Parallel with Roadmap Phases 5-7)**
    *   I integrated wallet connection and IPFS for metadata and practiced reading basic data from the blockchain.

*   **Phase 4: Smart Contracts (Parallel with Roadmap Phases 8-9)**
    *   I wrote and rigorously tested the `ProfessionalCV` smart contract with Foundry, deploying it to a testnet and connecting it to the frontend.

*   **Phase 5: Advanced Features (Parallel with Roadmap Phases 10-11)**
    *   I will implement multi-chain deployment, set up a full CI/CD pipeline with GitHub Actions, and conduct final performance optimizations.

---

## 🎯 Why I Chose This Project

*   **Achievable Scope:** The project has a clear focus on my personal portfolio, which keeps the scope controlled and ensures I can finish it.
*   **Unique Differentiator:** An interactive, on-chain portfolio stands out significantly from standard static websites, demonstrating a native Web3 mindset.
*   **Comprehensive Skill Showcase:** Successfully completing this project will be tangible proof of my full-stack capabilities, from UI design and smart contract security to DevOps automation.
*   **Practical Learning Tool:** Every concept from my learning roadmap is immediately applied to a real-world feature, reinforcing my knowledge and providing context.

---

## 🤝 Contributing

This is primarily a personal project, but I welcome bug reports, discussions, and learning-oriented PRs.

---

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.
