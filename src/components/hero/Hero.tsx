import Image from "next/image";
import React from "react";
import Burger3D from "../burger3d/Burger3D";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-auto flex justify-evenly flex-col items-center bg-gray-50 pt-28 z-[1]">
      <h1 className="responsive_title text-center font-normal w-screen text-zinc-950 pointer-events-none">
        WELCOME TO <strong className="font-semibold">BURGER BURGER!</strong>
      </h1>

      <div className="h-full  relative w-full flex flex-col gap-0 lg:gap-40 lg:flex-row justify-start lg:justify-center items-center mt-4 ">
        <div className="h-[70%] lg:h-[85%]  w-full absolute flex top-0 pointer-events-none">
          <div className="absolute bg-zinc-800 w-[32%] h-[100%] top-0 left-0 rounded-tr-3xl z-[-1] pointer-events-none"></div>
          <div className="absolute bg-zinc-700 w-[11%] h-[100%] top-0 left-[35%] rounded-tr-3xl z-[-1] pointer-events-none"></div>
          <div className="absolute bg-zinc-500 w-[7%] h-[100%] top-0 left-[52%] rounded-tr-xl z-[-1] pointer-events-none"></div>
          <div className="absolute bg-zinc-400 w-[5%] h-[100%] top-0 left-[65%] rounded-tr-lg z-[-1] pointer-events-none"></div>
          <div className="absolute bg-zinc-300 w-[3%] h-[100%] top-0 left-[85%] rounded-tr-md z-[-1] pointer-events-none"></div>
          <div className="absolute bg-zinc-200 w-[2%] h-[100%] top-0 left-[93%] rounded-tr-md z-[-1] pointer-events-none"></div>
        </div>

        <Image
          className="w-[95%] max-w-[550px] lg:w-[550px] translate-y-[10px] lg:translate-y-[60px] pointer-events-none"
          height={1000}
          width={1000}
          alt="Burger picture"
          src={"https://burgerburger.s3.us-east-2.amazonaws.com/top_bun.png"}
        ></Image>

        <div className="flex justify-center items-center gap-6 flex-col">
          <Link
            href={"/order"}
            className="rounded-lg w-[80vw] max-w-[250px] text-center hover:scale-[1.05] bg-[#D43300] shadow-md shadow-zinc-800 p-2 transition-all"
          >
            ORDER NOW
          </Link>
          <Link
            href="#contact"
            className="rounded-lg w-[80vw] text-center  max-w-[250px] hover:scale-[1.05] bg-[#D43300] shadow-md shadow-zinc-800 p-2 transition-all"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
