import React from 'react'
import style from './CircularesOp.css'
const CircularesOp = () => {
    return (
        <div className="m-5">
          <h1 class="text-violet text-center">Circulares</h1>
          <div className= "containerb">
            <ul className="list-group list-group-flush">
              <p class="text-light-blue invertir-margin negrita">Hoy.<a href="#" class="text-reset"></a></p>
              <li className="list-group-item" >Horarios del paquete alimentario </li>
              <li className="list-group-item">Instructivo para trabajo en casa</li>

              <p class="text-light-blue invertir-margin negrita">Ayer.<a href="#" class="text-reset"></a></p>
              <li className="list-group-item">Comedor escolar</li>

              <p class="text-light-blue invertir-margin negrita">Marzo.<a href="#" class="text-reset"></a></p>
              <li className="list-group-item">Elecciones al consejo estudiantil</li>
              <li className="list-group-item">Ciclo escolar</li>
            </ul>
          </div>
        </div>
    )
}
export default CircularesOp