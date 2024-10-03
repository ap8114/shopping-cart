// src/App.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
import lappi from '../assests/lappi.jpg';
import headphone from '../assests/headphone.webp';
import iphone from '../assests/iphone.jpg';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      image: lappi,
    },
    {
      id: 2,
      name: 'Headphones',
      price: 199.99,
      image: headphone,
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 799.99,
      image: iphone,
    },
  ];

  const addToCart = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) { 
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="shop-container">
        <ProductList products={products} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
}

export default App;
