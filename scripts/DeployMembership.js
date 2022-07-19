const hre = require("hardhat");
//const ethers = require('hardhat');
//const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

 console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await hre.ethers.getContractFactory("Membership");
  const token = await Token.deploy();

  console.log("Membership Contract address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });