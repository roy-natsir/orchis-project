// =====================================================
// Day 43 - ES6 Features: Destructuring, Spread & Rest
// =====================================================
console.log("--- Day 43: ES6 Destructuring, Spread and Rest ---");

/* =====================================================
  Frontend Layer - Wallet & Token Dashboard
  ------------------------------------------------------
  Destructuring object from provider / wallet response
  ====================================================== */
const userWallet = {
  address: "0xROY123",
  network: "Polygon",
  tokens: { MATIC: 2500, ORC: 500 },
};

//Object & Nested destructuring
const {
  address,
  network,
  tokens: { MATIC, ORC },
} = userWallet;
console.log(`Connected Wallet: ${address} (${network})`);
console.log(`Token Balances > MATIC: ${MATIC}, ORC: ${ORC}`);

/* =============================================================
Backend Layer - Merging Data from Multiple Sources
----------------------------------------------------------------
Spread used for combining query results.
=============================================================== */
const ethWallet = { ETH: 1.5 };
const bscWallet = { BNB: 5.2 };
const polyWallet = { MATIC: 2500, ORC: 500 };
const mergedWallet = { ...ethWallet, ...bscWallet, ...polyWallet };
console.log("Merged Multichain Wallet:", mergedWallet);

//Rest use for logging variable number of tokens
function logBalances(owner, ...balances) {
  console.log(`Balances for ${owner}:`, balances.join(" | "));
}
logBalances("Roy", 1.5, 5.2, 2500, 500);

/* ==============================================================
   Smart Contract Layer - Event log Parsing
   --------------------------------------------------------------
   Destructuring used on event result from blockchain
   ============================================================= */
const transferEvent = {
  from: "0xAAA",
  to: "0xBBB",
  value: 100,
  token: "ORC",
};
const { from, to, value, token } = transferEvent;
console.log(`Transfer Event > ${value} ${token} from ${from} > ${to}`);

/* ===========================================================
   Security / Audit Layer - Dynamic Blacklist Validator
   ----------------------------------------------------------
   Rest parameter handles many parameters at once
   =========================================================== */
function checkBlacklist(...address) {
  const blacklist = ["0xBAD1", "0xBAD2"];
  address.forEach((addr) =>
    blacklist.includes(addr)
      ? console.warn(`🚫 Blocked: ${addr}`)
      : console.log(`✅ Safe: ${addr}`)
  );
}
checkBlacklist("0xAAA", "0xBAD1", "0xCCC");

/* =========================================================
   Infrastructure layer - API payload management
   -----------------------------------------------------------
   Spread + destructuring for transport data between nodes
   ========================================================== */
const apiPayload = {
  user: "0xROY123",
  chain: "Polygon",
  balance: 2500,
};
const enrichedPayload = {
  ...apiPayload,
  timestamp: new Date().toISOString(),
  syncStatus: "synced",
};
const { user, balance, syncStatus } = enrichedPayload;
console.log(
  `API Payload > ${user} | Balance: ${balance} | Status: ${syncStatus}`
);

/* =========================================================
   Orchis Project Simulation
   ------------------------------------------------------------
   Combining all concepts for a multichain portfolio system
   ========================================================== */
const orchisWallet = [
  { chain: "Ethereum", balance: 2.5 },
  { chain: "Polygon", balance: 1800 },
  { chain: "BSC", balance: 5 },
];

const [eth, poly, ...restChains] = orchisWallet;
console.log("Primary Chains:", eth, poly);
console.log("Other Chains:", restChains);

// Merge tokens list use spread
const updatedTokens = { ...mergedWallet, USDC: 2000 };
console.log("Update Token Portfolio:", updatedTokens);

// Use rest for count total balance across chains
function calcTotal(...balances) {
  return balances.reduce((a, b) => a + b, 0);
}
console.log(
  "Total multichain balance:",
  calcTotal(eth.balance, poly.balance, ...restChains.map((c) => c.balance))
);

console.log("--- End of Day 43 ---");
