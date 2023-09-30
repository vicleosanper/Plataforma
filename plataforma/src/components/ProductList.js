import React from 'react';
import '../css/ProductList.css';

const ProductList = (props) => {
  const { products, onProductClick, currentPage, productsPerPage } = props;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToShow = products.slice(startIndex, endIndex);

  return (
    <div className="product-list">
      {productsToShow.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span className="price">{product.price}</span>
          <button className="add-to-cart" onClick={() => onProductClick(product)}>Mas información</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

