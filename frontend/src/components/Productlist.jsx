import React from "react";

const ProductList = ({ title }) => {
  return (
    <div className="py-8">
      <div className="py-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Replace these placeholders with actual product data */}
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src=".\src\assets\product\tent1.jpg"
            alt="Product 1"
          />
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold">Product 1</h2>
            <p className="text-gray-600">Description of product 1.</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold">$99.99</span>
              <button className="px-3 py-1 bg-gray-800 text-white rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Add more product cards similarly */}
      </div>
    </div>
  );
};

export default ProductList;
