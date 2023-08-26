import React from 'react'
import Product from '../Product/Product';
import './RelatedProduct.scss';
import useFetch from '../../../hooks/useFetch';

export default function RelatedProduct({CategoryId,ItemId}) {
  const {data}=useFetch(`/api/products?populate=*&[filters][id][$ne]=${ItemId}&filters[categories][id]=${CategoryId}&pagination[start]=0&pagination[limit]=4`);

  return (
    <div className='related-products'>
    <div className='related-products-heading'>Related Products</div>
    <div className='products-strip'>
    
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
  )
}
