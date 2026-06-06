import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const items = ["NECKPIECES", "EARRINGS", "RINGS", "BRACELETS"];
  const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = open && FlyoutContent;
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <a href={href} className="relative text-white">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out"
          ></span>
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-1/2 top-14 -translate-x-1/2 bg-white/5 backdrop-blur-lg text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 " />
              <div className="absolute left-1/2 top-0 rotate-4 h-4 w-4 -translate-x-1/2 -translate-y-1/2" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const HelloContent = () => {
    return (
      <div className=" font-mono custom-font text-white backdrop-blur-lg p-6 shadow-xl text-2xl">
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
      <header className="flex justify-center fixed top-5 z-10 w-full ">
        <nav className=" flex items-center justify-between backdrop-blur-xl rounded-full bg-white/5 px-10 text-2xl py-6 custom-font gap-3 w-[92%] text-white">
          <div>CHAMHAQ</div>
          <div>
            <ul className="flex gap-[4vw] items-center text-white">
              {items.map((item) => (
                <li>
                  <FlyoutLink href="#" FlyoutContent={HelloContent}>
                    {item}
                  </FlyoutLink>
                </li>
              ))}
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
