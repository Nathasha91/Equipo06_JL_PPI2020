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

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
       Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          ¿cuáles son sus horarios de atención?
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
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ¿Cuál es el conducto regular?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Mucho gusto, cordial saludo. Dentro de la Institución Educativa Javiera Londoño, una Instituciòn de calidad, tenemos diferentes formas en las que puedes resolver sus problemas, entre ellas algunas muy accesibles para los diferentes estudiantes y acudientes.
      </div>
    </div>
  </div>
</div>
</div>
<button type="button" class="btn btn-warning m-5 text-light btn-center">¡Anímate a preguntar!</button>

      </div>
   )
  
}
  export default Foro