import React, { useEffect, useState } from 'react'
import './SingleProduct.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaCartPlus } from 'react-icons/fa'
import RelatedProduct from './RelatedProduct'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useContextProvider } from '../../../utis/context'
import { useLocation } from 'react-router-dom'

export default function SingleProduct() {
  const Location=useLocation();
  
  const{addToCart,cartItems,handleRemoveFromCart}=useContextProvider();
  const {id}=useParams();
  const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log(data);
  const [cartSize,EditCart]=useState(1);

  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'});
    EditCart(1);
  },[Location])

  const increment=()=>{
    EditCart(prev=>prev+1);
  }
  const decrement=()=>{
    EditCart(prev=>
      {
        if(prev==1)return 1;
        else return prev-1
      });
  }
  
  return (
    <div className='single-product-main-cotent'>
    <div className='single-product-layout'>
      <div className='single-product-page'>
        <div className='product-picture'>
        <img src={process.env.REACT_APP_DEV_URL+data?.data[0]?.attributes.img.data.attributes.url}/>
        </div>
        <div className='product-details'>
              <div className='product-main-details'>
                <div className='name'>{data?.data[0]?.attributes.product_name}</div>
                <div className='price'>₹{data?.data[0]?.attributes.price}</div>
                <div className='description'>{data?.data[0]?.attributes.description}</div>
                <div className='inputs'>
                <div className='quantity-buttons'>
                <span onClick={()=>{decrement()}}>-</span>
                      <span >{cartSize}</span>
                      <span onClick={()=>{increment()}}>+</span>
                      
                </div>
                <button className="cart-button" onClick={()=>{addToCart({item:data,count:cartSize})}}><FaCartPlus/> Add to Cart </button>
                </div>
          
              </div>
              <div className='meta-data'>
              <div className='category-detials'>
              <div className='section-name'>Category:</div>
              <div className='category-name'>Smart Watches</div>
              </div>
              
            
                <div className='social-media'>
                    <div className='section-name'>Share:</div>
                    <div className='icons'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedin/>
                    <FaPinterest/>
                    </div>
                </div>
              </div>

        </div>
    </div>
    <RelatedProduct
    CategoryId={data?.data[0]?.attributes.categories.data[0].id} 
    ItemId={data?.data[0].id}
    />
  </div>
  </div>
  )
}
