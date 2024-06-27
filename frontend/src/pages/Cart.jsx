import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const {
    all_products,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    placeOrder,
    setFullAddress,
  } = useContext(ShopContext);

  const [addressForm, setAddressForm] = useState({
    fullAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    setFullAddress(value);
  };

  const updateQuantity = (itemId, increment) => {
    const newQuantity = Math.max(0, cartItems[itemId] + increment);
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      console.log(`Updating quantity of ${itemId} to ${newQuantity}`);
    }
  };

  const subtotal = Object.keys(cartItems).reduce((acc, itemId) => {
    const product = all_products.find((prod) => prod.id === parseInt(itemId));
    if (product) {
      return acc + product.new_price * cartItems[itemId];
    }
    return acc;
  }, 0);

  const shipping = 50000;
  const total = subtotal + shipping;

  const simulatePayment = () => {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.2; // 80% chance of success
      setTimeout(() => {
        if (isSuccess) {
          resolve("Payment successful");
        } else {
          reject("Payment failed");
        }
      }, 2000); // Simulate a delay for the payment process
    });
  };

  const handleCheckout = () => {
    simulatePayment()
      .then((message) => {
        console.log(message);
        return placeOrder(cartItems);
      })
      .then((data) => {
        console.log("Order created:", data);
        setAddressForm({ fullAddress: "" });
        alert("Order placed successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className="h-screen bg-creamBase pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {Object.keys(cartItems).map((itemId) => {
            const product = all_products.find(
              (prod) => prod.id === parseInt(itemId)
            );
            if (product && cartItems[itemId] > 0) {
              return (
                <div
                  key={itemId}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {product.category}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => updateQuantity(itemId, -1)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={cartItems[itemId]}
                          readOnly
                        />
                        <span
                          onClick={() => updateQuantity(itemId, 1)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">
                          {formatCurrency(product.new_price)}
                        </p>
                        <svg
                          onClick={() => removeFromCart(itemId)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Shipping Address</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Address
              </label>
              <textarea
                name="fullAddress"
                value={addressForm.fullAddress}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded"
                rows="3"
                required
              ></textarea>
            </div>
          </form>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Subtotal</p>
              <p className="text-lg font-bold">{formatCurrency(subtotal)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Shipping</p>
              <p className="text-sm">{formatCurrency(shipping)}</p>
            </div>
            <div className="mt-6 flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">{formatCurrency(total)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
