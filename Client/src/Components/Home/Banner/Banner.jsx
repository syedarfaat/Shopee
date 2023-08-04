import React from 'react'
import Bannerimg from'../../../Assets/banner-img.png'
import './Banner.scss'
export default function Banner() {
  return (
    <div className='hero-banner'>
         <div className='content'>
            <div className='text-content'>
                <h1>SALES</h1>
                <p>
                    Covallis interdum purus adipiscing dis partuient posuere 
                    ac a quam a eleifend montes parturient posuere curae tempor

                </p>
                <div className='ctas'>
                    <div className='banner-cta'>Read More</div>
                    <div className='banner-cta v2'>Shop Now</div>
                </div>
                </div>
            <img className='banner-img' alt='' src={Bannerimg}/>
        </div>
    </div>
  )
}
