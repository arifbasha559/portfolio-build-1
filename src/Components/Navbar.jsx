/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Navbar = (props) => {
  return (
    <div className="flex max-w-screen-xl bg-[rgb(4,31,49)]  border-b w-full border-white/35 h-16 mx-auto z-10 sticky top-0 pr-1 justify-between items-center">
          <div className="left ">
            <Link to="/" className="text-white font-medium">
              Home
            </Link>
          </div>
          <div className="right  flex gap-5 md:gap-16  items-center">
            <Link to="/project" className="text-white font-medium">
              Projects
            </Link>
            <button
              href=""
              className="text-[#041F31] font-medium py-2 px-4 rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] "
              onClick={()=>{props.create()}}
            >
              Contact
            </button>
          </div>
        </div>
  )
}

export default Navbar