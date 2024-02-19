import Link from "next/link";
import React from "react";
import AppInstall from "../appinstall/AppInstall";

const Desktop_Menu = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className="w-screen md:block px-4 md:w-auto navbar_desktop">
        <ul className="flex gap-8 text-2xl justify-center items-center">
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
              href={"/order"}
              className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
              aria-current="page"
            >
              ORDER NOW
            </Link>
          </li>

          <li>
            <Link
              href="/#location"
              className="py-2 pl-3 pr-4 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
              aria-current="page"
            >
              LOCATION
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              className="py-2 pl-3 pr-4 items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
              aria-current="page"
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <AppInstall></AppInstall>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Desktop_Menu;
