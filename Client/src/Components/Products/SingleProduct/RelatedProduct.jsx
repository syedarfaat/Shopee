import React from 'react'
import Earpod1 from '../../../Assets/products/earbuds-prod-3.webp';
import Earpod2 from '../../../Assets/products/earbuds-prod-2.webp';
import Earpod3 from '../../../Assets/products/earbuds-prod-1.webp';
import Earpod4 from '../../../Assets/products/earbuds-prod-4.webp';
import Earpod5 from '../../../Assets/products/earbuds-prod-5.webp';
import Product from '../Product/Product';
import './RelatedProduct.scss';

export default function RelatedProduct() {
  return (
    <div className='related-products'>
    <div className='related-products-heading'>Related Products</div>
    <div className='products-strip'>
    
    <Product picutre={Earpod1}/>
    <Product picutre={Earpod2}/>
    <Product picutre={Earpod3}/>
    <Product picutre={Earpod4}/>
    <Product picutre={Earpod5}/>
    </div>
        
    </div>
  )
}
