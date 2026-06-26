import { Parallax, Background } from "react-parallax";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
