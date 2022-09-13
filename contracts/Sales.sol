// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";


contract Sales is Ownable {
    mapping(address=>address)public sale;
    ///
    mapping(bool=>Car)public bought;
    mapping(address=>bool)public boughtcar;
    mapping(address=>bool)public soldcar;
    mapping(bool=>Car) public scar;
    mapping(bool=>Car) public postcar;
    mapping(string=>bool) public published;
    mapping(string=>bool) public sold;
    mapping(string=>Car) public info;



    struct  Buyer{
        address payable account;
        string nombre;

    }

    struct  Seller{
        address payable account;
        string nombre;
    }


    struct Car{
        string name;
        uint price;
        string license;
        bool bought;
        address seller;


    }

modifier CompBought{
    require(boughtcar[msg.sender]==true,"No se ha comprado un auto!"); _;
}

modifier CompSold{
    require(soldcar[msg.sender]==true,"No se ha vendido un auto!"); _;
}

function buycar(string memory _name,uint _price,string memory _license,bool _bought,address _seller)public payable returns(bool){
require(published[_license]=true,"Car does not exist");
 Car memory _buycar = Car(_name,_price,_license,_bought,_seller);
 _seller.call{value:_price}("");
boughtcar[msg.sender]=true;

}


function postcar1(string memory _name,
uint _price,
string memory _license,
bool _bought,
address _seller) public returns(bool) {

Car memory mycar = Car(_name,_price,_license,_bought,_seller);
published[_license] = true;
postcar[true] = mycar;
}

function sellmycar(string memory _license, address payable  _from, address payable _to, uint _amount) public payable onlyOwner {
require(published[_license] = true);
require(sold[_license] = false);
_to.call {value:_amount}("");
sold[_license] = true;
}

function getcarinfo(string memory  _license) public view returns(Car memory){
return info[_license];

}


receive() external payable {}


fallback() external payable {}

}
