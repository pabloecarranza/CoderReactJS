import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="../Img/logo.svg" alt="" width={70} height={70} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav align-items-center" >
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <div className="dropdown show">
                  <a className="nav-link dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <NavLink to="/" activeclassname="active" className="dropdown-item">
                      Todos
                    </NavLink>
                    <NavLink to="/category/Hamburguesas" activeclassname="active" className="dropdown-item">
                      Hamburguesas
                    </NavLink>
                    <NavLink to="/category/Papas" activeclassname="active" className="dropdown-item">
                      Papas
                    </NavLink>
                    <NavLink to="/category/Bebidas" activeclassname="active"  className="dropdown-item">
                      Bebidas
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/nosotros" className="nav-link">
                  Nosotros
                </NavLink>
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/cart" className="nav-link">
                  <CartWidget />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
