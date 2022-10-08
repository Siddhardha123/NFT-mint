require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan')
const dotenv = require('dotenv')
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url: process.env.REACT_APP_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan:{
    apiKey: process.env.REACT_APP_ETHERSCAN
  },
};
