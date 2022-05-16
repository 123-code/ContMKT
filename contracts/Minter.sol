// SPDX-License-Identifier: UNLICENSED  
pragma solidity ^ 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Minter is ERC20{
    

constructor()ERC20("mycar","MYC"){
    
}

mapping(address => bool)public bought;
mapping(address=>uint)public balances;

function setcomprado() internal{
bought[msg.sender] = true;
balances[msg.sender] +=1;
}


modifier comprado() {
    require(bought[msg.sender]==true,"No se ha comprado un auto!");
    _;
}



function _mint(address to,uint amount) internal comprado  override(ERC20) {
    super._mint(to,amount);
}

function checkbalance()internal view returns(uint){
return balances[msg.sender];
}


}