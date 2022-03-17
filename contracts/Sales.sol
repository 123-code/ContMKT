
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.0;

import './Tokens.sol';




contract Sales is Tokens{

    address payable Owner;

    mapping(address=>uint)public listings;
    mapping(address=>string)public vendidos;
    mapping(address=>string)public comprados;
    mapping(address=>uint)public numcompras;


modifier Price(uint price){
require(price>0); 
_;
}



function post(string memory name,uint price,string memory license)public Price(price){ 
    // get info from oracle.
    
    listings[msg.sender]=price;

}

function buy(string memory name,address payable vendor,string memory license,uint price)public payable{

vendor.transfer(price);

}

function getavailable()public view returns(string memory){

}
}