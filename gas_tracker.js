const { getWallet } = require('./wallet_config');
const { ethers } = require('ethers');

/**
 * Utility to check gas prices before heavy operations.
 */
async function checkNetworkCongestion() {
    const { provider } = getWallet();
    const feeData = await provider.getFeeData();
    
    const gasPriceGwei = ethers.formatUnits(feeData.gasPrice, 'gwei');
    
    console.log(`Current Gas Price: ${gasPriceGwei} Gwei`);

    if (parseFloat(gasPriceGwei) > 50) {
        console.warn("WARNING: Network is congested. High fees expected.");
        return false;
    }
    
    console.log("Network status: Optimal for batch operations.");
    return true;
}

module.exports = { checkNetworkCongestion };
