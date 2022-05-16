import  React from 'react';
import './App.css';
import Main from './Pages/Main';
import { Routes, Route,BrowserRouter as Router  } from "react-router-dom"
import Comprar from './Pages/Comprar';
import Vender from './Pages/Vender';
import Navbar from './Components/Navbar';


function App(){
  return(
    <div className="App">
    <Main/>
  </div>
  )
}
export default App;