import React,{useEffect} from 'react';
import { ethers } from 'ethers';
import Addcar from '../Components/Addcar';
import {Sales,salesabi} from '../constants/index.js';
import detectEthereumProvider from '@metamask/detect-provider';



const contractaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Vender = ()=>{
    let[owner,setowner] = useState(false);

    useEffect({
        checkwalletconnected(); 
    },[]);

     
    const checkwalletconnected = async ()=> {
        const provider = await detectEthereumProvider();
        if(provider){
            setprovider(true);
            console.log("Wallet connected!");
            //const signer = web3Provider.getSigner();
        }
    
        else if(!provider){
            window.alert("No Wallet Detected!");
        }
    
    }

    const getcontractowner = async()=>{
        const salescontract = new Contract(Sales,salesabi);
        const owner = await salescontract.owner();

        if(isOwner.toLowerCase() === signer){
            console.log("Contract Owner!")
        }
        else{
        <Error/>
        }
    }


    const publishcar = async()=>{
        const salescontract = new Contract(Sales,salesabi);
        
    }


    return(
        <>
        <h1> Vende tu auto con nosotros.</h1>
        <Addcar/>
        </>
    )

} 
//<Addcar/>
export default Vender;