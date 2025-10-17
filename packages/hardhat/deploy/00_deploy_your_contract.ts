import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "20";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // === BatchRegistry deployment commented out for Arbitrum deployment ===
  // Only deploying CheckIn contract - BatchRegistry already exists on Arbitrum
  
  // Check if BatchRegistry exists, if not deploy it
  // let batchRegistry: Contract;
  // try {
  //   batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  //   console.log("\nUsing existing BatchRegistry at:", await batchRegistry.getAddress());
  // } catch (error) {
  //   console.log("\nBatchRegistry not found, deploying new one...");
  //   await deploy("BatchRegistry", {
  //     from: deployer,
  //     // Contract constructor arguments
  //     args: [deployer, BATCH_NUMBER],
  //     log: true,
  //     // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //     // automatically mining the contract deployment transaction. There is no effect on live networks.
  //     autoMine: true,
  //   });
  //
  //   batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  //   console.log("BatchRegistry deployed to:", await batchRegistry.getAddress());
  //   console.log("Remember to update the allow list!\n");
  //
  //   // Transfer BatchRegistry ownership for new deployments
  //   const newOwner = "0x8D2d6d1A115702FDbFd5704D8b626014E3028C23";
  //   console.log(`Transferring BatchRegistry ownership to: ${newOwner}`);
  //   const transferTx = await batchRegistry.transferOwnership(newOwner);
  //   await transferTx.wait();
  //   console.log("BatchRegistry ownership transferred successfully!\n");
  // }

  // Deploy the CheckIn contract
  // TODO: Replace with the actual BatchRegistry address on Arbitrum
  const batchRegistryAddress = "0x23E4943145668C06B55Bbc7cDEEEc6353687305B";
  
  await deploy("CheckIn", {
    from: deployer,
    // Contract constructor arguments: BatchRegistry address and owner address
    args: [batchRegistryAddress, deployer],
    log: true,
    autoMine: true,
  });

  // Get the deployed CheckIn contract
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("CheckIn contract deployed to:", await checkIn.getAddress());
  
  // Transfer CheckIn ownership to the specified address
  const newOwner = "0x8D2d6d1A115702FDbFd5704D8b626014E3028C23";
  console.log(`Transferring CheckIn ownership to: ${newOwner}`);
  const checkInTransferTx = await checkIn.transferOwnership(newOwner);
  await checkInTransferTx.wait();
  console.log("CheckIn ownership transferred successfully!\n");

  // === BatchGraduationNFT info commented out - only available if BatchRegistry is deployed ===
  // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  // const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  // console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry"];
