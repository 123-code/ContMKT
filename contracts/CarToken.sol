pragma solidity ^ 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract CarToken is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("CarToken", "CRT")public{

    }

    function MintCarToken(address to, string memory uri)public returns(uint){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(to,newItemId);
       // _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
    

    


    