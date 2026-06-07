import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
