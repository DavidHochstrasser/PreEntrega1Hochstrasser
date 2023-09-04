import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar d-flex justify-content-end navbar-expand-lg bg-info text-dark">
        <div class="container-fluid d-flex pl-5 justify-content-end">
          <a class="navbar-brand d-flex pl-5 " href="#">
            <Logo />
            <h3 class="d-flex pl-5">Tienda</h3>
          </a>
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
            <div class="navbar-nav d-flex justify-content-end ">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
              <a class="nav-link" href="#">
                Catálogo
              </a>
              <a class="nav-link" href="#">
                Contacto
              </a>
              <a class="nav-link d-flex justify-content-end" href="#">
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
