import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./create.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'
import { useState } from 'react'







const Create = () => {
    const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)


  const categories = [
    'sports',
    'programming',
    'news',
    'finance'
  ]

  const onChangeFile = (e) => {
    setImg(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImg(null)
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      let filename = null
      if (img) {
        filename = crypto.randomUUID() + img.name
        formData.append("filename", filename)
        formData.append("image", img)

        await fetch(`http://localhost:5000/upload`, {
          method: "POST",
          body: formData
        })
      } else {
        return
      }

      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      const body = {
        title,
        desc,
        category,
        photo: filename
      }


      const data = await request('/blog', "POST", options, body)
      navigate("/")

    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div>
        <Navbar />
        <Categories />
        <section className='create-section'>
            <h2>Create Post</h2>
        <div className='create-post'>
            <form onSubmit={handleCreateBlog} encType="multipart/form-data">
                <input
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                />
                <textarea
                rows="5"
                cols="30"
                placeholder='Description'
                onChange={(e) => setDesc(e.target.value)}

                >

                </textarea>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={crypto.randomUUID()} value={category}>{category}</option>
                ))}
              </select>
              <div >
              <label id="label" htmlFor='image' >
                Image: <span>Upload here</span>
              </label>
              <input
                id="image"
                type="file"
                onChange={onChangeFile}
                style={{ display: 'none' }}
              />
              {img && <p >{img.name} <i onClick={() => handleCloseImg()} class="fas fa-times"></i></p>}
            </div>
                <button type='submit' className='create-btn'>Create</button>
            </form>
        </div>
        </section>
        <Footer />

    </div>
  )
}

export default Create