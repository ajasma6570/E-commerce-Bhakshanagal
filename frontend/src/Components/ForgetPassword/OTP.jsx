import React from 'react'
import { Link } from 'react-router-dom'

export default function OTP() {
  return (
    <div class="container height-100 d-flex justify-content-center align-items-center my-5 w-25 "> 
    <div class="position-relative border border-dark rounded"> 
    <div class="card p-2 text-center"> 
    <h3>Check Email</h3> <div> 
        <span>Enter OTP</span> 
   </div> 
   <div id="otp" class="inputs d-flex flex-row justify-content-center my-3"> 
    <input class="m-2 text-center form-control border border-dark " type="text" id="first"/> 
    <input class="m-2 text-center form-control border border-dark " type="text" id="second"  /> 
    <input class="m-2 text-center form-control border border-dark " type="text" id="third" /> 
    <input class="m-2 text-center form-control border border-dark " type="text" id="fourth"  /> 
    </div> <div class="mt-4"> 
    <Link to="/newPassword" class="btn btn-danger px-4 validate">Verify Now</Link> 
    </div> 
    </div> 
    {/* <div class="card-2">
         <div class="content d-flex justify-content-center align-items-center"> 
         <span>Didn't get the code</span> 
         <a href="#" class="text-decoration-none ms-3">Resend(1/3)</a> 
         </div> 
    </div>  */}
    </div>
</div>
  )
}
