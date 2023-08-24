import React from 'react';
import './Category.scss';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product/Product';
import headphonepic from '../../Assets/products/headphone-prod-6.webp'
import speaker from '../../Assets/products/speaker-prod-1.webp'
import earbuds from '../../Assets/products/earbuds-prod-2.webp'
import useFetch from '../../hooks/useFetch';

export default function Category() {
    window.scrollTo({top:0,behavior:'instant'});
    const {id}=useParams();
    const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    console.log(data);
    
    
  return (
    <div className='category-page'>
        <div className='category-cotent'>
        <div className='category-name'> {data?.data[0]?.attributes?.categories?.data[0]?.attributes?.Title}
        </div>
        <div className='categories'>
        {data?.data?.map((item)=>(
          <Product 
            picutre={
                process.env.REACT_APP_DEV_URL+
                item.attributes.img.data.attributes.url
            } 
            product_name={item.attributes.product_name} 
            price={item.attributes.price}
            id={item.id}
             />)
        )}
        
      </div>
      </div>
    </div>
  )
}
