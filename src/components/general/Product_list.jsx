// src/components/ProductList.js
import React from 'react';
import './productList.css'; // Make sure to include your CSS file

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img src={product.src} alt={product.name} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
