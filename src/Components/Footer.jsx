// import React from 'react'

import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    const emailDeveloper = () => {
        var emailAddress = "arifbasha559@gmail.com";
        var subject = "Feedback for your application";
        var body =
            "Dear Developer,\n\nI would like to provide the following feedback:\n\n";

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`
        );
    };
   

    return (
        <footer className=" mt-10 ">
           
            <div className="w-full max-w-screen-xl mx-auto h-64 p-4 md:py-8 flex flex-col gap-10">
                <div className="flex items-center w-4/5 md:w-1/3 justify-around mx-auto">
                    <div className="flex flex-col gap-2">

                    <button
                        onClick={ ()=>{
                            emailDeveloper()
                        }}
                        className=" bg-gradient-to-r w-fit mx-auto from-[rgb(0,245,160)] to-[rgb(0,217,245)] p-2 rounded-full"
                    >
                        <IconContext.Provider value={{ size: "2em" }}>
                            <BiLogoGmail />{" "}
                        </IconContext.Provider>
                    </button>
                    <p className="text-white uppercase">GMail</p>
                    </div>
                    <div className="flex flex-col gap-2">

                    
                    <a
                        href="https://www.linkedin.com/in/arif-basha-3a7879268/"
                        className="no-underline w-fit mx-auto bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] p-2 rounded-full"
                    >
                        <IconContext.Provider value={{ size: "2em" }}>
                            <FaLinkedinIn />{" "}
                        </IconContext.Provider>
                    </a>
                    <p className="text-white uppercase">Linked  In</p>
                    </div>
                    <div className="flex flex-col gap-2">

                    
                    <a
                        href="https://github.com/arifbasha559/"
                        className="no-underline w-fit mx-auto bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] p-2 rounded-full"
                    >
                        <IconContext.Provider value={{ size: "2em" }}>
                            <TbBrandGithubFilled />{" "}
                        </IconContext.Provider>
                    </a>
                    <p className="text-white uppercase">Github</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <ul className="flex flex-wrap items-center text-sm font-medium text-white ">
                        <li>
                            <a href="#projects" className="hover:underline me-4 md:me-6">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="block text-sm  text-center text-white">
                    © 2023{" "}
                    <a href="https://github.com/arifbasha559" className="hover:underline">
                        Arif™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
