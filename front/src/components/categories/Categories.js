import React from 'react'
import "./categories.css"


const Categories = () => {
  return (
    <div className='categories-container'>
        <div className='categories'>
            <a href='/' className='cat-tag'>
            <i id="list" class="fas fa-list"></i>
            </a>
            <a href='/' className='cat-tag'>
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
            </a>
        </div>

    </div>
  )
}

export default Categories