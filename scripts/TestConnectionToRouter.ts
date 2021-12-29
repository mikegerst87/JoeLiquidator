import { 
  BigNumber,
  Contract
} from "ethers"
import { ethers } from "hardhat"

const contractName: string = "JoeRouter"
const contractAddress: string = "0x60ae616a2155ee3d9a68541ba4544862310933d4"

const main = async(): Promise<any> => {
  const path = ['0xce095a9657a02025081e0607c8d8b081c76a75ea','0x8b650e26404ac6837539ca96812f0123601e4448']
  const contract: Contract = await ethers.getContractAt(contractName, contractAddress)
  const num: BigInt[] = await contract.getAmountsOut(50, path)
  console.log(`Number: ${num.toString()}`)
  const tx = await contract.store(507)
  console.log(tx)
}

main()