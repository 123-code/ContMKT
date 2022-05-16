// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Escrow{
   struct Buyer{
         string name;
         address payable account;
         uint repscore;
   }

    struct Seller{
            string name;
            address payable account;
            uint repscore;
            uint nsold;
            bool sent;
    }

    struct Product{
        uint price;
        string name;
        address payable seller;
        bool paid;
    }

mapping(Product=>address)public buyer;
mapping(Product=>address)public seller;
mapping(buyer=>seller)public sale;

    modifier requirepaid(){
        Product memory p;
        require(p.paid==true,"Pago no efectuado");
        _;
    }

    modifier requiresent(){
        Seller memory s;
        require(s.sent==true,"Envio no realizado");
        _;
    }

    function setbuyerdata(string memory _name,address payable _account,uint _repscore)public pure{
        Buyer({name:_name,account:_account,repscore:_repscore});


    }

    function setsellerdata(string memory _name,address payable  _account,uint _repscore,uint _nsold,bool _sent)public pure{
        Seller({name:_name,account:_account,repscore:_repscore,nsold:_nsold,sent:_sent});
    }

    function setproductdata(uint _price,string memory _name,address payable _seller,bool _paid)public pure{
        Product({price:_price,name:_name,seller:_seller,paid:_paid});
    }
// reference struct in function argument
    function buy(address seller,string memory product,uint price)public payable requirepaid{
        Product p;
        p.paid=true;
        buyer[p]=msg.sender;
    }

    function checksent(address buyer) public onlyOwner returns(bool) {
        Seller s;
        sent=true;
        return s.sent;
    }

     function checkpaid(address buyer) public onlyOwner returns(bool) {
        Buyer b;  
        b.paid=true;  
        return b.paid;
    }

    function sell()public payable requiresent{
        

    }
}
