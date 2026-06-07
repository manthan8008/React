import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import ProductCard from "./ProductCard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-[url(./src/assets/hero1.jpg)] bg-fixed h-dvh w-full bg-cover text-3xl z-0 text-black justify-center flex flex-wrap px-5">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="h-120 w-100 bg-white/5 text-white rounded-xl border border-white/10 backdrop-blur-lg relative top-1/3 right-1/3 pt-5 text-5xl px-3 custom-font">
          <div className="z-0 h-50 px-5">
            <h1 className="text-4xl  ">Elegance in every detail</h1>
          </div>
          <div className="px-5 ">
            <p className="text-2xl">
              Discover a world where tradition meets modernity in every
              exquisite piece. Our artisan-made jewelry is a blend of heritage
              craftsmanship and contemporary allure.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2d3433] h-auto">
        <div className="py-10 flex flex-wrap w-[90%] pl-[12%] gap-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default App;
