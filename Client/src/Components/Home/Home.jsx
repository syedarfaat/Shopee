import React, { useState,useEffect } from 'react'
import Category from './Category/Category'
import { fetchDataFromApi } from '../../utis/api'
import './home.scss'
import Banner from './Banner/Banner'
import Newsletter from '../Footer/Newsletter/Newsletter'
import Products from '../Products/Products'
import { useContextProvider } from '../../utis/context'

export default function Home() {
  useEffect(()=>{
    getCategories();
    getProducts()
},[])

const {setCategories}=useContextProvider();
const {setProducts}=useContextProvider();

const getCategories=()=>{
  fetchDataFromApi("/api/categories?populate=*").then(res=>{
    setCategories(res);
    console.log(res)})
}
const getProducts=()=>{
  fetchDataFromApi("/api/products?populate=*").then(res=>{
    setProducts(res);
    console.log(res)})
}
  
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
