import React from 'react'
import style from './Calificaciones.css'
import images from '../../components/imagenes/trabajo-en-equipo.png'

const Calificaciones = () => {
    return (
        <div className="m-5">
        <div className= "container">
        <img src={images} className="rounded float-left imagen" width="100px" alt="..."></img>
        <div className= "m-5">
        <h3 className="font-weight-bolder text-warning mb">Docente:</h3>
        <h6 className="text-coral mb">Mauricio Melo Rosas</h6>
        <h6 className="text-coral">Emprendimiento</h6>
        </div>
        <div className="Centrar">
        <table className="m-4 table table-bordered">
            <thead>
                <tr>
                <th scope="col" className="text-warning">#</th>
                <th scope="col" className="text-warning">Nombre</th>
                <th scope="col" className="text-warning">Nota</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className="text-warning">1</th>
                <td>Taller N°1</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-warning">2</th>
                <td>Taller N°2</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-warning">3</th>
                <td>Taller N°3</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-warning">4</th>
                <td>Taller N°4</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th colspan="2" className="text-warning" scope="row">Definitiva</th>
                <td>4.5</td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className="preguntas-modal">
            <div clasName="">
                <a href="/observaciones" className="btn text-light btn-warning botones-notas">Observaciones</a>
            </div>
            <div clasName="">
                <a href="/notas" className="btn text-light btn-coral botones-notas">Volver</a>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Calificaciones