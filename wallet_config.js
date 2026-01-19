const { ethers } = require("ethers");
require("dotenv").config();

/**
 * Configures the Wallet and Provider for on-chain interactions.
 */
function getWallet() {
    if (!process.env.PRIVATE_KEY || !process.env.RPC_URL) {
        throw new Error("Missing Environmental Variables");
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    return { wallet, provider };
}

module.exports = { getWallet };
