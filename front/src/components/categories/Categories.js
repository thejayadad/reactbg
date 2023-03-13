import React from 'react'
import "./categories.css"
import { useEffect } from 'react'
import { useState } from 'react'
import { request } from '../../utils/fetchApi'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


const Categories = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'sports',
    'programming',
    'news',
    'finance'



  ]

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await request('/blog/getAll', 'GET')
        setBlogs(data)
        setFilteredBlogs(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    if(activeCategory === 'all'){
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs((prev) => {
        const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase())

        return filteredBlogs
      })
    }
  }, [activeCategory])


  return (
    <>
    <div className='categories-container'>
        <div className='categories'>
          {
            categories.map((category) => (
              <span
              key={crypto.randomUUID()}
              onClick={() => setActiveCategory(prev => category)}
              >
                {category}
              </span>
            ))
          }
        </div>
        </div>
        <section>
        {
          filteredBlogs?.length > 0 ?
          <div className=' cat-section'>
            {
              filteredBlogs?.map((blog) => (
                <div key={blog.id} className='card-one'>
                      <div className="card-top">
                      <span className="date">{format(blog?.createdAt)}</span>
                    <div className="icons">
                    <span><i id='facebook' class="fab fa-facebook"></i></span>
                      <span><i id='youtube' class="fab fa-youtube"></i></span>
                      <span><i id='instagram' class="fab fa-instagram"></i></span>
                      <span><i id='twitter' class="fab fa-twitter"></i></span>
                    </div>
                    </div>
                    <div className="card-title">
                    <h2>{blog?.title}</h2>
                    <h3>{blog?.userId?.username}</h3>
                  </div>
                  <Link to={`/detail/${blog?._id}`}>
                  <img  alt="pic" src={`http://localhost:5000/images/${blog?.photo}`} />
                  <p >
                      {blog?.desc}
                    </p>
                  </Link>
                  <div className='reaction'>
                <span>
      <a href='/' className='cat-tag'>
            <i id="list" class="fas fa-list"></i>
            </a>
            <span>{blog?.category}</span>

      </span>
      <span>
      <a href='/' className='cat-tag'>
      <i class="fas fa-eye"></i>
      </a>
            <span>{blog.views}</span>

      </span>
      <span>
      <a href='/' className='cat-tag'>
      <i class="fas fa-thumbs-up"></i>
            </a>
            <span>{blog?.likes?.length}</span>

      </span>
      <Link to={`/detail/${blog._id}`} >
                      Read More
                    </Link>

    </div>

                </div>
              ))
            }

          </div>
            : <h3>No Blogs</h3>
        }

    </section>
    </>
  )
}

export default Categories


{/* <a href='/' className='cat-tag'>
<i id="sports" class="fas fa-basketball-ball"></i>
</a>
<a href='/' className='cat-tag'>
<i id='tech' class="fas fa-microchip"></i>
</a>
<a href='/' className='cat-tag'>
<i id='news' class="fas fa-newspaper"></i>
</a>
<a href='/' className='cat-tag'>
<i id='money' class="fas fa-money-check-alt"></i>
</a> */}