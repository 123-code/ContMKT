import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import{AiFillHome} from 'react-icons/ai';
import {RiGovernmentLine} from 'react-icons/ri';
import{MdOutlineSell} from 'react-icons/md';
import{FiShoppingBag} from 'react-icons/fi';

const Navbar = ()=>{
    return(
        <>
     <li>
<AiFillHome className ='justify-items-start'/>
<Link to="/" className = "font-mono text-slate-300 pt-6">Start</Link>
     </li>

     <li>
<RiGovernmentLine className ='justify-items-start'/>
<Link to="/" className = "font-mono text-slate-300 pt-6">Own a part of the marketplace</Link>
     </li>

     <li>
<RiGovernmentLine className ='justify-items-start'/>
<Link to="/" className = "font-mono text-slate-300 pt-6">Own a part of the marketplace</Link>
     </li>

     <li>
<MdOutlineSell className ='justify-items-start'/>
<Link to="/" className = "font-mono text-slate-300 pt-6">Sell a car</Link>
     </li>

     <li>
<FiShoppingBag className ='justify-items-start'/>
<Link to="/" className = "font-mono text-slate-300 pt-6">Buy a car</Link>
     </li>

     FiShoppingBag



        </>

    )
}