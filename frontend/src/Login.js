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
    <section className='wrapperformulario'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <div className='input-box'>
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='remember-forgot'>
            <button type="submit" className='btn' disabled={loading}>
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>
          <div className='social-iniciar'>
            <p className="alternative-text">Iniciar Sesión con</p>
          </div>
          <div className="social-buttons">
            <a href="#" className="social-button facebook">f</a>
            <a href="#" className="social-button google">G</a>
            <a href="#" className="social-button apple">🍎</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
