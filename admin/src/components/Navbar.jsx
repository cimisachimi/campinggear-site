import React from "react";
import logo from "../assets/Logo.png";
import profilePic from "../assets/profile.png";

const Navbar = () => {
  return (
    <header className="w-full text-gray-700 bg-creamBase border-t border-gray-100 shadow-sm body-font border-b-darkCream">
      <div className="container flex flex-col md:flex-row items-center justify-between p-5 mx-auto">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-auto max-h-14 md:max-h-16 lg:max-h-20"
          />
        </div>

        {/* Center Section - Big Text */}
        <div className="flex items-center justify-center flex-grow">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Panel Admin CampStore
          </h1>
        </div>

        {/* Right Section - Profile Picture and Name */}
        <div className="flex items-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-medium text-gray-900">Chimi</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
