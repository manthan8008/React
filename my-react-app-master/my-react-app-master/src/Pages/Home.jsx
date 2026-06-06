import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Featured from "../components/Featured.jsx";
import About from "../components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
        
      <Hero />
      <Featured />
      <About />
    </div>
  );
}

export default Home;
