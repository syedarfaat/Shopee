import React from 'react'
import Earpod1 from '../../../Assets/products/earbuds-prod-3.webp';
import Earpod2 from '../../../Assets/products/earbuds-prod-2.webp';
import Earpod3 from '../../../Assets/products/earbuds-prod-1.webp';
import Earpod4 from '../../../Assets/products/earbuds-prod-4.webp';
import Earpod5 from '../../../Assets/products/earbuds-prod-5.webp';
import Product from '../Product/Product';
import './RelatedProduct.scss';
import useFetch from '../../../hooks/useFetch';

export default function RelatedProduct({CategoryId,ItemId}) {
  const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${CategoryId}`);
  console.log(data);
  return (
    <div className='related-products'>
    <div className='related-products-heading'>Related Products</div>
    <div className='products-strip'>
    
    {data?.data?.filter(item=>item.id!=ItemId).map((item)=>(
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
