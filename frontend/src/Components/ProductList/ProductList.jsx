import React, { useEffect, useState } from 'react';
import './productList.css'
import Products from '../Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function ProductList() {

  const [flashSaleProduct,setFlashSaleProduct] = useState([{
    id:1,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"40",
    rating:4,
    reviewCount:82
  },
  {
    id:2,
    name:"AK-900 wired keyboard",
    image:"product111.png",
    price:"1160",
    discountPrice:"960",
    offer:"35",
    rating:5,
    reviewCount:162
  },
  {
    id:3,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"20",
    rating:3,
    reviewCount:36
  },
  {
    id:4,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"48",
    rating:2,
    reviewCount:25
  },
  {
    id:5,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:1,
    reviewCount:12
  },
  {
    id:6,
    name:"AK-900 wired keyboard",
    image:"product111.png",
    price:"1160",
    discountPrice:"960",
    offer:"35",
    rating:3,
    reviewCount:70
  },
  {
    id:7,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"20",
    rating:2,
    reviewCount:32
  },
  {
    id:8,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"48",
    rating:3,
    reviewCount:52
  },
  {
    id:9,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:10,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:11,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:12,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:13,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:14,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:15,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:16,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:17,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:18,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:19,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:20,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:21,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:22,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:23,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:24,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:25,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:26,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:27,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  },
  {
    id:28,
    name:"chilly masala bingo",
    image:"product111.png",
    price:"160",
    discountPrice:"120",
    offer:"38",
    rating:4,
    reviewCount:75
  }
])

 

const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(flashSaleProduct.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [paginate])

  return (

    <div className='col-lg-9 col-md-9 col-7 mx-2 my-3 h-auto' >
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item text-secondary"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item text-dark"><Link >Products</Link></li>
      </ol>
    </nav>
    <section className="section-products">
      <div className="container-fluid">
        <div className="row">
          {flashSaleProduct.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
              <Products
                productId={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                discountPrice={item.discountPrice}
                offer={item.offer}
                rating={item.rating}
                reviewCount={item.reviewCount}
                index={index}
              />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <nav className='d-flex justify-content-center my-4'>
      
          <ul className="pagination">
            <li className="page-item">
            <button className='mx-2 btn btn-secondary rounded ' style={{color:"black"}} disabled>Page {currentPage}/{totalPages}</button>
            </li>
            <li className="page-item">
              <button className="page-link text-dark font-weight-bold" style={{border:"none"}} onClick={() => paginate(currentPage - 1)} hidden={currentPage === 1}>Previous</button>
            </li>
            {[...Array(totalPages).keys()].map(number => (
              <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(number + 1)} className="page-link rounded-pill mx-1 bg-danger text-white">
                  {number + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link text-dark font-weight-bold" style={{border:"none"}} onClick={() => paginate(currentPage + 1)} hidden={currentPage === totalPages}>Next</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className='d-flex justify-content-end'>
      <button className="" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
       <FontAwesomeIcon icon={faUpLong} style={{border:"none"}} width="20px" height="10px"/>
      </button>
      </div>
      
    </section>
  </div>
 
 )}
   



