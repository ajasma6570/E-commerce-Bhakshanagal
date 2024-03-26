import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../ExploreOurProducts.css";
import Products from "../Products";
import axios from 'axios';

export default function RelatedProducts() {

    
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    const getProducts=async()=>{
      const product = await axios.get('/api/user/listProduct')
      setProducts(product.data.products);
    }
    setLoading(false)
    getProducts()
  },[])


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
    
      const product = products.map((item, index) => (
        <Products
        productId={item._id}
      name={item.name}
      image={item.productimage[0]}
      price={item.price}
      discountPrice={item.offerprice}
      offer={item.offerpercentage}
      rating={item.rating}
      reviewCount={item.reviewCount}
      index={index}
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
