import React, { useState } from "react";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    {
      name: "New & Featured",
      submenu: [
        "New Releases",
        "Bestsellers",
        "Member Exclusive",
        "Jordan",
        "Lifestyle Running",
        "Customize with Nike By You",
        "Sale",
        "Running Shoe Finder",
        "Sustainable Materials",
      ],
    },
    {
      name: "Men",
      submenu: [
        "All Shoes",
        "Newest Sneakers",
        "Jordan",
        "Lifestyle",
        "Running",
        "Gym and Training",
        "Basketball",
        "Football",
        "Sandals and Slides",
        "Last Sizes Available",
        "Customize with Nike By You",
        "Top Picks Under Rp 1,500,000",
      ],
    },
    {
      name: "Women",
      submenu: [
        "All Clothing",
        "Tops and T-Shirts",
        "Shorts",
        "Pants and Leggings",
        "Hoodies and Sweatshirts",
        "Jackets and Gilets",
        "Jerseys and Kits",
        "Jordan",
      ],
    },
    {
      name: "Kids",
      submenu: [
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Socks",
        "Hats and Headwear",
      ],
    },
    {
      name: "Sale",
      submenu: [
        "Running",
        "Basketball",
        "Football",
        "Golf",
        "Tennis",
        "Gym and Training",
        "Yoga",
        "Skateboarding",
      ],
    },
    {
      name: "Customise",
      submenu: [
        "Nike Sportswear",
        "NikeLab",
        "Nike By You",
        "Jordan",
        "ACG",
        "NBA",
        "Nike SB",
      ],
    },
    { name: "SNKRS", submenu: [] },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {item.name}
                </button>
                {hoveredMenu === index && item.submenu.length > 0 && (
                  <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg z-10 w-screen">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        {item.submenu.map((submenuItem, submenuIndex) => (
                          <div key={submenuIndex}>
                            <ul>
                              <li>{submenuItem}</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    d="M23.707,22.293l-6.387-6.387c1.391-1.75,2.229-3.943,2.229-6.335C19.549,4.243,15.307,0,10.275,0
                    C5.243,0,1,4.243,1,9.571c0,5.328,4.243,9.571,9.275,9.571c2.392,0,4.585-0.838,6.335-2.229l6.387,6.387
                    c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293C24.098,23.317,24.098,22.683,23.707,22.293z M10.275,17.143
                    c-4.208,0-7.618-3.41-7.618-7.571c0-4.162,3.41-7.571,7.618-7.571c4.208,0,7.618,3.41,7.618,7.571
                    C17.893,13.733,14.483,17.143,10.275,17.143z"
                  />
                </svg>
              </button>
            </div>
            <button className="text-gray-900 px-2">
              <i className="far fa-heart"></i>
            </button>
            <button className="text-gray-900 px-2">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
