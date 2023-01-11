import React,{useState,useEffect} from 'react';
import {SALESCONTRACTADDRESS ,SALESCONTRACTABI } from '../constants'
import { ethers,providers,Contract } from 'ethers';
import Button from "../Components/Button";
import { signer } from "./WalletConnect.jsx";
import { Connectbutton } from './WalletConnect.jsx';
import { TOKENCONTRACT_ADDRESS,TOKENCONTRACT_ABI } from '../constants';
//TypeError: _WalletConnect_jsx__WEBPACK_IMPORTED_MODULE_3__.Connectbutton.getProviderOrSigner is not a function
const Marketplace = ()=>{

useEffect(()=>{
    setProviderOrSigner();
    //FIX ME 
    setsigner(Connectbutton.getProviderOrSigner())
},[])

const setProviderOrSigner = async()=>{
    <Connectbutton/>
}



    let [bought,setbought] = useState(false);
    let[imagen,setimagen] = useState(false);
    let [signer,setsigner] = useState("")
    let[valuem,setvaluem] = useState("");
    let[valuep,setvaluep] = useState("");
    let[valuepl,setvaluepl] = useState("");

const getTokencontractInstance = async(csigner)=>{
try{
const contract = new Contract(TOKENCONTRACT_ADDRESS,TOKENCONTRACT_ABI,csigner)
return contract
}catch(err){
    console.error(err);
}
}

const mintcartoken = async()=>{
    try {
        const csigner = await Connectbutton.getProviderOrSigner(true);
        const cartokencontract = getTokencontractInstance(csigner);
        const tx = await cartokencontract.safeMint(signer);
        await tx.wait();
        window.alert("Car Posted Succesfully!")

    }catch(err){
        console.error(err);
    }
} 
function setmyimagen(){
    setimagen(true);
}

return(
    <>
    <h1> Vender </h1>

    <div>
        <h2>Marca</h2>
        <input value={valuem} type="text" placeholder="Marca" onChange={(e)=>setvaluem(e.target.value)}/> 
        
        </div>
       
        <div>
        <h2>Precio</h2>
        <input value={valuep} type="text" placeholder="Precio" onChange={(e)=>setvaluep(e.target.value)}/>
        </div>

        <div>
        <h2>Placa</h2>
        <input  value={valuepl} type="text" placeholder="Placa" onChange={(e)=>setvaluepl(e.target.value)}/>

        <button onClick={mintcartoken()}> Publicar </button>
        </div>


    </>
)

}
//onChange={caradded()}
export default Marketplace;

