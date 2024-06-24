import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Import icons
import logo from "../assets/logo/logo.png";
import profilePicture from "../assets/profile.png"; // Import profile picture

const Header = ({ cartItemCount }) => {
  // Simulated logout function
  const handleLogout = () => {
    // Implement your logout logic here
    alert("Logout functionality goes here!");
  };

  return (
    <header className="w-full text-gray-700 bg-creamBase border-t border-gray-100 shadow-sm body-font border-b-darkCream">
      <div className="container flex flex-col md:flex-row items-center justify-between p-5 mx-auto">
        {/* Left Section - Menu Links */}
        <div className="flex items-center">
          <Link to="/" className="mr-5 font-medium hover:text-gray-900">
            Home
          </Link>
          <Link
            to="/aboutPage"
            className="mr-5 font-medium hover:text-gray-900"
          >
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Center Section - Logo */}
        <Link
          to="/"
          className="flex items-center order-first mb-4 md:mb-0 font-medium text-gray-900 lg:w-1/5 title-font lg:items-center lg:justify-center lg:order-none"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-auto max-h-14 md:max-h-16 lg:max-h-20"
          />
        </Link>

        {/* Right Section - Profile, Logout and Cart */}
        <div className="flex items-center">
          {/* Login/Signup */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="mr-5 font-medium hover:text-gray-900">
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </Link>
          </div>
          {/* Profile Avatar and Name */}

          <div className="flex items-center space-x-4">
            <img
              src={profilePicture}
              alt="Profile Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-900">John Doe</span>
          </div>

          {/* Logout button */}

          <div className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
            <button
              onClick={handleLogout}
              className=" text-white hover:text-gray-800 focus:outline-none"
            >
              Logout
            </button>
          </div>

          {/* Shopping Cart */}
          <div className="relative ml-4">
            <Link to="/Cart">
              <button className="text-gray-800 hover:text-gray-800 focus:outline-none">
                <FaShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
