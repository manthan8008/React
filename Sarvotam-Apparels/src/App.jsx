import { useState } from "react";
import "./App.css";
import { HashLink } from "react-router-hash-link";
import { easeOut, motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
