import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center items-center bg-creamBase p-4">
        {/* Middle section: Menu items */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <NavLink
            to="/tenda"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
            }
          >
            Tenda
          </NavLink>
          <NavLink
            to="/outdoor-gear"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
            }
          >
            Outdoor Gear
          </NavLink>
          <div className="relative group">
            {/* Dropdown trigger */}
            <button className="text-gray-800 hover:text-slate-400 focus:outline-none mx-4">
              Accessories
            </button>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-full bg-creamBase z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
          </div>
          <NavLink
            to="/wear"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
            }
          >
            Wear
          </NavLink>
          <NavLink
            to="/sale"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
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
      <Breadcrumb />
    </div>
  );
};

export default Navbar;
