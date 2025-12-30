import React, { useState } from "react";
import { LuMousePointerClick } from "react-icons/lu"; // click icons
import { TbArrowCurveLeft } from "react-icons/tb"; //icon
import Adminproject from "../assets/Admin-Project.png";
import userproject from "../assets/User-1.png";
import Burgerproject from "../assets/BURGER.png";
import TicTakToe from "../assets/TTT.png";
import POS from "../assets/POS_Syst;em.png";
// import { IoIosArrowRoundBack } from "react-icons/io";
import { MdKeyboardBackspace } from "react-icons/md";

import Card from "./Card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isanimaitonBack, setisanimaitonBack] = useState(false);

  const firstRender = useRef(true); // track first render

  // GSAP Animation-----------------
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    if (cards.length === 0) return;

    // ✅ skip first render completely
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    let tl = gsap.timeline();

    if (isOpen) {
      // OPEN animation
      tl.to(cards, {
        y: -100,
        width: 250,
        duration: 0.8,
        rotate: 0,
        stagger: 0.2,
        ease: "power2.out",
      }).to(cards, {
        y: 315,
        x: (i, target) => parseInt(target.dataset.rotate * 29 || 0),
        duration: 0.9,
        rotation: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
    } else {
      // CLOSE animation
      tl.to(cards, {
        y: 315,
        rotation: 0,
        duration: 0.2,
        stagger: 0.2,
        ease: "power2.in",
        onStart: () => {
          setisanimaitonBack(true);
        },
      })
        .to(cards, {
          y: -100,
          x: 0,

          rotation: 0,
          duration: 0.9,
          stagger: 0.4,
          ease: "power2.in",
        })
        .to(cards, {
          y: 0,
          width: 160,
          rotation: (i) => cards[i].dataset.rotate,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            setisanimaitonBack(false);
          },
        });
    }

    return () => tl.kill();
  }, [isOpen]);

  // -------------gsap end---------------

  return (
    <div
      className={`w-full  h-screen py-8 px-6 md:p-20 flex flex-col-reverse md:flex-row items-start  justify-end md:justify-between gap-5 md:gap-20  ${
        isOpen ? "overflow-x-scroll md:overflow-x-auto" : ""
      }`}
    >
      <div className="ParentFolder  w-80 h-70 bg-transparent  perspective-near transform-3d ">
        {/*PROJECTS FOLDER  */}
        <div
          className={`Mainfoler relative flex justify-center items-center  shadow-xl shadow-black/30   w-70 md:w-80 h-80 bg-[#3A5A40] rounded-2xl   ${
            isOpen || isanimaitonBack
              ? "-rotate-x-0"
              : "-rotate-x-[-20deg] hover:-rotate-x-0"
          } 
            transition-all duration-450 ease-in  cursor-pointer`}
        >
          <div
            className={`blurWhiteTop group z-1000  absolute flex  flex-row border-t-[#ffffff35] p-8 items-end justify-between h-[60%] w-full border-b-2 border-b-[#3A5A40] rounded-b-2xl bottom-0  bg-white/40  backdrop-blur-md `}
          >
            <div className="flex flex-col ">
              <h1 className="text-4xl  text-white/40 font-[logoFont] ">
                Folder
              </h1>
              <h1 className="text-sm font-semibold tracking-wide  text-[#3A5A40] ">
                Project Archive
              </h1>
            </div>
            <LuMousePointerClick
              onClick={() => setisOpen((prev) => !prev)}
              className="text-[#3A5A40] group-hover:scale-150 active:scale-100 group-hover:text-[black] transition-all duration-300  "
            />

            <div className="CTAfolder z-1000 flex gap-2 flex-nowrap absolute bottom-[30%] md:bottom-[10%] right-[5%] md:right-[-35%] md:opacity-0 transition-all  duration-600 ease-linear md:group-hover:opacity-100 font-[LoginFont]">
              <TbArrowCurveLeft className="rotate-145 md:rotate-[-90deg] scale-125 " />
              <h3 className="text-gray-500 md:text-black">
                {isOpen ? "Click to close" : "Click to open"}
              </h3>
            </div>
          </div>

          <div className="CoverPart z-1000 left-0 border-t-4 border-t-[#ffffff35] absolute bottom-[60%]  bg-white/40  backdrop-blur-md h-[10%] w-[70%]"></div>

          <div className="triangle-up  z-1000 absolute  left-[70%] bottom-[59.9%]   backdrop-blur-md h-[10%] w-[13.9%] "></div>

          <span className="shadoweffect absolute  bottom-4 w-[90%] h-[3%] bg-white group-hover:bg-white/70 transition-all duration-450 blur-[12px] left-5 "></span>

          {/* Tik Tac Toh */}
          <Card rotate={0} 
          imgSrc={TicTakToe}
            fromColor={"#bc4749"}
            toColor={"#f4f1de"}
            link={"https://tik-tak-toh-game-7m5fjh4yd-logoprojects-projects.vercel.app/"}
            heading={"TicTakToe Game 🎮 "}
           />

          <Card
            rotate={10}
            imgSrc={Burgerproject}
            fromColor={"#00b4d8"}
            toColor={"#4a5759"}
            link={"https://afzaal-khalid.github.io/FASTFOODWEBSITE/"}
            heading={"Static Food Web 🍔 "}
          />

          <Card
            rotate={20}
            fromColor={"#ade8f4"}
            toColor={"#f4acb7"}
            imgSrc={userproject}
            link={"https://frontend-user-logo-ten.vercel.app/Collections"}
            heading={"E-Commerce App 🛒"}
          />

          <Card
            rotate={30}
            imgSrc={Adminproject}
            fromColor={"#fb8500"}
            toColor={"#ffe5d9"}
            link={"https://frontend-admin-logo-rho.vercel.app/"}
            heading={"Admin Pannel 🧑‍💼"}
          />
          <Card
            rotate={40}
            imgSrc={POS}
            fromColor={"#fefae0"} 
            toColor={"#F9B603"}
            link={"https://pos-system-cyan-psi.vercel.app/"}
            heading={"POS SYSTEM 💻"}
          />
        </div>
      </div>

      {/* Titlle -------*/}
      <h1 className="relative text-3xl md:text-3xl font-bold font-[LoginFont] select-none">
       
        <div className={`closeWithArrow  absolute ${isOpen ? 'opacity-100 ' : 'opacity-0'}    top-50 md:left-[70%] xl:left-[-90%] flex items-center justify-center font-extralight hover:font-semibold ease-in transition-opacity duration-2500 cursor-pointer  `}
        onClick={()=> setisOpen(false)
        }>Close       
           <span className="border-2 border-[var(--main-color)] m-2 rounded-full w-12 h-12  flex justify-center items-center "  style={{ color: "var(--secondary-color)" }}>
            <MdKeyboardBackspace   className="text-5xl text-[#3a5a4072] font-extralight" /></span></div>

        <span className="  text-[var(--secondary-color)] mr-2">My</span>
        <span className="  text-[var(--main-color)] ">projects</span>
      </h1>
    </div>
  );
};

export default Projects;
