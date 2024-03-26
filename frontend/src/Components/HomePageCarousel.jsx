import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
export default function HomePageCarousel() {


    const [bannerImage, setBannerImage] = useState([{image:"samosaBanner.jpg",heading1:"Up to 10%", heading2:"off Voucher"},
    {image:"banner2.jpg",heading1:"Up to 20%", heading2:"off Voucher"},
    {image:"banner3.jpg",heading1:"Up to 30%", heading2:"off Voucher"}]);

  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {bannerImage.map((obj, index) => (
                    <button key={index} type="button" data-bs-target="#myCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`} aria-current={index === 0 ? "true" : ""}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {bannerImage.map((obj, index) => (
                    <div key={index} className={`carousel-item w-100 ${index === 0 ? "active" : ""}`} style={{ height: "350px", 
                    backgroundImage: `url(./Assets/${obj.image})`,
                    backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>{obj.heading1}</h1><br/>
                                <h1>{obj.heading2}</h1>
                                <p><Link className="btn btn-lg btn-transparent text-white" >Shop now</Link><FontAwesomeIcon icon={faArrowRight} /> </p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}

