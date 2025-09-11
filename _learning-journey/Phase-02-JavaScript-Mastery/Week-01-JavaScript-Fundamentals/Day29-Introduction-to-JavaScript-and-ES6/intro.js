//File: Introduction to JavaScript and ES6/intro.js

import { formatAddress, PI } from "./utils.js";

console.log("--- Day 29: JS & ES6 Revolution ---");

// 1. Variables & Data Types with Web3 Context
const userAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
let tokenBalance = 12.5;
let isWalletConnected = true;

// 2. Using the imported function with its CORRECT name.
const userInfo = `User: ${formatAddress(userAddress)} | Balance: ${tokenBalance} ETH`;
console.log(userInfo);

// 3. Arrow Functions
const calculateGasFee = (gasPrice, gasLimit) => gasPrice * gasLimit;
const fee = calculateGasFee(20.5, 21000);
console.log(`Estimated Gas Fee: ${fee} Gwei`);

// 4. Destructuring
const transaction = {
  hash: "0xabc...def",
  from: userAddress,
  to: "0x987...xyz",
  value: "1.0 ETH",
};
const { hash, value } = transaction;
console.log(`Transaction Hash: ${hash}, Value: ${value}`);

// 5. Using the other imported variable.
console.log(`Value of PI from utils.js: ${PI}`);

console.log("--- Lesson Complete ---");
