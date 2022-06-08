import React,{useState} from 'react';
import { ethers } from 'ethers';
import Gallery from './Gallery.jsx';
import { providers, Contract } from "ethers";
import { Sales,salesabi } from '../constants/index.js';
import WalletConnect,{signer} from './WalletConnect';

//Car-Marketplace/src/constants/index.js



const Form =(props)=>{

    const SalesContract = new Contract(
        Sales,
        salesabi,
        signer

    )
     
    
return(
    <>
    {props==="Comprar"? ()=>{
        
        return (
             <> <div> <Formcomprar SalesContract/>  </div>  <div> <Gallery/> </div>  </>
             
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
            <input value={valuem} type="text" placeholder="Marca" onChange={event=>{let value = React.Event.Form.target(event); setvaluem(_=>value)}}/>
            
            </div>
           
            <div>
            <h2>Precio</h2>
            <input value={valuep} type="text" placeholder="Precio" onChange={event=>{let value = React.Event.Form.target(event); setvaluep(_=>value)}}/>
            </div>

            <div>
            <h2>Placa</h2>
            <input  value={valuepl} type="text" placeholder="Placa" onChange={event=>{let value = React.Event.Form.target(event); setvaluepl(value)}}/>

            <button onClick={()=>{ try {props.sellp(valuem,valuep,valuepl)} catch(err){<h2> No pudimos publicar tu auto !</h2>}}}> Publicar </button>
            </div>
 

        </>
    )
}