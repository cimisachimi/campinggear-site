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
    createTransactionFromCart,
  } = useContext(ShopContext);

  const [addressForm, setAddressForm] = useState({
    fullAddress: "", // Combine all address fields into one fullAddress field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const updateQuantity = (itemId, increment) => {
    // Ensure quantity doesn't go below 0
    const newQuantity = Math.max(0, cartItems[itemId] + increment);
    // Call removeFromCart if quantity is reduced to 0
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      // Update cartItems with the new quantity
      // Normally, you should update state in context
      console.log(`Updating quantity of ${itemId} to ${newQuantity}`);
    }
  };

  // Calculate subtotal based on items in cart
  const subtotal = Object.keys(cartItems).reduce((acc, itemId) => {
    // Find the product by itemId in all_products
    const product = all_products.find((prod) => prod.id === parseInt(itemId));
    if (product) {
      return acc + product.new_price * cartItems[itemId];
    }
    return acc;
  }, 0);

  const shipping = 50000;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    const { fullAddress } = addressForm;
    createTransactionFromCart(fullAddress)
      .then((data) => {
        // Optionally handle data returned from createTransactionFromCart
        console.log("Transaction created:", data);

        // Clear form fields and update cart data as needed
        setAddressForm({ fullAddress: "" });
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
        // Optionally display an error message to the user
      });
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {Object.keys(cartItems).map((itemId) => {
            // Find the product by itemId in all_products
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
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </form>
          <hr className="my-4" />
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{formatCurrency(shipping)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{formatCurrency(total)}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
