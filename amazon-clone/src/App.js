import React,{useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";


function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
       
      
        
        <Routes>
        
          <Route path="/" element={[<Header/>,<Home />]} />
          
          <Route path="/checkout" element={[<Header/>,<Checkout />]} />
          <Route path="/login" element={<Login />} />

        </Routes>
      
    </div>
    </Router>
  );
}
export default App;
