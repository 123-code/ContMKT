import React,{useEffect} from 'react';
import { ethers } from 'ethers';
import { providers, Contract } from "ethers";


// create Compra component
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractaddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
//let contract = ethers.Contract(contractaddress,Minter.abi);

const Comprar = ()=>{
    return(
        <>
        <h1> Compra tu auto con nosotros</h1>
        </>
    )
}
export default Comprar;