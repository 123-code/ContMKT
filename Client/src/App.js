import logo from './logo.svg';
import './App.css';

import {ethers} from 'ethers';
//import tokens from './contracts/Tokens.json'
import {useWeb3} from "@3rdweb/hooks";


 function App() {


  async function connectWallet(){
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts",[]);
  const signer = provider.getSigner();
  console.log("signer:" + signer);
  } 
  



  
  

  //console.log("Address",address); 
if(typeof window.ethereum === 'undefined'){
return (
  <div className= "bg-slate-400" >
 <h1> Car Marketplace </h1> 
<button onClick = {()=>connectWallet()} > Conectar Billetera </button>
 </div>
)}


else{
  return(
    <>
    <h1> Billetera Conectada </h1>

    <button> Comprar Autos </button>
    <button> Vender Autos </button>
    </>
  )
}
  
 }




export default App;
