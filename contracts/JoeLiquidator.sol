pragma solidity ^0.8.0;


import './Interfaces/IJoeRouter.sol';
import './Interfaces/IJoetroller.sol';
import './Interfaces/IJToken.sol';
import './Interfaces/IJCollateralCapErc20.sol';
import './Interfaces/IERC3156FlashBorrower.sol';
import './Interfaces/IPriceOracle.sol';
import 'hardhat/console.sol';


contract JoeLiquidator is ERC3156FlashBorrowerInterface{
    address tk;
    address JOE_ROUTER = address(0x60aE616a2155Ee3d9A68541Ba4544862310933d4);
    address JOETROLLER = address(0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC);

    function liquidate(
        address borrowedToken, 
        address collateralToken, 
        address borrower)
        external returns(bool){
            uint256 amount = 0;

            uint256 amountBorrowed = IJToken(borrowedToken).balanceOf(borrower);
            uint256 amountCollateral = IJToken(collateralToken).balanceOf(borrower);

            console.log(amountBorrowed);
            
            bytes memory data =  abi.encode(borrowedToken, collateralToken, borrower);
           // IJCollateralCapErc20(borrowedToken).flashLoan(this, this.address, amount, data);

    }

    function getUnderlyingPrice(address jTokenAddress) external view returns(uint256){
        return IPriceOracle(getOracle()).getUnderlyingPrice(IJToken(jTokenAddress));
    }

    function getJTokenUnderlying(address jTokenAddress) external view returns(address){
        return IJCollateralErc20(jTokenAddress).underlying();
    }
    function onFlashLoan(
        address initiator,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external override returns (bytes32){
        
        // Swap Flashed token for Borrow token
        // Joe Router02 has swapExactTokensForTokens()
        
        //LiquidateBorrow
        //JCollateralCapErc20(token).liquidateBorrow()

        //Swap liquidated Tokens for flash token 

        //return loan with fee 
        
        return bytes32('');
    }

    function swap(address tokenIn, address tokenOut, uint256 amount) internal{
       
        
    }

    function getTokensOut(address tokenIn, address tokenOut)public view returns(uint256[] memory pathOut){
        address[] memory path = new address[](2);
        path[0] = tokenIn;
        //May need to have third path in between the in and out tokens for avax/wavax
        path[1] = tokenOut;
        uint256[] memory amountsOut = IJoeRouter(JOE_ROUTER).getAmountsOut(2, path );
        return amountsOut;
    }

    function getOracle() public view returns (address){
        return IJoetroller(JOETROLLER).oracle();
    }
}