require("@nomiclabs/hardhat-waffle");
//require("dotenv").config({ path: "./env" });



const REACTAPP_ALCHEMY_API = process.env.REACTAPP_ALCHEMY_API;
const REACTAPP_PRIVATE_KEY = process.env.REACTAPP_PRIVATE_KEY;
 

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url:REACTAPP_ALCHEMY_API,
      accounts: [REACTAPP_PRIVATE_KEY],
    },
  },
};