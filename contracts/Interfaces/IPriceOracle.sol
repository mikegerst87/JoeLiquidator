// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "./IJToken.sol";

interface IPriceOracle {
    
    function getUnderlyingPrice(IJToken jToken) external view returns (uint256);
}