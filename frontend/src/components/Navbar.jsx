import React from "react";
import { NavLink } from "react-router-dom";

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
            to="/tas"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
            }
          >
            Tas Outdoor
          </NavLink>
          <div className="relative group">
            {/* Dropdown trigger */}
            <button className="text-gray-800 hover:text-slate-400 focus:outline-none mx-4">
              Peralatan
            </button>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-full bg-creamBase z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex justify-center">
                {/* Submenu items */}
                <div className="flex flex-col space-y-2 p-4">
                  <NavLink
                    to="/memasak"
                    className={({ isActive }) =>
                      isActive ? "text-gray-800 font-bold" : "text-gray-800"
                    }
                  >
                    Masak
                  </NavLink>
                  <NavLink
                    to="/outdoor"
                    className={({ isActive }) =>
                      isActive ? "text-gray-800 font-bold" : "text-gray-800"
                    }
                  >
                    Outdoor
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <NavLink
            to="/aksesoris"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 mx-4 font-bold"
                : "text-gray-800 mx-4 hover:text-slate-400"
            }
          >
            Aksesories
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
