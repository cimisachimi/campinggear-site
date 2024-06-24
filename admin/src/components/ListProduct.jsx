import React, { useEffect, useState } from "react";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      if (data.success) {
        setAllproducts(data.products);
      } else {
        console.error("Failed to fetch products:", data.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setAllproducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } else {
        console.error("Failed to delete product:", data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-2xl font-semibold mb-4">Product List</h4>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left rounded-t-lg">
              <th className="p-4 rounded-tl-lg">Product</th>
              <th className="p-4">Nama Product</th>
              <th className="p-4">Harga Produk</th>
              <th className="p-4">Harga Promo</th>
              <th className="p-4">Kategori</th>
              <th className="p-4 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.map((product, i) => (
              <tr key={i} className="border-b last:rounded-b-lg">
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.old_price}</td>
                <td className="p-4">{product.new_price}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
