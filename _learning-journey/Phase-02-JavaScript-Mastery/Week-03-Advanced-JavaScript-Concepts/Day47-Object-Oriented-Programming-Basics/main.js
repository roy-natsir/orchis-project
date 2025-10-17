// =============================================
// 🌐 Day 47 - OOP Basics: Orchis Wallet System
// =============================================

// Blueprint (class)
class Wallet {
  constructor(owner, address, balance = 0) {
    this.owner = owner;
    this.address = address;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error('Insufficient balance');
    this.balance -= amount;
  }

 displayInfo() {
   console.log(`Owner: ${this.owner}`);
   console.log(`Address: ${this.address}`);
   console.log(`Balance: $${this.balance} ORC`);
 }
}

// Instance
const royWallet = new Wallet('Roy', '0xABC123', 100);
royWallet.deposit(150);
royWallet.withdraw(30);
royWallet.displayInfo();
