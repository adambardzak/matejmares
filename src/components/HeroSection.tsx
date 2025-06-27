"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const IMAGE_COUNT = 16;
const IMAGE_SIZE = 300;

const HERO_IMAGE_AREA = {
  top: 260, // px from top
  height: 350, // px
  left: () => window.innerWidth * 0.25, // 25% from left
  width: () => window.innerWidth * 0.4, // 50% of window width
};

const headingParts = [
  {
    key: "vitej",
    content: "Vítej na",
    highlight: false,
  },
  {
    key: "portfolio",
    content: "portfoliu",
    highlight: false,
  },
  {
    key: "svet",
    content: "a světě vizuálního umění",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.8,
    },
  },
};

const wordVariants = {
  hidden: { scaleY: 0, opacity: 0, originY: 1 },
  visible: {
    scaleY: 1,
    opacity: 1,
    originY: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showBuffer, setShowBuffer] = useState(false);
  const bufferRef = useRef<HTMLImageElement>(null);
  const [startImageAnimation, setStartImageAnimation] = useState(false);

  // Start image animation after loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartImageAnimation(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Preload all images
  useEffect(() => {
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const img = new window.Image();
      img.src = `/hero/${i}.webp`;
    }
  }, []);

  // Prepare the next image in a hidden buffer
  useEffect(() => {
    if (!startImageAnimation) return; // Don't start until loading screen is done

    const interval = setInterval(() => {
      // Restrict random position to the defined area
      const areaLeft = HERO_IMAGE_AREA.left();
      const areaWidth = HERO_IMAGE_AREA.width();
      const areaTop = HERO_IMAGE_AREA.top;
      const areaHeight = HERO_IMAGE_AREA.height;

      const newX = areaLeft + Math.random() * (areaWidth - IMAGE_SIZE);
      const newY = areaTop + Math.random() * (areaHeight - IMAGE_SIZE);

      setPosition({ x: newX, y: newY });
      setShowBuffer(true);

      const handleLoad = () => {
        setCurrentIndex(nextIndex);
        setNextIndex((prev) => (prev % IMAGE_COUNT) + 1);
        setShowBuffer(false);
      };

      const bufferImg = bufferRef.current;
      if (bufferImg && bufferImg.complete) {
        handleLoad();
      } else if (bufferImg) {
        bufferImg.onload = handleLoad;
      }
    }, 500);

    return () => clearInterval(interval);
  }, [nextIndex, startImageAnimation]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-end justify-center">
      {/* Animated Heading */}
      <motion.h1
        className="z-10 text-start text-4xl md:text-6xl lg:text-7xl font-normal mb-16 mt-8 w-1/2"
        style={{
          color: "#fff",
          mixBlendMode: "difference",
          fontFamily: "var(--font-poppins)",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {headingParts.map((part) => {
          const words = part.content.split(" ");
          return (
            <span key={part.key} className="inline-block mr-2">
              {words.map((word, idx) => (
                <motion.span
                  key={word + idx}
                  variants={wordVariants}
                  className={clsx(
                    "inline-block mr-2",
                    part.highlight && "underline"
                  )}
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          );
        })}
      </motion.h1>
      {/* Main visible image */}
      <img
        src={`/hero/${currentIndex}.webp`}
        alt={`Hero image ${currentIndex}`}
        className="absolute h-[400px] object-cover"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          display: showBuffer ? "none" : "block",
          borderRadius: "inherit",
          objectPosition: "center center",
          objectFit: "cover",
        }}
        decoding="sync"
        loading="eager"
        sizes="100vw"
      />
      {/* Buffer image, hidden until ready */}
      <img
        ref={bufferRef}
        src={`/hero/${nextIndex}.webp`}
        alt=""
        className="absolute h-[400px]  object-cover pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          display: showBuffer ? "block" : "none",
          opacity: 0,
        }}
        decoding="sync"
        loading="eager"
        sizes="100vw"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroSection;
