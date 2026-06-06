import { motion } from "framer-motion";

export default function JewelryCard({ image, title, price }) {
  return (
    <motion.div
      whileHover={{
        y: -15,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <img
        src={image}
        alt={title}
        className="h-112.5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent" />

      <div className="absolute bottom-0 p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-yellow-400">{price}</p>
      </div>
    </motion.div>
  );
}
