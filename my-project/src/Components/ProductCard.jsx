import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
     
      border
      border-white/10
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
          h-100
          w-full
          object-cover
          transition-transform
          duration-300
          group-hover:scale-110
          "
        />
      </div>


      {/* Content */}

      <div className="p-6">
        <h3 className="text-xl text-white font-semibold mt-2">
          {product.title}
        </h3>

        <p className="text-gray-400 mt-2">{product.price}</p>
      </div>

     
    </motion.div>
  );
}
