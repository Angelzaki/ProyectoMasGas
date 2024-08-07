import React from 'react';
import './UsuarioPrincipal.css'; // Asegúrate de crear este archivo CSS
import DashBoard1 from './assets/image/Dashboard1.PNG';
import DashBoard2 from './assets/image/Dashboard2.PNG';
import DashBoard3 from './assets/image/Dashboard3.PNG';
import DashBoard4 from './assets/image/Dashboard4.PNG';

function UsuarioPrincipal() {
  return (
    <main className="dashboard container-fluid py-4">
      <h1 className="dashboard-title">Dashboard</h1>
      <SalesToday />
      <VisitorInsights />
      <TotalRevenue />
      <CustomerSatisfaction />
      <GoalVsReality />
      <TopProducts />
    </main>
  );
}

function SalesToday() {
  const salesData = [
    { title: 'Ventas totales', value: '$1k', color: 'primary', icon: '💰' },
    { title: 'Nuevos clientes', value: '300', color: 'success', icon: '👥' },
    { title: 'Pedidos vendidos', value: '5', color: 'info', icon: '✅' },
    { title: 'Nuevos pedidos', value: '8', color: 'warning', icon: '🛒' },
  ];

  return (
    <section className="dashboard-section">
      <h2>Ventas de hoy</h2>
      <div className="sales-grid">
        {salesData.map((item, index) => (
          <div key={index} className={`sales-card bg-${item.color}`}>
            <span className="sales-icon">{item.icon}</span>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VisitorInsights() {
  return (
    <section className="dashboard-section">
      <h2>Insights de los visitantes</h2>
      <div className="chart-placeholder">
        <img src={DashBoard1} width="350px" alt="Carrito" />
      </div>
    </section>
  );
}

function TotalRevenue() {
  return (
    <section className="dashboard-section">
      <h2>Ingresos totales</h2>
      <div className="chart-placeholder">
      <img src={DashBoard2} width="375px" alt="Carrito" />
      </div>
    </section>
  );
}

function CustomerSatisfaction() {
  return (
    <section className="dashboard-section">
      <h2>Satisfacción del cliente</h2>
      <div className="chart-placeholder">
        <img src={DashBoard3} width="255px" alt="Carrito" />
      </div>
    </section>
  );
}

function GoalVsReality() {
  return (
    <section className="dashboard-section">
      <h2>Objetivo vs Realidad</h2>
      <div className="chart-placeholder">
        <img src={DashBoard4} width="255px" alt="Carrito" />
      </div>
      <div className="summary-row">
        <div className="summary-item">
          <h5>Ventas totales</h5>
          <p className="h3">$1,835</p>
        </div>
        <div className="summary-item">
          <h5>ROI</h5>
          <p className="h3 text-success">+8.5%</p>
        </div>
      </div>
    </section>
  );
}

function TopProducts() {
  const products = [
    { name: 'Basic Tee', percentage: 55 },
    { name: 'Custom Short Pants', percentage: 31 },
    { name: 'Super Hoodies', percentage: 14 },
  ];

  return (
    <section className="dashboard-section">
      <h2>Productos más vendidos</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <span className="product-name">{product.name}</span>
            <div className="progress-bar">
              <div style={{width: `${product.percentage}%`}}></div>
            </div>
            <span className="product-percentage">{product.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsuarioPrincipal;