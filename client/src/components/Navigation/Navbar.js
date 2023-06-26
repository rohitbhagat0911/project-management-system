// import Tooltip from '@mui/material/Tooltip'
import './Navbar.css'
import {Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import MDropdown from './ModalDropdown/MDropdown'
import React, { useState, useEffect } from 'react'


const Navbar = () => {
   
    const projectAccess = () => {
        if (window.sessionStorage.getItem('loginStatus') != "true") {
        window.sessionStorage.setItem("projectAccess", "notEligible");
    }
}

const ideaAccess = () => {
    if (window.sessionStorage.getItem('loginStatus') != "true") {
    window.sessionStorage.setItem("ideaAccess", "notEligible");
}
}

const userAccess = () => {
    if (window.sessionStorage.getItem('userLevel') != "1") {
        window.sessionStorage.setItem("adminAccess", "notEligible");
}
}

const [loginDropdown, setLoginDropdown] = useState(false);

const Dropd = () => {
    setLoginDropdown(true)
     console.log(loginDropdown)    
     
}


    return (
        <div>
            
            {
               loginDropdown == true ? <MDropdown /> : ""
               
            }

            
            
               <div className='upr'>
               <header className="header">
            <a href="/" className="logo">
            <img src={process.env.PUBLIC_URL + '/PMS.png'}  alt="PMS" className="logo-style"/> 
                {/* <div className="tooltip">PMS
  <span className="tooltiptext"></span>
</div>
   */}
</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
            <ul className="menu">
               <li><a className="link-outline" href="/">Home</a></li> 
                <li><a className="link-outline" href={window.sessionStorage.getItem('loginStatus')  === 'true'? "/project": "/login" } onClick={projectAccess}>Projects</a></li>
                <li><a className="link-outline" href={window.sessionStorage.getItem('loginStatus')  === 'true'? "/ideas": "/login" } onClick={ideaAccess}>Ideas</a></li>

                {window.sessionStorage.getItem('loginStatus')  === 'true' && window.sessionStorage.getItem('userLevel') == "1"? 
                <li><a className="link-outline" href={window.sessionStorage.getItem('loginStatus')  === 'true'? "/users": "/login" } onClick={userAccess}>Users</a></li> : 
                "" }                
                {/* <li><a href="#">Contact Us</a></li> */}

                
                {window.sessionStorage.getItem('loginStatus') === 'true'? 
                
                <li><a className="link-outline" onClick={Dropd}><FaRegUserCircle className="user-login"/> </a></li>
                
                
                : <li><a className="link-outline" href="/login">Login</a></li>
            }
                {/* <li><a className="link-outline" href="/login">{window.sessionStorage.getItem('loginStatus') == 'true'? <FaRegUserCircle className="user-login"/> : "Login"}</a></li> */}
                
                
                {/* <li>  <Link to='Page/Home'>Home</Link></li>
                 <li> <Link to='Page/Project'>Project</Link> </li>
              <li>  <Link to='Page/Login'>Login</Link> </li> */}

            
             
            </ul>

        </header>
          
            </div>



        </div>

        
 )
}

export default Navbar
