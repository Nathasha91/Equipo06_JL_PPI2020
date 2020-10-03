import React from 'react'
import tecnologia from '../../components/imagenes/tecnologia.jpg'
import cienciassociales from '../../components/imagenes/tecnologia.jpg'
import catedradelapaz from '../../components/imagenes/catedradelapaz.png'
import biologia from '../../components/imagenes/biologia.png'
import educacionfisica from '../../components/imagenes/educacionfisica.png'
import tiempolibre from '../../components/imagenes/tiempolibre.png'
import artistica from '../../components/imagenes/artistica.png'
import economiaypolitica from '../../components/imagenes/economiaypolitica.png'
import ingles from '../../components/imagenes/etica.png'
import lectora from '../../components/imagenes/lectora.png'


const Tareas = () => {
   return (

      <div>
        <div className= "container">

          <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Busca Materia" aria-label="Search"></input>
            </form>
          </nav>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Tecnologia</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={tecnologia} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Ciencias Sociales</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={cienciassociales} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Catedra de la Paz </div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={catedradelapaz} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Biología</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={biologia} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Educación Física</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={educacionfisica} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Tiempo Libre </div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={tiempolibre} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>
  
          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Artística</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={artistica} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>
  
          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Economía y Política</div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={economiaypolitica} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Inglés </div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={ingles} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

          <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header"> C.L Inglés </div>
            <div class="card-body text-warning">
              <h5 class="card-title">Warning card title</h5>
              <img height="150px" src={lectora} className="rounded mx-auto d-block" height="300px"></img>
            </div>
          </div>

        </div>
      </div>
   )
  
}
  export default Tareas