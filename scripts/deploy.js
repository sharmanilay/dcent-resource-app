// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  /**
   * If this script is run directly using `node` you may want to call compile
   * manually to make sure everything is complied
   * await hre.run('compile');
   * we get the contract to deploy
   */
  const ResourceShare = await hre.ethers.getContractFactory("ResourceShare");
  const resourceshare = await ResourceShare.deploy();
  await resourceshare.deployed();
  console.log("resourceshare deployed to:", resourceshare.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1)
})
