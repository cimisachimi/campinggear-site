import React, { useEffect, useState } from "react";

const Transactions = () => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="bg-white shadow rounded p-4">
              <h4 className="text-gray-800 font-medium">
                Order ID: {order._id}
              </h4>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">Address: {order.address}</p>
              <div className="mt-4 space-y-2">
                {Object.keys(order.cartData).map((key) => (
                  <div key={key} className="flex items-center space-x-4">
                    <div>
                      <h5 className="text-gray-800 font-medium">
                        Product ID: {key}
                      </h5>
                      <p className="text-gray-600">
                        Quantity: {order.cartData[key]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transactions;
