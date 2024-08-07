import './App.css';
import Home from './Home';
import LoginPrincipal from './LoginPrincipal';
import logo from './assets/image/Logo.PNG';
import carrito from './assets/image/carrito.PNG';
import Login from './Login';
import UsuarioPrincipal from './UsuarioPrincipal';
import Footer from './assets/image/Footer.PNG';


// importamos compenentes
import CompShowUsuario from './usuariocrud/ShowUsuario';
import CompCreateUsuario from './usuariocrud/CreateUsuario';
import CompEditUsuario from './usuariocrud/EditarUsuario';
import Dashboard from './Dashboard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <img src={logo} width="100px" alt="Logo" />
          <i className='menu-icon' id="menu-icon"></i>
          <nav className="navbar">
            <Link to="/Home">Home</Link>
            <Link to="/Registro">Crea tu cuenta</Link>
            <Link to="/LoginPrincipal">Ingresa</Link>
            <Link to="/UsuarioPrincipal">DashBoard</Link>
          </nav>
        </header>
        <section className="opciones" id="opciones">
          <a href="#" className="logo">Ubicación Actual: Av 6 de diciembre</a>
          <div className='Buscar'>
            <input type="text" placeholder="Buscar Tienda" />
            <button><i className='fa-solid fa-magnifying-glass'></i></button>
          </div>
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/Home" element={<Home />} />
        </Routes>
        <Routes>
            <Route path='/Registro' element={<CompCreateUsuario/>} />
            <Route path='/create' element={<CompCreateUsuario />} />
            <Route path='/create' element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/LoginPrincipal" element={<LoginPrincipal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CompShowUsuario" element={<CompShowUsuario />} />
        </Routes>
        <Routes>
          <Route path="/UsuarioPrincipal" element={<UsuarioPrincipal />} />
        </Routes>
        <section>
          <div class="logo1">
                <img src={Footer} width="20px" alt="Carrito" />
          </div>
        </section>
        <footer>
          <div className="footer-container">
            <div className="footer-section links">
              <div className="link-column">
                <h3>Compras</h3>
                <ul>
                  <li><a href="#">Registro</a></li>
                  <li><a href="#">Tiendas</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h3>Aplicaciones</h3>
                <ul>
                  <li><a href="#">Mapa del sitio</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h3>Síguenos en</h3>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h3>Acerca de MasGas</h3>
                <ul>
                  <li><a href="#">Información de la empresa</a></li>
                  <li><a href="#">Noticias</a></li>
                  <li><a href="#">Políticas</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h3>Ayuda y contacto</h3>
                <ul>
                  <li><a href="#">Avisos</a></li>
                  <li><a href="#">Foros de discusión</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-section copyright">
              <p>Copyright ©2023-2024 MasGas Inc. Todos los derechos reservados Condiciones de uso. Avisos de privacidad, Condiciones de uso de pagos, cookies y AdChoise</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
