import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";

function App() {
  return (
    <Router>
    <div className="app">
      
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      
    </div>
    </Router>
  );
}
export default App;
