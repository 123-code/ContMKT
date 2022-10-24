require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./env" });



const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
 

module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url:ALCHEMY_API_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};


/*
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};  
*/
