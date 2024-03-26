import React, { useState } from 'react'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function Products(props) {

    const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
    const [index,setIndex] = useState(props.index)

  return (

        <div className="Product_card" style={{ display: "flex",justifyContent:"center" ,margin:"15px"}} onMouseEnter={() => setHoveredProductIndex(index)}
              onMouseLeave={() => setHoveredProductIndex(null)} >
            <div class="product product-2" style={{ justifyContent:"center"}}>
              <figure
                class="product-media"
                style={{
                  backgroundColor: "#F5F5F5",
                  height: "250px",
                  width:"240px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              > 
                <Link to={`/productview/${props.productId}`}>
                    {props.offer != 0 &&  <p
                style={{
                    backgroundColor: "#DB4444",
                    position: "absolute",
                    top: 8,
                    left: 8,
                    padding: "4px 8px",
                    color: "white",
                    zIndex: 1,
                    borderRadius:"10px"
                }}
                >
                {props.offer}%
                </p>}
               
                {props.new  &&  <span
                style={{
                    backgroundColor: "#00FF66",
                    position: "absolute",
                    top: 8,
                    left: 8,
                    padding: "4px 8px",
                    color: "white",
                    zIndex: 1,
                    borderRadius:"10px"
                }}
                >
                {props.offer}New
                </span>}
    
                <span
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        padding: "4px 8px",
                        backgroundColor:"white",
                        color: "black", // Change the color to black
                        zIndex: 1,
                        borderRadius: "50%", // Optional: make it circular
                        border: "1px solid white", // Add black border
                    }}
                    >
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ height: "25px", width: "38px" }}
                    />
                    </span>
    
    
                  <img
                    src={`./Pictures/${props.image}`}
                    alt="Product "
                    class="product"
                    style={{ width: "172px", height: "152px" }}
                  />
                </Link>
                {hoveredProductIndex === index && (
                    <div
                    class="product-action-vertical"
                    style={{
                      backgroundColor: "black",
                      width: "100%",
                      height: "30px",
                      textAlign: "center",
                      position: "absolute",
                      bottom: 0,
                      alignContent: "center",
                      
                    }}
                    
                  >
                    <Link
                      class="btn-product-icon btn-wishlist btn-expandable"
                      style={{ textDecoration: "none", color: "white"}}
                    >
                      <span style={{ position:"relative",top:"5px"}}>Add to Cart</span>
                    </Link>
                  </div>
                )}
                
              </figure>
    
              <div class="product-body">
                <span class="">
                  <h6>{props.name.toUpperCase()}</h6>
                </span>
                <div class="product-price ">
                    {props.discountPrice !=0 && 
                     <span style={{ color: "#DB4444", marginRight: "1rem" }}>
                     ${props.discountPrice}{" "}
                   </span>
                   }
                 
                  <span style={{ color: props.discountPrice?"grey":"#DB4444" }}>
                    
                    {props.discountPrice?<s>${props.price}</s>:`$${props.price}`}
                  </span>
                </div>

           

              {[...Array(5)].map((star, index) => {
                            // Calculate the current rating based on the product's rating
                            const currentRate = Math.round(props.rating); // Adjust as needed
                            return (
                              <>
                                <label key={index} htmlFor={`star-${index}`}>
                                    {/* <input 
                                        type="radio" 
                                        id={`star-${index}`} 
                                        name={`rating-${index}`} 
                                        value={index + 1} 
                                        checked={index + 1 === currentRate} 
                                        readOnly 
                                    /> */}
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        size={50} 
                                        color={index < currentRate ? "#FFAD33" : "grey"} 
                                    />
                                </label>
                                </>
                            );
                        })}
                        <span className="mx-2">({props.reviewCount})</span>
              </div>


              
            </div>


          </div>
    
  )
}
