"use client";
import React, { useState, useRef, useEffect } from "react";
import Burger3D from "../burger3d/Burger3D";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroBurger = () => {
  const [burgerDimension, setBurgerDimension] = useState<string>("2d");
  const [isLoading, setLoading] = useState(false);
  const pressDuration = 2000;
  const pressTimer = useRef<any>(null);

  const startPressTimer = () => {
    setLoading(true);
    pressTimer.current = setTimeout(() => {
      // Long press action
      setBurgerDimension(burgerDimension === "2d" ? "3d" : "2d");
      setLoading(false);
    }, pressDuration);
  };

  const cancelPressTimer = () => {
    setLoading(false);
    clearTimeout(pressTimer.current);
  };

  const handleStartPress = () => {
    startPressTimer();
  };

  const handleEndPress = () => {
    cancelPressTimer();
  };

  useEffect(() => {
    return () => {
      // Cleanup the timer when the component unmounts
      cancelPressTimer();
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {burgerDimension === "2d" ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onTouchStart={handleStartPress}
          onTouchEnd={handleEndPress}
          onMouseDown={handleStartPress}
          onMouseUp={handleEndPress}
          onMouseLeave={handleEndPress}
        >
          <Image
            className="w-[95%] max-w-[550px] lg:w-[550px] translate-y-[10px] lg:translate-y-[60px] cursor-grab pointer-events-none"
            height={1000}
            width={1000}
            alt="Burger picture"
            src={"https://burgerburger.s3.us-east-2.amazonaws.com/top_bun.png"}
          ></Image>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          onTouchStart={handleStartPress}
          onTouchEnd={handleEndPress}
          onMouseDown={handleStartPress}
          onMouseUp={handleEndPress}
          onMouseLeave={handleEndPress}
          className="w-full h-[58vh] lg:w-[550px] lg:h-[63vh] cursor-grab"
        >
          <Burger3D></Burger3D>
        </motion.div>
      )}
    </>
  );
};

export default HeroBurger;

const LoadingIndicator: React.FC = () => {
  return (
    <div
      className={
        "loadingIndicator z-[9999999] translate-y-[40px] pointer-events-none"
      }
    ></div>
  );
};
