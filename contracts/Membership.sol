pragma solidity ^ 0.8.7;

contract Membership{

    struct User{
        string name;
        address account;
       

    }
User user;

 mapping(address=>bool) public ismember;
mapping(string=>address) public members;

 function becomemember(string memory _name,address _account) public  {
     User memory user = User({
         name:_name,
         account:_account
     });
     ismember[user.account]=true;
     members["member:"] = user.account;
 }

// checks if a specific user is a member.
 function amimember(address account)public view returns(bool){
     if(ismember[account]==true){
         return true;
     }
     else{
         return false;
     }

 }



}