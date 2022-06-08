import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Banner from './Banner'
import {onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../FirebaseConfig/firebaseConfigs'
import { collection,getDocs, query,where } from 'firebase/firestore';
import { useState, useEffect} from  'react';

const Home = () => {

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
    if(loggedUser)console.log(loggedUser[0].email);
 

  return (
    <div>
       <Navbar/>
       <Banner/>
       <Products/>
       <p>{loggedUser?loggedUser[0].email:"No data"}</p>
    </div>
  )
}

export default Home