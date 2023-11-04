"use client";
import { Blinker } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import useMobileMenuStore from "../../stores/mobileMenuStore"; // Adjust the path accordingly

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const HeroInfoSide = () => {
  const { open, setOpen, setPageNum } = useMobileMenuStore();

  const openOrderMenu = () => {
    setPageNum(2);
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen lg:w-[60%] gap-10 flex-col">
        <div className="justify-center items-center flex-col p-0 hidden lg:flex">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="responsive_title text-center font-normal w-full text-zinc-950 pointer-events-none"
          >
            WELCOME TO
          </motion.h1>
          <motion.strong
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="responsive_title text-center w-full text-zinc-950 pointer-events-none font-bold "
          >
            BURGER BURGER!
          </motion.strong>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* DESKTOP */}
          <Link
            href={"/order"}
            className="rounded-xl w-[80vw]  text-xl lg:max-w-[40vw] flex h-[60px] justify-center items-center text-center hover:scale-[1.02]  active:scale-[.95] bg-[#D43300]  p-2 transition-all"
          >
            <span className={`${blinker.className} text-zinc-50`}>
              ORDER NOW
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {" "}
          <Link
            href="#contact"
            className="rounded-xl w-[80vw] text-xl text-center text-zinc-900  h-[60px] flex justify-center items-center lg:max-w-[40vw] hover:scale-[1.02] active:scale-[.95] border-2 bg-[#D9D9D9]  p-2 transition-all"
          >
            <span className={`${blinker.className} text-zinc-900`}>
              CONTACT US
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HeroInfoSide;
