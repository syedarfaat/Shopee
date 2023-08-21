import React from 'react'
import image from '../../../Assets/products/earbuds-prod-1.webp'
import './Cartitem.scss'
import {MdClose} from 'react-icons/md';

export default function Cartitem() {
  return (
    <div className='cart-item'>
        <div className='img'>
            <img src={image}/>
        </div>
        <div className="right">
            <span className="name">boAt Vertex| Earbods mast something soemthing something</span>
            <MdClose className="closebtn"/>
            <div className='selection'>
                <span className='minus'>-</span>
                <span className="center">1</span>
                <span className="plus">+</span>
            </div>
            <div className='number'>1 x <span className="price">&#8377;2399</span></div>
        </div>
    </div>
  )
}
