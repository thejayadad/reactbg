import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
        <nav>
          <div className='menu'>
            Menu
          </div>
          <div className='logo'>
            <h2>Vent Blog</h2>
          </div>
          <div className='profile'>
            <p>Login</p>
          </div>
        </nav>
    </header>
  )
}

export default Navbar