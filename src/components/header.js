
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

 function Header(props)
{
 

   
 
    return(
        <header>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid"  >
      <Link className="navbar-brand" to="/">My Portfolio</Link>  
    
    <div className="collapse navbar-collapse"   id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/About">About</Link>
        </li>

           <li className="nav-item dropdown active"  aria-current="page">
        
          <Link className="nav-link dropdown-toggle" to="/Projects" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
            Projects
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-item"><Link to="/Headlines">newsapp</Link></li>
           
               
                      <li className="dropdown-item"><Link to="/ToDoList">To-Do List</Link> </li> 
            <li><a className="dropdown-divider"></a></li>
          <li className="dropdown-item"><Link to="/weatherApp">weather App</Link> </li> 
            {/* <li><Link className="dropdown-item" to="/weatherApp">Weather App</Link></li> */}
           
           <li className="dropdown-item"><Link to="/QRcode">QRcode</Link> </li> 
          </ul>
         </li> 
        
      </ul>  

            <button className="navbar-toggler" type="button" role="switch" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
    
      <span className="navbar-toggler-icon"></span>
       </button> 
       
         <div className={`form-check form-switch text-${props.mode === 'light'? 'Dark': 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>   

 
    </div>
  </div>
</nav>

        </header>
        

        
    );
}
 export default Header;

