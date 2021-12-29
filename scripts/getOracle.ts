import { 
    Contract, 
    ContractFactory 
  } from "ethers"
  import { ethers } from "hardhat"


const main =async(): Promise<any> => {

const Liquidator: ContractFactory = await ethers.getContractFactory('JoeLiquidator');
const liquidator: Contract = await Liquidator.deploy();

await liquidator.deployed();

console.log(`Coin deployed to: ${liquidator.address}`);

const markets = await liquidator.getLendingMarkets();

console.log(`Markets: ${markets}`)
    
}







  main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})