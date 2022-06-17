require('@nomiclabs/hardhat-waffle');
require('dotenv').config({path:"./env"});



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
      url: process.env.REACTAPP_ALCHEMY_API,
      accounts: process.env.REACTAPP_PRIVATE_KEY,
    },
  },
};