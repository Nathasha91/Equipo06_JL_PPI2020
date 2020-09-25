import React from 'react'
import observaciones from './Observaciones.css'

const Observaciones = () => {
    return (
        <div className="root">

            <div className="titulo"><h1>Observaciones</h1></div>

            <div className="card text-center">
                <div className="card-header">
                    Docente: Jorge Amaya Baena
                </div>
                <div className="card-body">
                    <h4 className="card-title">Matemáticas</h4>
                    <p className="card-text">El estudiante no presta atención en clase y tampoco permite que los otros compañeros se concentren.</p>
                    <a href="Notas.js" className="btn ">Volver a notas</a>
                </div>
                <div className="card-footer ">
                    Hace dos días...
                </div>
            </div>

        </div>
    )
}

export default Observaciones