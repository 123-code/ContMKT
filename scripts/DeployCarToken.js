// deployed to goerli:" 0xa76C690b3d38c51C603c930FF38066A993E4F497"
const hre = require("hardhat");
const ethers = require('hardhat');
async function main() {
    const [deployer] = await hre.ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await hre.ethers.getContractFactory("MyToken");
    const token = await Token.deploy();
  
    console.log("CarToken Contract address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });