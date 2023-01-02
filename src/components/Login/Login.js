import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

import firebaseApp from "../../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  FirebaseAuthException,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export default function Login() {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      navigate("/");
    }
  });

  const [isRegristrando, SetIsRegristrando] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [datosError, setDatosError] = useState(false);
  const [errorMs , setErrorMs] = useState("Error")

  /*Contraseña mayor a 6 caracteres  */
  function handleChange(name, value) {
    setDatosError(false);
    if (value.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  /* Registro del login con firebase */
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isRegristrando) {
      // Registrar
      const rol = e.target.rol.value;
      registrarUsuario(email, password, rol);
    } else {
      // Logear
      signInWithEmailAndPassword(auth, email, password).catch((err) => {
        setDatosError(true);
        err.code === "auth/invalid-email"  && (setErrorMs("Correo inválido"))
        err.code === "auth/wrong-password"  && (setErrorMs("Contraseña incorrecta"))
        err.code === "auth/user-not-found"  && (setErrorMs("Correo no encontrado"))
      });
    }
  };

  async function registrarUsuario(email, password, rol) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((usuarioFirebase) => {
        const docuRef = doc(firestore, `/usuarios/${usuarioFirebase.user.uid}`);
        setDoc(docuRef, {
          correo: email,
          rol: rol,
        });
      })
      .catch((err) => {
        setDatosError(true);
        console.log(err.code)
        err.code === "auth/missing-email"  && (setErrorMs("Falta el correo"))
        err.code === "auth/invalid-email"  && (setErrorMs("Correo invalido"))
        err.code === "auth/internal-error"  && (setErrorMs("Datos mal ingresados"))
      });
  }

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
                        type: "text",
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
                          Tines una cuenta? Log In
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
                          No tines cuenta? Registrate
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
