// import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="scroll bg-[#041F31] ">
      <div className="h-screen mx-auto heros w-4/5">
        {/* navbar */}
        <Navbar />
        {/* navbar */}

        {/* heros */}
        <section className="bg-inherit h-screen flex justify-center items-center" >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <p className="max-w-2xl mb-6 font-normal lg:mb-8 md:text-lg lg:text-xl text-gray-500">Hello! I'm </p>
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">ARIF BASHA .H</h1>
              <p className="max-w-xl tracking-wider mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400"> a Web Developer with a passion for software development. My journey has been marked by a dedication to Proficient in C,C++,Python,Javascript,Web development. With a background in BCA, I bring a unique perspective to Software Industry.</p>
              <button
              href=""
              className="text-[#041F31] font-medium py-3 px-7 rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
            >
              Contact
            </button>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://www.ahmedazmy.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoder1.3b970e5d.png&w=1920&q=75" alt="mockup" />
            </div>
          </div>
        </section>
        {/* heros */}
      </div>
    </div>
  );
};

export default App;
