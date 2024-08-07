import React from 'react';
import './Home.css';
import banner from './assets/image/banner.PNG';
import filtroicono from './assets/image/filtroicono.PNG';
import imagentienda from './assets/image/imagentienda.PNG';
function Home() {
    return (
      <div>
       <section className="banner" id="banner">
          <div className="banner1">
          <img src={banner} className="banner2" alt="Banner" />
          </div>
        </section>
        <section className="store-section">
          <div className="store-count">100 tiendas</div>
          <div className="filter-button">
            Filtro
            <img src={filtroicono} alt="Filtro Icono" width="20px" />
          </div>
        </section>
        <section className="container">
          {[...Array(6)].map((_, index) => (
            <div className="card" key={index}>
              <a href="pagina1.html" className="card">
              <img src={imagentienda} alt="Distribuidora" />
                <div className="card-content">
                  <h3>Lima gas Distribuidora</h3>
                  <p>Av. 10 de agosto N89-236</p>
                  <p>25m2/1.5m</p>
                  <p className="rating">4.5 ★ (4000+)</p>
                </div>
              </a>
            </div>
          ))}
        </section>
    </div>
    );
  }
  
  export default Home;