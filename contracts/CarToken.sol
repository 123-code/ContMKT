pragma solidity ^ 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/drafts/Counters.sol";


contract CarToken is ERC721Full{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721Full("CarToken", "CRT")public{

    }

    function MintCarToken(address to, string memory uri)public{
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(to,newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    

    


    