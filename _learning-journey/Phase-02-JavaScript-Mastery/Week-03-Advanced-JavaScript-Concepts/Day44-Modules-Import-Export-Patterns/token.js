// =====================================================
// SMART CONTRACT LAYER - Token Operations Module
// =====================================================

// Named export
export function transferToken(from, to, amount, token) {
    console.log(`🔁 Transfer: ${amount} ${token} from ${from} → ${to}`);
}

export function getTokenBalance(wallet, token) {
    //Dummy token balances (simulation)
    const balances = {
        MATIC: 2500,
        ORC: 500,
        USDC: 1200,
    };
    return balances[token] || 0;
}