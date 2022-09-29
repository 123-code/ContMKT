import React,{useState,useEffect,useRef} from 'react';
import ethers, { Contract }  from 'ethers';
import Addcar from '../Components/Addcar';
import {SALESCONTRACTADDRESS,SALESCONTRACTABI} from '../constants';
import detectEthereumProvider from '@metamask/detect-provider';
import  Web3Modal from "web3modal";
import { providers } from "ethers";

// mint a car nft as a post to the platform 
 
const Vender = ()=>{
    const Web3ModalRef = useRef();
    const [walletConnected,setwalletConnected] = useState(false);
    const [owner,setowner] = useState(false);


const getOwner = async()=>{
    const provider = await getProviderOrSigner();
    const signer = await getProviderOrSigner(true); 
    const salescontract  = new Contract(SALESCONTRACTADDRESS,SALESCONTRACTABI,provider);
    const _owner = await salescontract.owner();
    if(_owner.toLowerCase()===signer){
        setowner(true);
    }

}

const connectwallet = async()=>{
try{
    await getProviderOrSigner();
    setwalletConnected(true);
}catch(err){
    console.error(err);
}
};

const getProviderOrSigner = async (needSigner = false) => {
    
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to goerli");
      throw new Error("Change network to goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }

const onpageload = async()=>{
    await connectwallet();
     await getOwner();

}

  useEffect(()=>{
    if(!walletConnected){
      Web3ModalRef.current = new Web3Modal({
        network:"goerli",
        providerOptions:{},
        disableInjectedProvider:false,
      });
      onpageload();
    }
  },);

const renderbutton = ()=>{ 
    if(!walletConnected){
        return(
          <button onClick = {connectwallet}> Connect Wallet</button>  
        )
    }
    else{
      <span> Wallet connected </span>
    }
}

return(
    <>
{renderbutton()}
    </>
)
}
//<Addcar/>
export default Vender;