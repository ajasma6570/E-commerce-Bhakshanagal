import React from 'react'
import { Link } from 'react-router-dom'

export default function NewPassword() {
  return (
    <div class="container height-100 d-flex justify-content-center align-items-center my-5 w-25 "> 
    <div class="position-relative border border-dark rounded"> 
    <div class="card p-2 text-center"> 
    <h3>Check Email</h3> <div> 
        <span>Enter your details below</span> 
   </div> 
   <form action="#! ">
              <div class="row gy-3 overflow-hidden mt-1">

                <div class="col-12">
                  <div class="form-floating ">
                    <input type="passowrd" class="form-control border-0 border-bottom rounded-0" name="new_passowrd" id="new_passowrd" placeholder="New Password" required />
                    <label for="new_passowrd" class="form-label">New Password</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating ">
                    <input type="password" class="form-control border-0 border-bottom rounded-0" name="Cpassword" id="Cpassword" value="" placeholder="Confirm Password" required />
                    <label for="Cpassword" class="form-label">Confirm Password</label>
                  </div>
                </div>
                
              </div>
            </form>
             <div class="mt-4"> 
    <Link to="/newPassword" class="btn btn-danger px-4 validate">Log In</Link> 
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
