import React from 'react'
import './Category.scss'
import headphones from '../../../Assets/category/cat-1.jpg'
import sWatch from '../../../Assets/category/cat-2.jpg'
import Airpods from '../../../Assets/category/cat-3.jpg'
import Speakers from '../../../Assets/category/cat-4.jpg'

export default function Category() {
  return (
    <div className='categories-strip'>
      <div className='category'>
        <img src={headphones}/> 
      </div>
      <div className='category'>
        <img src={sWatch}/> 
      </div>
      <div className='category'>
        <img src={Airpods}/> 
      </div>
      <div className='category'>
        <img src={Speakers}/> 
      </div>
      
    </div>
  )
}
