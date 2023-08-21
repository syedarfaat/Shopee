import React from 'react'
import Product from './Product/Product'
import './Products.scss'
import headphonepic from '../../Assets/products/headphone-prod-6.webp'
import speaker from '../../Assets/products/speaker-prod-1.webp'
import earbuds from '../../Assets/products/earbuds-prod-2.webp'
export default function Products() {
  return (
    <div className='products-container'>
        <div className='sec-heading'>Products</div>
        <div className='products'>
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
  )
}
