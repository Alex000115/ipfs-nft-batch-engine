const { ethers } = require("hardhat");

/**
 * Deployment script for Hardhat.
 */
async function main() {
  console.log("Starting deployment...");

  const baseURI = "ipfs://QmYourBaseHashHere/";
  const NFTCollection = await ethers.getContractFactory("NFTCollection");
  
  // Deploying with arguments: Name, Symbol, BaseURI
  const contract = await NFTCollection.deploy("CryptoBatch", "CBX", baseURI);

  await contract.waitForDeployment();

  console.log(`Contract deployed to: ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
