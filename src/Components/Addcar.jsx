import React,{useState} from 'react';
import { Sales,salesabi } from './constants/index.js';
import { ethers } from 'ethers';


const Marketplace = ()=>{


    let [name,setName] = useState('');
    let [price,setPrice] = useSate(0);
    let [license,setlicense] = useSate('');
    let [bought,setbought] = useState(false);
 
    return(
        <>
        <form>

            <h1> Nombre Auto:</h1>
            <input type="text" onChange={setName=(evt)=>name=evt.target.value}/>

            <h1> Price Auto:</h1>
            <input type="text" onChange={setPrice=(evt)=>price=evt.target.value}/>

            <h1> Placa Auto:</h1>
            <input type="text" onChange={setvalues=(evt)=>values.license=evt.target.value}/>

            <h1>{values.bought}</h1>
    
       

        </form>
        <input type="button" text="Save" onChange={Sales.sellp()}/>

        </>
 
    )
}

export default Marketplace;

