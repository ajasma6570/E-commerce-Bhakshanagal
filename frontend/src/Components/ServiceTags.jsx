import React from 'react'

export default function ServiceTags() {

    const smallScreenStyle = {
        width: "100px",
        height: "100px"
      };
      
  return (
    <div class="container py-5 my-1">
    <div class="row g-4">
        <div class="col-md-6 col-lg-4">
            <div class="featurs-item text-center rounded  p-4">
                <div class="featurs-icon ">
                <img src="./Assets/delivery.png" alt="delivery " style={window.innerWidth <= 600 ? smallScreenStyle : null}/>
                </div>
                <div class="featurs-content text-center">
                    <h5 className='my-4 fw-bold'>FREE AND FAST DELIVERY</h5>
                    <p class="mb-0">Free delivery for all orders over $140</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="featurs-item text-center rounded  p-4">
                <div class="featurs-icon ">
                <img src="./Assets/call_support.png" alt="call support "  style={window.innerWidth <= 600 ? smallScreenStyle : null}/>
                </div>
                <div class="featurs-content text-center">
                    <h5 className='my-4 fw-bold'>24/7 CUSTOMER SERVICE</h5>
                    <p class="mb-0">Friendly 24/7 customer support</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="featurs-item text-center rounded  p-4">
                <div class="featurs-icon ">
                <img src="./Assets/guarantee.png" alt="money guarante"  style={window.innerWidth <= 600 ? smallScreenStyle : null}/>
                </div>
                <div class="featurs-content text-center">
                    <h5 className='my-4 fw-bold'>MONEY BACK GUARANTEE</h5>
                    <p class="mb-0">We return money within 30 days</p>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}
