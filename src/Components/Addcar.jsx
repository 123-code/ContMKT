import React,{useState} from 'react';
import { Membership,membershipabi } from "./artifacts/contracts/Sales.sol/Sales.json";
import { Sales,salesabi } from "./artifacts/contracts/Sales.sol/Sales.json";
import { ethers } from 'ethers';


const Marketplace = ()=>{
    let[values,setvalues] = UseState({
        name:'',
        price:0,
        license:'',
        bought:false
    });

    return(
        <>
        <form>

            <h1> Nombre Auto:</h1>
            <input type="text" onChange={setvalues=(evt)=>values.name=evt.target.value}/>

            <h1> Price Auto:</h1>
            <input type="text" onChange={setvalues=(evt)=>values.price=evt.target.value}/>

            <h1> Placa Auto:</h1>
            <input type="text" onChange={setvalues=(evt)=>values.license=evt.target.value}/>

            <h1>{values.bought}</h1>
    
       

        </form>
        <input type="button" text="Save" onChange={Sales.sellp()}/>

        </>
 
    )
}

export default Marketplace;

