const main = async()=>{
const Deployer = await hre.ethers.getSigner();
const Balance = await Deployer.getBalance();


console.info(`Contract Deployer: ${Deployer.address}`);
console.info(`Balance: ${Balance.toString()}`);

const TokensContractFctory = await hre.ethers.getContractFactory("Tokens");
const TokensContract = await TokensContractFctory.deploy();
await TokensContract.deployed();
}


const RunMain = async()=>{
    try{
        await main();
        process.exit(0);
    }catch(err){
        console.error(err);
        process.exit(1);
    }

}

RunMain();