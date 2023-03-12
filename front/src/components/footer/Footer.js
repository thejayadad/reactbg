import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
          <h3>Vent Blog</h3>
          <p>We are a safe space to share your thoughts and feelings without being judged</p>
          <div className='footer-social'>
              <span><i id='facebook' class="fab fa-facebook"></i></span>
          <span><i id='youtube' class="fab fa-youtube"></i></span>
          <span><i id='instagram' class="fab fa-instagram"></i></span>
          <span><i id='twitter' class="fab fa-twitter"></i></span>
          </div>
           <div className='footer-bottom'>
          <p>Copyright &copy;2023 </p>
        </div>
    </div>
    </footer>
  )
}

export default Footer