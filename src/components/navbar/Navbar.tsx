"use client";

import React, { useState, useRef } from "react";

import Image from "next/image";

import Link from "next/link";
import MobileMenu from "../mobilemenu/MobileMenu";
import Desktop_Menu from "../desktopmenu/Desktop_Menu";

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

          <Desktop_Menu></Desktop_Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
