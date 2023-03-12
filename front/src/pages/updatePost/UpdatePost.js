import React from 'react'
import "./updatePost.css"
import Navbar
 from '../../components/navbar/Navbar'
 import Categories from '../../components/categories/Categories'
 import Footer from '../../components/footer/Footer'


const UpdatePost = () => {
  return (
    <div>
    <Navbar />
    <Categories />
    <section className='create-section'>
        <h2>Create Post</h2>
    <div className='create-post'>
        <form>
            <input
                placeholder='Title'
            />
            <textarea
            rows="5"
            cols="30"
            placeholder='Description'
            >

            </textarea>
            <select>
                <option>All Categories</option>
                <option>Sports</option>
                <option>Sports</option>
                <option>Sports</option>
                <option>Sports</option>

            </select>
            <button className='create-btn'>Create</button>
        </form>
    </div>
    </section>
    <Footer />

</div>
  )
}

export default UpdatePost