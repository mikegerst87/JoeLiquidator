import { 
    Contract, 
    ContractFactory 
  } from "ethers"
  import { ethers } from "hardhat"


const main =async(): Promise<any> => {

const Liquidator: ContractFactory = await ethers.getContractFactory('JoeLiquidator');
const liquidator: Contract = await Liquidator.deploy();
const usdc = '0x29472d511808ce925f501d25f9ee9effd2328db2';

await liquidator.deployed();

console.log(`Coin deployed to: ${liquidator.address}`);

const underelyingAddress = await liquidator.getJTokenUnderlying(usdc);

console.log(`Underlying: ${underelyingAddress}`)

const underlyingPrice = await liquidator.getUnderlyingPrice(usdc);

console.log(`Price: ${underlyingPrice/10**18}`);
    
}

  main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})