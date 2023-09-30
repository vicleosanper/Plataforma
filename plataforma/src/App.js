
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import ProductView from './components/ProductView';

function App() {

  //FUNCIONES PARA LA SELECCION DEL PRODUCTO
    // Estado para realizar un seguimiento del producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState(null);
    // Función para manejar el evento del botón "Mas informacion" y mostrar ProductView
    const showProductDetails = (productInfo) => {
      setSelectedProduct(productInfo);
    };
    // Función para volver a ProductList desde ProductView
    const backToProductList = () => {
      setSelectedProduct(null);
    };

    
    //FUNCIONES PARA CAMBIO DE PAGINA
    // Definir el estado para el número de página actual
    const [currentPage, setCurrentPage] = useState(1);
    // Definir el número total de páginas (esto podría venir de tus datos)
    const totalPages = 3; // Reemplaza esto con el valor correcto
    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <div className="App">
      <header className="App-header">

      <SearchBar></SearchBar>
        
      {selectedProduct ? (
          <ProductView
            productInfo={selectedProduct}
            onBack={backToProductList}
          />
        ) : (
          <>
            <ProductList onProductClick={showProductDetails} />
            <Pagination currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}></Pagination>
          </>
        )}

      
      </header>
    </div>
  );
}

export default App;
