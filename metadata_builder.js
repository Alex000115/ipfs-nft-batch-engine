const fs = require('fs-extra');
const path = require('path');

/**
 * Generates OpenSea compatible JSON metadata.
 */
function createMetadata(id, ipfsHash, traits = []) {
    return {
        name: `Genesis Collection #${id}`,
        description: "A procedurally generated item in the batch engine.",
        image: `ipfs://${ipfsHash}`,
        attributes: traits, // Array of { trait_type, value }
        compiler: "IPFS Batch Engine"
    };
}

async function saveMetadata(id, data) {
    // Saves to root folder for simplicity
    const fileName = `${id}.json`;
    await fs.writeJson(fileName, data);
    console.log(`Generated Metadata: ${fileName}`);
}

module.exports = { createMetadata, saveMetadata };
