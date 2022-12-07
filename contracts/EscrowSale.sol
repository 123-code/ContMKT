pragma solidity ^ 0.8.9;


interface ICarToken{
function tokenOfOwnerByIndex(address owner, uint256 index)
        external
        view
        returns (uint256);
function transferToken(address payable _from ,address payable _to,uint256 _id)external;

}

contract EscrowSale{
    address nft_address;
    uint256 nft_id;
    address payable public seller;
    address payable public buyer;
    ICarToken carinterface;
    //mapping(carinterface=>bool);


constructor(address _nftaddress, uint256 _nftid,address payable _buyer
, address payable _seller){
    nft_address = _nftaddress;
    nft_id = _nftid;
    seller = _seller;
    buyer = _buyer;
}

function checkpaymentdone()public view returns(bool){
    //require()
}


function finalizesale() public{
    ICarToken(nft_address).transferToken(buyer,seller,nft_id);
}
   
}