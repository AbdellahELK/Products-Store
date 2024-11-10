import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#282c34',
        padding: '1rem 2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Side - ProductShop Logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: '1.8rem',
            color: '#ffa726',
            letterSpacing: '1px',
            marginRight: 'auto', // Ensures logo stays to the left
          }}
        >
          ProductShop
        </Link>

        {/* Right Side - Create Product Button with Icon */}
        <Link
          className="nav-link d-flex align-items-center"
          to="/create-product"
          style={{
            color: '#ffffff',
            fontSize: '1.1rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            textDecoration: 'none',
            backgroundColor: '#ffa726',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ff8f00')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ffa726')}
        >
          <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i> Create Product
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
