// src/components/Cart.js
import React from 'react';
import "./cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart">
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <img src={item.src} alt="" />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
