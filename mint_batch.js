const { getWallet } = require('./wallet_config');
const { ethers } = require('ethers');
const fs = require('fs');

// Assumes artifacts are generated in ./artifacts by Hardhat
const CONTRACT_ABI = require('./artifacts/contracts/NFTCollection.sol/NFTCollection.json').abi;

/**
 * Executes the batch mint function on the smart contract.
 */
async function batchMintTokens(recipientAddress, quantity) {
    const { wallet } = getWallet();
    const contractAddress = process.env.CONTRACT_ADDRESS;
    
    const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, wallet);

    console.log(`Minting ${quantity} tokens to ${recipientAddress}...`);

    try {
        const tx = await contract.mintBatch(recipientAddress, quantity, {
            gasLimit: 500000 // Adjust based on quantity
        });
        
        console.log(`Transaction sent: ${tx.hash}`);
        await tx.wait();
        console.log("Batch Mint Confirmed!");
        
    } catch (err) {
        console.error("Minting failed:", err.reason || err);
    }
}

// Example usage: node mint_batch.js
// batchMintTokens("0xRecipientAddress...", 5); 
module.exports = { batchMintTokens };
