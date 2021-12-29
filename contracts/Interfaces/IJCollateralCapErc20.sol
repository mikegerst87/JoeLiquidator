pragma solidity ^0.8.0;

import './IERC3156FlashBorrower.sol';
import './JTokenInterface.sol';

interface IJCollateralErc20 {
    function underlying() external view returns (address);
    
     function liquidateBorrow(
        address borrower,
        uint256 repayAmount,
        JTokenInterface jTokenCollateral
    ) external returns (uint256);
 
    function flashLoan(
        ERC3156FlashBorrowerInterface receiver,
        address initiator,
        uint256 amount,
        bytes calldata data
    ) external returns (bool);
}