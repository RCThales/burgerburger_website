
import React from "react";
import HeroBurger from "../HeroBurger/HeroBurger";
import StripesBg from "../stripesbg/StripesBg";
import HeroInfoSide from "../heroinfoside/HeroInfoSide";
import HeroMobileTitle from "../heromobiletitle/HeroMobileTitle";


const Hero = () => {
  return (
    <section className="h-auto min-h-screen w-screen flex justify-evenly flex-col items-center bg-gray-50 pt-24 lg:pt-10  pb-20 lg:pb-2 z-[1]">
      <HeroMobileTitle />

      <div className="h-auto min-h-[400px] lg:min-h-[600px] relative w-full lg:w-[100%] flex flex-col gap-0 lg:gap-40 lg:flex-row justify-start lg:justify-center items-center mt-4">
        <StripesBg />

        <div className="flex justify-center items-center w-screen lg:w-[40%] flex-col">
          <HeroBurger></HeroBurger>
        </div>

        <HeroInfoSide></HeroInfoSide>
      </div>
    </section>
  );
};

export default Hero;
