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
    <Router>
    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="comprar" element={ <Comprar/> } />
      <Route path="vender" element={ <Vender/> } />
    </Routes>
    </Router>
  </div>
  )
}
export default App;