import React,{useState,useEffect} from 'react';
import {ethers} from 'ethers';
import {AiOutlineWallet} from 'react-icons/ai';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const WalletConnect = () => {
let[conectada,setconectada] = useState(false);

if (!window.ethereum) {
    alert('please install Metamask');
    console.info("error");
    return;
}

setconectada=()=>{
    conectada = !conectada;
    }

const handleconnection = async()=>{
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const address = await signer.getAddress();
console.info(`signer:${signer},Address:${address}`);
setconectada();
}

return(
        <div>
        
        <button onClick={handleconnection} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Conectar Billetera </button>
        
        </div>
    );
}
export default  WalletConnect;