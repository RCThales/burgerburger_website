"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineClose, MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const { theme } = useTheme();
  const [pageNum, setPageNum] = useState(1);
  const navbarToggle = useRef<any>();
  const navbarWrapper = useRef<any>();

  const toggleNavbar = () => {
    const navbarClasses = navbarToggle?.current?.classList;
    if (navbarClasses.contains("navbar_animatedOut")) {
      navbarClasses.remove("hiddenNav");
      navbarClasses.remove("navbar_animatedOut");
      navbarClasses.add("navbar_animatedIn");
      return;
    }

    navbarClasses.remove("navbar_animatedIn");
    navbarClasses.add("navbar_animatedOut");
    setTimeout(() => {
      navbarClasses.add("hiddenNav");
    }, 200);
  };
  const toggleNavbarStart = () => {
    setPageNum(1);
  };

  const changePage = (page: number) => {
    setPageNum(page);
    toggleNavbar();
  };

  const toggleNavbarOut = () => {
    const navbarClasses = navbarToggle?.current?.classList;

    navbarClasses.remove("navbar_animatedIn");
    navbarClasses.add("navbar_animatedOut");
    navbarClasses.add("hiddenNav");
  };

  useEffect(() => {
    const navbarClasses = navbarWrapper?.current?.classList;
    if (theme === "dark") {
      navbarClasses?.add("darkNavBarColor");
      navbarClasses?.remove("navBarColor");
    } else {
      navbarClasses?.add("navBarColor");
      navbarClasses?.remove("darkNavBarColor");
    }
  }, [theme]);

  useEffect(() => {
    const changeNavbarWithResize = () => {
      if (window?.innerWidth >= 768) {
        toggleNavbarOut();
      }
    }; // Debounced for efficiency

    window?.addEventListener("resize", changeNavbarWithResize);

    return () => {
      window?.removeEventListener("resize", changeNavbarWithResize);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarWrapper}
        className="fixed top-0 w-screen items-center justify-center z-[99999999] bg-[#242424] shadow-black shadow-md"
      >
        <div className="max-w-screen-xl flex flex-wrap h-full items-center justify-between mx-auto p-4 ">
          <Link href="/" className="flex items-center">
            <span className="self-center text-lg text-center uppercase transition-all font-semibold whitespace-nowrap flex items-center gap-2">
              <span className="bb_logo text-2xl translate-y-2">BURGER</span>
              <Image
                src={
                  "https://burgerburger.s3.us-east-2.amazonaws.com/bb_logo.svg"
                }
                height={1500}
                width={1500}
                alt="Burger Burger Logo"
                className="w-[35px] lg:w-[45px]"
              ></Image>
              <span className="bb_logo text-2xl  translate-y-2">BURGER</span>
            </span>
          </Link>

          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center w-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-zinc-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <GiHamburgerMenu className="text-2xl text-gray-100" />
          </button>

          {/* MOBILE */}
          {pageNum === 1 && (
            <div
              className="w-screen h-[100vh] fixed top-0 left-0 md:block md:w-auto hiddenNav navbar_animatedOut navbar_mobile"
              id="navbar-default"
              ref={navbarToggle}
            >
              <button
                onClick={toggleNavbar}
                className="absolute top-6 right-6 text-black text-3xl"
              >
                <MdOutlineClose></MdOutlineClose>
              </button>
              <ul
                className="font-medium h-screen w-screen md:h-[70px] items-center flex flex-col
           justify-start py-24 gap-10 md:p-0 border border-gray-100 rounded-l md:flex-row text-lg
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
              >
                <li>
                  <Link
                    href="/"
                    onClick={toggleNavbar}
                    className="py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => changePage(2)}
                    className="py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    ORDER NOW
                  </button>
                </li>
                <li>
                  <Link
                    href="#location"
                    onClick={toggleNavbar}
                    className="py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    LOCATION
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={toggleNavbar}
                    className="py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {pageNum === 2 && (
            <div
              className="w-screen h-[100vh] fixed top-0 left-0 md:block md:w-auto  navbar_mobile"
              id="navbar-default"
              ref={navbarToggle}
            >
              <button
                onClick={toggleNavbarStart}
                className="absolute top-6 right-6 text-black text-3xl"
              >
                <MdOutlineClose></MdOutlineClose>
              </button>
              <ul
                className="font-medium h-screen w-screen md:h-[70px] items-center flex flex-col
           justify-start py-24 gap-10 md:p-0 border border-gray-100 rounded-l md:flex-row text-lg
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
              >
                <li>
                  <button
                    onClick={() => changePage(3)}
                    className="py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    DELIVERY
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changePage(4)}
                    className="py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    PICK UP
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* DELIVERY */}
          {pageNum === 3 && (
            <div
              className="w-screen h-[100vh] fixed top-0 left-0 md:block md:w-auto  navbar_mobile"
              id="navbar-default"
              ref={navbarToggle}
            >
              <button
                onClick={() => changePage(2)}
                className="absolute top-6 left-6 text-black text-3xl"
              >
                <MdArrowBackIosNew></MdArrowBackIosNew>
              </button>
              <button
                onClick={toggleNavbarStart}
                className="absolute top-6 right-6 text-black text-3xl"
              >
                <MdOutlineClose></MdOutlineClose>
              </button>

              <ul
                className="font-medium h-screen w-screen md:h-[70px] items-center flex flex-col
           justify-start py-24 gap-10 md:p-0 border border-gray-100 rounded-l md:flex-row text-lg overflow-y-auto
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
              >
                <h3 className="text-center text-zinc-900 text-3xl">DELIVERY</h3>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.doordash.com/en-CA/store/burger-burger-london-25113744/"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/doordash.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.ubereats.com/ca/store/burger-burger/5R6qqruVTGiSDkhDLm2KYA"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/ubereats.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://www.skipthedishes.com/burger-burger"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/skipthedishes.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>
              </ul>
            </div>
          )}

          {/* PICK UP */}
          {pageNum === 4 && (
            <div
              className="w-screen h-[100vh] fixed top-0 left-0 md:block md:w-auto  navbar_mobile"
              id="navbar-default"
              ref={navbarToggle}
            >
              <button
                onClick={() => changePage(2)}
                className="absolute top-6 left-6 text-black text-3xl"
              >
                <MdArrowBackIosNew></MdArrowBackIosNew>
              </button>

              <button
                onClick={toggleNavbarStart}
                className="absolute top-6 right-6 text-black text-3xl"
              >
                <MdOutlineClose></MdOutlineClose>
              </button>

              <ul
                className="font-medium h-screen w-screen md:h-[70px] items-center flex flex-col
           justify-start py-24 gap-10 md:p-0 border border-gray-100 rounded-l md:flex-row text-lg overflow-y-auto
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
              >
                <h3 className="text-center text-zinc-900 text-3xl">PICK UP</h3>
                <li>
                  <Link
                    href="tel:+12266638955"
                    target="_blank"
                    onClick={toggleNavbar}
                    className="py-2 pl-3 pr-4 bg-[#88A861] w-[85vw] h-14 flex text-2xl justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  >
                    <FiPhone className={"text-2xl text-gray-50 mr-4"} />
                    226-663-8955
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.doordash.com/en-CA/store/burger-burger-london-25113744/"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/doordash.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.ubereats.com/ca/store/burger-burger/5R6qqruVTGiSDkhDLm2KYA"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/ubereats.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://www.skipthedishes.com/burger-burger"
                    onClick={toggleNavbar}
                    className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/skipthedishes.png)] bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                    aria-current="page"
                  ></Link>
                </li>
              </ul>
            </div>
          )}

          {/* DESKTOP */}
          <div className="w-screen md:block md:w-auto navbar_desktop">
            <ul className="flex gap-10">
              <li>
                <Link
                  href="/"
                  onClick={toggleNavbar}
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  onClick={toggleNavbar}
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  ORDER NOW
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  onClick={toggleNavbar}
                  className="py-2 pl-3 pr-4 flex justify-center items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                >
                  LOCATION
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={toggleNavbar}
                  className="py-2 pl-3 pr-4 items-center text-center text-zync-950 dark:text-gray-100 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
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
