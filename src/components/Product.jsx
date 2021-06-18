import React from 'react';

const Product = ({ product }) => (
  <article className="Products-item">
    <img src={product.image} alt={product.title} />
    <div className="Product-item-info">
      <h2>
        {product.title}
        <span className="Product-item-price">$ {product.price}</span>
      </h2>
      <p className="Product-item-description">{product.description}</p>
    </div>
    <button type="button">Comprar</button>
  </article>
);

export default Product;
