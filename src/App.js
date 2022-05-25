import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import PgFOF from './Components/PgFOF';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import Profile from './Components/Profile';

function App() {
  return (
  <BrowserRouter>
   <Routes>
     <Route exact path = "/" element = {<Home/>}/>
     <Route exact path = "/home" element = {<Home/>}/>
     <Route exact path = "/login" element = {<Login/>}/>
     <Route exact path = "/signup" element = {<Signup/>}/>
     <Route exact path = "/cart" element = {<Cart/>}/>
     <Route exact path = "/userprofile" element = {<Profile/>}/>
     <Route exact path = "*" element = {<PgFOF/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
