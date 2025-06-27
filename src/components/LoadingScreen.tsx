"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* White background that stays until animation is complete */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white"
          />

          {/* Black panels animation */}
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="flex flex-row w-full h-full fixed top-0 left-0 z-50"
          >
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.45,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
            <motion.div
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.55,
              }}
              className="flex items-center justify-center bg-black w-1/6 h-full"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
