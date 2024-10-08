import './App.css';
import Home from './Home';
import LoginPrincipal from './LoginPrincipal';
import logo from './assets/image/Logo.PNG';
import carrito from './assets/image/carrito.PNG';
import Login from './Login';
import UsuarioPrincipal from './UsuarioPrincipal';
import { FaUser, FaShoppingCart, FaBars, FaMapMarkerAlt, FaSearch, FaFacebook, FaInstagram, FaTwitter, FaTimes, FaClipboardList, FaBox, FaChartLine, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

// Importamos componentes
import CompShowUsuario from './usuariocrud/ShowUsuario';
import CompCreateUsuario from './usuariocrud/CreateUsuario';
import CompEditUsuario from './usuariocrud/EditarUsuario';
import Dashboard from './Dashboard';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para abrir o cerrar el menú lateral
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-red-600 text-white p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto relative z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="MasGas Logo" className="w-24 h-auto" />
            </div>

            {/* Íconos de usuario, carrito y menú */}
            <div className="flex space-x-4 items-center">
              {/* Usamos Link para redirigir a la página de login */}
              <Link to="/login" aria-label="User" className="focus:outline-none">
                <FaUser className="text-2xl cursor-pointer" />
              </Link>
              <FaShoppingCart className="text-2xl cursor-pointer" />
              <button onClick={toggleMenu} aria-label="Menu" className="focus:outline-none">
                <FaBars className="text-2xl cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Campo de búsqueda */}
          <div className="mt-4 max-w-7xl mx-auto">
            <div className="flex bg-white rounded-full px-4 py-2 items-center">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Buscar tienda"
                className="ml-2 w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Ubicación actual */}
          <div className="mt-2 flex items-center max-w-7xl mx-auto text-sm">
            <FaMapMarkerAlt className="mr-2" />
            <p>Ubicación actual: Av 6 de diciembre 170589</p>
          </div>
        </header>

        {/* Menú lateral */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20">
            <div className="fixed top-0 right-0 w-64 bg-white h-full z-30 p-6 shadow-lg">
              <button onClick={toggleMenu} className="text-black text-2xl absolute top-4 right-4">
                <FaTimes />
              </button>
              <ul className="space-y-6 mt-8 text-black">
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaClipboardList />
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaBox />
                  <Link to="/orders">Órdenes</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaBox />
                  <Link to="/products">Productos</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaChartLine />
                  <Link to="/sales">Reporte de ventas</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaEnvelope />
                  <Link to="/messages">Mensajes</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaCog />
                  <Link to="/settings">Ajustes</Link>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer">
                  <FaSignOutAlt />
                  <Link to="/signout">Sign Out</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Registro" element={<CompCreateUsuario />} />
          <Route path="/create" element={<CompCreateUsuario />} />
          <Route path="/LoginPrincipal" element={<LoginPrincipal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CompShowUsuario" element={<CompShowUsuario />} />
          <Route path="/UsuarioPrincipal" element={<UsuarioPrincipal />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            {/* Sección de logo y descripción */}
            <div className="flex flex-col items-center md:items-start">
              <img src={logo} alt="MasGas Logo" className="w-32 mb-4" />
              <p className="text-sm text-gray-400">
                Proveedor confiable de servicios de gas. Rápido, seguro y a tu puerta.
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Inicio</Link></li>
                <li><Link to="/products" className="hover:text-white">Productos</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contáctanos</Link></li>
                <li><Link to="/about" className="hover:text-white">Sobre nosotros</Link></li>
              </ul>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Contáctanos</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400">Teléfono: +51 987 654 321</li>
                <li className="text-sm text-gray-400">Email: info@masgas.com</li>
                <li className="text-sm text-gray-400">Dirección: Av. 6 de diciembre, 170589</li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-lg mb-4 text-white">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>

          {/* Sección de derechos reservados */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
            <p>&copy; 2023-2024 MasGas Inc. Todos los derechos reservados.</p>
            <p>Condiciones de uso | Política de privacidad</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
