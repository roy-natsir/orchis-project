// =======================================
// 🧩 Challenge - Orchis Portfolio Analyzer
// =======================================

class Wallet {
  constructor(owner, address, balance = 0) {
    this.owner = owner;
    this.address = address;
    this.balance = balance;
  }
}

class Portfolio {
  constructor() {
    this.wallets = [];
  }

  addWallet(wallet) {
    this.wallets.push(wallet);
  }

  getTotalBalance() {
    return this.wallets.reduce((sum, w) => sum + w.balance, 0);
  }

  displayReport() {
    console.log('Portfolio Summary:');
    console.log('-------------------');
    console.log(`Total Wallets: ${this.wallets.length}`);
    console.log(`Total Balance: ${this.getTotalBalance()} ORC`);
    console.table(this.wallets.map(w => ({
      Owner: w.owner,
      Address: w.address,
      Balance: w.balance
    })));
  }
}

// Example Usage
const orchisPortfolio = new Portfolio();
orchisPortfolio.addWallet(new Wallet('ROY', '0xABC123...', 1500));
orchisPortfolio.addWallet(new Wallet('Dev', '0xDEF456...', 2500));
orchisPortfolio.addWallet(new Wallet('Tester', '0xGHI789...', 1000));

orchisPortfolio.displayReport();
