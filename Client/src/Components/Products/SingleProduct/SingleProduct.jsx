import React from 'react'
import './SingleProduct.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaCartPlus } from 'react-icons/fa'
import earbuds from '../../../Assets/products/earbuds-prod-2.webp'
import RelatedProduct from './RelatedProduct'
export default function SingleProduct() {
  return (
    <div className='single-product-main-cotent'>
    <div className='single-product-layout'>
      <div className='single-product-page'>
        <div className='product-picture'>
        <img src={earbuds}/>
        </div>
        <div className='product-details'>
              <div className='product-main-details'>
                <div className='name'>boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display,
                Multiple Watch Faces</div>
                <div className='price'>₹4499</div>
                <div className='description'>Shoutout to all who see the glass half full. It is time to swithc over to 
                the bright side. Watch Iris will get you trhough the weekw ith a 7-day
                 a battery back up. Thrive Through your success with all the important notifications on your 
                smartwatch.</div>
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
    <RelatedProduct/>
  </div>
  </div>
  )
}
