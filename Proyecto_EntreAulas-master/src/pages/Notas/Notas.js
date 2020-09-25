import React from 'react'
import notas from './Notas.css'
import Pdf from '../../components/imagenes/pdf.png'

const Notas = () => {

  return (
      <div className="root">

        <div className="Titulo">
          <h1> Seguimiento Primer Periodo </h1>
        </div>

        <a className="pdfdescarga col-12" target="_blank"
          href="..."
        >Descargar Notas Primer Periodo <img className="pdff" src={Pdf} /></a>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ciencias Naturales</h5>
                <a href="#" class="btn ">Física</a>
                <a href="#" class="btn "> Química</a>
                <a href="#" class="btn ">Biología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Humanidades</h5>
                <a href="#" class="btn">Inglés</a>
                <a href="#" class="btn ">Lectora en Inglés</a>
                <a href="#" class="btn ">Lengua Castellana</a>
                <div class="row">
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tecnología</h5>
                <a href="#" class="btn ">Emprendimiento</a>
                <a href="#" class="btn ">Tecnología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Educación Física Rereación y Deportes</h5>
                <a href="#" class="btn ">Educación Física</a>
                <a href="#" class="btn ">Tiempo Libre</a>

              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Filosofía</h5>
                <a href="#" class="btn ">Filosofía</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Artística</h5>
                <a href="#" class="btn "> Artística</a>
              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ciencias Económicas y Políticas</h5>
                <a href="#" class="btn ">Economía y política</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ciencias Religiosas</h5>
                <a href="#" class="btn "> Religión</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Matemáticas</h5>
                <a href="#" class="btn ">Matemáticas</a>
                <a href="#" class="btn ">Lógica Matemática</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Sociales</h5>
                <a href="#" class="btn ">Ciencias Sociales</a>
                <a href="#" class="btn ">Cátedra de la Paz</a>
              </div>
            </div>
          </div>




        </div>

      </div>
   


  )
}

export default Notas
