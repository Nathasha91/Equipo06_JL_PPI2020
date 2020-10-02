import React from 'react'
import style from './Foro.css'

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
             <h1 class="titulo text-center text-danger">Foro:</h1>

             <h2 class="titulo text-center text-warning">Preguntas frecuentes.</h2></div>
    
             <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left text-warning" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ¿Cómo me puedo comunicar con las directivas?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
       Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          ¿Cuáles son sus horarios de atención?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ¿Cómo hago un reclamo de mis notas?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          ¿Cuál es el conducto regular?
        </button>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
      Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
</div>

<div className="preguntas-modal container">
<button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdropForo">¡Animate a preguntar!</button>


<div class="modal fade" id="staticBackdropForo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-warning" id="staticBackdropLabel">Deja aquí tu pregunta</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <textarea class="form-control" placeholder="Sin miedo que no mordemos..." id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Publicar</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>

      </div>
   )
  
}
  export default Foro