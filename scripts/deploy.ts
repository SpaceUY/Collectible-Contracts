import { ethers, upgrades } from "hardhat";

const FORWARDER_ADDRESS = ""

async function main() {
  const CollectibleCollection = await ethers.getContractFactory('CollectibleCollection');
  const collectibleCollection = await upgrades.deployBeacon(CollectibleCollection, [FORWARDER_ADDRESS]);
  await collectibleCollection.deployed();
  console.log(collectibleCollection.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
