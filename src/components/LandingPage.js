import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className=" h-custom vh-100 d-flex justify-content-between flex-column">
        <nav className="navbar navbar-expand-lg bg-light border-bottom">
          <div className="container-fluid">
            <p className="navbar-brand mx-3">Página pública</p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto m-2 mb-lg-0">
                <li className="nav-item">
                  <p className="nav-link disabled" aria-current="page" href="#">
                    Home
                  </p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link linkH" to="/login">
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5 col-md-6 ">
          <div className="card border-success">
            <div className="card-header bg-transparent border-success">
              Login / Register / Dashboard
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">
                Prueba de ingreso, registro y administración de una página
              </h5>
              <p className="card-text">
                En esta página se explica el funcionamiento de el ingreso de
                credenciales, creación de usuarios y administración del sistema.{" "}
                <br />
                Para comenzar haga click en el boton 'Login' ubicado en la parte
                superior derecha de la pantalla en donde se encuentra la
                cabecera de la página. (En caso de estar en un dispositivo móvil
                haga click en el menú hamburguesa ubicado en la parte superior
                derecha y seleccione Login).
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">
              <h5 className="card-title">Pasos:</h5>
              <ul>
                <li>Ir a la pagina de login</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid border-top bg-light ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center px-5  mt-5">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-muted">
                © 2022 Roberto Quintana
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
