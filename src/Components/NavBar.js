import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-end navbar-expand-lg bg-info text-dark">
      <div className="container-fluid d-flex pl-5 justify-content-end">
        <Link className="navbar-brand d-flex pl-5 " to="/">
          <Logo />
          <h4 className="d-flex pl-5"> CarShop</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex justify-content-end">
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
            <Link className="nav-link" to="/productos/usado">
              Usados
            </Link>
            <Link className="nav-link" to="/productos/nuevo">
              Nuevos
            </Link>
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
            <Link className="nav-link d-flex justify-content-end" to="/carrito">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
