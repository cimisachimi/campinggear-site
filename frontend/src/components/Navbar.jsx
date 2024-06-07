import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-center items-center bg-creamBase p-4">
      {/* Middle section: Menu items */}
      <div className="flex justify-center items-center w-full md:w-auto">
        <NavLink
          to="/new-product"
          className={({ isActive }) =>
            isActive ? "text-gray-800 mx-4 font-bold" : "text-gray-800 mx-4"
          }
        >
          New Product
        </NavLink>
        <NavLink
          to="/outdoor-gear"
          className={({ isActive }) =>
            isActive ? "text-gray-800 mx-4 font-bold" : "text-gray-800 mx-4"
          }
        >
          Outdoor Gear
        </NavLink>
        <div className="relative">
          {/* Dropdown trigger */}
          <button
            className="text-gray-800 hover:text-gray-800 focus:outline-none mx-4"
            onClick={toggleDropdown}
          >
            Accessories
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-creamBase z-10">
              <div className="flex justify-center">
                {/* Submenu items */}
                <div className="flex flex-col space-y-2 p-4">
                  <NavLink
                    to="/accessories/hats"
                    className={({ isActive }) =>
                      isActive ? "text-gray-800 font-bold" : "text-gray-800"
                    }
                  >
                    Hats
                  </NavLink>
                  <NavLink
                    to="/accessories/bags"
                    className={({ isActive }) =>
                      isActive ? "text-gray-800 font-bold" : "text-gray-800"
                    }
                  >
                    Bags
                  </NavLink>
                  <NavLink
                    to="/accessories/sunglasses"
                    className={({ isActive }) =>
                      isActive ? "text-gray-800 font-bold" : "text-gray-800"
                    }
                  >
                    Sunglasses
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
        <NavLink
          to="/wear"
          className={({ isActive }) =>
            isActive ? "text-gray-800 mx-4 font-bold" : "text-gray-800 mx-4"
          }
        >
          Wear
        </NavLink>
        <NavLink
          to="/sale"
          className={({ isActive }) =>
            isActive ? "text-gray-800 mx-4 font-bold" : "text-gray-800 mx-4"
          }
        >
          Sale
        </NavLink>
      </div>

      {/* Right section: Search bar */}
      <div className="hidden md:flex items-center ml-4">
        <button className="text-gray-800 hover:text-gray-800 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;