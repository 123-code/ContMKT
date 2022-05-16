import  React from 'react';
import './App.css';
import Main from './Pages/Main';
import { Routes, Route,BrowserRouter as Router  } from "react-router-dom"
import Comprar from './Pages/Comprar';
import Vender from './Pages/Vender';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
 
function App() {
  return (
    <div className="App bg-gray-300">
       
      <Routes>
        <Route path="/main" element={ <Main/> } />
        <Route path="/comprar" element={ <Comprar/> } />
        <Route path="/vender" element={ <Vender/> } />
      </Routes>
      
    </div>
  )
} 

export default App