"use client";

import { Blinker } from "next/font/google";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const OrderPage = () => {
  const [typeOfOrder, setTypeOfOrder] = useState("delivery");

  const changeTypeOfOrder = (type: string) => {
    setTypeOfOrder(type);
  };

  return (
    <div className="overflow-x-hidden w-screen h-auto min-h-[100vh] bg-[#322E2E] pb-10 lg:pb-0 pt-28 lg:pt-10 gap-3 lg:gap-0 flex justify-evenly items-center flex-col">
      <h2 className="text-zinc-50 text-center mb-10 lg:mb-0 w-full z-50 responsive_subtitle font-semibold bg-[#575555] shadow-[0_10px_8px_-10px_rgba(0,0,0,.8)]">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          ORDER NOW
        </motion.span>
      </h2>

      <div className="flex gap-10 w-[80%] justify-center items-center">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => changeTypeOfOrder("delivery")}
          className={`${
            typeOfOrder === "delivery"
              ? "bg-[#D43300] text-zinc-50"
              : "bg-[#D9D9D9] text-zinc-950"
          }  rounded-full w-[200px] h-[60px] hover:scale-[1.02] active:scale-95 flex font-semibold justify-center items-center text-center  text-2xl  p-2 transition-all`}
        >
          <span className={blinker.className}>DELIVERY</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => changeTypeOfOrder("pickup")}
          className={`${
            typeOfOrder === "pickup"
              ? "bg-[#D43300] text-zinc-50"
              : "bg-[#D9D9D9] text-zinc-950"
          }  rounded-full w-[200px] h-[60px] flex hover:scale-[1.02] active:scale-95 font-semibold justify-center items-center text-center text-2xl p-2 transition-all`}
        >
          <span className={blinker.className}>PICK UP</span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-10 w-[80%] justify-center items-center text-xl my-5 lg:my-0 overflow-hidden"
      >
        {typeOfOrder === "delivery" ? (
          <div className="flex flex-col justify-center items-center gap-6 text-xl">
            <p className={blinker.className}>YOU'RE JUST A CLICK AWAY!</p>
            <div
              className={`rounded-xl w-[250px] h-[60px]  flex justify-center items-center text-center hover:scale-[1.02]  text-6xl  active:scale-[.95]   p-2 transition-all`}
            >
              🍔
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-6 text-xl">
            <p className={blinker.className}>YOU CAN GIVE US A CALL!</p>
            <Link
              href="tel:2266638955"
              className={`bg-[#88A861] rounded-xl max-w-[70vw] w-[350px] lg:max-w-[250px] h-[60px] flex justify-center items-center text-center hover:scale-[1.02]  text-2xl  active:scale-[.95]   p-2 transition-all`}
            >
              <span
                className={`flex gap-4 items-center justify-center text-3xl`}
              >
                <FiPhone></FiPhone> 226-663-8955
              </span>
            </Link>
          </div>
        )}
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 w-[100%] lg:w-[60%] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            target="_blank"
            href="https://www.doordash.com/en-CA/store/burger-burger-london-25113744/"
            className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/doordash.png)] max-w-[70vw] hover:scale-[1.02] active:scale-95 lg:max-w-[300px] bg-center bg-cover py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-36 flex justify-center items-center text-center  text-zinc-50  rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
            aria-current="page"
          ></Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            target="_blank"
            href="https://www.ubereats.com/ca/store/burger-burger/5R6qqruVTGiSDkhDLm2KYA"
            className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/ubereats.png)] hover:scale-[1.02] active:scale-95 max-w-[70vw] lg:max-w-[300px]  bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
            aria-current="page"
          ></Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            target="_blank"
            href="https://www.skipthedishes.com/burger-burger"
            className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/skipthedishes.png)] max-w-[70vw] hover:scale-[1.02] active:scale-95 lg:max-w-[300px]  bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw] h-36 flex justify-center items-center text-center  text-zinc-50 rounded-lg md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
            aria-current="page"
          ></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPage;
