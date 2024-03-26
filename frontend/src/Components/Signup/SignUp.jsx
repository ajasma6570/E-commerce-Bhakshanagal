import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify';
import axios from 'axios'

export default function SignUp() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")

  const navigate = useNavigate()

  const handleCreatAccount =async(e)=>{
    e.preventDefault();

    if(!name || !email || !password ){
      toast.error('Fill all the fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        return;
    }


    try {
      const config = {
          headers : {
              "Content-type" : "application/json",
          }
      }

      const {data} = await axios.post("/api/user/userRegister",{name,email, password},config);

      toast.success('Registration Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        localStorage.setItem('userInfo',JSON.stringify(data));
    
        navigate('/')

} catch (error) {
  toast.error(error.response.data.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

    return
}


  }

  return (
    <div>

<section class=" p-3 p-md-4 p-xl-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-xxl-11">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6">
              <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="./Assets/signup_img.jpg" alt="Welcome back you've been missed!" />
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div class="col-12 col-lg-11 col-xl-10">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="">
                        <h2 class="h4 mb-2">Create an account</h2>
                        <span>Enter your details below</span>
                      </div>
                    </div>
                  </div>
                 
                  <form action="#! ">
              <div class="row gy-3 overflow-hidden mt-2">
                <div class="col-12">
                  <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="username" id="username" placeholder="Name" required onChange={(e)=>setName(e.target.value)} value={name}/>
                    <label for="username" class="form-label">Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating ">
                    <input type="email" class="form-control border-0 border-bottom rounded-0" name="email_password" id="email_password" placeholder="Email or Phone Number" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <label for="email" class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating ">
                    <input type="password" class="form-control border-0 border-bottom rounded-0" name="password" id="password"  placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-lg btn-danger rounded-2 fs-6" type="submit" onClick={handleCreatAccount}>Create Account</button>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-lg border border-2  rounded-2 fs-6" type="submit"><img src="./Assets/google_icon.png" alt=""  style={{width:"20px",height:"20px"}}/>
                <span class="ms-2 fs-6">Sign in with Google</span></button>
                  </div>
                </div>
              </div>
            </form>
                  <div class="row">
                    <div class="col-12">
                      <p class="mb-0 mt-3 text-secondary text-center">Already have an account ? <Link to="/login" class="link-dark text-decoration-none ">Log in</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
