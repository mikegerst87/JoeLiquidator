const {createClient} = require('@urql/core');
const {fetch} = require('isomorphic-unfetch');

const APIURL = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending'
interface Token {
    id: String,
    symbol: String
}

interface Account{
    id: String,
    health: number,
    totalBorrowValueInUSD: number,
    totalCollateralValueInUSD: number
    Tokens: Token[]
}

const query = `
query {
    accounts(where: {health_gt: 0, health_lt: 1, totalBorrowValueInUSD_gt: 0}) {
      id
      health
      totalBorrowValueInUSD
      totalCollateralValueInUSD
      tokens{
          id
          symbol
          market{
              id
          }
      }
    }
  }
`
const client = createClient({
    url: APIURL
})


const main = async() =>{
    
    
        getData();
    
    
   
}

async function getData(){
    const data = await client.query(query).toPromise();
    let i = 1;
    
    for(let a in data.data.accounts){
        console.log(a)
    }
}

main();