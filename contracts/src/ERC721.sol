// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Contract Address: 0xfB1aa025a7b225af55DCC7d9e853C63F0e743E60

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("SmallAssetToken", "STK") {}
    mapping(address=>uint) public tokencount;
    mapping(uint=>address)public tokenids;


event Burned(address indexed owner, uint256 indexed tokenId);

/*

*/
function mint(address _to,string memory TokenURI) external returns(uint){
_tokenIds.increment();
uint newItemID = _tokenIds.current();
_mint(_to,newItemID);
_setTokenURI(newItemID,TokenURI);
tokencount[_to] += 1;
tokenids[newItemID] = msg.sender;
return newItemID;
}

function TransferNFT(uint _tokenID,address _to) external{
    require(msg.sender == tokenids[_tokenID],"You Don't own this NFT");
    transferFrom(msg.sender,_to,_tokenID);
}


function burn(uint _tokenID)external{
_burn(_tokenID);
emit Burned(msg.sender,_tokenID);
}
}