import React from "react";

const AddProduct = () => {
  return (
    <div className="p-8 box-border bg-creamBase w-full rounded-sm mt-4 lg:m7">
      <div className="mb-3">
        <h4>Nama Produk</h4>
        <input
          type="text"
          name="nama"
          placeholder=""
          className="bg-creamBase outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>
    </div>
  );
};

export default AddProduct;
