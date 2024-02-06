import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  let [inp, setInp] = useState("-translate-y-[200%]");
  let [scr, setScr] = useState("scroll");
  // let [width, setWidth] = useState("");
  const inputa = () => {
    if (inp !== "-translate-y-[200%]") {
      setInp("-translate-y-[200%]");
      setScr("asda");
    } else {
      setInp("translat");
      setScr("overflow-y-hidden h-screen ");
    }
  };
  const con = inputa;
  const [projects] = useState([
    {
      pName: "Mak Todos",
      pDesc:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      btn: ["Tailwind", "React Js"],
      pLink: "https://mak-todos.vercel.app/",
      image: "./images/makTodos.png",
    },
    {
      pName: "Mak Todos",
      pDesc:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      btn: ["Tailwind", "React Js"],
      pLink: "https://mak-todos.vercel.app/",
      image: "./images/makTodos.png",
    },
  ]);

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        // alert('Escape pressed');
        if (scr != "scroll") {
          con();
        } else {
          return;
        }
      }
    });
  }, [scr, con]);

  return (
    <Router>
      <div className={`scroll relative bg-[#041F31] min-h-screen ${scr} dh`}>
        {/* navbar */}
        <div className="max-w-screen-xl  mx-auto h-full heros w-screen md:w-4/5  ">
          <div className="w-11/12 md:w-full sticky top-0 z-50 mx-auto">
            <Navbar create={inputa} />
          </div>
          <div className="w-11/12 md:w-full mx-auto">

            <Routes>
              <Route path="/" element={<Home inp={inp} inputa={inputa} />} />
              <Route
                path="/project"
                element={
                  <div className="min-h-screen mt-4">
                    <h2 className="px-4 me text-xl transition-all duration-200 ease-linear text-white inline-block mb-5 font-semibold gra-color hover:text-transparent">My Projects</h2>
                    <div className="flex flex-wrap gap-3">

                      {projects.map((data, index) => {
                        return (
                          <Project
                            key={index}
                            img={data.image}
                            title={data.pName}
                            desc={data.pDesc}
                            pLink={data.pLink}
                            btn={data.btn}
                          />
                        );
                      })}
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
        <div className={`w-screen bg-black`}>
          <Contact toggle={inp} create={inputa} />
        </div>
      </div>
    </Router>
  );
};

export default App;
