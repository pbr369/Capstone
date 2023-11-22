import React, { useState } from "react";
//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Featured from "./pages/Featured";
import Allproducts from "./pages/Allproducts";
import Men from "./pages/Men";
import Women from "./pages/Women"
import Kids from "./pages/Kids";
import Luxury from "./pages/Luxury";
import Sports from "./pages/Sports";
import Shoes from "./pages/Shoes";
import Bag from "./pages/Bag";
import Jewelry from "./pages/Jewelry";
//components
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Checkout from "./pages/Checkoutsuccess";

import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";


const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Allproducts" element={<Allproducts />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Luxury" element={<Luxury />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Login" element={<Login />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Checkoutsuccess" element={<Checkout />} />
          <Route path="/Register" element={<Register />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};