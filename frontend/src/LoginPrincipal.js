import React from 'react';
import './LoginPrincipal.css';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom'
const LoginPrincipal = () => {
  return (
    <section class="botones" id="botones">
            <Link to="/Login">Soy Usuario</Link>
            <Link to="/Login">Soy Repartidor</Link>
            <Link to="/Login">Soy Vendedor</Link>
    </section>
  );
};

export default LoginPrincipal;