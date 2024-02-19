"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroBurger = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          className="w-[95%] max-w-[550px] lg:w-[550px] translate-y-[10px] lg:translate-y-[60px] cursor-grab pointer-events-none"
          height={1000}
          width={1000}
          alt="Burger picture"
          src={"https://burgerburger.s3.us-east-2.amazonaws.com/top_bun.png"}
        ></Image>
      </motion.div>
    </>
  );
};

export default HeroBurger;
