// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721Burnable {
    using Counters for Counters.Counter;

     Counters.Counter private _tokenIdCounter;
    uint256 count = 0;

    


    constructor() ERC721("CarToken", "CTK") {

    }


     function safeMint(address to) public   {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        count+=1;
    }


} 
