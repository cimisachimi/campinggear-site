import React from "react";
import { Link } from "react-router-dom";
import addproduct from "../assets/addProduct.png";
import listproduct from "../assets/listProduct.png";

const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6">
      <Link to={"/addproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-creamBase h-14 w-44 medium-16">
          <img src={addproduct} alt="" height={60} width={60} />
          <span>Tambah Produk</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-creamBase h-14 w-44 medium-16">
          <img src={listproduct} alt="" height={60} width={60} />
          <span>List Produk</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
