// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("SmallAssetToken", "STK") {}
    mapping(address=>uint) public tokencount;

// setprice 


// transferAssetOwnership

event Burned(address indexed owner, uint256 indexed tokenId);

function mint(address _to,string memory TokenURI) external returns(uint){
_tokenIds.increment();
uint newItemID = _tokenIds.current();
_mint(_to,newItemID);
_setTokenURI(newItemID,TokenURI);
tokencount[_to] += 1;
return newItemID;
}
function burn(uint _tokenID)external{
_burn(_tokenID);
emit Burned(msg.sender,_tokenID);
}
}