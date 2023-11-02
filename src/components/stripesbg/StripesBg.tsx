"use client";
import { motion } from 'framer-motion';
import React from 'react'

const StripesBg = () => {
  return (
    <div className="h-[60%] lg:h-[85%] w-full lg:w-[40%] absolute flex top-0 left-[0] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute bg-zinc-800 w-[32%] h-[100%] top-0 left-0 rounded-tr-3xl z-[-1] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute bg-zinc-700 w-[11%] h-[100%] top-0 left-[35%] rounded-tr-3xl z-[-1] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bg-zinc-500 w-[7%] h-[100%] top-0 left-[52%] rounded-tr-xl z-[-1] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bg-zinc-400 w-[5%] h-[100%] top-0 left-[65%] rounded-tr-lg z-[-1] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bg-zinc-300 w-[3%] h-[100%] top-0 left-[85%] rounded-tr-md z-[-1] pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bg-zinc-200 w-[2%] h-[100%] top-0 left-[93%] rounded-tr-md z-[-1] pointer-events-none"
      ></motion.div>
    </div>
  );
}

export default StripesBg