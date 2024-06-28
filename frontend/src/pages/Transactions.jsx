import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProgressBar from "../components/ProgressBar"; // Make sure to adjust the import path

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { all_products } = useContext(ShopContext);
  const shippingCost = 50000;

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
    const productsCost = Object.keys(cartData).reduce((total, key) => {
      const product = getProductDetails(key);
      return product ? total + product.new_price * cartData[key] : total;
    }, 0);
    return productsCost + shippingCost;
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Order History</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-10 w-10 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="mb-6 p-4 bg-white shadow rounded-lg flex"
          >
            <div className="flex-1">
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
                            className="w-20 h-20 object-cover rounded cursor-pointer"
                            onClick={() => openProductDetails(productDetails)}
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
            <div className="w-1/3 pl-6">
              <h3 className="text-xl font-semibold">Order ID: {order._id}</h3>
              <ProgressBar status={order.status} />
              <p className="text-gray-600">
                Date: {formatDate(order.createdAt)}
              </p>
              <p className="text-gray-600">Address: {order.address}</p>
              <p className="text-gray-600">
                Shipping: {formatCurrency(shippingCost)}
              </p>
              <p className="text-gray-600 font-bold">
                Total Cost: {formatCurrency(calculateTotalCost(order.cartData))}
              </p>
            </div>
          </div>
        ))
      )}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeProductDetails}
              >
                &times;
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p className="text-lg mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-semibold">
              Price: {formatCurrency(selectedProduct.new_price)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
