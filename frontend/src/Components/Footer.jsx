import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (

    <div class="container-fluid d-flex justify-content-around " style={{backgroundColor:"black"}}>
    <footer class="py-5 my-4 text-center">
      <div class="row gap-5">
        
        <div class="col-12 col-md-2 mb-3">
          <h5 className='text-white mb-3'>Bhashanagal</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Subscribe</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Get 10% off your firt order</a></li>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
             
              <input id="newsletter_email" type="text" class="form-control "   placeholder="Enter your email  "></input>
              <span ><FontAwesomeIcon icon={faPaperPlane} color='white' id='icon_send' /></span>
            </div>
          </ul>
        </div>
  
        <div class="col-12 col-md-2 mb-3">
          <h5 className='text-white mb-3'>Support</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">bhaahanga,@gmail.com</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">+88015-88888-9999</a></li>
          </ul>
        </div>
  
        <div class="col-12 col-md-2 mb-3">
          <h5 className='text-white mb-3'>Account</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">My Account</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Login/ Register</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cart</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Whishlist</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Shop</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-2 mb-3">
          <h5 className='text-white mb-3'>Quick link</h5>
          <ul class="nav flex-column ">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Privacy Policy</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Terms Of Use</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact</a></li>
          </ul>
        </div>
  
        <div class="col-12 col-md-2 mb-3 ">
          <form>
            <h5 className='text-white mb-3'>Download App</h5>
            <div class="d-flex flex-sm-row w-100 align-items-center">

                  <div className="col-lg-6 col-md-6" style={{backgroundColor:"white",height:"50px",width:"60px"}}>
                    <img src="./Assets/qr-code.png" alt="" width="50px" height="50px"/>
                  </div>

                  <div className="col-lg-6 col-md-6"><div style={{width:"100px",height:"100px"}}>
                  <a href='https://play.google.com/store/search?q=facebook&c=apps&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' style={{width:"80px",height:"40px"}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a> 
      
            <a href='https://play.google.com/store/search?q=facebook&c=apps&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' style={{width:"80px",height:"40px"}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a> 
              </div>
              
              
              </div>

                </div>
          

            <ul class="list-unstyled custom-social d-flex justify-content-center gap-2 my-3">
							<li><Link href="#"><ion-icon name="logo-facebook"></ion-icon> </Link></li>
							<li><Link href="#"><ion-icon name="logo-twitter"></ion-icon></Link></li>
							<li><Link><ion-icon name="logo-instagram"></ion-icon></Link></li>
							<li><Link href="#"><ion-icon name="logo-linkedin"></ion-icon></Link></li>
						</ul>

          </form>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top text-center">
        <p className='text-secondary text-center'>© Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  </div>

  )
}

