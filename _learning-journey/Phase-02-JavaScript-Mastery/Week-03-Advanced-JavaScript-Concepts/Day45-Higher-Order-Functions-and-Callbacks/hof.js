// =====================================================
// Day 45 - Higher-Order Functions & Callbacks (Foundation)
// =====================================================
console.log("--- Day 45: Higher-Order-Functions & Callbacks ---");

/* =====================================================
   FRONTEND LAYER - Wallet Action Handler
===================================================== */
function onWalletConnected(address) {
  console.log(`👛 Wallet connected: ${address}`);
}

function connectWallet(callback) {
  const mockAddress = "0xROY123";
  console.log("🔌 Connecting wallet...");
  setTimeout(() => {
    callback(mockAddress);
  }, 1000);
}

connectWallet(onWalletConnected);

/* =====================================================
   BACKEND LAYER - Transaction Processor
===================================================== */
function progressTransaction(tx, callback) {
  console.log(`💸 Processing transaction ${tx.id}...`);
  setTimeout(() => {
    tx.status = "confirmed";
    callback(tx);
  }, 1500);
}

const transaction = { id: "TX001", from: "0xROY123", to: "0xAAA", amount: 250 };
progressTransaction(transaction, (tx) => {
  console.log(`✅ Transaction ${tx.id} status: ${tx.status}`);
});

/* =======================================================
   SMART CONTRACT LAYER - Event Listener Simulation
   ======================================================= */
function createEventListener(eventName) {
  return (callback) => {
    console.log(`🔔 Listening to ${eventName} events...`);
    setTimeout(() => {
      const mockEvent = {
        type: eventName,
        from: "0xAAA",
        to: "0xBBB",
        value: 100,
      };
      callback(mockEvent);
    }, 2000);
  };
}

const transferListener = createEventListener("Transfer");
transferListener((e) =>
  console.log(`📡 Event detected: ${e.value} tokens from ${e.from} → ${e.to}`)
);

/* ===============================================================
    SECURTY LAYER - Blacklist Validator (HOF + Callback)
    =============================================================== */
function validateAddresses(addresses, validatorCallback) {
  addresses.forEach((addr) => {
    setTimeout(() => {
      validatorCallback(addr);
    }, 500);
  });
}

const blacklist = ["0xBAD1", "0xBAD2"];
validateAddresses(["0xAAA", "0xBAD2", "0xCCC"], (addr) => {
  blacklist.includes(addr)
    ? console.warn(`🚫 Blocked: ${addr}`)
    : console.log(`✅ Safe: ${addr}`);
});

/* ==============================================================
       INFRASTUCTURE LAYER -API Simulation
       ============================================================= */
function fetchDataFromChain(apiURL, callback) {
  console.log(`🌐 Fetching data from ${apiURL}...`);
  setTimeout(() => {
    const data = { chain: "Polygon", status: "active" };
    callback(data);
  }, 1000);
}

fetchDataFromChain("htps://api.orchis.dev/v1/status", (data) =>
  console.log(`✅ API Reponse: ${data.chain} (${data.status})`)
);

console.log("---End of HOF---");
