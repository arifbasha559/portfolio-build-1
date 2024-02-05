/* eslint-disable react/prop-types */
// import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { IconContext } from "react-icons";
import { IoMdCloseCircle } from "react-icons/io";


const Contact = (props) => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1m3egmg', 'template_zp93vw6', form.current, 'leN-vMOTExCQK-Dub')
            .then((result) => {
                console.log(result.text);
                alert('the message has been send successfully')
            }, (error) => {
                console.log(error.text);
                alert(`errot  ${error.text} due to Internet`)
            });
    };
    return (
        <div
            id="form"
            className={`w-full  h-screen input absolute ${props.toggle} bg-black/30 top-0 left-0 overflow-x-hidden backdrop-blur-sm transition-all duration-700 ease-linear z-50 flex justify-center items-center `}
        >
            <button
                type="button"
                className="absolute top-3 right-3 md:right-2 text-red-700 hover:text-black border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-1.5  text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => {
                    props.create();
                }}
            > <IconContext.Provider value={{ size: "2em" }}>
                    <IoMdCloseCircle />
                </IconContext.Provider>
            </button>
            <form className=" md:w-1/4 w-4/5 h-screen overflow-x-hidden  flex flex-nowrap  gap-4 flex-col justify-center " ref={form} onSubmit={sendEmail} >
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium  text-white">Your name</label>
                    <input  type="text" id="name" name="user_name"  required className="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" />
                </div>
                <div>

                    <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                    <input type="email" id="email" name="user_email"  required  aria-describedby="helper-text-explanation" className="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />

                </div>
                <div>

                    <label htmlFor="message" className="block mb-2 text-sm font-medium  text-white">Your message</label>
                    <textarea  id="message" name="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border   focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <input type="submit" value="send" className="text-[#041F31] font-medium py-2 px-4 rounded-md hover:opacity-80 bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] " />
            </form>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
        </div>
    )

     
}

export default Contact