// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaShoppingBag, FaSearch, FaRegUser } from "react-icons/fa";
import Sidebar from "./sidebar/Sidebar";

const Header = () => {
    const [isSidebar,setIsSidebar]=useState(false)
    const handleSidebar=()=>{
        setIsSidebar(!isSidebar)
    }
    const toggleSidebar=()=>{
        setIsSidebar(!isSidebar)
    }
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent md:p-4 p-0 z-[999]">
      <div className="flex justify-between items-center md:max-w-7xl w-full mx-auto">
        {/* Mobile View */}
        <div className="lg:hidden flex items-center w-full justify-between bg-white p-3">
        <FaBars className="text-lg cursor-pointer text-gray-600" onClick={handleSidebar}/>
          <div className="flex gap-4">
          <FaShoppingBag className="text-lg cursor-pointer text-gray-600" />
          <FaSearch className="text-lg cursor-pointer text-gray-600" />
          <FaRegUser className="text-lg cursor-pointer text-gray-600" />    
          </div>
        </div>

        {/* Large Screen View */}
        <div className="hidden fixed top-4 left-0 w-full lg:flex  justify-center items-center gap-5">
            <div className="text-gray-700 focus:outline-none bg-white w-10 h-10 rounded-full flex justify-center items-center" onClick={handleSidebar}>
            <FaBars className="text-lg cursor-pointer text-gray-600" />
            </div>
            <div className="text-gray-700 focus:outline-none bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <FaShoppingBag className="text-lg cursor-pointer text-gray-600" />
            </div> <div className="text-gray-700 focus:outline-none bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <FaSearch className="text-lg cursor-pointer text-gray-600" />
            </div> <div className="text-gray-700 focus:outline-none bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <FaRegUser className="text-lg cursor-pointer text-gray-600" />
            </div>
        
        </div>
      </div>

        {
            isSidebar&&(
                <>
                <Sidebar toggleSidebar={toggleSidebar}/>
                </>
            )
        }
    </header>
  );
};

export default Header;
