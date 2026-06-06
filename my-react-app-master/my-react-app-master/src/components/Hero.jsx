import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('./src/assets/hero1.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold"
        >
          Timeless Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="max-w-2xl mt-8 text-gray-300 text-lg"
        >
          Discover handcrafted jewellery designed to celebrate every moment.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          className="mt-10 px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold"
        ><Link to="/products">
          Explore Collection
          </Link>
        </motion.button>

      </div>
    </section>
  );
}