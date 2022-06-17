require('@nomiclabs/hardhat-waffle');

require("dotenv").config({ path: ".env" });

const REACTAPP_ALCHEMY_API = process.env.REACTAPP_ALCHEMY_API;
const REACTAPP_PRIVATE_KEY = process.env.REACTAPP_PRIVATE_KEY;


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
      url: REACTAPP_ALCHEMY_API,
      accounts: [REACTAPP_PRIVATE_KEY],
    },
  },
};