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
mapping(uint=>string)SetUris;


struct TokenRender{
    uint id;
    string uri;


}


function getalltokens()public view returns(TokenRender[] memory){
uint latestid = _ntokens.current();
uint counter = 0;
TokenRender[] result = new TokenRender[](latestid);


for(uint i=0;i<latestid;i++){
if(_exists(counter)){

string memory uri  = tokenURI(counter);
res[counter] = TokenRender(counter,uri);

}
counter++;

}
return result;

}

function seturi(uint id ,string memory uri)internal{
SetUris[id] = uri;
}

function tokenURI(uint token_id )public virtual override returns(string memory){
string memory t_uri = SetUris[token_id];
return t_uri;

}

function mint(address recipient, string memory uri ) public returns(uint){ 
    // current state of token ids;

    uint newtoken = _ntokens.current();
    _ntokens.increment();
_mint(recipient,newtoken);
seturi(newtoken,uri);
    //minted[msg.sender] +=1;
    return newtoken;

}


}