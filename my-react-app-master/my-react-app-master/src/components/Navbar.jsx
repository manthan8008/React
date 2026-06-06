import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";


export default function Navbar() {
  const items = ["Home", "Collections", "Featured"];

  return (
    <nav className="fixed top-0 w-full z-1000 px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="font-bold text-2xl tracking-widest"
        >
          <Link to="/">CHAMHAQ</Link>
        </motion.h1>

        <ul className="flex gap-4">
          {items.map((item) => (
            <Link to="/products">
              <motion.li
                key={item}
                whileHover={{
                  scale: 1.05,
                }}
                className="cursor-pointer px-5 py-2 rounded-full hover:bg-white/10 transition-all"
              >
                {item}
              </motion.li>
            </Link>
          ))}
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            className="cursor-pointer px-5 py-2 rounded-full hover:bg-white/10 transition-all"
          >
            <HashLink smooth to="//#Abtus">
              About
            </HashLink>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}
