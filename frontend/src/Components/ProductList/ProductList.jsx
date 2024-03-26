import React, { useEffect, useState } from 'react';
import './productList.css'
import Products from '../Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function ProductList() {

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

const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

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

    {loading && <h1>Loading</h1>}

    {!loading &&
      <section className="section-products">
      <div className="container-fluid">
        <div className="row">
          {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
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
    }
  
  </div>
 
 )}
   



