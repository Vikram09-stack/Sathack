import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "How It Works", to: "howitworks" },
    { name: "About", to: "about" },
    { name: "FAQs", to: "faqs" },
    { name: "Contact", to: "footer" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%]
                 backdrop-blur-md bg-white/10 border border-white/20 
                 shadow-lg rounded-full px-6 md:px-10 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold text-white tracking-wide cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        TRAVIS<span className="text-cyan-400">AI</span>
      </motion.h1>

      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex space-x-10 text-white text-base font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{
                scale: 1.1,
                color: "#22d3ee",
                textShadow: "0 0 10px rgba(34, 211, 238, 0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer transition-all"
            >
              <Link
                to={link.to}
                smooth={true}
                duration={700}
                offset={-100}
                spy={true}
                className="hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* LOGIN BUTTON (Desktop) */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/login")}   // ← ADDED THIS
          className="px-6 py-2 bg-cyan-500 text-white rounded-full font-semibold shadow-md hover:bg-cyan-400 transition-all"
        >
          Login
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/20 
                       flex flex-col items-center space-y-6 py-6 md:hidden rounded-b-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-100}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}

            {/* LOGIN BUTTON (Mobile) */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                window.location.href = "/login"; // ← ADDED THIS
              }}
              className="px-6 py-2 bg-cyan-500 text-white rounded-full font-semibold shadow-md hover:bg-cyan-400 transition-all"
            >
              Login
            </motion.button>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
