import React from 'react'
const Pregunta= () => {
   return (

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">¡Animate a preguntar!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body form-group">
        <label for="exampleFormControlInput1"></label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Escribe aquí tu pregunta..."></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Publicar</button>
        <button type="button" class="btn btn-danger">Cancelar</button>
      </div>
    </div>
  </div>
</div>
 )
  
}
  export default Pregunta