import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import HomePageCarousel from '../Components/HomePageCarousel'
import FlashSales from '../Components/FlashSales'
import BrowseByCategory from '../Components/BrowseByCategory'
import BestSellingProducts from '../Components/BestSellingProducts'
import ExploreOurProducts from '../Components/ExploreOurProducts'
import NewArrivals from '../Components/NewArrivals'
import Footer from '../Components/Footer'
import ServiceTags from '../Components/ServiceTags'

export default function Homepage() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
    <NavBar/>
    <HomePageCarousel/>
    <FlashSales/>
    <BrowseByCategory/>
    <BestSellingProducts/>
    <ExploreOurProducts/>
    <NewArrivals/>
    <ServiceTags/>
    <Footer/>
    </>
  )
}
 