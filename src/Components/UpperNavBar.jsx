import React from "react";
import Search from '../assets/search.png'

const UpperNavbar =()=>{
return(
    <>
     <div className="bg-gray-300  w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side logos */}
        <div className="flex items-center">
          <img src="https://sih.gov.in/img1/SIH2023-logo.png" alt="Logo 1" className="h-20 mr-4" />
          {/* <img src={logo2} alt="Logo 2" className="h-8" /> */}
        </div>

        {/* Right side registration and search */}
        <div className="flex items-center">
          {/* Registration button */}
          <button className="text-black text-xl font-serif px-4 py-2 rounded-md mr-4">
            Login/Register <img src="" alt="" />
          </button>

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-black py-2 px-3 mr-3 rounded-md w-44 focus:outline-none focus:ring-2 focus:ring-[#172b46]"
            />
            <button className="absolute right-3 top-2 text-black focus:outline-none">
              <img src={Search} className="mr-5 w-6 h-6 text-white" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
)
}
export default UpperNavbar;