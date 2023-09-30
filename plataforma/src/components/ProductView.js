// ProductView.js
import React from 'react';
import '../css/ProductView.css';
import Imagenes from '../img/Imagenes';

const ProductView = ({ productInfo, onBack }) => {
  return (
    <div className="product-view">
      <div className="product-image">
        {/* Aquí puedes mostrar la imagen del producto */}
        <img src={productInfo.image} alt={productInfo.name} />
      </div>
      <div className="product-details">
        <h1 className="product-title">{productInfo.name}</h1>
        <p className="product-description">{productInfo.description}</p>
        <p className="product-price">{productInfo.price}</p>
        <button className="add-to-cart" onClick={onBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default ProductView;

