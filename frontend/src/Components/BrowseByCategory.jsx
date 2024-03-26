import React, { useState } from "react";
import "./BrowseByCategory.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function BrowseByCategory() {
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  const [category, setCategory] = useState([
    {
      name: "Pure Veg",
      image: "category1.png",
    },
    {
      name: "Non-Veg",
      image: "category1.png",
    },
    {
      name: "Sweets",
      image: "category1.png",
    },
    {
      name: "Salt",
      image: "category2.png",
    },
    {
      name: "Nuts",
      image: "category1.png",
    },
    {
      name: "Drinks",
      image: "category1.png",
    },
    {
      name: "Beverages",
      image: "category2.png",
    },
    {
      name: "Snacks",
      image: "category2.png",
    },
    {
      name: "Deserts",
      image: "category2.png",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6 
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="category">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="small-rectangle"></span>
        <span className="small-head">Categories</span>
      </div>

      <h2 style={{ marginTop: "15px", marginBottom: "50px" }}>
        Browse By Category
      </h2>

      <div className="slider-container" style={{}}>
      <Carousel responsive={responsive} >
          {category.map((category, index) => (
            <div key={index} style={{ display: "flex",justifyContent:"center" ,marginBottom:"10px"}}>
              <div
                className="Product_card"
                style={{ width: "270px",display:"flex", justifyContent:"center"}}
              >
                <div
                  onMouseEnter={() => setHoveredProductIndex(index)}
                  onMouseLeave={() => setHoveredProductIndex(null)}
                  style={{
                    width: "170px",
                    height: "145px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      hoveredProductIndex === index ? "#DB4444" : "",
                  }}
                >
                  <img
                    src={`./Assets/${category.image}`}
                    alt=""
                    style={{ width: "75px", height: "75px" }}
                  />
                  <p
                    className="my-2"
                    style={{ color: hoveredProductIndex === index ? "white" : "" }}
                  >
                    {category.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <hr style={{ width: "90%", margin: "auto"}} className="my-5" />
    </div>
  );
}
