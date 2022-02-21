
pragma solidity ^ 0.7.4;

contract Tokens{
uint max_supply = 1000000000;
uint current_supply = 0;
address Address;
uint balance;

mapping(address=>uint) public balances;

modifier isOwner(){
    require(msg.sender==Address,"Error"); _;
}

modifier notSurpass(){
    require(current_supply<=max_supply,"Error"); _;
}

modifier singletx(uint amount){
    require(amount<(max_supply/3),"Error"); _;
}

modifier cantransfer(){
    require(balances[msg.sender]>0,"Error");

     _;
}

function gettokens(uint amount,address receiver)public singletx(amount) {
    require(amount>0,"Error");
    balances[receiver]+=amount;

}

function transfer(uint amount,address to) public payable cantransfer() {
balances[msg.sender] = balances[msg.sender]-amount;   
balances[to] += (amount);

}

function getbalance(address _Address)  public view returns(uint) {
    return balances[_Address];
}

}

