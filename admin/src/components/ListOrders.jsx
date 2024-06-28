import React, { useEffect, useState } from "react";

const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:4000/admin/orders");
        const data = await response.json();
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/allproducts");
        const data = await response.json();
        if (data.success) {
          setAllProducts(data.products);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
    fetchProducts();
  }, []);

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:4000/admin/order/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === id ? { ...order, status: data.order.status } : order
          )
        );
      } else {
        console.error("Failed to update order status:", data.message);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const filterCartData = (cartData) => {
    return Object.entries(cartData)
      .filter(([_, value]) => value > 0)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  };

  const getProductInfo = (productId) => {
    const product = allProducts.find((product) => product.id === productId);
    return product || { name: "Unknown Product", new_price: "0", image: "" }; // Default if product not found
  };

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-2xl font-semibold mb-4">Order List</h4>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left rounded-t-lg">
              <th className="p-4 rounded-tl-lg">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Address</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
              <th className="p-4 rounded-tr-lg">Order Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b last:rounded-b-lg">
                <td className="p-4">{order.user?.name || "No User"}</td>
                <td className="p-4">{order.user?.email || "No Email"}</td>
                <td className="p-4">{order.address}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order._id, e.target.value)
                    }
                    className="bg-gray-200 border rounded p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Sudah Dibayar">Sudah Dibayar</option>
                    <option value="Sedang Diproses">Sedang Diproses</option>
                    <option value="Dalam perjalanan">Dalam perjalanan</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="p-4">
                  <ul>
                    {Object.entries(filterCartData(order.cartData)).map(
                      ([productId, quantity]) => (
                        <li key={productId}>
                          <div className="flex items-center">
                            <img
                              src={getProductInfo(parseInt(productId)).image}
                              alt={getProductInfo(parseInt(productId)).name}
                              className="w-12 h-12 object-cover rounded-full mr-4"
                            />
                            <div>
                              <p>{getProductInfo(parseInt(productId)).name}</p>
                              <p>Quantity: {quantity}</p>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOrders;
