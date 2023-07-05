import { ethers, upgrades } from "hardhat";

const FORWARDER_ADDRESS = "0xd8253782c45a12053594b9deB72d8e8aB2Fca54c"

async function main() {
  const CollectibleCollection = await ethers.getContractFactory('CollectibleCollection');
  const collectibleCollection = await upgrades.deployBeacon(CollectibleCollection, { constructorArgs: [FORWARDER_ADDRESS] });
  await collectibleCollection.deployed();
  console.log(collectibleCollection.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
