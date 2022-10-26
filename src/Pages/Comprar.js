import React,{useState,useEffect,useRef} from 'react';
import { ethers,providers,Contract } from 'ethers';
//import { Sales,salesabi } from '../constants/index.js';
import Confirmation from './Confirmation.jsx';
import { Connectbutton } from  "../Components/WalletConnect";
//import Error from './Components/Error.jsx';
import Popup from 'reactjs-popup';
import{ SALESCONTRACTADDRESS,SALESCONTRACTABI} from '../constants/index';




const Comprar = ()=>{
    const [provider,setprovider] = useState(false);
    let [comprar,setcomprar] = useState(false);
    const [isowner,setisowner] = useState(true);

  

    const getcontractowner = async()=>{
        // pass value from connect file 
try{
    const provider = Connectbutton.getProviderOrSigner();
    const salescontract = new Contract(SALESCONTRACTADDRESS,SALESCONTRACTABI,provider)
    const owner = salescontract.owner();
    const signer = Connectbutton.getProviderOrSigner(true);
    if(signer.toLowerCase()=== owner.toLowerCase()){
        setisowner(true);
    }
}
catch(err){
console.error(err);
}
    return(
        <>
         <h1> Comprar </h1>

       
<Popup trigger = {<button className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick = {setcomprar=()=>{comprar=true}}> Comprar </button>}>
<Confirmation/>
</Popup>
        </>
    )
}}
export default Comprar;
