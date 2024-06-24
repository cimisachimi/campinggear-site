import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  const calculateTotal = (product) => {
    return product.price * cartItems[product.id];
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th className="p-1 py-2">Product</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{cartItems[product.id]}</td>
                  <td>${calculateTotal(product)}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(product.id)}>
                      Remove
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(product.id)}>
                     
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CartItems;
