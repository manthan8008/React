import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white flex justify-center custom-font top-0 z-2">
      <nav className=" w-full md:px-10 px-3 bg-white flex justify-between items-center  py-6 text-2xl top-0 z-1 ">
        <div className="md:text-3xl md:flex flex-col pl-3">
          <a href="/#">Sarvotam Apparels</a>
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
        <div className="md:hidden pr-3">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src="/hamburger.svg" className="h-12"></img>
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-svh w-full bg-white z-10000 flex-col flex justify-center"
            >
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  className="h-15 w-15 fixed right-4 top-4"
                  src="/cross.svg"
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
