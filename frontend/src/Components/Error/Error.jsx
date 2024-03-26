import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='text-center ' style={{height:"100vh"}}>

          <nav aria-label="breadcrumb ">
      <ol className="breadcrumb p-5">
        <li className="breadcrumb-item text-secondary"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active text-dark" aria-current="page">404 Error</li>
      </ol>
    </nav>

    <h1  style={{fontSize:'80px'}}>404 Not Found</h1>
    <p>Your visited page not found. You may go home page.</p>

    <Link to='/' className='btn btn-danger'>Back to home page</Link>
    </div>
  )
}
