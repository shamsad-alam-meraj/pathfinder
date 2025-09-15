"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Trips", link: "/trips" },
    { title: "Goals", link: "/goals" },
    { title: "Explore", link: "/explore" },
  ];

  return (
    <div className="lg:hidden border-b bg-white dark:bg-gray-950">
      {/* Navbar Top */}
      <div className="flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo/logo.png" alt="logo" width={40} height={40} />
          <h6 className="pl-2 font-bold text-xl text-purple-800">Path Finder</h6>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-between w-6 h-6 relative"
          aria-label="Toggle menu"
        >
          {/* Top line */}
          <span
            className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
              open ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></span>

          {/* Middle line */}
          <span
            className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
              open ? "opacity-0" : "top-2.5"
            }`}
          ></span>

          {/* Bottom line */}
          <span
            className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 top-2.5" : "bottom-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Animated Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4 bg-white dark:bg-gray-950">
              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="font-semibold text-lg text-gray-900 dark:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <button className="w-full bg-blue-500 text-white py-2 rounded">
                Profile / Settings
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
