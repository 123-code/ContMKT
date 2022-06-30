import React from 'react';
import WalletConnect from '../Components/WalletConnect.jsx';

const Main = ()=>{


    return(
       <div className = "bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
 <div className = "inset-y-5"> <WalletConnect/> </div>
         <div>
            <h1 className = "text-red-600 font-mono">Carz</h1>
            <h2 className = "font-mono font-size: 1.25rem text-red-600"> The decentralized Car Marketplace </h2>
            <h2 className = "font-mono"> Buy and sell using your metamask wallet </h2>
        </div>

        <div>
 
            <h2 className = "text-red-600 font-mono"> How will Carz Work?</h2>
            <ul>
            <li> Your car's ownership certificate living on your wallet </li>
            <li> Agree buy and sell terms directly, without any intermediary </li>
            <li className = "text-red-600 font-mono" >Your car, your terms</li>
            <li>You will own a part of the marketplace by joining the car buyer and seller community"</li>
            </ul>
           
           
        </div>

       </div>
        
       
     
       
    )
}
export default Main;
  