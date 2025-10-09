import React from "react";
import { PiArrowBendRightDown } from "react-icons/pi"; //icon


const Home = () => {

  return (
    <div className="relative w-full h-[90vh]  p-3  md:p-6 flex flex-col justify-center items-center">
      <div className="absolute select-none top-10 md:top-20 lg:top-30 left-auto flex justify-center items-center flex-col">
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-[var(--secondary-color)] z-10 font-bold font-[LoginFont]">
          REACT
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-[var(--main-color)] z-30 font-bold font-[LoginFont]">
          DEVELOPER
        </h1>
      </div>
      <div className="h-3/4">
        <img
          src="/images/avatar2.png"
          className=" sm:h-1/2 lg:h-full absolute top-0 left-0 sm:left-auto  md:right-35 z-20 "
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>
      <PiArrowBendRightDown className="absolute right-5 bottom-5 sm:hidden"/>

      <span className="w-[90%] h-[1px] bg-[var(--main-color)]/10 absolute bottom-0"></span>
    </div>
  );
};

export default Home;
