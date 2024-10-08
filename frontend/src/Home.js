import React from 'react';
import banner from './assets/image/banner.PNG';
import filtroicono from './assets/image/filtroicono.PNG';
import imagentienda from './assets/image/imagentienda.PNG';
import './index.css';
import FooterLogo from './assets/image/Footer.PNG';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Ubicación Actual y Búsqueda */}
      <section className="bg-white py-4 shadow-md" id="opciones">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
    <a href="#" className="text-gray-700 font-bold no-underline">Ubicación Actual: Av 6 de diciembre</a>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Buscar Tienda"
        className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</section>

      {/* Banner Section */}
      <section className="flex justify-center items-center mb-8 mt-8">
        <div className="w-full max-w-5xl">
          <img src={banner} className="rounded-lg w-full" alt="Promotional Banner" />
        </div>
      </section>

      {/* Store Section */}
      <section className="max-w-7xl mx-auto px-8 mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">100 Tiendas</h2>
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <i className="fa-solid fa-filter text-black"></i> {/* Reemplazo del botón de filtro por un icono */}
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        {[...Array(6)].map((_, index) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105" key={index}>
            <a href="pagina1.html" className="block no-underline">
              <img src={imagentienda} alt="Distribuidora" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black no-underline">Lima Gas Distribuidora</h3>
                <p className="text-gray-500">Av. 10 de Agosto N89-236</p>
                <p className="text-gray-500">25m2/1.5m</p>
                <p className="text-yellow-500">4.5 ★ (4000+)</p>
              </div>
            </a>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Home;
