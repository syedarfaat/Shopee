import React, { useState } from 'react'
import Category from './Category/Category'

import './home.scss'
import Banner from './Banner/Banner'
import Newsletter from '../Footer/Newsletter/Newsletter'
import Products from '../Products/Products'
import { useContextProvider } from '../../utis/context'
export default function Home() {
  
  return (
    <div className='homepage'>
     <Banner/>
      <div className='main-content'>
        <div className='layout'>
        <Category/>
        <Products/>
      </div>
      </div>
    </div>
  )
}
