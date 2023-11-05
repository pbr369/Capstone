import React, { useState } from "react";
//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Featured from "./pages/Featured";
import Men from "./pages/Men";
import Women from "./pages/Women"
import Jewelry from "./pages/Jewelry";
//components
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Register from "./pages/Register";
import Checkout from "./pages/Checkoutsuccess";


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Jewelry" element={<Jewelry />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Checkoutsuccess" element={<Checkout />} />
          <Route path="/Register" element={<Register />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};