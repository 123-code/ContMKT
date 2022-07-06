import React,{useEffect} from 'react';
import { ethers } from 'ethers';
import Addcar from '../Components/Addcar';


const contractaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Vender = ()=>{
    return(
        <>
        <h1> Vende tu auto con nosotros.</h1>
        <Addcar/>
        </>
    )

} 
//<Addcar/>
export default Vender;