import React from 'react'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import "./details.css"
import Footer from '../../components/footer/Footer'

const Details = () => {
  return (
   <div>
    <Navbar />
    <Categories />
     <section className='detail-container'>
        <div className='detail-post'>
        <div className="card-one">
    <div className="card-top">
      <span className="date">March 23 2023</span>
     <div className="icons">
     <span><i id='facebook' class="fab fa-facebook"></i></span>
      <span><i id='youtube' class="fab fa-youtube"></i></span>
      <span><i id='instagram' class="fab fa-instagram"></i></span>
      <span><i id='twitter' class="fab fa-twitter"></i></span>
     </div>
    </div>
    <div className="card-title">
      <h2>Card Title one</h2>
      <h3>User Name</h3>
    </div>
    <div className="card-content">
      <img alt="pic" src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <p>‘We’ve made this programme for Black parents,’ Mike Phillips said, introducing ‘Black Teachers’ on BBC2 in 1973. ‘We’ve got no intention of wasting our time on proving things that we all know.’ ‘Black Teachers’ was an episode of Open Door, a product of the BBC’s Community Programme Unit, founded a year earlier to profile groups and causes that had been ‘unheard or neglected’ by the media establishment. Its archive has been inaccessible for decades, but People Make Television, an exhibition at Raven Row in Spitalfields until 25 March, aims to change that, presenting a tightly curated – but still vast – selection of the material produced by the unit and its offshoots.</p>
    <div className='reaction'>
      <span>
      <a href='/' className='cat-tag'>
            <i id="list" class="fas fa-list"></i>
            </a>
            <span>Category</span>

      </span>
      <span>
      <a href='/' className='cat-tag'>
      <i class="fas fa-eye"></i>
      </a>
            <span>Views</span>

      </span>
      <span>
      <a href='/' className='cat-tag'>
      <i class="fas fa-thumbs-up"></i>
            </a>
            <span>Likes</span>

      </span>

    </div>
    </div>
  </div>
        </div>
    </section>
    <Footer />
   </div>
  )
}

export default Details