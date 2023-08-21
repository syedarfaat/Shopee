import React from 'react'
import './Product.scss'

export default function Product({picutre}) {
  return (
    <div className='product'>
      <div className='product-thumbnail'>
      <img src={picutre}/>
      </div>
      <div className='product-details'>
        <div className='name'>
            Stone 1500F|14W boAt Sidfasfdasfsdfsadfsagnature Headphones 
        </div>
        <div className='price'>₹3500
         </div>
      </div>
    </div>
  )
}
