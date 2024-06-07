import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/Productlist";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Breadcrumb />
      <ProductList />
      <Popular />
    </div>
  );
};

export default Home;
