// import React from "react";
// import { IconContext } from "react-icons";
import "./App.css";
import Navbar from "./Components/Navbar";
// import { FaHtml5 } from "react-icons/fa";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import { useState } from "react";
import Skill from "./Components/Skill";
import Footer from "./Components/Footer";

const App = () => {

  const [project, setProject] = useState([
    {
      pName: "Mak Todos",
      pDesc:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      btn: ["Tailwind", "React Js"],
      pLink: "https://github.com/arifbasha559/mak-todos",
      image: "./images/makTodos.png"
    },
    {
      pName: "Mak Todos",
      pDesc:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      btn: ["Tailwind", "React Js"],
      pLink: "https://github.com/arifbasha559/mak-todos",
      image: "./images/makTodos.png"
    },
  ]);
  return (
    <div className="scroll  bg-[#041F31] ">
      {/* navbar */}
      <div className=" mx-auto h-full heros w-4/5 ">
        <Navbar />
        {/* navbar */}

        {/* heros */}
        <Hero />
        <div id="about" className=""></div>
        {/* heros */}
        <div className="max-w-screen-xl mx-auto flex flex-col gap-32 mt-20">
          <div  className="">
            <h2  className="px-4 text-xl text-white mb-5 font-semibold">
              About Me
            </h2>
            <div className="md:w-1/2 w-full rounded-md  bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] bg-clip-padding">
              <p className="ml-2 pl-2 bg-[#041F31] text-gray-300 para-border ">
                {" "}
                a Front End Developer with a passion for software development.
                My journey has been marked by a dedication to Proficient in
                C,C++,Python,Javascript,Full Stack development. With a background in
                BCA, I bring a unique perspective to Software Industry.
          <div id="projects"></div>
              </p>
            </div>
          </div>
          <h2 className="text-xl text-white font-semibold px-4 -mt-16" > Projects</h2>
        </div>
        <div className="flex w-full justify-center flex-wrap gap-4 mt-4 mx-auto">
          {project.map((data, index) => {
            return (
              <Project
                key={index}
                title={data.pName}
                desc={data.pDesc}
                btn={data.btn}
                pLink={data.pLink}
                img={data.image}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center mb-10 mt-5">
          <a
            href="https://github.com/arifbasha559/"
            className=" self-center my-4 text-[#041F31] font-medium py-3 px-8 text-center rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
          >
            See All Projects
          </a>
        </div>
        {/* skill */}
        <h2 className="text-xl text-white font-semibold px-4 mb-5 ">Skills</h2>
        <div className="flex mx-auto w-11/12 text-sm md:text-lg md:w-4/5 flex-wrap gap-20">

          <Skill />

        </div>
         <div className="w-full flex justify-center mb-10 mt-5">
          <a
            href="https://github.com/arifbasha559/"
            className=" self-center my-4 text-[#041F31] font-medium py-2 px-6 text-center rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
          >
            Know more
          </a>
        </div>
        <div className="footer ">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
