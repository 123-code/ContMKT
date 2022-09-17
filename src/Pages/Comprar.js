import React,{useState,useEffect,useRef} from 'react';
import { ethers } from 'ethers';
import { Sales,salesabi } from '../constants/index.js';
import Confirmation from './Confirmation.jsx';
import Error from './Components/Error.jsx';
import Popup from 'reactjs-popup';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3Modal from 'web3modal';




const Comprar = ()=>{
    const [provider,setprovider] = useState(false);
    let [comprar,setcomprar] = useState(false);

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
        const signer;
        const getprovider = await setprovider(true);
        const salescontract = new Contract(Sales,salesabi);
        const isOwner = await salescontract.owner();
    
    if(isOwner.toLowerCase() === signer){
        console.log("Contract Owner!")
    }
    else{
    <Error/>
    }
    
    }
    
    
    const buycar = async()=>{
        const salescontract = new Contract(Sales,salesabi);
    
    }
    

    return(
        <>
         <h1> Comprar </h1>

       
<Popup trigger = {<button className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick = {setcomprar=()=>{comprar=true}}> Comprar </button>}>
<Confirmation/>
</Popup>
        </>
    )
}
export default Comprar;
