import React from 'react'
import observaciones from './Observaciones.css'

const Observaciones = () => {
    return (
        <div className="root rootO">

            <div className="titulo text-violet tituloO"><h1>Observaciones</h1></div>

            <div className="card text-center">
                <div className="text-light card-header card-headerO bg-blue">
                    De: Docente Jorge Amaya Baena
                    Para: Parra Lopera Sebastian
                </div>
                <div className="card-body">
                    <h4 className="card-title titulo">Matemáticas</h4>
                        <div class="modal-body">
                            <textarea class="form-control" placeholder="Sin miedo que no mordemos..." id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    <a href="/calificaciones2" className="btn text-light btn-violet">Volver a mis notas</a>
                </div>
                <div className="text-light card-footer card-footerO bg-blue">
                    Hace dos días...
                </div>
            </div>

        </div>
    )
}

export default Observaciones