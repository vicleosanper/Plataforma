import React from 'react';
import '../css/ProductList.css';
import Imagenes from '../img/Imagenes';



export const ProductList = (props) => {

  return (
    
      <div class="product-list">

          <div class="product">
            <img src= {Imagenes.img_PS5} alt="PS5" />
            <h3>PlayStation 5 Standard</h3>
            <p>Experimenta el futuro del gaming con la PlayStation 5. Con un rendimiento sorprendente y gráficos de alta calidad, esta consola te sumerge en mundos de juego asombrosos..</p>
            <span class="price">$9500 MXN</span>
              <button class="add-to-cart"  onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_PS5,
                                                              name: 'PlayStation 5 Standard',
                                                              description: 'La PlayStation 5, desarrollada por Sony Interactive Entertainment, es una consola de videojuegos de próxima generación que se lanzó en noviembre de 2020. Está impulsada por un procesador AMD Ryzen de 8 núcleos y una GPU personalizada basada en la arquitectura RDNA 2 de AMD. Ofrece una unidad de almacenamiento SSD ultrarrápida que reduce significativamente los tiempos de carga y mejora la velocidad general del sistema. La PS5 es capaz de ofrecer gráficos en 4K a 60 fps y es compatible con ray tracing para una calidad visual excepcional. Además, cuenta con un controlador DualSense que incorpora retroalimentación háptica y gatillos adaptativos para una experiencia de juego inmersiva.',
                                                              price: '$9500 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_PS5Digital} alt="PS5 Digital" />
            <h3>PlayStation 5 Digital</h3>
            <p>La versión digital de la PlayStation 5 te ofrece la misma potencia de juego, pero con descargas digitales para una experiencia sin discos físicos.</p>
            <span class="price">$8499 MXN</span>
            <button class="add-to-cart"onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_PS5Digital,
                                                              name: 'PlayStation 5 Digital',
                                                              description: 'La versión digital de la PlayStation 5 conserva la mayoría de las características de su contraparte estándar, pero carece de una unidad de disco físico. En cambio, se basa en descargas digitales y contenido en línea. Esto la hace más adecuada para quienes prefieren adquirir y jugar juegos digitalmente.',
                                                              price: '$8499 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src= {Imagenes.img_PS4} alt="PS4"/>
            <h3>Play Station 4 Slim</h3>
            <p>La PlayStation 4 Slim es una consola compacta pero poderosa que te brinda acceso a una amplia biblioteca de juegos de alta calidad y entretenimiento multimedia.</p>
            <span class="price">$6500 MXN</span>
            <button class="add-to-cart"  onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_PS4,
                                                              name: 'PlayStation 4 Slim',
                                                              description: 'La PlayStation 4 Slim es una versión más compacta y eficiente en términos energéticos de la PlayStation 4 original. Aunque es más delgada, conserva la potencia de procesamiento y la biblioteca de juegos de su predecesora. Ofrece gráficos en alta definición y es compatible con servicios de transmisión y entretenimiento multimedia.',
                                                              price: '$6500 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src= {Imagenes.img_XBOXSERIESS} alt="Xbox Series S"/>
            <h3>Xbox Series S</h3>
            <p>Disfruta de una experiencia de juego de próxima generación con la Xbox Series S. Esta consola compacta ofrece gráficos impresionantes y tiempos de carga rápidos.</p>
            <span class="price">$5000 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_XBOXSERIESS,
                                                              name: 'Xbox Series S',
                                                              description: 'La Xbox Series S, desarrollada por Microsoft, es una consola de videojuegos de próxima generación lanzada en noviembre de 2020. Es una alternativa más asequible a la Xbox Series X y está diseñada para juegos en resolución 1440p a 60 fps. Ofrece un rendimiento sólido gracias a su CPU AMD Ryzen y GPU RDNA 2 personalizada. Al igual que la Xbox Series X, presenta tiempos de carga ultrarrápidos y es compatible con ray tracing.',
                                                              price: '$5000 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_XBOXSERIESX} alt="Xbox Series X" />
            <h3>Xbox Series X</h3>
            <p>La Xbox Series X es una consola de alto rendimiento diseñada para ofrecer juegos en 4K y 120 fps. Con una velocidad increíble, es perfecta para los jugadores más exigentes.</p>
            <span class="price">$9500 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_XBOXSERIESX,
                                                              name: 'Xbox Series X',
                                                              description: 'La Xbox Series X es la consola insignia de Microsoft. Está impulsada por un procesador AMD Ryzen de 8 núcleos y una GPU RDNA 2 personalizada que ofrece juegos en 4K a 120 fps. Ofrece una unidad de estado sólido (SSD) de alta velocidad para tiempos de carga rápidos y una experiencia de juego fluida. También es compatible con ray tracing y presenta un diseño elegante y robusto.',
                                                              price: '$9500 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_XBOXONE} alt="Xbox One" />
            <h3>Xbox One</h3>
            <p>La Xbox One es una consola versátil que ofrece una gran variedad de juegos y servicios de entretenimiento. Es ideal para disfrutar de experiencias de juego y multimedia.</p>
            <span class="price">$6500 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_XBOXONE,
                                                              name: 'Xbox One',
                                                              description: 'La Xbox One, también de Microsoft, es una consola de generación anterior que ofrece una amplia biblioteca de juegos. Cuenta con gráficos en alta definición y es compatible con una variedad de servicios de transmisión y entretenimiento, como Xbox Game Pass y aplicaciones de streaming.',
                                                              price: '$6500 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_Xbox_Classic} alt="Xbox" />
            <h3>Xbox Classic</h3>
            <p>Revive la nostalgia con la Xbox Classic, una de las primeras consolas de Xbox. Disfruta de juegos clásicos y descubre dónde comenzó la leyenda de Xbox.</p>
            <span class="price">$3000 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_Xbox_Classic,
                                                              name: 'Xbox Classic',
                                                              description: 'La Xbox Classic, o simplemente "Xbox", fue la primera consola de videojuegos de Microsoft lanzada en 2001. Introdujo juegos populares como "Halo: Combat Evolved" y "Fable". Aunque tiene especificaciones técnicas modestas en comparación con las consolas modernas, es un hito en la historia de los videojuegos.',
                                                              price: '$3000 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_PS2} alt="PlayStation 2" />
            <h3>PlayStation 2</h3>
            <p>La PlayStation 2 es una consola icónica que definió una era de juegos. Con una biblioteca impresionante, es un tesoro para los amantes de los videojuegos retro.</p>
            <span class="price">$3000 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_PS2,
                                                              name: 'PlayStation 2',
                                                              description: 'La PlayStation 2 (PS2) es una consola clásica de Sony que se lanzó en el año 2000. Es conocida por su extensa biblioteca de juegos y por ser la plataforma de lanzamiento de títulos icónicos como "Grand Theft Auto: San Andreas" y "Metal Gear Solid 2". La PS2 presenta gráficos de la era DVD y una unidad de disco compacto.',
                                                              price: '$3000 MXN'
                                                            })}>Mas informacion</button>
          </div>

          <div class="product">
            <img src={Imagenes.img_Dream} alt="DreamCast" />
            <h3>DreamCast</h3>
            <p>DreamCast es una consola legendaria conocida por su innovación en juegos y gráficos. Experimenta la magia de los juegos de Sega en esta consola clásica.</p>
            <span class="price">$2500 MXN</span>
            <button class="add-to-cart" onClick={() =>props.onProductClick({
                                                              image: Imagenes.img_Dream,
                                                              name: 'DreamCast',
                                                              description: 'La Sega DreamCast es una consola de videojuegos que se lanzó en 1999. Fue conocida por su innovación en juegos y gráficos para la época. Presentaba un módem incorporado para juegos en línea y títulos como "Sonic Adventure" y "Shenmue". A pesar de su corta vida en el mercado, dejó una huella significativa en la historia de los videojuegos.',
                                                              price: '$2500 MXN'
                                                            })}>Mas informacion</button>
          </div>

      
      </div>

  );
}

export default ProductList;
