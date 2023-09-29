
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';

function App() {

    // Definir el estado para el número de página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Definir el número total de páginas (esto podría venir de tus datos)
    const totalPages = 2; // Reemplaza esto con el valor correcto
  
    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <div className="App">
      <header className="App-header">
        
        <SearchBar></SearchBar>
        <ProductList></ProductList>
        <Pagination currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}></Pagination>
      
      </header>
    </div>
  );
}

export default App;
