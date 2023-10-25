import React from "react";
//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Men from "./pages/Men";
import Women from "./pages/Women"
import Jewelery from "./pages/Jewelery";

//components
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
 <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/Men" element={<Men />} />
          <Route path ="/Women" element={<Women />} />
          <Route path ="/Jewelery" element={<Jewelery />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
