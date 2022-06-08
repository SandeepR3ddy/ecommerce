import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import cartlogo from './assests/cartlogo.png'
import profile from './assests/profile.jpg'
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../FirebaseConfig/firebaseConfigs'
import { collection,getDocs, query,where } from 'firebase/firestore';
import { useState, useEffect} from  'react';
import { useNavigate } from 'react-router-dom'
import photo from "./bannerimages/download.png"

const Navbar = () => {
    function GetCurrentusers()
    {
      const [user, setUser] = useState("");

      const collectionRef = collection(db, "users");
      
      useEffect(()=>{

       onAuthStateChanged(auth, userLogged => {

          if(userLogged)
          {
            const GetUsers = async () => {

             const que = query(collection(db, "users"), where("uid","==" ,userLogged.uid));
             // console.log(que);
             
             const data = await getDocs(que);

             setUser(data.docs.map((doc) => ({...doc.data(),id : doc.id})));
            }
            
          GetUsers();
          }
          else
          {
            setUser(null);
          }
       })

      },[])
      return user;
    }
     
   const loggedUser = GetCurrentusers();

   const navigate = useNavigate();

   const handleLogout = () => {
       auth.signOut().then(() => {
           navigate("/login");
       })
   }


  return (
     <div className="navbar">
         <div className="LeftContainer">
             <img src={photo}/> 
         </div>
      <div className="RightContainer">
          {!loggedUser  && <nav>
            <Link to = '/' ><button>Home</button></Link>
       <Link to = '/signup' ><button>Signup</button></Link>
       <Link to = '/login' ><button>Login</button></Link>
       
       <div className='cart-btn'>
           <img src = {cartlogo} alt = "no image"/>
           <span className = "cart-icon-css">0</span>
       </div>
 
     
   <Link to = '/userprofile'>
       <img src = {profile} className = "profile-icon"/>
   </Link>
              </nav>}   

              {loggedUser  && <nav>
            <Link to = '/' ><button>Home</button></Link>       
       <div className='cart-btn'>
           <img src = {cartlogo} alt = "no image"/>
           <span className = "cart-icon-css">0</span>
       </div>
 
   <Link to = '/userprofile'>
       <img src = {profile} className = "profile-icon"/>
   </Link>
  
  <button className = "logout-btn" onClick={handleLogout}>Logout</button>
   
              </nav>}   


     </div>
</div>
  )
}

export default Navbar