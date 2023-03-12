import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Post from '../../components/post/Post'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Categories />
    <section className='post-section'>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    </section>
    <Footer />
    </div>
  )
}

export default Home