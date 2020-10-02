import React from 'react'
import Imagen from '../../components/imagenes/horario.jpeg';

const HorarioP= () => {
   return (
     <div>
      <div className="m-5">
        <h1 class="text-violet text-center">Horario</h1>
      </div>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link text-blue" src="" href="/horario2">Mi Horario</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link active" src="">Otros Profesores</a>
        </li>
      </ul>
      <div className="m-5">
        <h4 className="text-primary text-center">Diana Mosquera</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> 
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">Mauricio Melo Rosas</h4>
      </div>
      <div className="m-5">            
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
    </div>
   )
  }
  
export default HorarioP