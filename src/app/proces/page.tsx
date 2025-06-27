"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcesPage() {
  // Varianty pro animace
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 pt-24">
      {/* HLÍNA - širší, méně centrovaný blok */}
      <motion.div 
        className="flex flex-col md:flex-row mb-24 items-center md:items-start max-w-5xl md:ml-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeInUp} className="w-full md:w-2/5 pr-0 md:pr-10 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-5">HLÍNA</h2>
          <p className="text-gray-700">
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh ffgdfg
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl
            djkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh
            fsjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh f
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="w-full md:w-3/5">
          <div className="aspect-[4/3] relative bg-gray-200">
            <Image
              src="/mock/hrnek1.webp" 
              alt="Keramická hlína"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* GLAZURA - užší, posunutý mírně doprava */}
      <motion.div 
        className="flex flex-col md:flex-row-reverse mb-28 items-center md:mr-8 max-w-4xl ml-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeInUp} className="w-full md:w-1/2 pl-0 md:pl-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-5">GLAZURA</h2>
          <p className="text-gray-700">
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh ffgdfg
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl
            djkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh
            fsjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh f
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="w-full md:w-1/2">
          <div className="aspect-square relative bg-gray-200 md:mr-8">
            <Image
              src="/mock/hrnek2.jpg" 
              alt="Glazura na keramiku"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* KRUH - maximální šířka, vycentrováno */}
      <motion.div 
        className="flex flex-col md:flex-row mb-28 items-center max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeInUp} className="w-full md:w-3/5 pr-0 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-5">KRUH</h2>
          <p className="text-gray-700">
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh ffgdfg
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh
            fsjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdn
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="w-full md:w-2/5">
          <div className="aspect-[3/4] relative bg-gray-200 md:ml-4">
            <Image
              src="/mock/hrnek3.jpeg" 
              alt="Keramický kruh"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* PEC - úzký blok posunutý doleva */}
      <motion.div 
        className="flex flex-col md:flex-row-reverse mb-20 items-center md:items-end max-w-5xl md:ml-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={fadeInUp} className="w-full md:w-2/5 pl-0 md:pl-10 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-5">PEC</h2>
          <p className="text-gray-700">
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh ffgdfg
            sjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl
            djkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh
            fsjdbfkjbfjskdhfnjkf nsdf isdjkbfs dfsntsl dkfs
            fsdnfo sldfj sdolfhs oflshd fjsdnf iksuh f
          </p>
        </motion.div>
        <motion.div variants={fadeIn} className="w-full md:w-3/5">
          <div className="aspect-[2/3] relative bg-gray-200 md:mr-6">
            <Image
              src="/mock/hrnek1.webp" 
              alt="Keramická pec"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}