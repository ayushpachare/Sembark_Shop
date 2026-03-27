import { useState } from 'react'
import '../App.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Home'
import CategorySection from '../component/Categories'
import Features from '../component/Feature'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'
import CardNavbar from '../component/card/Navbar'
import ProductsSection from '../component/card/ProductCard'
import Cart from '../component/my_card/MyCard'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Hero/>
   <CategorySection/>
   <Features/>
   <Newsletter/>
   <Footer/>
   </>
  )
}

export default HomePage