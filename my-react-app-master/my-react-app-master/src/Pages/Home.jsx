import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Featured from "../Components/Featured.jsx";
import About from "../Components/About.jsx";
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
