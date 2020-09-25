import React from 'react'
import style from './ListaNotas.css'
const ListaNotas = () => {
    return (
        <div>
            <div className= "container">
                <div className="list-group list-group-flush">
                    <a href="#" className="text-warning list-group-item list-group-item-action" >Artística</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Ciencias Naturales</a>
                        <a className="dropdown-item" href="#">Química</a>
                        <a className="dropdown-item" href="#">Física</a>
                        <a className="dropdown-item" href="#">Biología</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Ciencias Sociales</a>
                        <a className="dropdown-item" href="#">Sociales</a>
                        <a className="dropdown-item" href="#">Catedra de la paz</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Economía y Política</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action ">Educación Física</a>
                        <a className="dropdown-item" href="#">Educación Física</a>
                        <a className="dropdown-item" href="#">Tiempo libre</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Etica y Valores</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Filosofía</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Humanidades</a>
                        <a className="dropdown-item" href="#">Inglés</a>
                        <a className="dropdown-item" href="#">Competencia lectora Inglés</a>
                        <a className="dropdown-item" href="#">Lengua castellana</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Matemáticas</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Media Tecnica</a>
                        <a className="dropdown-item" href="#">Humanidades</a>
                        <a className="dropdown-item" href="#">Multimedia</a>
                        <a className="dropdown-item" href="#">software</a>
                        <a className="dropdown-item" href="#">Asistencia</a>
                        <a className="dropdown-item" href="#">Contabilidad</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Religión</a>
                    <a href="#" className="text-warning list-group-item list-group-item-action">Tecnología</a>
                        <a className="dropdown-item" href="#">Tecnología</a>
                        <a className="dropdown-item" href="#">Emprendimiento</a>
                </div>
            </div>
        </div>
        )
    }
    export default ListaNotas