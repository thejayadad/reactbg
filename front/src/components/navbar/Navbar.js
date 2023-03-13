import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

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
            <span id='login' onClick={() => setShowModal(prev=> !prev)}>Login</span>
            {
              showModal &&
              <div className='modal'>
                <Link id='create' to="/create">Create</Link>
                <span> Logout</span>

              </div>
            }
          </div>
        </nav>
    </header>
  )
}

export default Navbar