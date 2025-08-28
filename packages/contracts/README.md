Smart Contracts

The core smart contract logic for the Orchis Portfolio is built using the Foundry framework. This package is located in packages/contracts/.
Contracts

    ProfessionalCV.sol: Manages the on-chain storage of professional data, including work experience, skills, and educational background.

    NFTBusinessCard.sol: An ERC-721 compliant contract that handles the logic for minting, managing, and storing metadata for the professional NFT business cards.

Setup & Testing

To set up the development environment, install dependencies, build the contracts, and run the test suite, execute the following commands from the /packages/contracts directory.

# Navigate to the contracts package

cd packages/contracts

# Install required libraries/dependencies (e.g., OpenZeppelin)

forge install

# Compile the smart contracts

forge build

# Run the full test suite

forge test

Deployment

Deployment is handled via Foundry scripts. Before deploying, i ensure have a .env file in the packages/contracts directory with my PRIVATE_KEY and the target network's RPC_URL.

# Example command for deploying to a testnet

# The script reads environment variables for RPC_URL and PRIVATE_KEY.

forge script script/Deploy.s.sol --rpc-url $RPC_URL --broadcast --verify -vvvv

    --broadcast: Broadcasts the transaction to the network.

    --verify: Automatically verifies the contract on Etherscan (or equivalent block explorer).

    -vvvv: Increases verbosity for detailed deployment logs.
