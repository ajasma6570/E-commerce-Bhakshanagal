import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faL, faRightFromBracket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom"

export default function NavBar() {

  const [isNav1Active, setIsNav1Active] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const navigate=useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsNav1Active(window.innerWidth >= 990);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate('/login');
  }

  return (
    <header>
      
      <div id="top-header">
        <select class="form-select" aria-label="Default select example">
          <option value="1" selected>
            English
          </option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

   
      <nav class="navbar navbar-expand-lg bg-body-tertiary rounded text-center w-100" aria-label="Eleventh navbar example">
      <div class="container-fluid mx-auto w-75">
        <Link class="navbar-brand" to="/"><img
                src="./logo.png"
                alt=""
                style={{ width: "150px", height: "60px" }}
              /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center" style={{width:"100%"}}>

            <li class="nav-item mx-3" style={{width:"65%"}}>
              
            <div className="input-group">
              <input
                id="form-input"
                type="search"
                className="form-control form-control-dark"
                placeholder="What are you looking for?"
                aria-label="Search"
                style={{
                  height: "40px",
                  background: "#ECEBEB",
                  fontSize: "14px",
                }}
              />
              <button
                className="btn"
                type="button"
                style={{
                  marginLeft: "-50px",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: "grey", width: "15px", height: "15px" }}
                />
              </button>
            </div>            
            </li>

             <li className="mt-3">  <div class="dropdown cart-dropdown ">

              {!userInfo && 
                    <Link to="/login" id="login_btn" class="btn btn-outline-light text-black mx-2 font-weight-bold" style={{ fontSize: "1.4rem"}}>
                    Login
                </Link>
              }
  

              {userInfo && <div >
                <Link to="/" id="user_btn" class="btn btn-outline-light text-black mx-2 font-weight-bold" style={{ fontSize: "1.4rem"}}>
                <div style={{display:"flex"}}> 
                  <div className="bg-danger" style={{borderRadius:"15px",width:"35px",height:"35px"}}>
                  <FontAwesomeIcon icon={faUser} color="white"/>
                  </div>
              
                <span className="ms-1">Ajas</span>
                </div>
                </Link>
                <div class="dropdown-menu" aria-labelledby="user_btn">
            <ul className="login_dropdown">
                <li className="mb-2"><Link class="list-group-item <%-locals.log-%>" ><FontAwesomeIcon icon={faUser} className="me-2"/>Manage My Account</Link></li>
                <li className="mb-2"><Link class="list-group-item <%-locals.log-%>" ><FontAwesomeIcon icon={faBagShopping } className="me-2"/>My Order</Link></li>
                <li className="mb-2"><Link class="list-group-item <%-locals.sign1-%>" ><FontAwesomeIcon icon={faBell} className="me-2"/>Notification</Link></li>
                <li className="mb-2"><Link class="list-group-item  <%-locals.sign2-%>" ><FontAwesomeIcon icon={faHeart} className="me-2"/>Whishlist</Link></li>
                <li className="mb-2"><Link class="list-group-item  <%-locals.sign2-%>" ><FontAwesomeIcon icon={faEnvelope} className="me-2"/>Offer Zone</Link></li>
                <li className="mb-2" onClick={handleLogout}><Link class="list-group-item  <%-locals.sign2-%>" ><FontAwesomeIcon icon={faRightFromBracket} className="me-2" />Logout</Link></li>

            </ul>
        </div>
              </div>}

      
    </div>
    </li>

        <li class=" mx-1 mt-3"><Link href="" className="text-dark"><FontAwesomeIcon icon={faShoppingCart} style={{ height: "25px", width: "38px" }} /></Link></li>
            <li class=" mx-1 mt-2"> <Link href="" className="text-dark"><FontAwesomeIcon icon={faHeart} style={{ height: "25px", width: "38px" }} /></Link></li>
          </ul>
        </div>



        
      </div>
    </nav>
     

      {/* <div id="header" className="my-2">
        <div class="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "80px" }}>
              <img
                src="./logo.png"
                alt=""
                style={{ width: "196px", height: "85px" }}
              />
            </div>
            <div
              className="mx-2"
              style={{ borderLeft: "1px solid #afabab", height: "90px" }}
            ></div>
          </div>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 justify-content-center"
            role="search"
          >
            <div className="input-group">
              <input
                id="form-input"
                type="search"
                className="form-control form-control-dark"
                placeholder="What are you looking for?"
                aria-label="Search"
                style={{
                  width: "700px",
                  height: "40px",
                  background: "#ECEBEB",
                  fontSize: "14px",
                }}
              />
              <button
                className="btn"
                type="button"
                style={{
                  marginLeft: "-50px",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: "grey", width: "15px", height: "15px" }}
                />
              </button>
            </div>
          </form>

         <div class="text-end mt-4 d-flex align-items-center">
    <div class="dropdown cart-dropdown">
        <button type="button" id="login_btn" class="btn btn-outline-light text-black mx-2" style={{ fontSize: "1.4rem", fontWeight: "500" }}>
            Login
        </button>
        <div class="dropdown-menu" aria-labelledby="login_btn">
            <ul className="login_dropdown">
                <li className="mb-2"><a class="list-group-item <%-locals.log-%>" href="/userprofile"><FontAwesomeIcon icon={faUser} className="me-2"/>Manage My Account</a></li>
                <li className="mb-2"><a class="list-group-item <%-locals.log-%>" href="/logout"><FontAwesomeIcon icon={faBagShopping } className="me-2"/>My Order</a></li>
                <li className="mb-2"><a class="list-group-item <%-locals.sign1-%>" href="/login"><FontAwesomeIcon icon={faBell} className="me-2"/>Notification</a></li>
                <li className="mb-2"><a class="list-group-item  <%-locals.sign2-%>" href="/signup"><FontAwesomeIcon icon={faHeart} className="me-2"/>Whishlist</a></li>
                <li className="mb-2"><a class="list-group-item  <%-locals.sign2-%>" href="/signup"><FontAwesomeIcon icon={faEnvelope} className="me-2"/>Offer Zone</a></li>
                <li className="mb-2"><a class="list-group-item  <%-locals.sign2-%>" href="/signup"><FontAwesomeIcon icon={faRightFromBracket} className="me-2"/>Logout</a></li>

            </ul>
        </div>
    </div>

    <button type="button" class="btn mx-2">
        <FontAwesomeIcon icon={faShoppingCart} style={{ height: "25px", width: "38px" }} />
    </button>
    
    <button type="button" class="btn mx-2">
        <FontAwesomeIcon icon={faHeart} style={{ height: "25px", width: "38px" }} />
    </button>
</div>

        </div>
      </div> */}
      
    </header>
  );
}
