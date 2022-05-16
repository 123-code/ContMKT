import React from 'react';
import WalletConnect from '../Components/WalletConnect.jsx';
import Comprar from '../Pages/Comprar';

const Main = () => {
    return (
        <div>
        <h1>CARZ</h1>
        <WalletConnect/>

        <div>
            <h2> Ingresar Como </h2>
            <button className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" Link to={Comprar}> Comprador</button> 
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Vendedor </button>
        </div>
        </div>
    );
}

export default Main;