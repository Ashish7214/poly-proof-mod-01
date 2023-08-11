# Recipe NFT Contract

**Recipe** is an Ethereum-based NFT (Non-Fungible Token) contract that allows users to mint limited edition recipe-themed NFTs. Each NFT represents a unique recipe and comes with its own prompt description. The contract is built upon the ERC721A standard and offers additional features to enhance the NFT experience.

## Features

- **Limited Quantity**: Only a maximum of 5 NFTs can be minted through this contract.

- **Customizable Base URL**: The NFTs are hosted on IPFS, and the base URL for the NFT metadata can be customized. The base URL is: `"https://gateway.pinata.cloud/ipfs/QmetRgPxaScdAnXn5uQwrqyd74wR5fe1DiocrGkYWBZcru/"`.

- **Owner Privileges**: The contract includes a modifier that restricts certain functions to be executed only by the contract owner.

- **Minting Function**: The owner can mint new NFTs using the `mint` function, which mints a specified quantity of NFTs.

- **Prompt Description**: Each NFT comes with a prompt description that is visible to users. The default prompt is: `"Enjoy the Taste"`.

## Getting Started

1. Install a compatible Ethereum wallet like MetaMask.
2. Connect your wallet to the Ethereum network where the contract is deployed.
3. Visit the contract's address to interact with it on a dApp interface.

## Contract Details

- **Name**: Recipe
- **Symbol**: RP
- **Total Supply**: Maximum of 5 NFTs
- **Owner**: The creator of the contract
- **Base URL**: `"https://gateway.pinata.cloud/ipfs/QmetRgPxaScdAnXn5uQwrqyd74wR5fe1DiocrGkYWBZcru/"`

## Functions

- `mint(uint256 quantity)`: Mint new NFTs. Only the owner can use this function. Supply the desired quantity of NFTs to mint.

- `promptDescription()`: View the prompt description associated with the NFTs.

## Modifiers

- `onlyOwner()`: Ensures that a function can only be executed by the contract owner.

## Metadata

The metadata for each NFT is stored on IPFS, and the base URL for the metadata is customizable. The metadata includes details about each NFT, such as its image, name, description, and attributes.

