import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ExploreOurProducts.css";
import Products from "../Products";

export default function RelatedProducts() {

    
    const [flashSaleProduct, setFlashSaleProduct] = useState([
        {
          name: "Chips",
          image: "product111.png",
          price: "100",
          rating: 5,
          reviewCount: 35,
          offer:"40"
        },
        {
          name: "Chips",
          image: "explore2.png",
          price: "100",
          rating: 5,
          new:true,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore3.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          new:true,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          new:true,
          reviewCount: 35
        },
        
        {
          name: "Chips",
          image: "explore4.png",
          price: "100",
          rating: 5,
          reviewCount: 35
        },
      ]);
    
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    
      const product = flashSaleProduct.map((item, index) => (
        <Products
          name={item.name}
          image={item.image}
          price={item.price}
          discountPrice={item.discountPrice}
          offer={item.offer}
          rating={item.rating}
          reviewCount={item.reviewCount}
          index={index} 
          new={item.new}
        />
      ));

  return (
    <div className="explore_products my-3">
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className="small-rectangle"></span>
      <span className="small-head">Our Products</span>
    </div>

    <section className="best_sell_container">
      <section className="heading">
        <div>
          <h2>Related Item</h2>
        </div>
      </section>
    </section>

    <Carousel responsive={responsive} >{product}</Carousel>

  </div>
  )
}
