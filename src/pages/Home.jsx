import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Middle from "../components/Middle";
import NewArrivals from "../components/NewArrivals";


export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Middle />
    </div>
  );
};