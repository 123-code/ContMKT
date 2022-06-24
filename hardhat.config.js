require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const REACTAPP_ALCHEMY_API = process.env.ALCHEMY_API_URL;
const REACTAPP_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url:ALCHEMY_API_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};