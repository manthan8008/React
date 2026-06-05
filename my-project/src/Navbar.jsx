import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent;
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <a href={href} className="relative text-black">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-black transition-transform duration-300 ease-out"
          ></span>
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-1/2 top-17 -translate-x-1/2 bg-white text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 " />
              <div className="absolute left-1/2 top-0 rotate-45 bg-white h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const HelloContent = () => {
    return (
      <div className="w-100 font-mono font-semibold bg-white p-6 shadow-xl text-2xl">
        <div>
          <a href="#" className="block  hover:underline">
            Neckpieces
          </a>
          <a href="#" className="block  hover:underline">
            Earrings
          </a>
          <a href="#" className="block  hover:underline">
            Rings
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="bg-[#fffef8] flex justify-center sticky top-0 z-10">
        <nav className=" flex items-center justify-between bg-[#fffef8] px-5 text-2xl py-6 custom-font font gap-3 w-[92%] text-black">
          <div>
            CHAMHAQ
          </div>
          <div>
            <ul className="flex gap-[4vw] items-center text-black">
              <li>
                <FlyoutLink href="#" FlyoutContent={HelloContent}>
                  NECKPIECES
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={HelloContent}>
                  BRACELETS
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={HelloContent}>
                  EARRINGS
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#" FlyoutContent={HelloContent}>
                  RINGS
                </FlyoutLink>
              </li>
              <li>
                <FlyoutLink href="#">About</FlyoutLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
