import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import cartlogo from './assests/cartlogo.png'
import profile from './assests/profile.jpg'

const Navbar = () => {
  return (
      <nav>
       <Link to = '/' ><button>Home</button></Link>
       <Link to = '/login' ><button>Login</button></Link>
       <Link to = '/signup' ><button>Signup</button></Link>
       
   <Link to = '/cart'>
       <div className='cart-btn'>
           <img src = {cartlogo} alt = "no image"/>
           <span className = "cart-icon-css">0</span>
       </div>
   </Link>
   
   <Link to = '/userprofile'>
       <img src = {profile} className = "profile-icon"/>
   </Link>

      
      
      </nav>
 
      



  )
}

export default Navbar