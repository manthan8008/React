import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Diamond Ring",
    price: "$2,499",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    id: 2,
    title: "Gold Necklace",
    price: "$3,999",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  },
  {
    id: 3,
    title: "Luxury Earrings",
    price: "$1,799",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584",
  },
  {
    id: 4,
    title: "Ruby Bracelet",
    price: "$1,299",
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  },
  {
    id: 5,
    title: "Diamond Ring",
    price: "$2,499",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    id: 6,
    title: "Diamond Ring",
    price: "$2,499",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    id: 7,
    title: "Diamond Ring",
    price: "$2,499",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
];
const rings = products.filter((ring) => ring.category === "Rings");
const earrings = products.filter((earring) => earring.category === "Earrings");
const necklaces = products.filter(
  (necklace) => necklace.category === "Necklaces",
);
const bracelets = products.filter(
  (bracelet) => bracelet.category === "Bracelets",
);

export default function Products() {
  const [allprod, setAllprod] = useState(true);
  const [catRing, setCatring] = useState(false);
  const [catEarring, setCatEarring] = useState(false);
  const [catNeckpiece, setCatneckpiece] = useState(false);
  const [catBracelet, setCatBracelet] = useState(false);

  function SelectRing() {
    setAllprod(false);
    setCatring(true);
    setCatEarring(false);
    setCatneckpiece(false);
    setCatBracelet(false);
  }
  function SelectEarring() {
    setAllprod(false);
    setCatring(false);
    setCatEarring(true);
    setCatneckpiece(false);
    setCatBracelet(false);
  }
  function SelectNeckpiece() {
    setCatring(false);
    setAllprod(false);
    setCatEarring(false);
    setCatneckpiece(true);
    setCatBracelet(false);
  }
  function SelectBracelet() {
    setCatring(false);
    setAllprod(false);
    setCatEarring(false);
    setCatneckpiece(false);
    setCatBracelet(true);
  }
  function SelectAll() {
    setCatring(false);
    setAllprod(false);
    setCatEarring(false);
    setCatneckpiece(false);
    setCatBracelet(true);
  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Hero */}

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center px-6">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Our Collection
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Discover timeless craftsmanship and exquisite luxury pieces.
          </p>
        </div>
      </section>

      {/* Categories */}

      <section className="py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          <button
            onClick={SelectRing}
            className={
              allprod
                ? "px-6 py-3 rounded-full bg-yellow-500 text-black border border-white/10 transition-all"
                : "px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500  hover:text-black transition-all"
            }
          >
            All
          </button>
          <button
            onClick={SelectRing}
            className={
              catRing
                ? "px-6 py-3 rounded-full bg-yellow-500 text-black border border-white/10 transition-all"
                : "px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500  hover:text-black transition-all"
            }
          >
            Rings
          </button>
          <button
            onClick={SelectEarring}
            className={
              catEarring
                ? "px-6 py-3 rounded-full bg-yellow-500 text-black border border-white/10 transition-all"
                : "px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500  hover:text-black transition-all"
            }
          >
            Earrings
          </button>
          <button
            onClick={SelectNeckpiece}
            className={
              catNeckpiece
                ? "px-6 py-3 rounded-full bg-yellow-500 text-black border border-white/10 transition-all"
                : "px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500  hover:text-black transition-all"
            }
          >
            Neckpieces
          </button>
          <button
            onClick={SelectBracelet}
            className={
              catBracelet
                ? "px-6 py-3 rounded-full bg-yellow-500 text-black border border-white/10 transition-all"
                : "px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-yellow-500  hover:text-black transition-all"
            }
          >
            Bracelets
          </button>
        </div>
      </section>

      {/* Products */}

      <section className="pb-24 px-4 md:px-8">
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {allprod
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
          {catRing
            ? rings.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
          {catEarring
            ? earrings.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
          {catNeckpiece
            ? necklaces.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
          {catBracelet
            ? bracelets.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </div>
      </section>
    </div>
  );
}
