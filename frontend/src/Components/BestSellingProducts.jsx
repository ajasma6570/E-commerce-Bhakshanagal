import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./BestSellingProducts.css";
import Products from "./Products";
import axios from 'axios'

export default function BestSellingProducts() {

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
      items: 4,
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
    <div className="best_Selling">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="small-rectangle"></span>
        <span className="small-head">This Month</span>
      </div>

      <section className="best_sell_container">
        <section className="heading">
          <div>
            <h2>Best Selling Products</h2>
          </div>
          <button className="button">View All</button>
        </section>
      </section>

      <Carousel responsive={responsive}>{product}</Carousel>

      {/* <section className="banner">
        <div style={{ width: "400px" }}>
          <h1 style={{ color: "white", fontSize: "3.2rem" }}>
            Explore Taste of Kerala
          </h1>

          <div style={{ display: "flex", gap: "30px" }}>
            <section className="circle_counter">
              <p className="actual_time" style={{ fontSize: "20px" }}>
                23
              </p>
              <p className="timer_head" style={{ fontSize: "12px" }}>
                Hours
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" style={{ fontSize: "20px" }}>
                05
              </p>
              <p className="timer_head" style={{ fontSize: "12px" }}>
                Days
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" style={{ fontSize: "20px" }}>
                59
              </p>
              <p className="timer_head" style={{ fontSize: "12px" }}>
                Minutes
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" style={{ fontSize: "20px" }}>
                35
              </p>
              <p className="timer_head" style={{ fontSize: "12px" }}>
                Seconds
              </p>
            </section>
          </div>

          <button
            style={{
              backgroundColor: "#00FF66",
              border: "none",
              color: "white",
              padding: "16px 48px ",
              borderRadius: "4px",
            }}
          >
            Buy Now!
          </button>
        </div>

        <div>
          <img
            id="img_banner"
            src="./Assets/TasteOfKerala.png"
            alt=""
            style={{ width: "550px", height: "500px" }}
          />
        </div>
      </section> */}


      <div className="container1" style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <div className="banner1" style={{ order: 1 }}>
           <h2 id="sub_heading">Explore taste of kerala</h2>

           <div id="counter_container" >
            <section className="circle_counter">
              <p className="actual_time" >
                23
              </p>
              <p className="timer_head" >
                Hours
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" >
                05
              </p>
              <p className="timer_head">
                Days
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" >
                59
              </p>
              <p className="timer_head" >
                Minutes
              </p>
            </section>

            <section className="circle_counter">
              <p className="actual_time" >
                35
              </p>
              <p className="timer_head" >
                Seconds
              </p>
            </section>
          </div>

         <button
            style={{
              backgroundColor: "#00FF66",
              border: "none",
              color: "white",
              padding: "16px 48px ",
              borderRadius: "4px",
            }}
          >
            Buy Now!
          </button>
        </div>

        <div className="img-container" style={{ order: 2 }}>
          <img
            id="img_banner"
            
            src="./Assets/TasteOfKerala.png"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}
