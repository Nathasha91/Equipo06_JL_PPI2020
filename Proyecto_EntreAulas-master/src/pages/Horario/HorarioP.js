import React from 'react'
import Imagen from '../../components/imagenes/horario.jpeg';

const HorarioP= () => {
   return (
     <div>
      <div className="m-5">
             <h1 class="titulo text-center">Horario</h1></div>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" src="">Mi Horario</a> 
  </li>
  <li class="nav-item">
    <a class="nav-link" src="">Profesores</a>
  </li>
</ul>
<div className="m-5">
<p class="titulo text-center">Diana Mosquera </p>
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> </div>
        <div className="m-5">            
             <p class="titulo text-center">Mauricio Melo</p></div>
             <div className="m-5">
             <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> </div>
    
    </div>
   )
  }
  
export default HorarioP