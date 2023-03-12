import React from 'react'
import "./register.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link} from "react-router-dom"


const Register = () => {
  return (
    <div>
        <Navbar />
        <section className='create-section'>
            <h2>Register</h2>
        <div className='create-post'>
            <form>
                <input
                    placeholder='UserName'
                />
                   <input
                    placeholder='Email'
                />
                   <input
                    placeholder='PassWord'
                />
               <button className='create-btn'>Join Us</button>
               <p>Already have an account? <Link to='/login'>Login</Link></p>

            </form>
        </div>
        </section>
    <Footer />
    </div>
  )
}

export default Register