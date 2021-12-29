pragma solidity ^0.8.2;

import '@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol';

contract JoeLiqProxy is ERC1967Proxy {
    constructor(address logic, bytes memory data) ERC1967Proxy(logic, data){}
    
}