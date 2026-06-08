import { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar.jsx";
import ProductCard from "../Components/ProductCard.jsx";
import { motion } from "framer-motion";
import Hero from "../Components/Hero.jsx";
import Featured from "../Components/Featured.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
    </>
  );
}

export default Home;
