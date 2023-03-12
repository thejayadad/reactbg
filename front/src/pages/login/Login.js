import React from 'react'
import "./login.css"
import Navbar from '../../components/navbar/Navbar'
import {Link} from "react-router-dom"
import Footer from '../../components/footer/Footer'

const Login = () => {
  return (
    <div>
    <Navbar />
    <section className='create-section'>
        <h2>LogIn</h2>
    <div className='create-post'>
        <form>
              <input
                placeholder='Email'
            />
               <input
                placeholder='PassWord'
            />
           <button className='create-btn'>Join Us</button>
           <p>Dont have any account? <Link to='/register'>Register</Link></p>

        </form>
    </div>
    </section>
<Footer />
</div>
  )
}

export default Login