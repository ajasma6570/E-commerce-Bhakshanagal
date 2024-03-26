import React, { useState, useEffect } from "react";
import "./FlashSales.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import Products from "./Products";
import { Link } from "react-router-dom";

export default function  FlashSales() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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

  // Function to update timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("2024-03-31").getTime(); // Set your target end date here
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5 
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 const product =   products.map((item,index)=> <Products  productId={item._id} name={item.name} image={item.productimage[0]} price={item.price} discountPrice={item.offerprice} 
 offer={item.offerpercentage} rating={item.rating} reviewCount={item.reviewCount} index={index}
 /> )

  return (
    <div className="flash_sales">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="small-rectangle"></span>
        <span className="small-head">Today's</span>
      </div>

      <section
        className="timer-container"
        style={{ position: "relative", top: "-15px" }}
      >
        <section className="timer">
          <div>
            <h2>Flash Sales</h2>
          </div>

          <div style={{ position: "relative", bottom: "15px" }}>
            <section>
              <p>
                <small>Days</small>
              </p>
              <p className="actual_value">{days}</p>
            </section>
            <span className="colon">:</span>
            <section>
              <p>
                <small>Hours</small>
              </p>
              <p className="actual_value">{hours}</p>
            </section>
            <span className="colon">:</span>
            <section>
              <p>
                <small>Minutes</small>
              </p>
              <p className="actual_value">{minutes}</p>
            </section>
            <span className="colon">:</span>
            <section>
              <p>
                <small>Seconds</small>
              </p>
              <p className="actual_value">{seconds}</p>
            </section>
          </div>
        </section>
      </section>



     <div className="slider-container ">
     <Carousel responsive={responsive} >
        {product}
        </Carousel>
    </div>

        <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
            <Link to='ProductList' style={{backgroundColor:"#DB4444", border:"none",color:"white",padding:"15px",borderRadius:"10px",textDecoration:"none"}}>View All Products</Link>
        </div>

        <hr style={{width:"90%",margin:"auto"}} className="my-5"/>
    </div>
  );
}
