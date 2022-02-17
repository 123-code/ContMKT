import logo from './logo.svg';
import './App.css';

import {ethers} from 'ethers';
import tokens from '../Tokens.json'



 function App() {
  
  return (
    <>
   <h1> Car Marketplace </h1> 
   <button onClick={connectwallet()}> Conectar Billetera </button>
   </>
  )
}

async function connectwallet(){
const provider=new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();
}

export default App;
