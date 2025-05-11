"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white"
          />

          {/* Black panels animation */}
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="flex flex-col w-full h-full fixed top-0 left-0 z-50"
          >
            <div className="flex flex-row w-full h-1/2">
              <motion.div
                initial={{ y: 0, x: 0 }}
                exit={{ y: -500, x: -500 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  // delay: 0.1,
                }}
                className="flex items-center justify-center bg-black w-1/2 h-full"
              />
              <motion.div
                initial={{ y: 0, x: 0 }}
                exit={{ y: -500, x: 500 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  // delay: 0.3,
                }}
                className="flex items-center justify-center bg-black w-1/2 h-full"
              />
            </div>
            <div className="flex flex-row w-full h-1/2">
              <motion.div
                initial={{ y: 0, x: 0 }}
                exit={{ y: 500, x: -500 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  // delay: 0.5,
                }}
                className="flex items-center justify-center bg-black w-1/2 h-full"
              />
              <motion.div
                initial={{ y: 0, x: 0 }}
                exit={{ y: 500, x: 500 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  // delay: 0.7,
                }}
                className="flex items-center justify-center bg-black w-1/2 h-full"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
