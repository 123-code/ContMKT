const { ethers } = require("hardhat");
async function Main(){
    
    const CF = await ethers.getContractFactory("Minter");
    const deployed = await CF.deploy();

    const contractaddress = deployed.address;
    console.info(`contract address: ${contractaddress}`);

}

Main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });