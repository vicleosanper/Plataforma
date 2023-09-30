
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import ProductView from './components/ProductView';
import Imagenes from './img/Imagenes';

function App() {

  // Cantidad de productos por página
const productsPerPage = 6;

  // Array de productos
const products = [
  {
    image: Imagenes.img_PS5,
    name: 'PlayStation 5 Standard',
    description: 'Experimenta el futuro del gaming con la PlayStation 5. Con un rendimiento sorprendente y gráficos de alta calidad, esta consola te sumerge en mundos de juego asombrosos.',
    price: '$9500 MXN',
    category: 'Nueva Generación',
  },
  {
    image: Imagenes.img_PS5Digital,
    name: 'PlayStation 5 Digital',
    description: 'La versión digital de la PlayStation 5 te ofrece la misma potencia de juego, pero con descargas digitales para una experiencia sin discos físicos.',
    price: '$8499 MXN',
    category: 'Nueva Generación',
  },
  {
    image: Imagenes.img_PS4,
    name: 'PlayStation 4 Slim',
    description: 'La PlayStation 4 Slim es una consola compacta pero poderosa que te brinda acceso a una amplia biblioteca de juegos de alta calidad y entretenimiento multimedia.',
    price: '$6500 MXN',
    category: 'No tan Retro',
  },
  {
    image: Imagenes.img_XBOXSERIESS,
    name: 'Xbox Series S',
    description: 'Disfruta de una experiencia de juego de próxima generación con la Xbox Series S. Esta consola compacta ofrece gráficos impresionantes y tiempos de carga rápidos.',
    price: '$5000 MXN',
    category: 'Nueva Generación',
  },
  {
    image: Imagenes.img_XBOXSERIESX,
    name: 'Xbox Series X',
    description: 'La Xbox Series X es una consola de alto rendimiento diseñada para ofrecer juegos en 4K y 120 fps. Con una velocidad increíble, es perfecta para los jugadores más exigentes.',
    price: '$9500 MXN',
    category: 'Nueva Generación',
  },
  {
    image: Imagenes.img_XBOXONE,
    name: 'Xbox One',
    description: 'La Xbox One es una consola versátil que ofrece una gran variedad de juegos y servicios de entretenimiento. Es ideal para disfrutar de experiencias de juego y multimedia.',
    price: '$6500 MXN',
    category: 'No tan Retro',
  },
  {
    image: Imagenes.img_Xbox_Classic,
    name: 'Xbox Classic',
    description: 'Revive la nostalgia con la Xbox Classic, una de las primeras consolas de Xbox. Disfruta de juegos clásicos y descubre dónde comenzó la leyenda de Xbox.',
    price: '$3000 MXN',
    category: 'Retro',
  },
  {
    image: Imagenes.img_PS2,
    name: 'PlayStation 2',
    description: 'La PlayStation 2 (PS2) es una consola clásica de Sony que se lanzó en el año 2000. Es conocida por su extensa biblioteca de juegos y por ser la plataforma de lanzamiento de títulos icónicos como "Grand Theft Auto: San Andreas" y "Metal Gear Solid 2". La PS2 presenta gráficos de la era DVD y una unidad de disco compacto.',
    price: '$3000 MXN',
    category: 'Retro',
  },
  {
    image: Imagenes.img_Dream,
    name: 'DreamCast',
    description: 'La Sega DreamCast es una consola de videojuegos que se lanzó en 1999. Fue conocida por su innovación en juegos y gráficos para la época. Presentaba un módem incorporado para juegos en línea y títulos como "Sonic Adventure" y "Shenmue". A pesar de su corta vida en el mercado, dejó una huella significativa en la historia de los videojuegos.',
    price: '$2500 MXN',
    category: 'Retro',
  },
];

  //CATEGORIAS
  const categories = [
    
    'Retro',
    'Nueva Generación',
    'No tan Retro',
    
  ];

    
  // Estado de productos y categoría seleccionada
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [selectedCategory, setSelectedCategory] = useState('all');

   // FUNCION PARA FILTRAR PRODUCTOS
  const handleSearch = (searchTerm, selectedCategory) => {
    // Filtrar productos en función del término de búsqueda y la categoría seleccionada
    const filtered = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchTermLowerCase = searchTerm.toLowerCase();
      const searchMatch = productName.includes(searchTermLowerCase);

      if (selectedCategory === 'all') {
        return searchMatch;
      } else {
        return searchMatch && product.category === selectedCategory;
      }
    });

    // Actualizar el estado de filteredProducts con los productos filtrados
    setFilteredProducts(filtered);

    // Actualizar la categoría seleccionada
    setSelectedCategory(selectedCategory);

    // Restablecer currentPage a 1 para mostrar resultados desde la primera página
    setCurrentPage(1);
  };
  

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
      const [currentPage, setCurrentPage] = useState(1);

      // Cálculo del número total de páginas
      const totalPages = Math.ceil(products.length / productsPerPage);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  return (
    <div className="App">
      <header className="App-header">

      <SearchBar categories={categories} onSearch={handleSearch} />
        
      {selectedProduct ? (
          <ProductView
            productInfo={selectedProduct}
            onBack={backToProductList}
          />
        ) : (
          <>
            <ProductList products={filteredProducts}
              onProductClick={showProductDetails}
              currentPage={currentPage} // Pasa la página actual como prop
              productsPerPage={productsPerPage} // Pasa la cantidad de productos por página como prop
            />

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
