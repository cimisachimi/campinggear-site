import React from "react";
import logo from "../assets/Logo.png";
import profilePic from "../assets/profilePicture.jpeg";

const Navbar = () => {
  return (
    <nav className="w-full text-gray-700 bg-creamBase border-t border-gray-100 shadow-sm body-font border-b-darkCream">
      <div className="container flex flex-col md:flex-row items-center justify-between p-5 mx-auto">
        {/* Left Section - Logo */}
        <div className="flex items-center justify-start flex-grow md:flex-grow-0">
          <img
            src={logo}
            alt="Logo"
            className="h-auto max-h-14 md:max-h-16 lg:max-h-20"
            height={150}
            width={150}
          />
        </div>

        {/* Center Section - Menu Links and Search */}
        <div className="flex items-center justify-center flex-grow space-x-4">
          <h1 className="text-darkCream">Panel Admin </h1>
        </div>

        {/* Right Section - Profile Picture, Name, and Icons */}
        <div className="flex items-center justify-end flex-grow md:flex-grow-0 space-x-4">
          <span className="font-medium text-gray-900">Administrator</span>
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700">
            <i className="fas fa-cog"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
