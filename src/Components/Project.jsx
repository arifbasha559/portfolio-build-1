/* eslint-disable react/prop-types */
// import React from 'react'

const Project = (props) => {
    return (
        <div>
            <section className=" flex flex-col gap-40 ">

                <div className=" flex flex-col gap-4  justify-center">


                    <div className="max-w-md rounded-lg shadow bg-[#222525] ">
                        <a href={props.pLink} target="_blank" rel="noreferrer" className="h-2/3">
                            <img className="rounded-t-lg  object-top" src={props.img} alt="" />
                        </a>
                        <div className="p-5 bg-[#222525]">
                            <a href={props.pLink} target="_blank" rel="noreferrer">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.title}</h5>
                            </a>
                            <div className="flex gap-2">

                            {props.btn.map((data,index)=>{
                                
                                return (<span  key={index} className="inline-flex mt-2 items-center px-2.5 py-1.5 text-sm font-medium text-center text-black bg-gradient-to-r from-[rgb(0,245,160)] to-[rgb(0,217,245)] rounded-lg ">
                                {data}

                            </span>)
                            })}
                            </div>
                            <p className="my-3 font-normal text-gray-300 bg-[#222525]">{props.desc}</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Project