import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
import { ShopContext } from "../Context/ShopContext";

const Header = ({ cartItemCount }) => {
  const [username, setUsername] = useState("");
  const { balance } = useContext(ShopContext); // Fetch balance from context

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1]));
      setUsername(userData.user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setUsername("");
    window.location.replace("/");
  };

  return (
    <header className="w-full text-gray-700 border-t border-gray-100 shadow-sm body-font bg-lightCream1">
      <div className="container flex items-center justify-between p-5 mx-auto xs:flex-col">
        {/* Left Section - Profile and Username */}
        <div className="flex items-center space-x-4 flex-1 font-nunito">
          <span className="font-medium text-gray-900">
            Selamat datang {username}, Saldo Anda: {formatCurrency(balance)}
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
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-darkCream rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Logout
            </button>
          ) : (
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

          <div className="relative flex items-center space-x-4 ml-4">
            <Link to="/order">
              <button className="text-gray-800 hover:text-gray-800 focus:outline-none">
                <FaClipboardList className="h-6 w-6" />
              </button>
            </Link>

            <Link to="/Cart">
              <button className="text-gray-800 hover:text-gray-800 focus:outline-none relative">
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
