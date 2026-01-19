const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();

/**
 * Handles interaction with Pinata IPFS API.
 */
async function pinFileToIPFS(filePath) {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', fs.createReadStream(filePath));

    try {
        const res = await axios.post(url, data, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                'pinata_api_key': process.env.PINATA_API_KEY,
                'pinata_secret_api_key': process.env.PINATA_SECRET_KEY
            }
        });
        return res.data.IpfsHash;
    } catch (error) {
        console.error("IPFS Upload Error:", error);
        return null;
    }
}

module.exports = { pinFileToIPFS };
