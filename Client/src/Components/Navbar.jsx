import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

const Nabvar = ()=>{
let[select,setselect]=useState(false);
setselect=()=>{setselect=!setselect}
    return(
        <>
        <GiHamburgerMenu onClick={setselect()}/>
        {select?
        <nav>
<h1>Navber opened </h1> 
        </nav>
        
        :null}
        </>
    )
}
export default Nabvar;
  
