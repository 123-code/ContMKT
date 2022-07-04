import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import{AiFillHome} from 'react-icons/ai';
import {RiGovernmentLine} from 'react-icons/ri';
import{MdOutlineSell} from 'react-icons/md';
import{FiShoppingBag} from 'react-icons/fi';
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
<Link to="/" className = "font-mono text-slate-300 pt-6"> 
<li>
<AiFillHome className ='justify-items-start'/>
HOME
</li>
</Link>


<Link to="/member" className = "font-mono text-slate-300 pt-6"> 
<li>
<RiGovernmentLine className ='justify-items-start'/>
BECOME A MEMBER OF CARZ
</li>
</Link>


<Link to="/member" className = "font-mono text-slate-300 pt-6"> 
<li>
<MdOutlineSell className ='justify-items-start'/>
BUY A CAR 
</li>
</Link>



<Link to="/member" className = "font-mono text-slate-300 pt-6"> 
<li>
<MdOutlineSell className ='justify-items-start'/>
SELL A CAR 
</li>
</Link>

        </>

    )
}

export default Navbar;