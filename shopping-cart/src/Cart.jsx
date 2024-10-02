// src/Cart.jsx
import React from 'react';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, totalCost }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="cart-controls">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </div>
            </div>
          ))}
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
