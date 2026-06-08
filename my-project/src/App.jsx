import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import ProductCard from "./Components/ProductCard.jsx";
import { motion } from "framer-motion";
import Hero from "./Components/Hero.jsx";
import Featured from "./Components/Featured.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ProductLanding from "./Pages/PorductLanding.jsx";
import AllProducts from "./Pages/AllProducts.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductLanding />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
