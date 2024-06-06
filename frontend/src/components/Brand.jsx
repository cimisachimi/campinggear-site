import React from "react";

const BrandPartner = () => {
  return (
    <div className="container py-8 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Brand Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-6">
        <img
          src="/assets/brand/brand1.jpg"
          alt="Brand 1"
          className="h-16 object-contain"
        />
        <img
          src="/assets/brand/brand2.jpg"
          alt="Brand 2"
          className="h-16 object-contain"
        />
        <img
          src="/assets/brand/brand3.jpg"
          alt="Brand 3"
          className="h-16 object-contain"
        />
        <img
          src="/assets/brand/brand4.jpg"
          alt="Brand 4"
          className="h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default BrandPartner;
