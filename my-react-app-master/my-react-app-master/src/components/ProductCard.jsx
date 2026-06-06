import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{
        y: -15,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      bg-zinc-900
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
          duration-700
          group-hover:scale-110
          "
        />
      </div>

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-linear-to-t
        from-black
        via-black/20
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
      />

      {/* Quick View */}

      <motion.button
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        bg-yellow-500
        text-black
        px-6
        py-3
        rounded-full
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        "
      >
        Quick View
      </motion.button>

      {/* Content */}

      <div className="p-6">
        <p className="text-yellow-400 text-sm">{product.category}</p>

        <h3 className="text-xl font-semibold mt-2">{product.title}</h3>

        <p className="text-gray-400 mt-2">{product.price}</p>
      </div>

      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        pointer-events-none
        transition
        duration-500
        "
      >
        <div
          className="
          absolute
          inset-0
          bg-linear-to-r
         
          "
        />
      </div>
    </motion.div>
  );
}
