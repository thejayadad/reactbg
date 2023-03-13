import React from 'react'
import "./login.css"
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import {Link, useNavigate} from "react-router-dom"
import Footer from '../../components/footer/Footer'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/authSlice'
import { request } from '../../utils/fetchApi'




const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(email === '' || password === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      }


      const data = await request("/auth/login", 'POST', options, {email, password})
       console.log(data)
      dispatch(login(data))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
    <Navbar />
    <section className='create-section'>
        <h2>LogIn</h2>
    <div className='create-post'>
        <form onSubmit={handleLogin}>
              <input
                placeholder='Email'
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
               <input
                placeholder='PassWord'
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
           <button type='submit' className='create-btn'>Join Us</button>
           <p>Dont have any account? <Link to='/register'>Register</Link></p>

        </form>
    </div>
    </section>
<Footer />
</div>
  )
}

export default Login