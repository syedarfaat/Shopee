import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './header.css'

import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"



export default function Header() {
  const [sticky, setsticky]=useState(false)
    useEffect( ()=>{
      window.addEventListener("scroll",(event)=>{
        setsticky(window.scrollY>200?true:false)
      })
  }
  ,[])
  
  return (
    <header className={`main-header ${sticky?'sticky-header':''}`}>
   
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
        <TbSearch/>
        <AiOutlineHeart/>
          <span className='cart-icon'>
            <CgShoppingCart/>
            <span>
                  5
            </span>
            </span>
        </div>
        </div>
    </header>
  )
}
