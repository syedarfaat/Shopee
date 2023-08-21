import React from 'react';
import './Category.scss';
import Product from '../Products/Product/Product';
import headphonepic from '../../Assets/products/headphone-prod-6.webp'
import speaker from '../../Assets/products/speaker-prod-1.webp'
import earbuds from '../../Assets/products/earbuds-prod-2.webp'

export default function Category() {
    
  return (
    <div className='category-page'>
        <div className='category-cotent'>
        <div className='category-name'> Bluetooth Speakers
        </div>
        <div className='categories'>
        <Product picutre={headphonepic}/>
         <Product picutre={speaker}/>
         <Product picutre={headphonepic}/>
         <Product picutre={headphonepic}/>
         <Product picutre={earbuds}/>
         <Product picutre={headphonepic}/>
         <Product picutre={headphonepic}/>
         <Product picutre={speaker}/>
      </div>
      </div>
    </div>
  )
}
