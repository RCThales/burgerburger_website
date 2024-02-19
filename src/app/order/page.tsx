"use client";

import { Blinker } from "next/font/google";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const OrderPage = () => {
  const [typeOfOrder, setTypeOfOrder] = useState("");
  const [startOrder, setStartOrder] = useState(false);

  const changeTypeOfOrder = (type: string) => {
    setTypeOfOrder(type);
    if (!startOrder) setStartOrder(true);
  };

  return (
    <section className="w-screen min-h-screen h-auto bg-[#322E2E] flex flex-col pb-10 lg:pb-0 relative gap-10">
      {/* UPPER SECTION */}
      <div className="w-full gap-12 lg:gap-20 justify-center items-center flex flex-col pt-28 pb-10 lg:pt-32 lg:pb-0 ">
        <h2 className="text-zinc-50 text-center w-full z-50 text-3xl lg:text-5xl font-semibold p-2 lg:p-3 bg-[#575555] shadow-[0_10px_8px_-10px_rgba(0,0,0,.8)]">
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
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => changeTypeOfOrder("delivery")}
            className={`${
              typeOfOrder === "delivery"
                ? "bg-[#D43300] text-zinc-50"
                : "bg-[#D9D9D9] text-zinc-950"
            }  rounded-2xl w-[240px] h-[60px] hover:scale-[1.02] active:scale-95 flex font-semibold justify-center items-center text-center  text-2xl  p-2 transition-all`}
          >
            <span className={blinker.className}>DELIVERY</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => changeTypeOfOrder("pickup")}
            className={`${
              typeOfOrder === "pickup"
                ? "bg-[#D43300] text-zinc-50"
                : "bg-[#D9D9D9] text-zinc-950"
            }  rounded-2xl w-[240px] h-[60px] flex hover:scale-[1.02] font-semibold justify-center items-center text-center text-2xl  active:scale-[.95]   p-2 transition-all`}
          >
            <span className={blinker.className}>PICK UP</span>
          </motion.button>
        </div>
      </div>
      <div className="w-screen flex flex-col justify-evenly gap-14 lg:gap-0 items-center  m-auto">
        {/* ORDER OPTIONS */}
        {startOrder ? (
          <div className="flex flex-col justify-center items-center gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="flex gap-10 w-[80%] justify-center items-center text-xl lg:hidden"
            >
              {typeOfOrder === "delivery" ? (
                <motion.div
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  className="flex flex-col justify-center items-center gap-0 lg:gap-6 text-xl"
                >
                  <p
                    className={`${blinker.className} translate-y-[30px] text-zinc-50`}
                  >
                    YOU&apos;RE JUST A CLICK AWAY!
                  </p>
                  <div
                    className={`rounded-xl w-[250px] h-[60px] flex justify-center items-center text-center hover:scale-[1.02]  text-2xl  active:scale-[.95]   p-2 transition-all`}
                  ></div>
                </motion.div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-6 text-xl">
                  <motion.p
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    className={`${blinker.className} text-zinc-50`}
                  >
                    YOU CAN GIVE US A CALL!
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0 }}
                  >
                    {" "}
                    <Link
                      href="tel:2266638955"
                      className={`bg-[#88A861] rounded-xl w-[250px] h-[60px] flex justify-center items-center text-center hover:scale-[1.02]  text-2xl  active:scale-[.95]   p-2 transition-all`}
                    >
                      <span
                        className={`flex gap-4 items-center justify-center text-3xl text-zinc-50`}
                      >
                        <FiPhone></FiPhone> 226-663-8955
                      </span>
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-[100%] lg:w-[60%] justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  target="_blank"
                  href="https://www.doordash.com/en-CA/store/burger-burger-london-25113744/"
                  className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/doordash.png)] max-w-[70vw] hover:scale-[1.02] active:scale-95 lg:max-w-[300px] bg-center bg-cover py-2 pl-3 pr-4 bg-[#2F2E2E] w-[85vw] h-32 lg:h-44 flex justify-center items-center text-center  text-zinc-50  rounded-xl md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                ></Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  target="_blank"
                  href="https://www.ubereats.com/ca/store/burger-burger/5R6qqruVTGiSDkhDLm2KYA"
                  className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/ubereats.png)] hover:scale-[1.02] active:scale-95 max-w-[70vw] lg:max-w-[300px]  bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw]  h-32 lg:h-44 flex justify-center items-center text-center  text-zinc-50 rounded-xl md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
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
                  href="https://www.skipthedishes.com/burger-burger"
                  className="bg-[url(https://burgerburger.s3.us-east-2.amazonaws.com/skipthedishes.png)] max-w-[70vw] hover:scale-[1.02] active:scale-95 lg:max-w-[300px]  bg-center bg-cover py-2 pl-3 pr-4 bg-[#595959] w-[85vw]  h-32 lg:h-44 flex justify-center items-center text-center  text-zinc-50 rounded-xl md:bg-transparent hover:md:text-orange-500 transition-all md:p-0 "
                  aria-current="page"
                ></Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="gap-10 w-[80%] justify-center items-center text-xl hidden lg:flex"
            >
              {typeOfOrder === "delivery" ? (
                <motion.div
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  className="flex flex-col justify-center items-center gap-6 text-xl"
                >
                  <p
                    className={`${blinker.className} translate-y-[40px] text-zinc-50`}
                  >
                    YOU&apos;RE JUST A CLICK AWAY!
                  </p>
                  <div
                    className={`rounded-xl w-[250px] h-[60px] flex justify-center items-center text-center hover:scale-[1.02]  text-2xl  active:scale-[.95]   p-2 transition-all`}
                  ></div>
                </motion.div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-6 text-xl">
                  <motion.p
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    className={`${blinker.className} text-zinc-50`}
                  >
                    YOU CAN GIVE US A CALL!
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0 }}
                  >
                    {" "}
                    <Link
                      href="tel:2266638955"
                      className={`bg-[#88A861] rounded-xl w-[250px] h-[60px] flex justify-center items-center text-center hover:scale-[1.02]  text-2xl  active:scale-[.95]   p-2 transition-all`}
                    >
                      <span
                        className={`flex gap-4 items-center justify-center text-3xl text-zinc-50`}
                      >
                        <FiPhone></FiPhone> 226-663-8955
                      </span>
                    </Link>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col gap-20 w-[100%] text-xl lg:text-3xl text-center justify-center items-center flex-grow">
            <p className={`${blinker.className} text-zinc-50  max-w-[80vw]`}>
              <span className="font-semibold text-2xl lg:text-4xl">
                Begin your burger adventure here!{" "}
              </span>{" "}
              <br />
              <br />
              Savour the flavor of our fresh meat burgers for a delicious, juicy
              bite!
            </p>

            <div className="h-[220px]"></div>
            <Image
              src="https://burgerburger.s3.us-east-2.amazonaws.com/bb_logo_cut.png"
              height={800}
              width={800}
              alt={"Burger Burger logo cut in half."}
              className=" max-w-[280px] absolute bottom-0"
            ></Image>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderPage;
