import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import ProductView from '../Components/ProductView/ProductView'
import Footer from '../Components/Footer'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

export default function ProductViewPage() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div>
        <NavBar/>
        <ProductView/>
        <RelatedProducts/>
        <Footer/>
    </div>
  )
}
