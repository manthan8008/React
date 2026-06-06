import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Featured from "./components/Featured.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
