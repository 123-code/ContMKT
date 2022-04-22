import  React from 'react';
import './App.css';
import Main from './Pages/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Comprar from './Pages/Comprar';
import Vender from './Pages/Vender';


export default class App extends React.Component {
  render(){
    return(
     
      <Router>
         <div className="App">
           
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/foro' element={<Comprar/>}/> 
          <Route path='/nosotros' element={<Vender/>}/>
        </Routes>
        </div>
        
       
      </Router>
      
    )
  }
}