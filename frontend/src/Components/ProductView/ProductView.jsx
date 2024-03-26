import React, { useEffect, useState } from "react";
import { faArrowRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductView() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      try {
        const response = await axios.post(`/api/user/productView`,{productid});
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [productid]);
console.log(product);
  return (
    <>

    {loading && <h1>Loading</h1>}

    {!loading &&  
    
    <section class="py-5">
    <div class="container">
      <div class="row ">
        <div class="col-md-6">
          <div class="product-gallery product-gallery-vertical">
            <div class="row">

            
              <div
                id="product-zoom-gallery"
                class="product-image-gallery col-lg-3 gap-4"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <a
                  class="product-gallery-item active"
                  href="#"
                  data-image="assets/images/products/single/centered/1.jpg"
                  data-zoom-image="assets/images/products/single/centered/1-big.jpg"
                >
                  <img
                    src=""
                    alt="product side"
                    width="100px"
                    height="100px"
                  />
                </a> 

                <a
                  class="product-gallery-item"
                  href="#"
                  data-image="assets/images/products/single/centered/2.jpg"
                  data-zoom-image="assets/images/products/single/centered/2-big.jpg"
                >
                  <img
                    src="./Assets/product111.png"
                    alt="product cross"
                    width="100px"
                    height="100px"
                  />
                </a>

                <a
                  class="product-gallery-item"
                  href="#"
                  data-image="assets/images/products/single/centered/3.jpg"
                  data-zoom-image="assets/images/products/single/centered/3-big.jpg"
                >
                  <img
                    src="./Assets/product111.png"
                    alt="product with model"
                    width="100px"
                    height="100px"
                  />
                </a>

                <a
                  class="product-gallery-item"
                  href="#"
                  data-image="assets/images/products/single/centered/4.jpg"
                  data-zoom-image="assets/images/products/single/centered/4-big.jpg"
                >
                  <img
                    src=""
                    alt="product back"
                    width="100px"
                    height="100px"
                  />
                </a>
              </div>
         

              <figure
                class="product-main-image col-lg-3"
                style={{
                  width: "400px",
                  height: "500px",
                  backgroundColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  id="product-zoom"
                  src="./Assets/product111.png"
                  data-zoom-image=""
                  alt="product image"
                />

                <a
                  href="#"
                  id="btn-product-gallery"
                  class="btn-product-gallery"
                >
                  <i class="icon-arrows"></i>
                </a>
              </figure>
            </div>
          </div> 
        </div>

        <main class="col-lg-6">
          <div class="ps-lg-3"> 
            <h4 class="title text-dark">{product.name}</h4>
            <div class="d-flex flex-row my-3">
              <div class="text-warning mb-1 me-2">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="text-muted">review(24) </span>
              <span> |</span>
              <span class="text-success ms-2">In stock</span>
            </div>

            <div class="mb-3">
             
            {product.offerprice !== 0 ? (
              <>
              <span class="h5">${product.offerprice}</span>
              <span class="h5 mx-3 text-danger"><s>${product.price}</s></span>
              </>
            ) : (
              <span class="h5 text-danger">${product.price}</span>
            )}
            </div>

            <p>
             {product.description}
            </p>

            <hr />

            <div class="row mb-4 mt-5">
              <div class="col-md-4 col-4 ">
                <div class="input-group">
                  <button
                    class="btn btn-white border border-secondary px-3"
                    type="button"
                    id="button-addon1"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <input
                    type="text"
                    class="form-control text-center border border-secondary"
                    placeholder="14"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    class="btn btn-white border border-secondary px-3"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div class="col-md-4 col-4">
                <Link to="" class="btn btn-danger shadow-0">
                  {" "}
                  Buy Now
                </Link>
              </div>

              <div class="col-md-4 col-4 mb-3">
                <Link
                  to=""
                  class="btn btn-light border border-secondary icon-hover px-3"
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ height: "20px", width: "30px" }}
                />
                </Link>
              </div>
            </div>

            <div className="border border-dark ">
              <div className="containeer-fluid p-3">
                <div className="row">
                  <div className="col-lg-2">
                    <FontAwesomeIcon
                      icon={faTruck}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>

                  <div className="col-lg-10">
                    <p className="fw-bolder">Free Delivery</p>
                    <span>
                      <Link>
                        Enter your postal code for delivery Availability
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-dark">
              <div className="containeer-fluid p-3">
                <div className="row">
                  <div className="col-lg-2">
                    <FontAwesomeIcon
                      icon={faArrowRotateLeft}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>

                  <div className="col-lg-10">
                    <p className="fw-bolder">Return Delivery</p>
                    <span>
                      Free 30 Days Delivery Returns.<Link>Details</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
    }
  

    
    </>
  );
}
