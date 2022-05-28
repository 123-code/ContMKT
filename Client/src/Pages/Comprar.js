import React,{useEffect} from 'react';
import { ethers } from 'ethers';
import Minter from '../artifacts/contracts/Minter.sol/Minter.json';

// create Compra component
const contractaddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
let contract = ethers.Contract(contractaddress,Minter.abi);

const Comprar = () => {
   
    
    useEffect(() => {})
    return (
        <>
            <h1>Comprar</h1>

        </>
    )
}
export default Comprar;