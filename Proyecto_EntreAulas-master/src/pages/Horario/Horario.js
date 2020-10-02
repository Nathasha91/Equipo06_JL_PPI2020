import React from 'react'
import Imagen from '../../components/imagenes/horario.jpeg';

const Horario = () => {
   return (
     <div>
      <div className="m-5">
        <h1 class="text-warning text-center">Horario</h1>
      </div>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" src="">Mi Horario</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link text-warning" src="" href="/horarioProfesores">Profesores</a>
        </li>
      </ul>
      <div className="m-5">
        <h4 className="text-warning text-center">Mi horario</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> 
      </div>
      <div className="m-5">
        <h4 className="text-warning text-center">Director de grupo:</h4>
        <h6 className="text-center titulo">Diana Mosquera</h6>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
    </div>
   )
  }
  
export default Horario