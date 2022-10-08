
const hre = require("hardhat");


async function main() {

  const Coolbandar = await hre.ethers.getContractFactory("Coolbandar");
  const coolbandar = await Coolbandar.deploy();

  await coolbandar.deployed();

  console.log("Coolbandar deployed to:", coolbandar.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });