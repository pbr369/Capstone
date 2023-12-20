import React, { useEffect, useState } from "react";
//react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";

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
import Aboutus from "./pages/Aboutus";
import Terms from "./pages/Terms";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Checkout from "./pages/Checkoutsuccess";
import Login from "./pages/Login";
import Adminpanel from "./pages/Adminpanel";
import Ordersadmin from "./pages/Ordersadmin";
import Addproducts from "./pages/Addproducts";
import Updateproducts from "./pages/Updateproducts";
import Updatepassword from "./pages/Updatepassword";
import Updateprofile from "./pages/Updateprofile";
import Orders from "./components/Orders";
import PayButton from "./components/PayButton";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const content = await response.json();
        setUserId(content.id); // Adjust this based on your actual user data structure
        setLoading(false);
        console.log("user id:", userId);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("Token on page load:", token);
    if (token) {
      // Set the token in Axios headers if it exists in localStorage
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);


  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar
            name={name}
            setName={setName}
            roles={roles}
            setRoles={setRoles}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Featured" element={<Featured />} />
            <Route path="/Allproducts" element={<Allproducts />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Luxury" element={<Luxury />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Updatepassword" element={<Updatepassword />} />
            <Route path="/Updateprofile" element={<Updateprofile />} />
            <Route path="/Orders" element={<Orders userId={userId} />} />
            <Route
              path="/Adminpanel"
              element={
                roles.includes("admin") ? <Adminpanel /> : <Navigate to="/" />
              }
            />
            <Route
              path="/Ordersadmin"
              element={
                roles.includes("admin") ? <Ordersadmin /> : <Navigate to="/" />
              }
            />
            <Route
              path="/Addproducts"
              element={
                roles.includes("admin") ? <Addproducts /> : <Navigate to="/" />
              }
            />
            <Route
              path="/Updateproducts/:id"
              element={
                roles.includes("admin") ? <Updateproducts /> : <Navigate to="/" />
              }
            />
            <Route
              path="/Login"
              element={
                <Login setName={setName} roles={roles} setRoles={setRoles} />
              }
            />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Checkoutsuccess" element={<Checkout />} />
            <Route path="/Register" element={<Register />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar userId={userId} setUserId={setUserId} />
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
};