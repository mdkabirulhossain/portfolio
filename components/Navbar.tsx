/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Contact"];

// Define text animation variants
const textVariants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -2, scale: 1.05 }, // Shift text up and slightly scale it
};

// --- NEW GRADIENT CLASS ---
const PRIMARY_GRADIENT_R = "from-sky-400 to-blue-500";
const PRIMARY_GRADIENT_B = "from-sky-400 to-blue-500"; // Changed to use the same colors

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';


  useEffect(() => {
    setMounted(true);
  }, []);


  // Helper function to get the correct href path
  const getHref = (item: string) => {
    return `#${item.toLowerCase()}`;
  };

  if (!mounted) return null;

  // --- Rendered Navbar (UPDATED GRADIENTS) ---
  return (
    <nav className={`w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} fixed top-0 left-0 z-50 shadow-lg border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">

        {/* ---------- Logo (UPDATED GRADIENT) ----------- */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Kabirul-logo.png"
              alt="Md. Kabirul Hossain Logo"
              width={180}
              height={60}
              className="h-12 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>
        </motion.div>

        {/* ---------- Desktop Menu (Updated for Text Hover) ----------- */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              // Set whileHover state for the container
              whileHover="hover"
              variants={{ initial: textVariants.initial, hover: textVariants.hover }}
            >
              <Link
                href={getHref(item)} // 👈 Clean path
                className={`text-lg font-medium transition-colors inline-block ${ // inline-block is important for transform
                  activeItem === item
                    ? darkMode ? 'text-white' : 'text-black'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                onClick={() => setActiveItem(item)}
              >
                <motion.span
                  variants={textVariants} // Apply motion variants to the text
                  transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth spring animation
                  className="inline-block"
                >
                  {item}
                </motion.span>
              </Link>

              {/* Active underline (Persists for the current page) (UPDATED GRADIENT) */}
              {activeItem === item && (
                <motion.div
                  layoutId="activeUnderline"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${PRIMARY_GRADIENT_R}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Hover underline (Only appears on hover for non-active items) (UPDATED GRADIENT) */}
              {activeItem !== item && (
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${PRIMARY_GRADIENT_R}`}
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* ---------- Right side buttons (Desktop) ----------- */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#contact">
              <motion.div
                className={`relative px-6 py-2 rounded-lg font-semibold overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                whileHover="hover"
                initial="initial"
              >
                {/* Contact Button Hover Background (UPDATED GRADIENT) */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-r ${PRIMARY_GRADIENT_R}`}
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "0%" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className={`relative z-10 font-semibold ${darkMode ? 'text-white' : 'text-black'
                  }`}>
                  Contact Us
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* ---------- Mobile Menu Icon ----------- */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
      </div>

      {/* ---------- Mobile Menu Dropdown ----------- */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} px-4 pb-4 space-y-2 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href={getHref(item)} // 👈 Clean path
                onClick={() => {
                  setActiveItem(item); // Set active state
                  setOpen(false); // Close menu
                }}
                className={`block text-lg py-3 px-4 font-medium transition-colors ${activeItem === item
                  ? darkMode ? 'text-white' : 'text-black'
                  : darkMode
                    ? 'text-gray-300 hover:text-gray-100'
                    : 'text-gray-700 hover:text-gray-900'
                  }`}
              >
                {item}
              </Link>

              {/* Active indicator (Mobile) (UPDATED GRADIENT) */}
              {activeItem === item && (
                <motion.div
                  layoutId="activeMobileUnderline"
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${PRIMARY_GRADIENT_B} rounded-r`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </motion.button>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <motion.div
                  className={`relative px-6 py-2 rounded-lg font-semibold overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Mobile Contact Button Hover Background (UPDATED GRADIENT) */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-r ${PRIMARY_GRADIENT_R}`}
                    variants={{
                      initial: { x: "-100%" },
                      hover: { x: "0%" }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className={`relative z-10 font-semibold ${darkMode ? 'text-white' : 'text-black'
                    }`}>
                    Contact Us
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
