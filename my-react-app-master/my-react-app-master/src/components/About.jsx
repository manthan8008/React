import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-40">
      <div
        id="Abtus"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <motion.h2
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 40,
          }}
          className="text-5xl font-bold"
        >
          Our Story
        </motion.h2>

        <motion.p
          whileInView={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 text-lg text-gray-300 leading-relaxed"
        >
          For generations we have crafted exquisite jewellery that combines
          timeless elegance with modern artistry. Every piece is designed to
          celebrate life's most precious moments.
        </motion.p>
      </div>
    </section>
  );
}
