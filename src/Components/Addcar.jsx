import React,{useState} from 'react';
import { Sales,salesabi } from '../constants/index.js';
//Car-Marketplace/src/constants/index.js
import { ethers } from 'ethers';
import Button from "../Components/Button";



const Marketplace = ()=>{


    let [name,setName] = useState('');
    let [price,setPrice] = useState(0);
    let [license,setlicense] = useState('');
    let [bought,setbought] = useState(false);
 
  
const caradded = ()=>{
    Sales.sellp(name,price,license,bought);
    setbought=() => bought=true;
    
    console.info("funcion corrio");
    console.info(bought);

   
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

            <h1>{bought}</h1>
   <button onChange={caradded()}> Post </button>

        </form>
        
       

        </>
 
    )
  
}
//onChange={caradded()}
export default Marketplace;

