import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <nav>
          <div className='menu'>
            <Link id='menu' to="/">Home</Link>
          </div>
          <div className='logo'>
            <h2>Vent Blog</h2>
          </div>
          <div className='profile'>
            
          </div>
        </nav>
    </header>
  )
}

export default Navbar