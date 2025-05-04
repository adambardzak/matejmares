"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/produkty", label: "Produkty" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  // Placeholder for cart count
  const cartCount = 3;
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setHidden(true); // Hide navbar
      } else {
        setHidden(false); // Show navbar
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ y: hidden ? -100 : 0 });
  }, [hidden, controls]);

  return (
    <motion.nav
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-black py-3 px-6 flex items-center justify-between font-sans"
      style={{ y: 0 }}
    >
      {/* Left: Logo + Nav Links */}
      <div className="flex items-center gap-10">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-2xl font-bold tracking-tight select-none"
          style={{ fontFamily: "Arimo, Arial, sans-serif" }}
        >
          MM
        </motion.div>
        <motion.ul
          className="flex gap-8 text-lg font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 120 },
                },
              }}
              whileTap={{ scale: 0.96 }}
              className="relative"
            >
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:underline uppercase font-light"
              >
                {link.label}
              </Link>
              {/* Animated underline */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-black rounded"
                layoutId="nav-underline"
                style={{ bottom: -4 }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* Right: Cart Icon */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative flex items-center justify-center"
      >
        <FiShoppingCart className="text-2xl" />
        <motion.span
          key={cartCount}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5 shadow"
        >
          {cartCount}
        </motion.span>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
