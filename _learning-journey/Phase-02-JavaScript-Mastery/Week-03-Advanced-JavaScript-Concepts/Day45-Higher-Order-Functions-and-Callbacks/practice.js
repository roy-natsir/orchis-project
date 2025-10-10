// =====================================================
// Day 45 - Higher-Order Functions & Callbacks (Integration)
// =====================================================

console.log("🚀 Starting Day 45 Practice: HOFs & Callbacks in Web3 Simulation");

/* =====================================================
   FRONTEND LAYER - Wallet Connection
===================================================== */
function connectWallet(callback) {
  console.log("🔌 Connecting to Wallet...");
  setTimeout(() => {
    const wallet = { address: "0xROY123", chain: "Polygon" };
    console.log(`👛 Wallet connected: ${wallet.address} (${wallet.chain})`);
    callback(wallet);
  }, 1000);
}

/* =====================================================
   BACKEND LAYER - Transaction Processor
===================================================== */
function processTransaction(tx, callback) {
  console.log(`💸 Processing transaction ${tx.id}...`);
  setTimeout(() => {
    tx.status = "confirmed";
    tx.timestamp = new Date().toISOString();
    console.log(`✅ Transaction confirmed: ${tx.id}`);
    callback(tx);
  }, 1500);
}

/* =====================================================
   SMART CONTRACT LAYER - Event Listener
===================================================== */
function createEventListener(eventName) {
  return (callback) => {
    console.log(`🔔 Subscribing to event: ${eventName}`);
    setTimeout(() => {
      const eventData = {
        type: eventName,
        from: "xAAA",
        to: "0xBBB",
        value: 250,
      };
      callback(eventData);
    }, 2000);
  };
}

/* =====================================================
   SECURITY LAYER - Address Validator
===================================================== */
function validateAddresses(addresses, callback) {
  const blacklist = ["0xBAD1", "0xBAD2"];
  addresses.forEach((addr) => {
    setTimeout(() => {
      const isBlocked = blacklist.includes(addr);
      callback(addr, isBlocked);
    }, 500);
  });
}

/* =====================================================
   INFRASTRUCTURE LAYER - RPC/API Simulation
===================================================== */
function fetchRPCData(chain, callback) {
  console.log(`🌐 Fetching on-chain data from ${chain} node...`);
  setTimeout(() => {
    const data = {
      chain,
      block: Math.floor(Math.random() * 10000000),
      validators: 27,
      health: "ok",
    };
    callback(data);
  }, 1200);
}

/* =====================================================
   ORCHIS PROJECT SIMULATION - Multi-Layer Orchestration
===================================================== */
function orchisWeb3Flow() {
  connectWallet((wallet) => {
    fetchRPCData(wallet.chain, (rpcData) => {
      console.log(
        `📡 Node status ➡️ ${rpcData.health} (block #${rpcData.block})`
      );

      processTransaction(
        { id: "TX001", from: wallet.address, to: "0xAAA", amount: 500 },
        (tx) => {
          console.log(`📦 TX ${tx.id} completed at ${tx.timestamp}`);

          createEventListener("Transfer")((event) => {
            console.log(
              `📊 ${event.value} tokens from ${event.from} ➡️ ${event.to}`
            );

            validateAddresses(
              [wallet.address, event.from, event.to],
              (addr, blocked) => {
                if (blocked)
                  console.warn(`🚫 Blacklisted address detected: ${addr}`);
                else console.log(`✅ Address ${addr} is safe`);
              }
            );

            console.log("🧩 Orchis Web3 Simulation Completed ✅");
          });
        }
      );
    });
  });
}

// Run Simulation
orchisWeb3Flow();

console.log("🧠 End of Day 45 Integration Practice");
