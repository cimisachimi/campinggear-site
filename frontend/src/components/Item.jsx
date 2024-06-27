import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-xl flex flex-col justify-between">
      <div className="relative overflow-hidden duration-100 group transition-all">
        {/* Link untuk Product Berdasarkan ID */}
        <Link to={`/product/${id}`} className="">
          <img
            onClick={() => window.scrollTo(0, 0)}
            className="w-full h-90 object-cover block group-hover:scale-110 duration-800 transition-all"
            src={image}
            alt="productImage"
          />
        </Link>
      </div>

      <div className="bg-lightCream1 p-4  flex-grow flex flex-col justify-between md:text-sm sm:text-xs">
        <h2 className="text-lg text-darkCream font-semibold mb-2">{name}</h2>
        <div className="flex items-center justify-between mb-4  md:space-x-1">
          <span className="text-xl text-darkGreen font-bold md:text-sm sm:text-xs">
            {formatCurrency(new_price)}
          </span>
          {old_price && (
            <span className="text-gray-500 line-through md:text-xs sm:text-xs">
              {formatCurrency(old_price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
