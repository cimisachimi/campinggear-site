import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Link untuk Product Berdasarkan ID */}
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)}
          className="w-full h-90 object-cover"
          src={image}
          alt="productImage"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-gray-900">${new_price}</span>
          {old_price && (
            <span className="text-gray-500 line-through">${old_price}</span>
          )}
        </div>
        <button className="w-full px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
