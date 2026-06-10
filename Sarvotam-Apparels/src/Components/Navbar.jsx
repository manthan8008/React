import { HashLink } from "react-router-hash-link";
import hamburger from "../assets/hamburger.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white flex justify-center custom-font top-0 z-1">
      <nav className=" w-[90%] bg-white flex justify-between py-6 text-2xl sticky z-1 ">
        <div className="text-3xl">
          <a href="/#">SARVOTAM APPARELS</a>
        </div>
        <div>
          <ul className="md:flex gap-10 hidden">
            <li>
              <a href="/#aboutus">About Us</a>
            </li>
            <li>
              <a href="/#contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-svh w-full bg-white z-[10000] flex-col flex justify-center"
            >
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  className="h-15 w-15 fixed right-4 top-4"
                  src="../src/assets/cross.svg"
                />
                <ul className="flex flex-col gap-20">
                  <li>
                    <a href="/#aboutus">About us</a>
                  </li>
                  <li>
                    <a href="/#contactus">Contact us</a>
                  </li>
                </ul>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
