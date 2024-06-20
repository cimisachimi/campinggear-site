import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/Productlist";
import Popular from "../components/Popular";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Hero />
      <ProductList />
      <Popular />
    </div>
  );
};

export default Home;
