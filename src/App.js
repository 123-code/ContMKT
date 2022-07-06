import  React from 'react';
import './App.css';
import Main from './Pages/Main';
import { Routes, Route,BrowserRouter as Router  } from "react-router-dom"
import Comprar from './Pages/Comprar';
import Vender from './Pages/Vender';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Membership from './Pages/MembershipPage';
import { Sales,salesabi } from './constants/index.js';
 
function App() {
  return (
    <div className="App bg-gray-300">
      <Routes>
    <Navbar/>
        <Route path="/" element={ <Main/> } />
        <Route path="/comprar" element={ <Comprar/> } />
        <Route path="/vender" element={ <Vender/> } />
        <Route path="/member" element={<Membership/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
} 

export default App