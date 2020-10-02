import React from 'react'
const Foro = () => {
   return (

<div>
<div className= "container">
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Busca Pregunta" aria-label="Search"></input>
  </form>
</nav>

<div className="m-5">
             <h1 class="titulo text-center text-violet">Foro:</h1>

             <h2 class="titulo text-center text-blue">Preguntas recientes.</h2></div>
    
             <div class="accordion preguntas-desplegables" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left text-light-blue" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ¿Cómo me puedo comunicar con las directivas?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body preguntas-modal">

        <button type="button" class="btn btn-violet text-light botones-foro" data-toggle="modal" data-target="#staticBackdropForo">Deja una respuesta</button>
        <button type="button" class="btn btn-blue text-light botones-foro" data-toggle="modal" data-target="#staticBackdropEliminar">Eliminar pregunta</button>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-light-blue" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          ¿Cuáles son sus horarios de atención?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">

        <button type="button" class="btn btn-violet text-light botones-foro" data-toggle="modal" data-target="#staticBackdropForo">Deja una respuesta</button>
        <button type="button" class="btn btn-blue text-light botones-foro" data-toggle="modal" data-target="#staticBackdropEliminar">Eliminar pregunta</button>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-light-blue" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ¿Cómo hago un reclamo de mis notas?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">

        <button type="button" class="btn btn-violet text-light botones-foro" data-toggle="modal" data-target="#staticBackdropForo">Deja una respuesta</button>
        <button type="button" class="btn btn-blue text-light botones-foro" data-toggle="modal" data-target="#staticBackdropEliminar">Eliminar pregunta</button>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-light-blue" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          ¿Cuál es el conducto regular?
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">

        <button type="button" class="btn btn-violet text-light botones-foro" data-toggle="modal" data-target="#staticBackdropForo">Deja una respuesta</button>
        <button type="button" class="btn btn-blue text-light botones-foro" data-toggle="modal" data-target="#staticBackdropEliminar">Eliminar pregunta</button>

      </div>
    </div>
  </div>
</div>
</div>


<div class="modal fade" id="staticBackdropForo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-light-blue" id="staticBackdropLabel">Deja aquí tu respuesta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <textarea class="form-control" placeholder="Escribe una respuesta" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-violet text-light" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-blue text-light" data-dismiss="modal">Publicar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="staticBackdropEliminar" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-blue text-center" id="staticBackdropLabel">¿Estas seguro de querer borrar este mensaje?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-violet text-light" data-dismiss="modal">Sí</button>
        <button type="button" class="btn btn-blue text-light" data-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>

      </div>
   )
  
}
  export default Foro