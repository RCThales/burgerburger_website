"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const GrindDaily = () => {
  return (
    <section className="pt-20 lg:pt-40 pb-10 bg-gray-50 overflow-hidden">
      <div className="h-[150px] bg-[#322E2E] w-screen flex justify-center items-center gap-5">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-[55%] px-10 text-2xl md:text-3xl lg:text-5xl font-semibold text-zinc-50 flex justify-center items-center"
        >
          WE GRIND ALL OUR BEEF FRESH IN HOUSE DAILY!
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 50, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[45%] bg-gray-300 h-[150px] rounded-l-full shadow-md shadow-black relative flex justify-center items-center"
        >
          <Image
            className="w-[100%] h-auto scale-[1.8] max-w-[200px] translate-x-5 translate-y-8 absolute left-0 object-cover"
            height={2000}
            width={2000}
            alt="Burger picture"
            src={
              "https://burgerburger.s3.us-east-2.amazonaws.com/varsity_blues.png"
            }
          ></Image>
          {/*        <div className=" w-screen h-full">
          <Burger3D></Burger3D>

        </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default GrindDaily;
