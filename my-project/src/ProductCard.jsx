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
          src="data:image/jpeg;base64,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"
          alt="Jewellery image"
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
        <p className="text-yellow-400 text-sm">Ring</p>

        <h3 className="text-xl font-semibold mt-2">Ring</h3>

        <p className="text-gray-400 mt-2">2000</p>
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
