import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <section>
      <div className="flex flex-col xl:flex-row gap-x-8 gap-14 mt-5 sm:m-4 md:m-4 xl:m-4 xs:m-4 rounded-lg max_container">
        <div className="flex flex-col flex-1">
          <div className="flex-grow flex items-stretch">
            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt="Product"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-6 flex-1">
          <div className="items-center">
            <h3 className="h3">{product.name}</h3>
            <div className="bold-16 text-2xl text-red-600 mt-2">
              {formatCurrency(product.new_price)}
            </div>
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
              <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            </div>
            {/* buy button */}
            <div className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest text-center">
              <button>BUY NOW</button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mt-6">Description</h2>
            <p className="text-gray-600 mt-2">
              Setelah seharian menjelajahi alam, dapatkan istirahat yang nyaman
              dengan tenda Novus Guardian 8P. Luas, berdaya tahan kuat, dan
              memiliki ketahanan air yang baik, tenda berkapasitas delapan orang
              dari EIGER Mountaineering ini sangat mudah untuk dipasang. Tenda
              ini dirancang dengan dua akses masuk utama, dua ruang tidur, serta
              area vestibule yang luas untuk menyimpan barang bawaanmu dan tim.
              Hadir dengan tas jinjing untuk mengemas tenda membuatmu dapat
              membawa tenda ini dengan ringkas ke mana pun kamu bertualang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
