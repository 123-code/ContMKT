import React from 'react';
import WalletConnect from '../Components/WalletConnect.jsx';

const Main = ()=>{


    return(
        <>
        <div className = "inset-y-5"> <WalletConnect/> </div>
         <div>
            <h1>Carz</h1>
            <h2 className = "font-mono font-size: 1.25rem"> The decentralized Car Marketplace </h2>
            <h2> Buy and sell using your metamask wallet </h2>
        </div>

        <div>
 
            <h2> How will Carz Work?</h2>
            <ul>
            <li> Your car's ownership certificate living on your wallet </li>
            <li> Agree buy and sell terms directly, without any intermediary </li>
            <li>Your car, your terms</li>
            <li>You will own a part of the marketplace by joining the car buyer and seller community"</li>
            </ul>
           
           
        </div>
        </>
       
    )
}
export default Main;
