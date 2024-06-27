import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { all_products } = useContext(ShopContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("auth-token"); // Assuming token stored in localStorage
        const response = await fetch("http://localhost:4000/orders", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "auth-token": token,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data.orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getProductDetails = (productId) => {
    return all_products.find((product) => product.id === parseInt(productId));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const calculateTotalCost = (cartData) => {
    return Object.keys(cartData).reduce((total, key) => {
      const product = getProductDetails(key);
      return product ? total + product.new_price * cartData[key] : total;
    }, 0);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Order History</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="mb-6 p-4 bg-white shadow rounded-lg">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Order ID: {order._id}</h3>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">
                Date: {formatDate(order.createdAt)}
              </p>
              <p className="text-gray-600">Address: {order.address}</p>
              <p className="text-gray-600 font-bold">
                Total Cost: {formatCurrency(calculateTotalCost(order.cartData))}
              </p>
            </div>
            <div className="space-y-4">
              {Object.keys(order.cartData).map((key) => {
                const quantity = order.cartData[key];
                if (quantity > 0) {
                  const productDetails = getProductDetails(key);
                  const totalCost = productDetails
                    ? productDetails.new_price * quantity
                    : 0;
                  return (
                    <div key={key} className="flex items-center space-x-4">
                      {productDetails && (
                        <img
                          src={productDetails.image}
                          alt={productDetails.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-800">
                          {productDetails
                            ? productDetails.name
                            : `Product ID: ${key}`}
                        </h4>
                        <p className="text-gray-600">Quantity: {quantity}</p>
                        <p className="text-gray-600">
                          Total Cost: {formatCurrency(totalCost)}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;
