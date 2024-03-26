import React from 'react'
import ProductList from '../Components/ProductList/ProductList'
import NavBar from "../Components/NavBar"
import Sidebar from '../Components/Sidebar/Sidebar'
import ServiceTags from '../Components/ServiceTags'
import Footer from '../Components/Footer'


export default function ProductListPage() {
  return (
    <div>
       
        <NavBar />

      <div style={{display:"flex",justifyContent:"space-around"}}>
      <Sidebar />
      <ProductList/>
      </div>

      <ServiceTags/>
      <Footer/>
     

    </div>
  )
}
