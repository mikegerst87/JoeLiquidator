pragma solidity ^0.8.0;

import './IJToken.sol';

interface IJoetroller{

    function oracle() external view returns (address);
}