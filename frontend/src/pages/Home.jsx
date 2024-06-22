import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/Productlist";
import Popular from "../components/Popular";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Hero />
      <Popular />
      <Offer />
      <ProductList />
      
    </div>
  );
};

export default Home;
