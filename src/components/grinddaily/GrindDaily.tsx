import React from "react";
import Image from "next/image";
import Burger3D from "../burger3d/Burger3D";

const GrindDaily = () => {
  return (
    <section className="pt-20 lg:pt-40 pb-10 bg-gray-50 overflow-hidden">
      <div className="h-[150px] bg-[#242424] w-screen flex justify-center items-center gap-5">
        <span className="w-[55%] px-10 text-xl lg:text-3xl flex justify-center items-center">
          WE GRIND ALL OUR BEEF FRESH IN HOUSE DAILY!
        </span>
        <div className="w-[45%] bg-gray-300 h-[150px] translate-y-[-20px] rounded-l-full shadow-md shadow-black relative flex justify-center items-center">
          <Image
            className="w-[100%] h-auto scale-[1.8] max-w-[200px] translate-x-5 translate-y-8 absolute left-0 object-cover"
            height={2000}
            width={2000}
            alt="Burger picture"
            src={
              "https://burgerburger.s3.us-east-2.amazonaws.com/varsity_blues.png"
            }
          ></Image>
          {/*        <div className=" w-screen h-full">
          <Burger3D></Burger3D>

        </div> */}
        </div>
      </div>
    </section>
  );
};

export default GrindDaily;
