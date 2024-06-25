import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { id } = useParams(); // change this line

  const product = all_products.find((e) => e.id === Number(id));

  console.log(id);
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section>
      {/* <ProductHd product={product} /> */}

      <ProductDisplay product={product} />
      <RelatedProducts />
    </section>
  );
};

export default Product;
