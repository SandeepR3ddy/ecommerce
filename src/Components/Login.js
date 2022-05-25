import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Navbar from './Navbar'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig/firebaseConfigs';
import "./Login.css"

const Login = () => {
    
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMsg,setErrorMsg] = useState("");
   const [successMsg,setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) =>{
     
    e.preventDefault();
   signInWithEmailAndPassword(auth,email,password)
   .then((userCredentials) =>{
     setSuccessMsg("Logged in successfully , you will be redirected to the home page");
     setEmail("");
     setPassword("");
     setErrorMsg("");
     setTimeout(()=>{
         setSuccessMsg("");
         navigate("/home");
     },1000)
   })
   .catch((error) =>{
     const errorcode = error.code;
     console.log(error.message);
     if(error.message == "Firebase: Error (auth/wrong-password).")
     {
         setErrorMsg("Wrong Password");
     }
     if(error.message == "Firebase: Error (auth/invalid-email).")
     {
      setErrorMsg("please fill all required fields");
    }
     if(error.message == "Firebase: Error (auth/user-not-found).")
     {
       setErrorMsg("Email not found");
     }
   })
  }
  return (
    <div>
        <Navbar/>
        <div className = "login-container">
        <form className = "login-form">
           <p>Login</p>
               {successMsg != "" && <>
               <div className = "success-msg">
                 {successMsg}
               </div>
               </>}
               {errorMsg != "" && <>
               <div className = "error-msg">
                 {errorMsg}
               </div>
               </>}
               <label>Email</label>
               <input onChange={(e)=>setEmail(e.target.value)} type = "email" placeholder = "Enter your email address" />

               <label>Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} type = "password" placeholder = "Enter Password" />
        
          <button type="submit" onClick = {handleLogin}>login</button>
 
              <div>
                <span>Don't have a account?</span>
                <Link to = '/signup'>signup</Link>
              </div>
        </form>
       </div>
        </div>
  )
}
export default Login