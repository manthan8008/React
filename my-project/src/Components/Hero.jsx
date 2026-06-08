import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-[url(../src/assets/hero1.jpg)]  bg-fixed h-dvh w-full bg-cover text-3xl z-0 text-black justify-center flex flex-wrap px-5">
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 1 }}
        className="h-120 w-100 bg-white/5 text-white rounded-xl border border-white/10 backdrop-blur-lg flex-col justify-center relative top-1/3 md:right-1/4 lg:right-1/3 pt-5 text-5xl px-3 custom-font"
      >
        <div className="z-0 h-50 px-5">
          <h1 className="text-4xl  ">Elegance in every detail</h1>
        </div>
        <div className="px-5 ">
          <p className="text-2xl">
            Discover a world where tradition meets modernity in every exquisite
            piece. Our artisan-made jewelry is a blend of heritage craftsmanship
            and contemporary allure.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
