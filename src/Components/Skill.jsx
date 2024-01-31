// import React ..from 'react'

// import { FaHtml5 } from "react-icons/fa6";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

const Skill = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 max-w-xl mx-auto">
      <div>
        <IconContext.Provider value={{ color: "rgb(249,115,22)", size: "5em" }}>
        <FaHtml5 />
        </IconContext.Provider>
        <p className="text-gray-300 text-center">HTML</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "rgba(24, 24, 251)", size: "5em" }}>
        <FaCss3Alt />
        </IconContext.Provider>
        <p className="text-gray-300 text-center">CSS</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "yellow", size: "5em" }}>
        <DiJavascript1 />
      </IconContext.Provider>
      <p className="text-gray-300 text-center">JAVASCRIPT</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#06b6d4", size: "5em" }}>
      <SiTailwindcss />
      </IconContext.Provider>
      <p className="text-gray-300 text-center text-wrap">TAILWIND <br /> CSS</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#7710F1", size: "5em" }}>
      <FaBootstrap />
      </IconContext.Provider>
      <p className="text-gray-300 text-center">BOOTSTRAP</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#06b6d4", size: "5em" }}>
      <FaReact />
      </IconContext.Provider>
      <p className="text-gray-300 text-center">REACT JS</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "#e24329", size: "5em" }}>
      <FaGitAlt />
      </IconContext.Provider>
      <p className="text-gray-300 text-center">GIT</p>
      </div>
      <div>
        <IconContext.Provider value={{ color: "gray", size: "5em" }}>
      <SiExpress />
      </IconContext.Provider>
      <p className="text-gray-300 text-center">EXPRESS <br /> JS</p>
      </div>

    </div>
  );
};

export default Skill;
