import React from 'react'
import { Blinker } from "next/font/google";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const Footer = () => {
  return (
    <footer className="w-screen h-20 bg-[#575555] flex justify-center items-center z-[99999999999999999999]">
      <p className={`${blinker.className} flex text-sm lg:text-lg text-center text-zinc-50`}>
        All Rights Reserved.&copy;
        <br />
        Designed by Ray Ruas and Thales Cardoso.
      </p>
    </footer>
  );
}

export default Footer