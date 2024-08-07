import React from "react";

const Hero = () => {
  return (
    <section className="h-[55vh] bg-Hero bg-cover md:bg-top bg-center">
      <div className="flex flex-col justify-center text-center items-center h-full">
        <h2 className="text-white text-2xl font-medium">Essentials Camp</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          Kebutuhan camping jadi mudah!
        </h1>
        <div className="text-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
