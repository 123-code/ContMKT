// SPDX License-Identifier:MIT

pragma solidity ^ 0.8.0;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract Governance is ERC20Votes {
    uint max_supply = 1000000000;

    constructor() ERC20("Car-Token","CRT") ERC20Permit("Governance"){
        // mints one token to whoever can acces the contract.
        _mint(msg.sender,1);
    }
// overrides with our own contract values.
function _afterTokenTransfer(
address from,
address to,
uint amount) internal override(ERC20Votes){
    super._afterTokenTransfer(from,to,amount);
}

function _mint(address to,uint amount)internal override(ERC20Votes){
    super._mint(to,amount);
}

function _burn(address account,uint amount)internal override(ERC20Votes){
    super._burn(account,amount);
}
}