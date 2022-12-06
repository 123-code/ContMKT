// SPDX-License-Identifier: UNLICENSED
// deployed to mumbai 0x8597E9947F8C4D018B525789BD87015da16B9975
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721Burnable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 count = 0;
    uint256 price;
    //string name;

     constructor() ERC721("CarToken", "CTK") {
 
    }


     function safeMint(address to) public   {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        count+=1;
    }

    function transferToken(address payable _from ,address payable _to,uint256 _id)public{
      safeTransferFrom(_from,_to,_id);
    }



    receive() external payable {}


      fallback() external payable {}


} 
