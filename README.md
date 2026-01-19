# IPFS NFT Batch Engine

![License](https://img.shields.io/badge/license-MIT-green)
![Solidity](https://img.shields.io/badge/solidity-^0.8.19-blue)
![Status](https://img.shields.io/badge/status-active-success)

## Overview

**IPFS NFT Batch Engine** is a backend utility designed for NFT projects that require high-volume asset management. Unlike standard minters, this engine decouples the metadata generation process from the on-chain interaction, allowing for verified IPFS pinning before any gas fees are paid.

## Features

- **Automated IPFS Pinning**: Integrates with Pinata/Infura for reliable decentralized storage.
- **Dynamic Metadata**: Generates JSON metadata compliant with OpenSea/Blur standards.
- **Batch Minting**: Utilizes optimized loops for multiple token minting in a single transaction.
- **Gas Tracker**: Monitors EIP-1559 gas fees to execute transactions only when network congestion is low.

## Prerequisites

- Node.js v16+
- An Ethereum Wallet (Private Key)
- Infura/Alchemy RPC URL
- Pinata API Keys (for IPFS)

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Rename `.env.example` to `.env` and fill in credentials.
4. Place raw images in the root directory.

## Usage

```bash
# 1. Upload images and generate JSON
node upload_assets.js

# 2. Deploy Contract
npx hardhat run deploy.js --network goerli

# 3. Batch Mint
node mint_batch.js
