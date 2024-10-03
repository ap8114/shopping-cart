// src/ProductList.jsx
import React from 'react';
import lappi from '../assests/lappi.jpg';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
