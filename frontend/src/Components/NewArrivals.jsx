import React from 'react';
import './NewArrival.css';

export default function NewArrivals() {

    const smallScreenStyle = {
        width: "130px",
        height: "130px"
      };
      
  return (


    <div className='newArrivals'>


<div style={{ display: "flex", alignItems: "center" }}>
        <span className="small-rectangle"></span>
        <span className="small-head">Featured</span>
      </div>

      <section className="best_sell_container">
        <section className="heading">
          <div>
            <h2>New Arrival</h2>
          </div>
        </section>
      </section>



    <div className='container-fluid h-auto p-5' style={{ minHeight: "500px", width: "100%" }}>

      <div className="row w-100 m-auto gap-3">

      <div className="col-lg-6 col-mb-6 mb-3 " style={{height:"430px",  backgroundColor: "black", position: "relative", width: "450px" }}>
  <div style={{ position: "absolute ", bottom: "0", width: "100%", textAlign: "left", zIndex: '1' }}>
    <h1 className='text-white fs-1'>Potato Chilly</h1>
    <p  className='text-white text-wrap fs-6'>Feel the spiciness of Kerala coming out on sale</p>
    <p><a  className='text-white fs-6'>Shop Now</a></p>
  </div>
  <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
    <img src="./Assets/newArrival1.png" alt="" className="img-fluid" style={{ padding:"25px" }} />
  </div>
</div>


<div className="col-lg-6 mb-3 ">

  <div className=''>
      <div className="row gx-3 align-items-center mb-3" style={{ backgroundColor: "black", color: "white" }}>
        <div className="col-lg-6 mb-3">
          <div className="card" style={{ backgroundColor: "black", color: "white" }}>
            <div className="card-body">
              <h3 style={{ color: "white" }}>Vishu Sweets</h3>
              <p>Featured sweets collections that give you another vibe.</p>
              <p><a className='text-white'>Shop Now</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <img src="./Assets/newArrival2.png" alt="" className="img-fluid" />
        </div>
      </div>


      <div className="row  gap-3">
  {/* First Bhashanagal Div */}
  <div className="col-lg-6 mb-3 col-12 " style={{ backgroundColor: "black",width:"230px"}}>
 
      <h6 className='fs-4 text-white '>Bhashanagal</h6>
      <span className='fs-6 text-wrap text-white '>very tasty products and nuts</span>
      <p className='fs-6'><a href="">Shop Now</a></p>
  
    <img src="./Assets/explore4.png" alt="" className="img-fluid" style={{width:"120px",height:"120px"}}/>
  </div>

  {/* Second Bhashanagal Div */}
  <div className="col-lg-6 mb-3 col-12 " style={{ backgroundColor: "black", color: "white",width:"230px" }}>
 
      <h6 className='fs-4'>Cool Drinks</h6>
      <span className='fs-6 '>Feel Cool</span>
      <p className='fs-6'><a href="">Shop Now</a></p>
    
    <img src="./Assets/golisoda.png" alt="" className="img-fluid" style={{width:"120px",height:"120px"}}/>
  </div>
</div>


    </div>






    </div>




      </div>

    </div>


    </div>
  );
}
