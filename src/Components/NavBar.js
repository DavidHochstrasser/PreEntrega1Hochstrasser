import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar d-flex justify-content-end navbar-expand-lg bg-info text-dark">
        <div class="container-fluid d-flex pl-5 justify-content-end">
          <Link class="navbar-brand d-flex pl-5 " to="/">
            <Logo />
            <h4 class="d-flex pl-5"> TiendaNube</h4>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav d-flex justify-content-end">
              <Link class="nav-link" to="/">
                Catálogo
              </Link>
              <Link class="nav-link" to="/contacto">
                Contacto
              </Link>
              <a class="nav-link d-flex justify-content-end" to="/carrito">
                <CartWidget />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
