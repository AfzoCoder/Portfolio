import React, { forwardRef } from "react";
import { GoLinkExternal } from "react-icons/go"; //external link icon

const Card = forwardRef(
  ({ rotate, imgSrc, fromColor, toColor, link, heading }, ref) => {
    
    return (
      <div
        ref={ref}
        data-rotate={rotate}
        className={`card group absolute hover:border-2 border-black rounded-xl  m-auto mt-0.2 w-40 md:w-60 h-60 md:h-60 rotate-[${rotate}deg] 
                  flex justify-center items-center bg-[#fffffff6] overflow-hidden
                  `}
        style={{
          transform: `rotate(-${rotate}deg)`,
          background: `linear-gradient(to top right, ${fromColor}, ${toColor})`,
        }}
      >
        <div className=" relative border-white rounded-xl w-[95%] h-[95%] flex justify-center items-center" />
        <a href={`${link}`} className="fixed top-4 right-4" target="_blank">
          <GoLinkExternal className=" hover:scale-120 " />
        </a>

        <h1 className="absolute top-2 left-2 text-white text-xl font-bold font-[logoFont] z-10 text-shadow-2xs">
          {heading ? heading : ""}
        </h1>

        <img
          src={imgSrc}
          className={` hover:scale-130 duration-400 ease-linear inset-0 m-auto w-full rounded-md object-contain  `}
            style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
    );
  }
);

export default Card;
