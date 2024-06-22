import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-xl">
      <div className=" relative overflow-hidden duration-100 group transition-all">
          {/* Link untuk Product Berdasarkan ID */}
      <Link to={`/product/${id}`} className=" ">
      <img onClick={window.scrollTo(0, 0)}
          className="w-full h-90 object-cover block group-hover:scale-110 duration-800 transition-all"
          src={image}
          alt="productImage"
        />
      </Link>
      
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-900">${new_price}</span>
          {old_price && (
            <span className="text-gray-500 line-through">${old_price}</span>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Item;
