import React, { useContext, useState } from "react";

import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(4);
  const { addToCart } = useContext(ShopContext);

  return (
    <section>
      <div className="flex flex-col xl:flex-row gap-x-8 gap-14 mt-5 sm:m-4 md:m-4 xl:m-4 xs:m-4 rounded-lg">
        <div className="flex flex-col gap-[7px] flex-wrap   ">
          <img
            src={product.image}
            className="w-full bg-cover h-3/5"
            alt="Product"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <img
              src={product_rt_2}
              className="w-full cursor-pointer  "
              alt="Thumbnail 1"
            />
            <img
              src={product_rt_3}
              className="w-full cursor-pointer "
              alt="Thumbnail 2"
            />
            <img
              src={product_rt_4}
              className="w-full cursor-pointer  "
              alt="Thumbnail 3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className=" items-center s">
            <h3 className="h3">{product.name}</h3>
            <div className="flex ">
              <div className="flex  text-sm text-yellow-400">4.5</div>
              <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
              <div className="bold-16 p">{product.price}</div>
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
            <div className=" flex gap-x-2">
              <div className="ring-2 ring-slate-600 h-10 w-10  cursor-pointer flexCenter text-slate-800 hover:bg-black hover:text-slate-200">
                S
              </div>
              <div className="ring-2 ring-slate-600 h-10 w-10 flexCenter cursor-pointer  text-slate-800 hover:bg-black hover:text-slate-200">
                M
              </div>
              <div className="ring-2 ring-slate-600 h-10 w-10 flexCenter cursor-pointer  text-slate-800 hover:bg-black hover:text-slate-200">
                L
              </div>
              <div className="ring-2 ring-slate-600 h-10 w-10 flexCenter cursor-pointer  text-slate-800 hover:bg-black hover:text-slate-200">
                XL
              </div>
              <div className="ring-2 ring-slate-600 h-10 w-10 flexCenter cursor-pointer  text-slate-800 hover:bg-black hover:text-slate-200">
                XXL
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2  mx-2">
            {/* cart button */}
            <div className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest text-center">
              <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            </div>
            {/* buy button */}
            <div className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest text-center ">
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
