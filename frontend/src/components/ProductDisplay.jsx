import React, { useState } from "react";

import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = useState(4);
  const { product } = props;

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
          <img src={product.image} className="w-full" alt="Product" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <img
              src={product_rt_2}
              className="w-full cursor-pointer border border-primary"
              alt="Thumbnail 1"
            />
            <img
              src={product_rt_3}
              className="w-full cursor-pointer border"
              alt="Thumbnail 2"
            />
            <img
              src={product_rt_4}
              className="w-full cursor-pointer border"
              alt="Thumbnail 3"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h1 className="text-3xl uppercase mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">4.5</div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div>
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability:</span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">Eiger</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category:</span>
              <span className="text-gray-600">{product.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>

          {/* Color Filter */}
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color_red"
                />
                <label
                  htmlFor="color_red"
                  className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "red" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color_white"
                />
                <label
                  htmlFor="color_white"
                  className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "white" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color_black"
                />
                <label
                  htmlFor="color_black"
                  className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "black" }}
                ></label>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={decreaseQuantity}
              >
                -
              </div>
              <div
                id="quantityDisplay"
                className="h-8 w-8 text-base flex items-center justify-center"
              >
                {quantity}
              </div>
              <div
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={increaseQuantity}
              >
                +
              </div>
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a
              href="checkOutPage.html"
              className="bg-gray-200 border border-primary text-black px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-gray-300 hover:text-darkCream"
            >
              Add to cart
            </a>
            <a
              href="checkOutPage.html"
              className="bg-gray-200 border border-primary text-black px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-gray-300 hover:text-darkCream"
            >
              Buy now
            </a>
          </div>

          <h2 className="text-xl font-medium mt-6">Description</h2>
          <p className="text-gray-600 mt-2">
            Setelah seharian menjelajahi alam, dapatkan istirahat yang nyaman
            dengan tenda Novus Guardian 8P. Luas, berdaya tahan kuat, dan
            memiliki ketahanan air yang baik, tenda berkapasitas delapan orang
            dari EIGER Mountaineering ini sangat mudah untuk dipasang. Tenda ini
            dirancang dengan dua akses masuk utama, dua ruang tidur, serta area
            vestibule yang luas untuk menyimpan barang bawaanmu dan tim. Hadir
            dengan tas jinjing untuk mengemas tenda membuatmu dapat membawa
            tenda ini dengan ringkas ke mana pun kamu bertualang.
          </p>
          <h1 className="font-bold">Rp 2.500.000,00</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
