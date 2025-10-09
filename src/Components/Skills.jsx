import React from "react";

const Skills = () => {
  let skillsArray = [
    {
      icon: "../../public/images/reactIconwBg.png",
      skilName: "React",
    },
    {
      icon: "/images/Remove_background_project-removebg-preview (1).png",
      skilName: "Redux Toolkit",
    },
    {
      icon: "/images/react-router_logo_light (1).png",
      skilName: "React Router",
    },
    {
      icon: "/images/GSAPiCON-removebg-preview.png",
      skilName: "GSAP",
    },
    {
      icon: "/images/gitIcon-removebg-preview.png",
      skilName: "Git/ GitHub",
    },
    {
      icon: "../../public/images/tailwind-removebg-preview.png",
      skilName: "Tailwind",
    },
    {
      icon: "../../public/images/nodeIcon-removebg-preview.png",
      skilName: "Node.js",
    },
  ];

  return (
    <div className="relative min-h-screen p-20  w-full flex justify-between font-[LoginFont]">
      <span className="w-[90%] h-[1px] bg-[var(--main-color)]/10 absolute top-0"></span>

      <div className="mainContainer  w-[70%] p-4  flex justify-start items-start gap-12 flex-wrap overflow-hidden">
       
        {skillsArray.map((skill, i) => {
          return    <div className="relative transition-all duration-200 ease-linear skillDiv w-30 h-30 hover:translate-y-2 active:scale-95 bg-[var(--main-color)] rounded-xl ">
            {/* holders '  ' */}
            <span className=" CardHolder absolute w-2 h-4 bg-white/60 z-10 rounded-t-md rounded-b-md top-2.5 left-[40%]"></span>
            <span className=" CardHolder absolute w-2 h-4 bg-white/60 z-10 rounded-t-md rounded-b-md top-2.5 left-[80%]"></span>
            
            <span className="absolute top-3.5 left-3.5  bg-white/40  backdrop-blur-md rounded-xl shadow-lg  w-full h-full flex flex-col justify-center items-center  ">

              <img src={`${skill.icon}`} className="w-[70%] "  />
            </span>
              <h2 className="absolute bottom-[-50%] left-[10%] text-xl  text-[var(--main-color)] whitespace-nowrap select-none">-{skill.skilName}</h2>
          </div>;
        })}

        {/* first skill React */}
      </div>

      {/* Titlle */}
      <h1 className="text-3xl md:text-3xl font-bold select-none">
        <span className="  text-[var(--secondary-color)] mr-2">My</span>
        <span className="  text-[var(--main-color)] ">Skills...</span>
      </h1>
    </div>
  );
};

export default Skills;
