import React from 'react'
import notas from './Notas.css'
import Pdf from '../../components/imagenes/pdf.png'

const Notas = () => {

  return (
      <div className="root rooot">

        <div className="Titulo TituloM">
          <h1 className="text-warning text-center "> Seguimiento Primer Periodo </h1>
        </div>

        <a className="pdfdescarga col-12 text-warning text-center" target="_blank"
          href="..."
        >Descargar Notas Primer Periodo <img className="pdff" src={Pdf} /></a>

        <div class="row">
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Ciencias Naturales</h5>
                <a href="/calificaciones" class="btn btnb ">Física</a>
                <a href="/calificaciones" class="btn btnb "> Química</a>
                <a href="/calificaciones" class="btn btnb ">Biología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Humanidades</h5>
                <a href="/calificaciones" class="btn btnb">Inglés</a>
                <a href="/calificaciones" class="btn btnb ">Lectora en Inglés</a>
                <a href="/calificaciones" class="btn btnb ">Lengua Castellana</a>
                <div class="row">
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Tecnología</h5>
                <a href="/calificaciones" class="btn btnb ">Emprendimiento</a>
                <a href="/calificaciones" class="btn btnb ">Tecnología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Educación Física Rereación y Deportes</h5>
                <a href="/calificaciones" class="btn btnb ">Educación Física</a>
                <a href="/calificaciones" class="btn btnb ">Tiempo Libre</a>

              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Filosofía</h5>
                <a href="/calificaciones" class="btn btnb ">Filosofía</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Artística</h5>
                <a href="/calificaciones" class="btn btnb "> Artística</a>
              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Ciencias Económicas y Políticas</h5>
                <a href="/calificaciones" class="btn btnb ">Economía y política</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Ciencias Religiosas</h5>
                <a href="/calificaciones" class="btn btnb "> Religión</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Matemáticas</h5>
                <a href="/calificaciones" class="btn btnb">Matemáticas</a>
                <a href="/calificaciones" class="btn btnb">Lógica Matemática</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-warning text-center">Sociales</h5>
                <a href="/calificaciones" class="btn btnb ">Ciencias Sociales</a>
                <a href="/calificaciones" class="btn btnb ">Cátedra de la Paz</a>
              </div>
            </div>
          </div>




        </div>

      </div>
   


  )
}

export default Notas
