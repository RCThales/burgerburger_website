import React from "react";

import { FiMapPin } from "react-icons/fi";
import Burger3D from "../burger3d/Burger3D";

const Location = () => {
  return (
    <div className="flex flex-col relative">
      {" "}
      <section
        id="location"
        className="h-screen w-screen bg-gray-50 z-[-5] flex flex-col justify-center items-center pt-10"
      >
        <div className="h-[90%] w-[90%] flex justify-evenly flex-col items-center bg-[#F5F4F4] rounded-2xl z-[-5] py-10">
          <div className="w-screen relative">
            <h2 className="text-zinc-900 text-center z-50 responsive_title">
              LOCATION
            </h2>
            <div className=" h-6 w-[80%] bg-gray-300 shadow-gray-500 shadow-md z-[-1] absolute overflow-hidden top-[50%] rounded-l-full right-0"></div>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=633+Richmond+St,+London,+ON+N6A+3G5&output=embed"
            className="w-[90%] h-[90%] shadow-inner-md shadow-black my-14"
          ></iframe>

          <div className="text-left w-full flex flex-col justify-start pl-12 relative h-fit pointer-events-none">
            <FiMapPin
              className={"absolute left-6 top-[10%] text-xl text-zinc-900"}
            />
            <p className="text-zinc-900">633 Richmond St. London, ON</p>
            <p className="text-zinc-900">N6A-3G5, Canada</p>
          </div>
        </div>
      </section>
      <div className=" w-screen h-[130px] lg:h-[250px] left-[35%] lg:left-[40%] absolute bottom-[-50px] z-50 lg:bottom-[-100px]">
        <Burger3D></Burger3D>
      </div>
    </div>
  );
};

export default Location;
