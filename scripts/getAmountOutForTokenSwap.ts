import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {
  const Liquidator: ContractFactory = await ethers.getContractFactory("JoeLiquidator")
  const liquidator: Contract = await Liquidator.deploy()

  await liquidator.deployed()
  console.log(`Coin deployed to: ${liquidator.address}`)

 const amount = await liquidator.getTokensOut("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed");
  console.log(`Tokens Returned: ${amount}`);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
