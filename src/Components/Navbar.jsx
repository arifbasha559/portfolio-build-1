// import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl bg-[rgb(4,31,49)] border-b border-white/35 h-16 mx-auto z-50 sticky top-0  justify-between items-center">
          <div className="left ">
            <a href="" className="text-white font-medium">
              Home
            </a>
          </div>
          <div className="right  flex gap-5 md:gap-16  items-center">
            <a href="#projects" className="text-white font-medium">
              Projects
            </a>
            <button
              href=""
              className="text-[#041F31] font-medium py-2 px-4 rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
            >
              Contact
            </button>
          </div>
        </div>
  )
}

export default Navbar