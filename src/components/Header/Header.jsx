import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import './style.css'
const Header = () =>{
    const [open,setOpen]= useState(false)
    function handleClick(){
        setOpen(!open)
    }
   return (
     <header>
        <a className="logo" href="#">
        ACADEMIA<br/>
        ONLINE EDUCATION & LEARNING
        </a>
        <nav>
           <ul className={open ? 'list-menu open' : 'list-menu'}>
             <li><a href="#">Home</a></li>
             <li><a href="#">All Courses</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Team</a></li>
             <li><a href="#">Pricing</a></li>
             <li><a href="#">Journal</a></li>
             <li><a href="#">Contact</a></li>
           </ul>
        </nav>
        <button onClick={handleClick} className="toggle">
          {open ? <FaTimes/> : <FaBars/>}
        </button>
     </header>
   )
}


export default Header