"use client";

import React, { useState, useRef } from "react";

import Image from "next/image";

import Link from "next/link";
import MobileMenu from "../mobilemenu/MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navbarWrapper = useRef<any>();

  return (
    <>
      <nav
        ref={navbarWrapper}
        className="fixed top-0 w-screen items-center justify-center z-[99999999] bg-[#242424] shadow-[0_10px_13px_-10px_rgba(0,0,0,.6)]"
      >
        <div className="max-w-screen-xl flex flex-wrap h-full items-center justify-between mx-auto p-4 ">
          <Link href="/" className="flex items-center">
            <span className="self-center text-center uppercase transition-all font-semibold whitespace-nowrap flex items-center gap-2  ml-5">
              <span className="bb_logo text-2xl text-zinc-50">BURGER</span>
              <Image
                src={
                  "https://burgerburger.s3.us-east-2.amazonaws.com/bb_logo.svg"
                }
                height={1500}
                width={1500}
                alt="Burger Burger Logo"
                className="w-[30px] lg:w-[35px] -translate-y-1 lg:-translate-y-1"
              ></Image>
              <span className="bb_logo text-2xl text-zinc-50">BURGER</span>
            </span>
          </Link>

          <MobileMenu></MobileMenu>

          {/* DESKTOP */}
          <div className="w-screen md:block px-4 md:w-auto navbar_desktop">
            <ul className="flex gap-8 text-2xl">
              <li>
                <Link
                  href="/"
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  ORDER NOW
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  LOCATION
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="py-2 pl-3 pr-4 items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
