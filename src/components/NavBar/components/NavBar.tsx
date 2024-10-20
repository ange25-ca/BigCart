import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImagePath from '../assets/BigCart.png';
import iconCart from '../assets/icon-cart.png';
import profileImagePath from '../assets/default-profile.png'; 
import "../styles/NavBar.css";

const Navbar: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ubicación actual

  // Función que verifica si la ruta está activa
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''; // Devuelve 'active' si coincide la ruta
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img
            src={logoImagePath}
            width="60"
            height="60"
            className="navbar-logo"
            alt="Brand Logo"
          />
        </Link>
        <div className="navbar-right-section">
          <ul className="navbar-nav">
            <li className={`nav-item ${isActive("/")}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${isActive("/about-us")}`}>
              <Link to="/about-us" className="nav-link">Nosotros</Link>
            </li>
            <li className={`nav-item ${isActive("/products")}`}>
              <Link to="/products" className="nav-link">Productos</Link>
            </li>
            <li className={`nav-item ${isActive("/contactus")}`}>
              <Link to="/contactus" className="nav-link">Contáctenos</Link>
            </li>
            <li className={`nav-item ${isActive("/login")}`}>
              <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </li>
            <li className="nav-item profile-item">
              <img
                src={profileImagePath}
                className="profile-circle"
                alt="Profile"
              />
            </li>
          </ul>
          <div className="btn-cart">
            <Link to="/Cart">
              <img
                src={iconCart}
                width="25"
                height="25"
                alt="Cart Icon"
              />
            </Link>
          </div>
          <form className="navbar-search-form">
            <input
              className="navbar-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="navbar-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
