import React,{useState} from 'react'
import Navbar from './Navbar'
import {Link, useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, firestore} from '../FirebaseConfig/firebaseConfigs'
import { collection, addDoc } from 'firebase/firestore'
import "./Signup.css"


const Signup = () => {

  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");

  const navigate = useNavigate();
 const [errorMsg,setErrorMsg] = useState("");
 const [successMsg,setSuccessMsg] = useState("")



 const handleSubmit = (e) => {
   e.preventDefault();
  
   createUserWithEmailAndPassword(auth,email, password)
   .then((usercredentials) => {
        const user = usercredentials.user;
        const initialCartValue = 0;
        addDoc(collection(firestore, "üsers"),{
           username : username,
           password : password,
           address : address,
           phoneNumber : phoneNumber,
           email : email,
           cart : initialCartValue,
           uid : user.uid          
        }).then(() => {
          
          setSuccessMsg("New user added Successfully, you will now be automatically redirected to the login page");
           
          setUserName("");
          setPassword("");
          setEmail("");
          setAddress("");
          setPhoneNumber("");
          setErrorMsg(""); 

          setTimeout(() =>
          {
            setSuccessMsg("");
            navigate('/login');
          },4000)
        })
        .catch((error) => {setErrorMsg(error.message)});
      })
      .catch((error) => {
        if(error.message == "Firebase: Error (auth/invalid-email).")
        {
          setErrorMsg("Please fill all required fields");
        }
        if(error.message == "Firebase: Error (auth/email-already-in-use).")
        {
          setErrorMsg("User already exists");
        }
      })
 }


  return (
    <div>
        <Navbar/>
       <div className = "signup-container">
        <form className = "signup-form" onSubmit={handleSubmit}>
           <p>Create Account</p>
               {successMsg  && <>
               <div className = "success-msg">
                 {successMsg}
               </div>
               </>}
               {errorMsg  && <>
               <div className = "error-msg">
                 {errorMsg}
               </div>
               </>}
               <label>Your Name</label>
               <input onChange={(e)=>setUserName(e.target.value)} type = "text" placeholder = "Enter your name" />

               <label>Phone Number</label>
               <input onChange={(e)=>setPhoneNumber(e.target.value)} type = "number" placeholder = "Enter your Phone Number" />

               <label>Email</label>
               <input onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder = "Enter your email address" />

               <label>Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} type = "password" placeholder = "Enter Password" />
        
               <label>Address</label>
               <textarea onChange={(e)=>setAddress(e.target.value)} placeholder = "Enter your address" />

          <button type="submit">signup</button>
 
              <div>
                <span>Already have a account?</span>
                <Link to = '/login'>login</Link>
              </div>
        </form>
       </div>
        </div>
  )
}

export default Signup