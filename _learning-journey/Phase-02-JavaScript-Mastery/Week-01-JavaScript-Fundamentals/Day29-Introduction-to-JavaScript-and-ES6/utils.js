// File: utils.js
// Purpose: A module containing reusable utility functions.

export const formatAddress = (address) => {
  // Returns a shortened address like "0x123...fABC"
  return `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;
};

export const PI = 3.14159;
