// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";


contract Sales {
    mapping(address=>address)public sale;
    ///
    mapping(bool=>Car)public bought;
    mapping(address=>bool)public boughtcar;
    mapping(address=>bool)public soldcar;
    mapping(bool=>Car) public scar;
    mapping(bool=>Car) public postcar;
    mapping(string=>bool) public published;
    mapping(string=>bool) public sold;



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

Car[]public cars;
Seller[] public sellers;
Buyer[] public buyers;

function sellp(string memory _name,uint _price,string memory _license,bool _bought) public {
    _bought = false;
    cars.push(Car(_name,_price,_license,_bought,msg.sender));
      
    }
    // bugs aqui
    // buscar en el arreglo de structs el carro con el nombre, si esta ahi, bis
function buycar(string memory _name)public payable{
    for(uint i=0;i<cars.length;i++){
        if(keccak256(bytes(cars[i].name)) == keccak256(bytes(_name))){
            for(uint j=0;j<sellers.length;j++){
                if(cars[i].seller == sellers[j].account)
                sellers[i].account.transfer(cars[i].price);
            }
        }
    
    boughtcar[msg.sender]=true;
    }

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

function sellmycar(string memory _license, address payable  _from, address payable _to, uint _amount) public payable {
require(published[_license] = true);

(bool sent) = _to.call{value:_amount};



}




// se tiene que transferir token del auto aqui. 
//bugs aqui
function sell(string memory _name)public CompBought returns(bool){
    for(uint i=0;i<cars.length;i++){
        if(keccak256(bytes(cars[i].name)) == keccak256(bytes(_name))){
            return true;
            for(uint j=0;j<buyers.length;j++){
                buyers[i].account.transfer(cars[i].price);
            }
        }
        return false;
    }
   
}


// testing function
function getcarinfo()public view returns(string memory){

for(uint i=0;i<cars.length;i++){
    string memory names= cars[i].name;
    return names;

}
}   

receive() external payable {}


fallback() external payable {}

}

// cars being saved.
// cars being retrieved.