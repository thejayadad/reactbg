import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>

     <div className='row'>
     <div className='footer-col'>
        <h4>Categories</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className='footer-col'>
        <h4>Categories</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className='footer-col'>
        <h4>Categories</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className='footer-col'>
        <h4>Follow Us</h4>
        <ul className='footer-links'>
          <li><Link to="/">Instagram</Link></li>
          <li><Link to="/">YouTube</Link></li>
          <li><Link to="/">Facebook</Link></li>
          <li><Link to="/">TikTok</Link></li>
        </ul>
      </div>

     </div>
    </footer>
  )
}

export default Footer