import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";
import Login from "./Login";

function App() {
  return (
    <Router>
    <div className="app">
       
      
        <Header/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      
    </div>
    </Router>
  );
}
export default App;
