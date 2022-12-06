require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });



const POLYGON_MUMBAI_URL = process.env.POLYGON_MUMBAI_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
 

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
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
