pragma solidity ^ 0.8.9;

 interface ICarInterface{
         function transferFrom(address payable _from ,address payable _to,uint256 _id) external;
    }

contract EscrowSale{
    address nft_address;
    uint256 nft_id;
    address payable public seller;
    address payable public buyer;

constructor(address _nftaddress, uint256 _nftid,address payable _buyer
, address payable _seller){
    nft_address = _nftaddress;
    nft_id = _nftid;
    seller = _seller;
    buyer = _buyer;
}

function finalizesale() public{
    ICarInterface(nft_address).transferFrom(buyer,seller,nft_id);
}
   
}