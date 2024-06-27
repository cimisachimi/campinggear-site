import React, { useEffect, useState } from "react";
import Item from "./Item";

const ProductList = () => {
  const [newCollections, setNewCollections] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNewCollections(data));
  }, []);
  return (
    <section className="py-8">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-8">
       New Arrival
      </h3>
      <hr className="mb-8" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newCollections.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProductList;
