import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 60; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_products, setAllProducts] = useState([]);
  const [fullAddress, setFullAddress] = useState("");
  const [orders, setOrders] = useState([]);
  const [balance, setBalance] = useState(0); // New state for balance

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data.cartData))
        .catch((err) => console.error("Error fetching cart:", err));

      fetch("http://localhost:4000/orders", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setOrders(data.orders))
        .catch((err) => console.error("Error fetching orders:", err));

      fetch("http://localhost:4000/balance", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setBalance(data.balance))
        .catch((err) => console.error("Error fetching balance:", err));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Error adding to cart:", err));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error("Error removing from cart:", err));
    }
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, quantity),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        } else {
          console.warn(`Product with ID ${item} not found.`);
        }
      }
    }
    return totalAmount;
  };

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("auth-token"); // Assuming you store the token in localStorage
      const response = await fetch("http://localhost:4000/createorder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: fullAddress, cartData: cartItems }),
      });

      const data = await response.json();
      if (data.success) {
        // Clear local cart after successful order placement
        setCartItems(getDefaultCart());
      }
      return data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem("auth-token"); // Assuming you store the token in localStorage
      const response = await fetch(
        `http://localhost:4000/updateorderstatus/${orderId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "auth-token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating order status for order ${orderId}:`, error);
      throw error;
    }
  };

  // New function to update balance
  const updateBalance = async (newBalance) => {
    try {
      const token = localStorage.getItem("auth-token"); // Assuming you store the token in localStorage
      const response = await fetch("http://localhost:4000/balance", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ balance: newBalance }),
      });

      const data = await response.json();
      if (data.success) {
        setBalance(newBalance);
      }
      return data;
    } catch (error) {
      console.error("Error updating balance:", error);
      throw error;
    }
  };

  const contextValue = {
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    placeOrder,
    orders,
    updateOrderStatus,
    setFullAddress, // Make sure to expose setFullAddress in context
    balance, // Expose balance in context
    updateBalance, // Expose updateBalance in context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
