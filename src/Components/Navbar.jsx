// import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div className="flex w-4/5 h-16 absolute top-0  justify-between items-center">
          <div className="left ">
            <a href="" className="text-white font-medium">
              Home
            </a>
          </div>
          <div className="right  flex gap-20  items-center">
            <a href="" className="text-white font-medium">
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