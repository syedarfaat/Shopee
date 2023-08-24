import React from 'react'
import './SingleProduct.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaCartPlus } from 'react-icons/fa'
import earbuds from '../../../Assets/products/earbuds-prod-2.webp'
import RelatedProduct from './RelatedProduct'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
export default function SingleProduct() {
  window.scrollTo({top:0,behavior:'smooth'});
  const {id}=useParams();
  const {data}=useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log(data)
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
                <span className='plus'>+</span>
                <span className='numbers'>5</span>
                <span className='negetive'>-</span>
                </div>
                <button className="cart-button"><FaCartPlus/> Add to Cart </button>
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
