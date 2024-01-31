import '../App.css'
import { IconContext } from "react-icons";
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-10">

          <section className="bg-inherit  flex justify-center items-center" >
            <div className=" relative flex flex-col-reverse gap-10 md:grid max-w-screen-xl py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16  lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <p className="max-w-2xl mb-4 font-normal  md:text-md lg:text-lg text-gray-400">Hello! I&rsquo;m </p>
                <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] bg-clip-text text-transparent ">ARIF BASHA .H</h1>
                <p className="max-w-xl tracking-wider mb-6 font-light  lg:mb-8 md:text-md lg:text-md text-gray-300"> a Web Developer with a passion for software development. My journey has been marked by a dedication to Proficient in C,C++,Python,Javascript,Full Stack Development. With a background in BCA, I bring a unique perspective to Software Industry.</p>
                <button
                  href=""
                  className="text-[#041F31] font-medium py-3 px-6 rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
                >
                  Contact
                </button>
              </div>
              <div className="lg:mt-0 lg:col-span-5 flex">
                <img className="" src="https://www.ahmedazmy.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoder1.3b970e5d.png&w=1920&q=75" alt="mockup" />
              </div>
            </div>
            <a className="absolute p-4 bottom-5 hover:bg-[rgba(0,0,0,0.27)] rounded-full " href="#about" >
              <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <FaArrowDown />
              </ IconContext.Provider>
            </a>
          </section>
        </div>
  )
}

export default Hero