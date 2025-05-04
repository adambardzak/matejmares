"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const items = [
  {
    href: "/portfolio",
    label: "PORTFOLIO",
    img: "/hero/3.webp",
  },
  {
    href: "/proces",
    label: "PROCES",
    img: "/hero/2.webp",
  },
  {
    href: "/produkty",
    label: "PRODUKTY",
    img: "/hero/12.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

function HrefsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 min-h-screen">
      <motion.div
        className="flex flex-row gap-12 justify-center items-end"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {items.map((item) => (
          <motion.div
            key={item.href}
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <Link
              href={item.href}
              className="flex flex-col items-start group w-[320px]"
            >
              <div className="w-[320px] h-[500px] overflow-hidden shadow-md mb-4">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={320}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                  loading="lazy"
                  style={{ willChange: "transform, opacity" }}
                />
              </div>
              <span className="text-xl font-normal tracking-wide flex items-center gap-2 group-hover:underline group-hover:underline-offset-4 transition-all">
                {item.label}{" "}
                <span className="text-2xl">
                  <BsArrowRight />
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default HrefsSection;
