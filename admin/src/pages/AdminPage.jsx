import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import Transaction from "../components/Transaction";

const AdminPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/transaction" element={<Transaction />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
