import React,{useState,useEffect,useRef} from 'react';
import { ethers,providers,Contract } from 'ethers';
//import { Sales,salesabi } from '../constants/index.js';
import Confirmation from './Confirmation.jsx';
import { Connectbutton } from  "../Components/WalletConnect";
//import Error from './Components/Error.jsx';
import Popup from 'reactjs-popup';
import{ SALESCONTRACTADDRESS,SALESCONTRACTABI} from '../constants/index';
import Web3Modal from 'web3modal';



const Comprar = ()=>{
    const [provider,setprovider] = useState(false);
    let [comprar,setcomprar] = useState(false);

  

    const getcontractowner = async()=>{
        const salescontract = new Contract(SALESCONTRACTADDRESS,SALESCONTRACTABI)
        const owner = salescontract.owner();

        if(owner){
          Connectbutton()
        
        
        
        }
       
    }
    
    
    const buycar = async()=>{
      
    
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
