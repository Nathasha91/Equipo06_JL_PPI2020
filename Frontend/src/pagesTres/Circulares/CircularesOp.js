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

      <div className="preguntas-modal container">
        <button type="button" class="btn btn-blue text-light" data-toggle="modal" data-target="#staticBackdropForo">Publicar</button>


        <div class="modal fade" id="staticBackdropForo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-blue" id="staticBackdropLabel">Nueva Circular</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <div class="form-group">
                  <label for="exampleInputEmail1">Título</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                
                <div className="preguntas-modal">
                  <button className="btn btn-violet text-light">Sube aquí tu circular</button>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-violet text-light" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-blue text-light" data-dismiss="modal">Publicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default CircularesOp