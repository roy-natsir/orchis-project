// =====================================================
// ORCHIS PROJECT SIMULATION - Modular Integration
// =====================================================

//Import from wallet.js
import displayWallet, { connectWallet } from "./wallet.js";

// Import both named + default from utils.js
import utils, { mergeWalletData, logActivity } from "./utils.js";
import { getTokenBalance, transferToken } from "./token.js";

// -----------------------------------------------------
// 1. Connect user wallet (frontend)
// -----------------------------------------------------
const wallet = connectWallet("0xROY123", "Polygon");
displayWallet(wallet);

// -----------------------------------------------------
// 2. Get token balances (smart contract simulation)
// -----------------------------------------------------
const maticBalance = getTokenBalance(wallet, "MATIC");
const orcBalance = getTokenBalance(wallet, "ORC");

logActivity("INFO", `Fetched balances: MATIC=${maticBalance}, ORC=${orcBalance}`);

// -----------------------------------------------------
// 3. Merge multiple wallets (backend simulation)
// -----------------------------------------------------
const ethWallet = { ETH: 1.5 };
const bscWallet = { BNB: 5.2};
const polyWallet = { MATIC: maticBalance, ORC: orcBalance };
const merged = mergeWalletData(ethWallet, bscWallet, polyWallet);

console.log("🧩 Merged Wallet Data:", merged);

// -----------------------------------------------------
// 4. Simulate token transfer event
// -----------------------------------------------------
transferToken(wallet.address, "0xBBB", 100, "ORC");
logActivity("EVENT", "Token transfer complete successfully!");

// -----------------------------------------------------
// 5. Using default utils object
// -----------------------------------------------------
utils.logActivity("SYSTEM", "Orchis Web3 Modular Simulation finished.");