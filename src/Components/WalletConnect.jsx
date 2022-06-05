import React,{useState,useEffect} from 'react';
import{ethers }from 'ethers';
import {FaWallet} from 'react-icons/fa';


const Connectbutton = ()=>{

   

   
    let [address,setaddress] = useState("Conectar Billetera");
   
const conectar = async()=>{
    if(!window.ethereum){
        alert('No Web3 Detected');
        console.info('No Web3 Detected');
        return;
    }
    else{
        
        try{
           
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
             address = signer.getAddress();
            //setaddress(address);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            
            console.info(`conectada:${(await address).toString()}`);
            console.info(`Conectada: ${address.toString()}`);

        
           if(provider){setaddress(`Conectada: ${(await address).toString()}`);}
           else{setaddress("Conectar Billetera");}
            
       
                //{provider ? `) : setaddress("Conectar Billetera")}
            
  
        } catch(err){
            console.info(err);
        }
       
    }
}



return(
    <>
        <button className=  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={conectar}> <FaWallet/> {address}</button>
    </>
)
}  
export default Connectbutton;