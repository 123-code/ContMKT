pragma solidity ^  0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 
import "@openzeppelin/contracts/utils/Counters.sol";

contract Minter{
    address public Owner;
    string public Image;
}