import React from "react";
import { Link } from "react-router-dom";
import addproduct from "../assets/addProduct.png";
import listproduct from "../assets/listProduct.png";
import transactionImg from "../assets/transaction.png";
const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4">
      <Link to={"/addproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-creamBase h-12 w-44 medium-16">
          <img src={addproduct} alt="" height={60} width={60} />
          <span>Tambah Produk</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-creamBase h-12 w-44 medium-16">
          <img src={listproduct} alt="" height={60} width={60} />
          <span>List Produk</span>
        </button>
      </Link>
      <Link to={"/transaction"}>
        <button className="flexCenter gap-2 rounded-md bg-creamBase h-12 w-44 medium-16">
          <img src={transactionImg} alt="" height={60} width={60} />
          <span>Transaction</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
