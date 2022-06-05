import React from 'react';
import WalletConnect from '../Components/WalletConnect.jsx';
import Comprar from './Comprar';
import Vender from './Vender';


const Main = () => {
    return (
        <div >
        <h1>CARZ</h1>
        <WalletConnect/>

        <div>
            <h2> Ingresar Como </h2>
        <form action = "../Pages/Comprar">
            <button className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" > Comprador</button> 
         </form>
          
      <form action='../Pages/Vender'>

 
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Vendedor </button>
      </form>

        </div>


        </div>
    );
}

export default Main;