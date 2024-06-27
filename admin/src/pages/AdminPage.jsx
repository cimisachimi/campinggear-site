import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

import ListOrders from "../components/ListOrders";

const AdminPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/transaction" element={<ListOrders />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
