import React,{useState} from 'react';
import { ethers } from 'ethers';
import Minter from "../artifacts/contracts/Minter.sol/Minter.json";
import Gallery from '../Components/Gallery.jsx';


const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractaddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
let contractsales= ethers.Contract(contractaddress,Minter.abi,provider);


const Form =(props)=>{
    
    
return(
    <>
    {props==="Comprar"? ()=>{
        
        return (
             <> <div> <Formcomprar/>  </div>  <div> <Gallery/> </div>  </>
             
             )
        
        }:<Formvender/>}

    </>

)
} 
export default Form;

 export const Formcomprar = ()=>{
    let[value,setvalue] = useState("");
    return(
        <div className='form'>
            <h1>Comprar</h1>
            
            <h2>Buscar por Marca</h2>

         <input  value={value} type="text" label="Marca" onChange={event=>{let value = React.Event.Form.target(event); setvalue(_ => value)}}/>
         <button onClick={contractsales.buycar(value)}/>
         {contractsales.buycar(value === true ? <h2> Realizando Compra </h2> : <h2> El auto no esta a la venta</h2>)}
        </div>
    )
}

 export const Formvender=()=>{
     let [valuem,setvaluem] = useState("");
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

            <button onClick={()=>{ try {contractsales.sellp(valuem,valuep,valuepl)} catch(err){<h2> No pudimos publicar tu auto !</h2>}}}> Publicar </button>
            </div>


        </>
    )
}