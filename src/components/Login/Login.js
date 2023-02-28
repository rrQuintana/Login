import { Link } from "react-router-dom";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function Login() {
  
  return (
    <>
      <div className="vh-100 d-flex justify-content-center ">
        <div className="d-flex container row align-items-center ">
          
          <div className="col-md-5  flex-wrap">
            <div className="container col-md-12 mt-5">
              <div className="row d-flex  ">
                <Link to="/" className="text-black">
                  <i className="fa-solid fa-arrow-left"></i> Regresar{" "}
                </Link>

                <form onSubmit={submitHandler}>
                  <br />
                  {!isRegristrando ? (
                    <div className="d-flex mb-4">
                      <h1>Log in</h1>
                    </div>
                  ) : (
                    <div className="d-flex mb-4">
                      <h1>Registrarse</h1>
                    </div>
                  )}
                  <div className="form-outline mb-4">
                    <Label text={"Usuario"} />
                    <Input
                      attribute={{
                        id: "email",
                        type: "emal",
                        placeholder: "Ingrese su correo",
                      }}
                      handleChange={() => {
                        setDatosError(false);
                      }}
                    />
                  </div>

                  <div className="form-outline">
                    <Label text={"Contraseña"} />
                    <Input
                      attribute={{
                        id: "password",
                        type: "password",
                        placeholder: "Ingrese su contraseña",
                        param: { passwordError },
                      }}
                      handleChange={handleChange}
                    />
                    <br />
                    {passwordError && (
                      <label className="form-outline text-danger">
                        La contraseña tiene que ser mayor de 6 caracteres
                      </label>
                    )}
                  </div>
                  {isRegristrando && (
                    <>
                      <Label text={"Rol"} />
                      <div className="form-outline mb-4">
                        <select className="form-select" id="rol">
                          <option value="admin">Administrador</option>
                          <option value="user">Usuario</option>
                        </select>
                      </div>
                    </>
                  )}
                  {datosError && (
                    <div className="d-flex justify-content-center">
                      <p className="text-danger">
                        {errorMs}
                      </p>
                    </div>
                  )}
                  {isRegristrando ? (
                    <>
                      <div className="d-flex justify-content-center">
                        {passwordError ? (
                          <input
                            className="btn btn-secondary btn-block mb-4 "
                            value="Registrarse"
                          />
                        ) : (
                          <input
                            type="submit"
                            className="btn btn-primary btn-block mb-4 "
                            value="Registrarse"
                          />
                        )}
                      </div>

                      <div className="d-flex justify-content-center">
                        <div
                          onClick={() => (
                            SetIsRegristrando(!isRegristrando),
                            setDatosError(false)
                          )}
                          className="text-center btn  btn-block mb-4 "
                        >
                          Tienes una cuenta? <a href="#">Log In</a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex justify-content-center">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block mb-4 "
                          value="Iniciar sesión"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <div
                          onClick={() => (
                            SetIsRegristrando(!isRegristrando),
                            setDatosError(false)
                          )}
                          className="text-center btn  btn-block mb-4 "
                        >
                          No tines cuenta?  <a href="#">Registrate</a> 
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-7 ">
            <div className="container  col-md-12">
              <div className="card border-success">
                <div className="card-header bg-transparent border-success">
                  Login / Register / Dashboard
                </div>
                {!isRegristrando ? (
                  <>
                    <div className="card-body text-success">
                      <h5 className="card-title">Página de ingreso</h5>
                      <p className="card-text">
                        En esta página se valida el funcionamiento de el ingreso
                        de credenciales y acceso al sistema. <br />
                        Si ya tiene una cuenta ingrese los datos
                        correspondientes al correo y contraseña para ser
                        validado.
                        <br />
                        En caso de no tener una cuenta, haga click en el enlace
                        de registrarse el cual lo enviará a una pantalla para
                        crear un acceso.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <h5 className="card-title">Pasos:</h5>
                      <ul>
                        <li>Crear una cuenta</li>
                        <li>Iniciar sesión</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body text-success">
                      <h5 className="card-title">Página de registro</h5>
                      <p className="card-text">
                        En esta página se ingresan datos para que sean
                        almacenados en el sistema y puedan ser utilizados para
                        ingresar a el.
                        <br />
                        <br />
                        En este caso se puede seleccionar el tipo de permisos de
                        la cuenta, en un caso real se podría extender a más
                        tipos de usuario.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <h5 className="card-title">Pasos:</h5>
                      <ul>
                        <li>Ingresar un correo válido</li>
                        <li>Ingresar una contraseña válida</li>
                        <li>Seleccionar el tipo de permisos</li>
                        <li>Registrar la cuenta</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
