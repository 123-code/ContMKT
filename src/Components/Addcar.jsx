import React,{useState} from 'react';
import {SALESCONTRACTADDRESS ,SALESCONTRACTABI } from '../constants'
import { ethers } from 'ethers';
import Button from "../Components/Button";
import { signer } from "./WalletConnect.jsx";

const Marketplace = ()=>{


    let [name,setName] = useState('');
    let [price,setPrice] = useState(0);
    let [license,setlicense] = useState('');
    let [bought,setbought] = useState(false);
    let[imagen,setimagen] = useState(false);

 
   
const caradded = ()=>{


} 
function setmyimagen(){
    setimagen(true);
}

    return(
        <> 
        <form> 

            <h1> Nombre Auto:</h1>
            <input type="text" onChange={setName=(evt)=>name=evt.target.value}/>

            <h1> Price Auto:</h1>
            <input type="text" onChange={setPrice=(evt)=>price=evt.target.value}/>

            <h1> Placa Auto:</h1>
            <input type="text" onChange={setlicense=(evt)=>license=evt.target.value}/>

            <h1> Imágen </h1>
            <input type="image" src="submit.gif" alt="Submit" width="48" height="48" onChange = {setmyimagen()}/>

            <h1>{bought}</h1>
   <button onChange={caradded()}> Post </button>

        </form>
        

        </>
 
    )

}
//onChange={caradded()}
export default Marketplace;

