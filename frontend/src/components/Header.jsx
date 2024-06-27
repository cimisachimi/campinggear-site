import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa"; // Import order icon
import logo from "../assets/logo/logo.png";
import profilePicture from "../assets/profile.png"; // Ensure this path is correct

const Header = ({ cartItemCount }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      // Fetch user data or get username from localStorage
      const userData = JSON.parse(atob(token.split(".")[1])); // decode JWT token payload
      setUsername(userData.user.name); // assuming JWT payload has user object with name
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication token and redirect to home page
    localStorage.removeItem("auth-token");
    setUsername(""); // Clear username state
    window.location.replace("/");
  };

  return (
    <header className="w-full text-gray-700 border-t border-gray-100 shadow-sm body-font bg-lightCream1">
      <div className="container flex items-center justify-between p-5 mx-auto">
        {/* Left Section - Profile and Username */}
        <div className="flex items-center space-x-4 flex-1">
          <span className="font-medium text-gray-900">
            Selamat datang {username}
          </span>
        </div>

        {/* Center Section - Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-auto max-h-14 md:max-h-16 lg:max-h-20"
            />
          </Link>
        </div>

        {/* Right Section - Logout, Orders, and Cart */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          {localStorage.getItem("auth-token") ? (
            // If logged in, show logout button
            <>
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Logout
              </button>
            </>
          ) : (
            // If not logged in, show login and signup buttons
            <div className="flex items-center space-x-4">
              <Link to="/login" className="font-medium hover:text-gray-900">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Shopping Cart and Orders */}
          <div className="relative flex items-center space-x-4 ml-4">
            {/* Order Icon */}
            <Link to="/order">
              <button className="text-gray-800 hover:text-gray-800 focus:outline-none">
                <FaClipboardList className="h-6 w-6" />
              </button>
            </Link>

            {/* Shopping Cart */}
            <Link to="/Cart">
              <button className="text-gray-800 hover:text-gray-800 focus:outline-none">
                <FaShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full ">
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
