import React,{useState,useEffect,useRef} from 'react';
import ethers, { Contract }  from 'ethers';
import Addcar from '../Components/Addcar';
import { Connectbutton} from '../Components/WalletConnect';
import Form from '../Components/Form';

import  Web3Modal from "web3modal";
import { providers } from "ethers";

// mint a car nft as a post to the platform 
 
export default function vender(){



  return(
    <>
<div>
<Connectbutton/>
</div>
<div>
<Form/>
</div>
    </>
  )
}