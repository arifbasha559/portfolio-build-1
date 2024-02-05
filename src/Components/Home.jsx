/* eslint-disable react/prop-types */
// import React from 'react'
import Hero from './Hero'
import Skill from './Skill'
import Footer from './Footer'

const Home = (props) => {
    console.log(props);
  return (
    <div>
      <Hero create={props.inputa} />
      <div id="about" className=""></div>
      {/* heros */}
      <div className="max-w-screen-xl mx-auto flex flex-col gap-32 mt-16">
        <div className="">
          <h2 className="px-4 me text-xl text-white mb-5 font-semibold">
            About Me
          </h2>
          <div className="md:w-1/2 w-full rounded-md  bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] bg-clip-padding">
            <p className="ml-2 pl-2 bg-[#041F31] text-gray-300 para-border ">
              {" "}
              a Front End Developer with a passion for software development.
              My journey has been marked by a dedication to Proficient in
              C,C++,Python,Javascript,Full Stack development. With a
              background in BCA, I bring a unique perspective to Software
              Industry.
              <span id="projects"></span>
            </p>
          </div>
        </div>
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
      <h2 className="text-xl text-white font-semibold px-4 my-5 ">Skills</h2>
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
        <Footer create={props.inputa} />
      </div>
     </div>
  )
}

export default Home