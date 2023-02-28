import React from "react";

export default function Logged(user) {
  return (
    <>
      <div className="vh-100 d-flex justify-content-between flex-column align-items-center">
        <nav className="w-100 navbar navbar-expand-lg bg-light border-bottom">
          <div className="container-fluid">
            <p className="navbar-brand mx-3">Página privada</p>
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
                  <a
                    href="#"
                    className="nav-link linkH"
                    to="/login"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="d-flex container row align-items-center">
          <div className="col-md-6">
            <div className="container col-md-10 mt-3">
              <div className="card border-success">
                {user.user.rol === "admin" ? (
                  <>
                    <div className="card-header bg-transparent border-success">
                      Ingresado como: Administrador
                    </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Página de Administradores</h5>
                      <p className="card-text">
                        Ingresar a un sistema con permisos de administrador nos
                        da la capacidad de aministar el sistema y realizar
                        cambios en él.
                      </p>
                      <p>
                        En este caso al contar con estos permisos en una página
                        real podrías tener acceso a otras ventanas destinadas a
                        realizar modificaciones a la página o a sus datos.
                      </p>
                      <p>
                        Ahora puedes ingresar utilizando las credenciales que
                        utiliaste en el registro.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-header bg-transparent border-success">
                      Ingresado como: Usuario
                    </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Página de Usuario</h5>
                      <p className="card-text">
                        Ingresar a un sistema con permisos de usuario nos
                        da la capacidad de navegar por el sistema y acceder a otras páginas pero no permite realizar modificaciones a la página o a sus datos.
                        <br />
                        En este caso ,ya que sitema tiene fines educativos no
                        importan los permisos ya que no se puede hacer nada,
                        pero en una tienda por ejemplo nos permitiría añadir o
                        eliminar productos de un carrito de compras o acceder a
                        áreas que sin una cuenta no se podrían.
                        <br />
                        Ahora puedes ingresar utilizando las credenciales que
                        usaste en el registro.
                      </p>
                    </div>
                  </>
                )}
                <div className="card-footer bg-transparent border-success">
                  <h5 className="card-title">Pasos:</h5>
                  <ul>
                    <li>Cerrar sesión</li>
                    <li>Iniciar el login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="container my-5 col-md-10">
              {user.user.rol === "admin" ? (
                <>
                  <h5>Adminstrador:</h5>
                </>
              ) : (
                <>
                  <h5>Usuario:</h5>
                </>
              )}
              <h1>{user.user.email}</h1>
              <h3 className="card-title">Hola, bienvenido al sistema</h3>
            </div>
          </div>
        </div>

        <div className="container-fluid border-top bg-success ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center px-5  mt-5">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3  text-light">© 2022 Roberto Quintana</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
