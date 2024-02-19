"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroMobileTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      className="responsive_title text-center font-normal w-full text-zinc-950 pointer-events-none block lg:hidden"
    >
      WELCOME TO{" "}
      <motion.strong
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="responsive_title text-center w-full text-zinc-950 pointer-events-none font-semibold"
      >
        BURGER BURGER!
      </motion.strong>
    </motion.h1>
  );
};

export default HeroMobileTitle;
