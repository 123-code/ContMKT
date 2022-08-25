import React,{useState,useEffect} from 'react';
import{ethers }from 'ethers';
import {FaWallet} from 'react-icons/fa';

export const signer = "";

const Connectbutton = ()=>{
    let [address,setaddress] = useState("Conectar Billetera");
    let[connected,setconnected] = useState(false);

   
const conectar = async()=>{
    if(!window.ethereum){
        alert('No Web3 Detected');
        console.info('No Web3 Detected');
        
    }
    else{
        
        try{
           
            const provider = new ethers.providers.Web3Provider(window.ethereum);
             signer = provider.getSigner();
             address = signer.getAddress();
            //setaddress(address);
            await window.ethereum.request({method: 'eth_requestAccounts'});
            
            console.info(`conectada:${(await address).toString()}`);
            console.info(`Conectada: ${address.toString()}`);

            function connect(){
                setconnected(true);
            }

        
           if(provider){setaddress(`Conectada: ${(await address).toString()}`)
           connect();
        }
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