// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.7;
 


contract Sales {
    mapping(address=>address)public sale;
    ///
    mapping(bool=>Car)public bought;
    mapping(bool=>Car)public sold;
    mapping(address=>bool)public boughtcar;
    mapping(address=>bool)public soldcar;

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


    }

modifier CompBought{
    require(boughtcar[msg.sender]==true,"No se ha comprado un auto!"); _;
}

modifier CompSold{
    require(soldcar[msg.sender]==true,"No se ha vendido un auto!"); _;
}

Car[]public cars;
Seller[] public sellers;
Buyer[] public buyers;

    function sellp(string memory _name,uint _price,string memory _license,bool _bought) public {
cars.push(Car(_name,_price,_license,_bought));

    }
    // bugs aqui
function buycar(string memory _name)public payable{
    for(uint i=0;i<cars.length;i++){
        if(keccak256(bytes(cars[i].name)) == keccak256(bytes(_name))){
            for(uint j=0;j<sellers.length;j++){
                sellers[i].account.transfer(cars[i].price);
            }
        }
    
    boughtcar[msg.sender]=true;
    }

}
//se tiene que transferir token del auto aqui.
//bugs aqui
function sell(string memory _name)public CompBought{
    for(uint i=0;i<cars.length;i++){
        if(keccak256(bytes(cars[i].name)) == keccak256(bytes(_name))){
            for(uint j=0;j<buyers.length;j++){
                buyers[i].account.transfer(cars[i].price);
            }
        }
    }
   sold[true]=Car;
}


}