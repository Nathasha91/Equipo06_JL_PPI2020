import React from 'react'
import Imagen from '../../components/imagenes/horario.jpeg';

const Horario = () => {
   return (
     <div>
      <div className="m-5">
        <h1 class="text-violet text-center">Horarios</h1>
      </div>
      <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" src="">Grupos</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link text-blue" src="" href="/horarioProfesores2">Profesores</a>
        </li>
      </ul>
      <div className="m-5">
        <h4 className="text-primary text-center">10°1</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img> 
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">10°2</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">10°3</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">10°4</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">10°5</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">10°6</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">11°1</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">11°2</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
      <div className="m-5">
        <h4 className="text-primary text-center">11°3</h4>
      </div>
      <div className="m-5">
        <img height="150px" src={Imagen} className="rounded mx-auto d-block" height="300px" alt="Horario"></img>
      </div>
    </div>
   )
  }
  
export default Horario