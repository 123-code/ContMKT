
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.0;

import './Tokens.sol';

contract Sales is Tokens{
    struct Car{
        string name;
        uint price;
        address payable owner;
        bool paid;
    }

function PostCar(string memory name,uint)


}