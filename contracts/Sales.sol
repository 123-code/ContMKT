
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.7.4;




contract Sales is Token{
    address payable Owner;

    mapping(address=>uint)public listings;
    mapping(address=>string)public vendidos;
    mapping(address=>string)public comprados;
    mapping(address=>uint)public numcompras;


modifier Price(uint price){
require(price>0,"Precio No es Válido"); 
_;
}



function post(string name,uint price,string license)public Price(price){ 
    // falta get info from oracle.
    
    listings[msg.sender]=price;

}

function buy(string name,address payable vendor,string license,uint price)public payable{
comprados[msg.sender] = 
vendidos[vendor].transfer(price);

}
} 