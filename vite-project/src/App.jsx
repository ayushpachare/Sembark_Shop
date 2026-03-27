import { useState } from 'react'
import './App.css'
import HomePage from './page/HomePage'
import CartPage from './component/my_card/MyCard'
import ProductPage from './page/ProductPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './pageAnimation/Layout'

const router = createBrowserRouter([
  
  {
    element: <Layout/>,
    children:[
      {
    path : '/',
    element : <HomePage/>
  },
  {
    path :'/product',
    element : <ProductPage/>
  },
  {
    path :'/cart',
    element : <CartPage/>
  }
    ]
  }
])

function App() {


  return (
   <>
   <CartProvider>
  <RouterProvider router={router}/>
   </CartProvider>
   </>
  )
}

export default App