import React from "react";
import Item from "../components/Item";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);

  return (
    <section className="max_padd_countainer p-12 xl:py-28 bg-creamBase">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto " />
        </div>
        <div>
          <h5>
            <span> showing 1-12 </span>out of 36 products{" "}
          </h5>
        </div>
        sort by <MdOutlineKeyboardArrowDown />
        <div></div>
        {/* container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
