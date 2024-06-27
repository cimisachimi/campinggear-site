import React from "react";

import Popular from "../components/Popular";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import ProductList from "../components/Productlist";

const Home = () => {
  return (
    <div className="bg-creamBase">
      <Hero />
      <Popular />
      <Offer />
      <ProductList />
    </div>
  );
};

export default Home;
