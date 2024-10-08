import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const URI = 'http://localhost:8000/usuarios/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Asegúrate de que estás importando useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(URI, { Email: email, Password: password });
      console.log(response.data);
      // Redirige al usuario después de un inicio de sesión exitoso
      navigate('/CompShowUsuario'); // Cambia esto a la ruta a la que deseas redirigir al usuario
    } catch (err) {
      console.error(err);
      setError('Correo electrónico o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='wrapperformulario flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className='input-box mb-4'>
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='input-box mb-4'>
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='remember-forgot mb-4'>
            <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300' disabled={loading}>
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>
          <div className='social-iniciar mb-4'>
            <p className="text-center text-sm text-gray-600">Iniciar Sesión con</p>
          </div>
          <div className="social-buttons flex justify-around">
            <a href="#" className="social-button facebook bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full">f</a>
            <a href="#" className="social-button google bg-red-600 text-white w-10 h-10 flex justify-center items-center rounded-full">G</a>
            <a href="#" className="social-button apple bg-gray-800 text-white w-10 h-10 flex justify-center items-center rounded-full">🍎</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
