import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './header.css'
import Search from './Search/Search'

import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import Cart from '../Cart/Cart'
import { useContextProvider } from '../../utis/context'



export default function Header() {
const [sticky, setsticky]=useState(false);
 const [CartOpen,setCart]=useState(false);
    useEffect( ()=>{
      window.addEventListener("scroll",(event)=>{
        setsticky(window.scrollY>200?true:false)
      })
  }
  ,[])
  const {searchOn,SetSearchOn}=useContextProvider();
  
  return (
    <>
    <header className={`main-header ${sticky?'sticky-header':''}`}>
    {searchOn&&<Search/>}
      <div className='header-content'>
        <ul className='left' >
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CATEGORIES</li>
        </ul>
        <div className='title'>
          SHOPEE. 
        </div>
        <div className='right'>
        <TbSearch onClick={()=>SetSearchOn(true)}/>
        <AiOutlineHeart/>
          <span className='cart-icon' onClick={()=>setCart(true)}>
            <CgShoppingCart/>
            <span>
                  5
            </span>
            </span>
        </div>
        </div>
    </header>
    {CartOpen&&<Cart setCart={setCart}/>}
    
    </>
  )
}
