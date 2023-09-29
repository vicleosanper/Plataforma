import React from 'react';
import '../css/ProductList.css';
import Imagenes from '../img/Imagenes';



export const ProductList = () => {

  return (
    
      <div class="product-list">

          <div class="product">
            <img src= {Imagenes.img_PS5} alt="PS5" />
            <h3>PlayStation 5 Standard</h3>
            <p>Descripción del Producto 1.</p>
            <span class="price">$99.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_PS5Digital} alt="PS5 Digital" />
            <h3>PlayStation 5 Digital</h3>
            <p>Descripción del Producto 4.</p>
            <span class="price">$79.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src= {Imagenes.img_PS4} alt="PS4"/>
            <h3>Play Station 5 Digital</h3>
            <p>Descripción del Producto 2.</p>
            <span class="price">$79.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src= {Imagenes.img_XBOXSERIESS} alt="Xbox Series S"/>
            <h3>Xbox Series S</h3>
            <p>Descripción del Producto 3.</p>
            <span class="price">$99.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_XBOXSERIESX} alt="Xbox Series X" />
            <h3>Xbox Series X</h3>
            <p>Descripción del Producto 4.</p>
            <span class="price">$79.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_XBOXONE} alt="Xbox One" />
            <h3>Xbox One</h3>
            <p>Descripción del Producto 1.</p>
            <span class="price">$99.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_Xbox_Classic} alt="Xbox" />
            <h3>Xbox Classic</h3>
            <p>Descripción del Producto 2.</p>
            <span class="price">$79.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_PS2} alt="PlayStation 2" />
            <h3>PlayStation 2</h3>
            <p>Descripción del Producto 3.</p>
            <span class="price">$99.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_Dream} alt="DreamCast" />
            <h3>Producto 8</h3>
            <p>Descripción del Producto 4.</p>
            <span class="price">$79.99</span>
            <button class="add-to-cart">Mas informacion</button>
          </div>

      
      </div>

  );
}

export default ProductList;
