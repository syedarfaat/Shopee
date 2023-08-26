import React from 'react'
import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs'
import './Cart.scss'
import Cartitem from './Cartitem/Cartitem';
import { useContextProvider } from '../../utis/context';

export default function Cart({setCart}) {
    const {cartItems,cartCount}=useContextProvider();
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
        
           { cartItems.length==0&&<div className="empty-cart">
                <BsCartX />
                <span>No products in the cart.</span>
                <button className='return-cta'>return to shop</button>
            </div>
  }
        <>
        <div className='items-container'>
        
        {cartItems?.map(product=>{
            return <Cartitem 
            picture={process.env.REACT_APP_DEV_URL+product.item.data[0].attributes.img.data.attributes.url}
            name={product.item.data[0].attributes.product_name}
            price={product.item.data[0].attributes.price}
            count={product.count}
            product={product.item}
            /> 
        }

            
        )}
        

        </div>
        {cartItems.length>=1&&<div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">
                                    &#8377;{cartCount}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>}
        </>
        </div>
    </div>

  )
}
