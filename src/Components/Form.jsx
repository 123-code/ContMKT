import React,{useState} from 'react';
import { ethers } from 'ethers';
import { providers, Contract } from "ethers";
import {SALESCONTRACTADDRESS,SALESCONTRACTABI} from '../constants';
import WalletConnect,{signer} from './WalletConnect';

//Car-Marketplace/src/constants/index.js



const Form =(props)=>{

    const getcontractowner = async()=>{
        const salescontract = new Contract({SALESCONTRACTADDRESS,SALESCONTRACTABI})
        const owner = await salescontract.owner();
        return owner;
    }

    


return(
    <>
    {props==="Comprar"? ()=>{
        
        return (
             <> <div> <Formcomprar SalesContract/>  </div>  <div>  </div>  </>
             
             )
        
        }:<Formvender SalesContract/>}

    </>

)
} 
export default Form;

 export const Formcomprar = (props)=>{
    let[value,setvalue] = useState("");
    return(
        <div className='form'>
            <h1>Comprar</h1>
            
            <h2>Buscar por Marca</h2>

         <input  value={value} type="text" label="Marca" onChange={event=>{let value = React.Event.Form.target(event); setvalue(_ => value)}}/>
         <button onClick={props.buycar(value)}/>
         {props.buycar(value === true ? <h2> Realizando Compra </h2> : <h2> El auto no esta a la venta</h2>)}
        </div>
    )
}

 export const Formvender=(props)=>{
     let[valuem,setvaluem] = useState("");
     let[valuep,setvaluep] = useState("");
     let[valuepl,setvaluepl] = useState("");
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

            <button onClick={()=>{ try {props.sellp(valuem,valuep,valuepl)} catch(err){<h2> No pudimos publicar tu auto !</h2>}}}> Publicar </button>
            </div>
 

        </>
    )
}