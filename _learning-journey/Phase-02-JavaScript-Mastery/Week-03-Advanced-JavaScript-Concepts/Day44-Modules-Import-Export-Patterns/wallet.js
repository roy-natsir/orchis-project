// =====================================================
// FRONTEND LAYER - Wallet Management Module
// =====================================================

// Named export for function

export function connectWallet(address, network) {
    return {
        address,
        network,
        connected: true,
    };
}

// Default export for one main function

export default function displayWallet(wallet) {
    console.log(`👛 Connected Wallet: ${wallet.address} (${wallet.network})`);
}