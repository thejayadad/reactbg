import React from 'react'
import "./register.css"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link, useNavigate} from "react-router-dom"
import { request } from '../../utils/fetchApi'
import { useState } from 'react'
import { register } from '../../redux/authSlice'
import {useDispatch} from 'react-redux'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = async (e) => {
       e.preventDefault()

       if(username === '' || email === '' || password === '') return

      try {
        const options = {'Content-Type': 'application/json'}

        const data = await request('/auth/register', "POST", options, {username, email, password})
        dispatch(register(data))
        navigate("/")
      } catch (error) {
         console.error(error)
      }
    }
  return (
    <div>
        <Navbar />
        <section className='create-section'>
            <h2>Register</h2>
        <div className='create-post'>
            <form onSubmit={handleRegister}>
                <input
                    placeholder='UserName'
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                />
                   <input
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                   <input
                    placeholder='PassWord'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
               <button type='submit' className='create-btn'>Join Us</button>
               <p>Already have an account? <Link to='/login'>Login</Link></p>

            </form>
        </div>
        </section>
    <Footer />
    </div>
  )
}

export default Register