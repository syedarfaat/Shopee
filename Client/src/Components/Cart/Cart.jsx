import React from 'react'
import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs'
import './Cart.scss'
import Cartitem from './Cartitem/Cartitem';

export default function Cart({setCart}) {
  return (
    <div className='cart-panel'>
        <div className='opac-layer'></div>
        <div className='cart-content'>
            <div className="cart-header">
                <span className="heading">SHOPPING CART
                </span>
                <span className='close-btn'
                onClick={() => setCart(false)}

                > 
                <MdClose className='close-btn'/> 
                <span className='text'>Close</span>
              </span>
            </div>
        
           {/* <div className="empty-cart">
                <BsCartX />
                <span>No products in the cart.</span>
                <button className='return-cta'>return to shop</button>
            </div>
  */}
        <>
        <div className='items-container'>
        <Cartitem/> 
        <Cartitem/> 
        <Cartitem/> 
        <Cartitem/> 
        

        

        </div>
        <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">
                                    &#8377;234253
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
        </>
        </div>
    </div>

  )
}
