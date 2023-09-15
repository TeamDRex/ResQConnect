import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sticky = window.scrollY > 0;
      setIsSticky(sticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky z-20 top-0 w-[100%] bg-[#172b46] ${isSticky ? "shadow-lg  " : ""
          }`}
      >
        <div className="flex justify-between items-center h-[4.8rem] max-w-[1240px] mx-auto px-4 text-white">
          <div className="m-4 text-white text-2xl">ResQconnect</div>

          {/* <a href="#">
      
         
            <img src={logo} className="w-44" alt="" />
          </a> */}
          <ul className="hidden text-white  -mt-2 md:flex">

            <li
              onClick={() => scrollToSection("home")}
              className={`m-4 hover:rounded text-lg font-bold cursor-pointer ${activeSection === "home" ? "text-[#ffff]" : ""
                }`}
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className={`m-4 hover:text-[#5db363]  text-lg font-bold cursor-pointer ${activeSection === "about" ? "text-[#ffff]" : ""
                }`}
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("alerts")}
              className={`m-4 hover:text-[#5db363]  text-lg font-bold cursor-pointer ${activeSection === "alerts" ? "text-[#ffff]" : ""
                }`}
            >
              Alerts
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className={`m-4 hover:text-[#5db363]  text-lg font-bold cursor-pointer ${activeSection === "contact" ? "text-[#ffff]" : ""
                }`}
            >
              Contact
            </li>

            <li
              onClick={() => scrollToSection("register")}
              className={`m-4 hover:text-[#5db363]  text-lg font-bold cursor-pointer ${activeSection === "register" ? "text-[#ffff]" : ""
                }`}
            >
              Register
            </li>

          </ul>
          <div onClick={handleNav} className="block cursor-pointer md:hidden">
            {nav ? (
              <AiOutlineClose fill="#fffff" size={20} />
            ) : (
              <AiOutlineMenu fill="#fffff" size={20} />
            )}
          </div>
          <div
            className={
              nav
                ? "fixed z-30 left-0 top-0 pt-4 w-[60%] h-full border-r border-r-grey-900 bg-[#172b46] ease-in-out duration-500 "
                : "fixed left-[-100%]"
            }
          >
            <center>
              {/* <img src={logo} className="w-44" alt="" /> */}
              <h1  className="m-4 text-white text-2xl">ResQconnect</h1>
            </center>
            <ul className="uppercase p-4">
              <li
                onClick={() => scrollToSection("home")}
                className={`p-4 text-white font-bold text-lg   border-b border-gray-600 ${activeSection === "home" ? "text-[#5db363]" : ""
                  }`}
              >
                <span className="cursor-pointer"> Home</span>
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className={`p-4 text-white font-bold text-lg   border-b border-gray-600 ${activeSection === "about" ? "text-[#5db363]" : ""
                  }`}
              >
                <span className="cursor-pointer">About</span>
              </li>
              <li
                onClick={() => scrollToSection("register")}
                className={`p-4 text-white font-bold text-lg   border-b border-gray-600 ${activeSection === "register" ? "text-[#5db363]" : ""
                  }`}
              >
                <span className="cursor-pointer">Alerts</span>
              </li>
              <li
                onClick={() => scrollToSection("schedule")}
                className={`p-4 text-white font-bold text-lg   border-b border-gray-600 ${activeSection === "schedule" ? "text-[#5db363]" : ""
                  }`}
              >
                <span className="cursor-pointer">Contact</span>
              </li>
              <li
                onClick={() => scrollToSection("faq")}
                className={`p-4 text-white font-bold text-lg   border-b border-gray-600 ${activeSection === "faq" ? "text-[#5db363]" : ""
                  }`}
              >
                <span className="cursor-pointer">Register</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;