// mint here membership tokens.

// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/acess/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Minter is ERC721,Ownable{
    using Counters for Counters.Counter;
    using String for uint;

Counters.Counter _ntokens;

constructor() ERC721("Minter","MN"){

}

mapping(address=>uint)minted;

function mint(address recipient, string memory uri ) public returns(uint){ 
    // current state of token ids;

    uint newtoken = _ntokens.current();
    _ntokens.increment();
_mint(recipient,newtoken);
    minted[msg.sender] +=1;
}


}