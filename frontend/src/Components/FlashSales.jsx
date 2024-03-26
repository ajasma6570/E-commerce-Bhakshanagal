import React, { useState, useEffect } from "react";
import "./FlashSales.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from 'react-multi-carousel';
import Products from "./Products";
import { Link } from "react-router-dom";

export default function  FlashSales() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const [rating, setRating] = useState(4)
  const [rateColor, setColor] = useState(null)


  const [flashSaleProduct,setFlashSaleProduct] = useState([{
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"40",
    rating:4,
    reviewCount:82
  },
  {
    name:"AK-900 wired keyboard",
    image:"product111.png",
    price:"1160",
    discountPrice:"960",
    offer:"35",
    rating:5,
    reviewCount:162
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"20",
    rating:3,
    reviewCount:36
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"48",
    rating:2,
    reviewCount:25
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:1,
    reviewCount:12
  },
  {
    name:"AK-900 wired keyboard",
    image:"product111.png",
    price:"1160",
    discountPrice:"960",
    offer:"35",
    rating:3,
    reviewCount:70
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"20",
    rating:2,
    reviewCount:32
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"48",
    rating:3,
    reviewCount:52
  },
  {
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  }
 
])


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

 const product =   flashSaleProduct.map((item,index)=> <Products name={item.name} image={item.image} price={item.price} discountPrice={item.discountPrice} 
 offer={item.offer} rating={item.rating} reviewCount={item.reviewCount} index={index}
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
