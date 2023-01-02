import React from 'react'
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Página no  encontrada.</p>
                <p class="lead">
                    La página que estás buscando no existe.
                  </p>
                <Link to='/' class="btn btn-primary">Ir a inicio</Link>
            </div>
        </div>
    </>
  )
}

export default Error404