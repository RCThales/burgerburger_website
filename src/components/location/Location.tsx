import React from "react";

import { FiMapPin } from "react-icons/fi";

const Location = () => {
  return (
    <div className="flex flex-col relative">
      {" "}
      <section
        id="location"
        className="h-screen w-screen bg-gray-50 z-[1] flex flex-col justify-center items-center pt-10"
      >
        <div className="h-[90%] w-[90%] flex justify-evenly flex-col items-center bg-[#F5F4F4] rounded-2xl z-[1] py-10">
          <div className="w-screen relative pointer-events-none">
            <h2 className="text-zinc-900 text-center z-50 text-5xl py-2 font-semibold bg-[#C2C1C1] shadow-[0_10px_8px_-10px_rgba(0,0,0,.8)]">
              LOCATION
            </h2>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=633+Richmond+St,+London,+ON+N6A+3G5&output=embed"
            className="w-[90%] h-[90%] shadow-inner-md shadow-black my-14 transition-all cursor-grab"
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
    </div>
  );
};

export default Location;
