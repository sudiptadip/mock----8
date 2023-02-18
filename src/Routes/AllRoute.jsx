import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Cart from "../Pages/Cart"
import Order from "../Pages/Order"
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
    </Routes>
  )
}
