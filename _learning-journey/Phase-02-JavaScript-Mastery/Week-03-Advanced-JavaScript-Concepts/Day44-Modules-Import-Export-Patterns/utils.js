// =====================================================
// BACKEND & INFRA LAYER - Utility Functions Module
// =====================================================

// Named exports

export function mergeWalletData(...wallets) {
    return wallets.reduce((acc, curr) => ({ ...acc, ...curr}), {});
}

export function logActivity(type, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${type}] ${timestamp}: ${message}`);
}

// Default export (helper object)
export default {
    mergeWalletData,
    logActivity,
};