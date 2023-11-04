"use client";
import React, { useEffect, useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useMobileMenuStore from "../../stores/mobileMenuStore"; // Adjust the path accordingly

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { open, pageNum, setOpen, setPageNum } = useMobileMenuStore();

  const navbarToggle = useRef<any>();

  const toggleNavbar = () => {
    setOpen(!open);
    setPageNum(1);
  };

  const toggleNavbarOut = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    setOpenMenu(open);
  }, [open]);
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
      <button
        onClick={toggleNavbar}
        data-collapse-toggle="navbar-default"
        type="button"
        className="items-center absolute right-4 w-10 justify-center text-sm rounded-lg md:hidden
         hover:bg-zinc-900 transition-all flex focus:outline-none focus:ring-2 focus:ring-zinc-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <GiHamburgerMenu className="text-2xl text-gray-100" />
      </button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Adjust the duration here
          >
            {/* MOBILE */}
            {pageNum === 1 && (
              <div
                className="w-screen h-[100vh] fixed top-0 left-0 md:block md:w-auto navbar_mobile"
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
           justify-start py-24 gap-10 md:p-0 border border-gray-100 rounded-l md:flex-row text-3xl
            md:space-x-8 md:mt-0 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:md:bg-transparent dark:border-gray-700"
                >
                  <li>
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className="py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-14 flex justify-center items-center text-center text-zync-950 text-zinc-50 dark:text-zync-950  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                      aria-current="page"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/order"}
                      onClick={toggleNavbar}
                      className="py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-14 flex justify-center items-center text-center  text-zinc-50   rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                      aria-current="page"
                    >
                      ORDER NOW
                    </Link>
                  </li>
  
                  <li>
                    <Link
                      href="/#location"
                      onClick={toggleNavbar}
                      className="py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-14 flex justify-center items-center text-center  text-zinc-50  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                      aria-current="page"
                    >
                      LOCATION
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/#contact"
                      onClick={toggleNavbar}
                      className="py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-14 flex justify-center items-center text-center text-zinc-50  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                      aria-current="page"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
