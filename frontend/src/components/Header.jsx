import React from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <div>
      <header className="w-full text-gray-700 bg-creamBase border-t border-gray-100 shadow-sm body-font border-b-darkCream">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          {/* Menu Top Left */}
          <div className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
            <Link to="" className="mr-5 font-medium hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/aboutPage"
              className="mr-5 font-medium hover:text-gray-900"
            >
              About
            </Link>
            <Link to="#" className="font-medium hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
          >
            <img src={logo} alt="Logo" />
          </Link>

          {/* Login / Sign up button */}
          <div class="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0 ">
            <a href="./Login.jsx" class="mr-5 font-medium hover:text-gray-900">
              Login
            </a>
            <a
              href="#_"
              class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </a>
          </div>

          {/* Profile Avatar and Name 
          <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            <Link to="/profilePage">
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/profile/profilePicture.jpeg"
                  alt="Profile Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium text-gray-900">John Doe</span>
              </div>
            </Link>
          </div>
          */}
        </div>
      </header>
    </div>
  );
};

export default Header;
