import {React,useRef,useState,useEffect} from 'react';
import Web3Modal from 'web3modal';
import ethers from "ethers";
import { providers } from "ethers";


 
export  function Connectbutton() {
  const Web3ModalRef = useRef();
  const [walletConnected,setwalletConnected] = useState(false);


const connectwallet = async () => {
    try {

      await getProviderOrSigner();
      setwalletConnected(true);
    } catch (err) {
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
  };

    useEffect(()=>{
      if(!walletConnected){
        Web3ModalRef.current = new Web3Modal({
          network:"goerli",
          providerOptions:{},
          disableInjectedProvider:false,
        });
        connectwallet();
      }


    },[])
  return(
   <div>
 
        <title> CARZ </title>

<div>
  
{!walletConnected ? (<button onClick={connectwallet} > connect wallet </button>)
: <button> Connected </button>}
    
</div>
   </div>
    
  )
}


// import {FaWallet} from 'react-icons/fa';