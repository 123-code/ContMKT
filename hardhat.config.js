require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv').config({path:"./env"});
const key = process.env.REACTAPP_ALCHEMY_API

console.log(key);

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.7',

  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-MrMclaQfq5qC4VWybSbIVVuja__LW1N',
      accounts: process.env.REACTAPP_PRIVATE_KEY,
    },
  },
};