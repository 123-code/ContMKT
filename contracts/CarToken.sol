// SPDX-License-Identifier: UNLICENSED
// deployed to mumbai 0x787d2cd1717825380B120611085BDF6A304a142E
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721Burnable {
using Counters for Counters.Counter;
Counters.Counter private _tokenIdCounter;
// mapping checking if car is bought or not 
mapping(uint256=>bool) public carbought;
mapping(uint256=>address) public tokens;
    uint256 count = 0;
    uint256 price;
    //string name;

     constructor() ERC721("CarToken", "CTK") {
 
    }


     function safeMint(address to) external  {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        count+=1;
    }

    function transferToken(address payable _from ,address payable _to,uint256 _id)external{
      safeTransferFrom(_from,_to,_id);
    }

    function getprice() external view returns(uint256){
    return price;
}

function setcarbought(uint256 _tokenid) external{
tokens[_tokenid] = msg.sender;
carbought[_tokenid] = true;
}

function checkisavailable(uint256 _tokenid) external  returns(bool){
if(carbought[_tokenid] = true){
  return true;
}
return false;
}



    receive() external payable {}


      fallback() external payable {
        
      }


} 

