import React from "react";
import { IoCall } from "react-icons/io5"; // icon

const Navbar = () => {
  return (
    <div className="w-full sm:py-2 md:py-4 text-balance md:text-xl  flex justify-between px-2 md:px-6 ">
      
      <div className="flex justify-center items-center select-none ">
        <h2 className="LOGO font-[LoginFont] text-[var(--secondary-color)]  tracking-[10px]">
          AFZO</h2>
        <h3 className="font-semibold tracking-wide font-[logoFont] text-[var(--main-color)]  ">
          CODER.
        </h3>
      </div>

      <div>
        <a href="tel:03455447879">
          <button
            className="button
        
        relative contactBtn   p-4 rounded-full cursor-pointer hover:opacity-90 hover:scale-115 active:scale-95 hover:shadow transition-all ease-linear shadow "
          >
            <IoCall className="text-[var(--main-color)] text-lg md:text-2xl"/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
