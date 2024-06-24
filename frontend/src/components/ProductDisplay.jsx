import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <section>
      <div className="flex flex-center xl:flex-row gap-x-8 gap-14 mt-5 sm:m-4 md:m-4 xl:m-4 xs:m-4 rounded-lg">
        <div className="flex flex-col gap-[7px] flex-wrap">
          <img
            src={product.images[0]}
            className="w-full max-w-[400px] h-auto mx-auto sm:max-w-[250px] lg:max-w-[350px]"
            alt="Product"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.images.slice(1, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                className="w-full max-w-[100px] h-auto cursor-pointer"
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="items-center">
            <h3 className="h3">{product.name}</h3>
            <div className="flex">
              <div className="flex text-sm text-yellow-400">4.5</div>
              <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
              <div className="bold-16 p">{product.new_price}</div>{" "}
              {/* Assuming price field */}
            </div>
          </div>

          <div>
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability:</span>
              <span className="text-green-600">
                {product.available ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">{product.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category:</span>
              <span className="text-gray-600">{product.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">{product.sku}</span>
            </p>
          </div>

          <div className="space-y-2 bold-16">
            <h4>Select Size</h4>
            <div className="flex gap-x-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="ring-2 ring-slate-600 h-10 w-10 cursor-pointer flexCenter text-slate-800 hover:bg-black hover:text-slate-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2 mx-2">
            {/* cart button */}
            <div className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest text-center">
              <button onClick={() => addToCart(product._id)}>
                ADD TO CART
              </button>{" "}
              {/* Assuming _id is the correct identifier */}
            </div>
            {/* buy button */}
            <div className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest text-center">
              <button>BUY NOW</button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mt-6">Description</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>{" "}
            {/* Assuming description field */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
