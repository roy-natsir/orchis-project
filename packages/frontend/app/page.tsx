// =====================================================
// File: packages/frontend/app/page.tsx (DEFINITIVE, COMPLETE & CORRECTED)
// =====================================================

export default function HomePage() {
    return (
        <>
        <header className="site-header">
        <div className="container">
        <a href="#" className="brand-logo" aria-label="Orchis Project Portfolio Homepage">
        Orchis Project Portfolio
        </a>
        <nav className="main-nav" aria-label="main-navigation">
        <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        <div className="header-actions">
        <button
        type="button"
        className="connect-wallet-btn"
        aria-label="Connect your Web3 wallet"
        aria-pressed={false}
        >
        Connect Wallet
        </button>
        </div>
        </div>
        </header>

        <main id="main-content" role="main">
        <section id="hero" className="hero-section" aria-labelledby="hero-heading">
        <div className="container">
        <h1 id="hero-heading">
        Hi, I&apos;m Roy Natsir
        </h1>
        <p className="section-subtitle">
        I build this portfolio to share my path into Web3 development.
        Every step — from learning the basics to building full-stack dApps — is here,
        documented and tested in public.
        </p>
        </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="container">
        <h2 id="about-heading">About Me</h2>
        <p>
        I&apos;m a developer-in-training, focused on becoming a full-stack Web3 engineer.
        This portfolio is not just a showcase — it&apos;s my workspace, where I turn
        new concepts into working features.
        </p>
        <p>
        My learning approach is simple: <strong>learn, then build.</strong>
        By applying every concept directly, I create results that are transparent
        and verifiable on-chain.
        </p>
        </div>
        </section>

        <section id="skills" className="skills-section" aria-labelledby="skills-title">
        <div className="container">
        <h2 id="skills-title">Core Competencies</h2>
        <div className="skills-grid">
        <article className="skill-card">
        <div className="card-header">
        <div className="card-icon">
        <img src="/assets/svg/icon-frontend.svg" alt="Frontend Development" />
        </div>
        <h3>Frontend Architecture</h3>
        </div>
        <p>
        Crafting responsive and accessible user interfaces for Web3,
        UI/UX Principles & Accessibility.
        </p>
        <ul>
        <li><img src="/assets/svg/icon-html5.svg" alt="HTML5 Icon" /> HTML5</li>
        <li><img src="/assets/svg/icon-css3.svg" alt="CSS3 Icon" /> CSS3</li>
        <li><img src="/assets/svg/icon-javascript.svg" alt="JavaScript Icon" /> JavaScript (ES6+)</li>
        <li><img src="/assets/svg/icon-react.svg" alt="React Icon" /> React & Hooks</li>
        <li><img src="/assets/svg/icon-next.svg" alt="Next Icon" /> Next.js</li>
        <li><img src="/assets/svg/icon-typescript.svg" alt="TypeScript Icon" /> TypeScript</li>
        <li><img src="/assets/svg/icon-tailwind.svg" alt="Tailwind Icon" /> Tailwind CSS</li>
        </ul>
        </article>
        <article className="skill-card">
        <div className="card-header">
        <div className="card-icon">
        <img src="/assets/svg/icon-backend.svg" alt="Backend Icon" />
        </div>
        <h3>Backend & Data Layer</h3>
        </div>
        <p>
        Handling server-side logic, decentralized storage, and on-chain
        data indexing.
        </p>
        <ul>
        <li><img src="/assets/svg/icon-node.svg" alt="Node Icon" /> Node.js</li>
        <li><img src="/assets/svg/icon-express.svg" alt="Express Icon" /> Express.js</li>
        <li><img src="/assets/svg/icon-graphql.svg" alt="GraphQL Icon" /> The Graph Protocol (GraphQL)</li>
        <li><img src="/assets/svg/icon-ipfs.svg" alt="IPFS Icon" /> IPFS for Decentralized Storage</li>
        </ul>
        </article>
        <article className="skill-card">
        <div className="card-header">
        <div className="card-icon">
        <img src="/assets/svg/icon-smart-contract.svg" alt="Smart Contract Icon" />
        </div>
        <h3>Smart Contract Engineering</h3>
        </div>
        <p>
        Developing secure, gas-efficient, and audited smart contracts on
        the EVM.
        </p>
        <ul>
        <li><img src="/assets/svg/icon-solidity.svg" alt="Solidity Icon" /> Solidity Language</li>
        <li><img src="/assets/svg/icon-foundry.svg" alt="Foundry Icon" /> Foundry Testing Framework</li>
        <li><img src="/assets/svg/icon-smartcontractsecurity.svg" alt="Security Icon" /> Smart Contract Security & Auditing Principles</li>
        <li><img src="/assets/svg/icon-ercstandards.svg" alt="ERC Icon" /> ERC Standards (ERC-20, ERC-721)</li>
        </ul>
        </article>
        <article className="skill-card">
        <div className="card-header">
        <div className="card-icon">
        <img src="/assets/svg/icon-devops.svg" alt="DevOps Icon" />
        </div>
        <h3>DApp Integration & DevOps</h3>
        </div>
        <p>
        Connecting the full stack and building automated CI/CD pipelines
        for testing and deployment.
            </p>
            <ul>
            <li><img src="/assets/svg/icon-ethers.svg" alt="Ethers Icon" /> Ethers.js</li>
            <li><img src="/assets/svg/icon-testing.svg" alt="Testing Icon" /> Professional Testing (Jest, Playwright)</li>
            <li><img src="/assets/svg/icon-cicd.svg" alt="CICD Icon" /> CI/CD with GitHub Actions</li>
            <li><img src="/assets/svg/icon-layer2.svg" alt="Layer Icon" /> Multi-Chain & Layer 2 Deployment</li>
            </ul>
            </article>
            </div>
            </div>
            </section>

            <section id="projects" className="projects-section" aria-labelledby="projects-heading">
            <div className="container">
            <h2 id="projects-heading">Projects</h2>
            <p className="section-subtitle">
            Selected features and experiments I&apos;ve built as part of the Orchis Portfolio.
            </p>
            <div className="projects-grid">
            <article className="project-card">
            <div className="card-content">
            <h3>Interactive Web3 Frontend</h3>
            <p>
            The clean and responsive user interface for the Orchis
            Portfolio, designed to display all on-chain data
            seamlessly.
            </p>
            <ul className="tech-stack">
            <li className="tech-tag">Next.js</li>
            <li className="tech-tag">TypeScript</li>
            <li className="tech-tag">ethers.js</li>
            </ul>
            </div>
            </article>
            <article className="project-card">
            <div className="card-content">
            <h3>On-Chain CV</h3>
            <p>
            The foundational smart contract of the Orchis Portfolio,
            storing professional data immutably on the blockchain.
            </p>
            <ul className="tech-stack">
            <li className="tech-tag">Solidity</li>
            <li className="tech-tag">Foundry</li>
            </ul>
            </div>
            </article>
            <article className="project-card">
            <div className="card-content">
            <h3>NFT Business Cards</h3>
            <p>
            A key feature of the Orchis Portfolio, allowing visitors to
            mint a unique, on-chain business card as an ERC-721 token.
            </p>
            <ul className="tech-stack">
            <li className="tech-tag">ERC-721</li>
            <li className="tech-tag">IPFS</li>
            </ul>
            </div>
            </article>
            <article className="project-card">
            <div className="card-content">
            <h3>On-Chain Achievements</h3>
            <p>
            An advanced system within the Orchis Portfolio for issuing
            verifiable badges that represent completed skills and
            milestones.
            </p>
            <ul className="tech-stack">
            <li className="tech-tag">Smart Contracts</li>
            <li className="tech-tag">Verification</li>
            </ul>
            </div>
            </article>
            </div>
            </div>
            </section>
            </main>

            <footer id="contact" className="site-footer">
            <div className="container">
            <div className="section-header">
            <h2 id="contact-title">Get In Touch</h2>
            <p className="section-subtitle">
            Let's connect. Find me on the following platforms:
            </p>
            </div>
            <nav className="social-buttons" aria-label="Social Links">
            <a href="https://github.com/roy-natsir" className="social-button github" aria-label="GitHub Profile">
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://x.com/Roy_Natsir" className="social-button x" aria-label="X Profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/roy-natsir/" className="social-button linkedin" aria-label="LinkedIn Profile">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://t.me/orchisproject" className="social-button telegram" aria-label="Telegram Profile">
            <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="https://medium.com/@roynatsir.web3" className="social-button medium" aria-label="Medium Profile">
            <i className="fa-brands fa-medium"></i>
            </a>
            <a href="https://buymeacoffee.com/roynatsir" className="social-button buymeacoffee" aria-label="Buy Me a Coffee">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy Me a Coffee" />
            </a>
            </nav>
            <div className="copyright-info">
            <p>
            &copy; <time dateTime="2025">2025</time> Roy Natsir | Orchis Project Portfolio
            </p>
            </div>
            </div>
            </footer>
            </>
    );
}
