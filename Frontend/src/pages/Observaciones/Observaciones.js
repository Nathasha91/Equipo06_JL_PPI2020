import React from 'react'
import observaciones from './Observaciones.css'

const Observaciones = () => {
    return (
        <div className="root rootO">

            <div className="titulo text-warning tituloO"><h1>Observaciones</h1></div>

            <div className="card text-center">
                <div className="text-light card-header card-headerO">
                    Docente: Jorge Amaya Baena
                </div>
                <div className="card-body">
                    <h4 className="card-title titulo">Matemáticas</h4>
                    <p className="card-text">El estudiante no presta atención en clase y tampoco permite que los otros compañeros se concentren.</p>
                    <a href="/calificaciones" className="btn text-light btn-warning">Volver a mis notas</a>
                </div>
                <div className="text-light card-footer card-footerO">
                    Hace dos días...
                </div>
            </div>

        </div>
    )
}

export default Observaciones