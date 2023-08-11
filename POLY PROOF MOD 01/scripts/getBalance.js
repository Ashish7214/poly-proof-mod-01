const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Recipe.sol/Recipe.json");

const tokenAddress = "0x5a7A0257489d343A83Fd7fe195B8D90b3a656e9D"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xeB85a13cC834088f1253B11848E75328e1F4b4D8"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });