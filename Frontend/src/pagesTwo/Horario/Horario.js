import React from 'react'
import Imagen from '../../components/imagenes/horario.jpeg';

const Horario = () => {
   return (
     <div>
      <div className="m-5">
        <h1 class="text-violet text-center">Horario</h1>
      </div>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" src="">Mi Horario</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link text-blue" src="" href="/horarioProfesores2">Otros Profesores</a>
        </li>
      </ul>
      <div className="m-5">
        <h4 className="text-primary text-center">Mi horario</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> 
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">Horario de mi grupo:</h4>
        <h6 className="text-center text-violet">11°3</h6>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
    </div>
   )
  }
  
export default Horario