import React from 'react'
import notas from './Notas.css'
import Pdf from '../../components/imagenes/pdf.png'

const Notas = () => {

  return (
      <div className="root rooot">

        <div className="text-violet">
          <h1 className="text-violet text-center"> Seguimiento Primer Periodo </h1>
        </div>

        <a className="pdfdescarga col-12 text-primary text-center" target="_blank"
          href="..."
        >Descargar Notas Primer Periodo <img className="pdff" src={Pdf} /></a>

        <div class="row">
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Ciencias Naturales</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Física</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light"> Química</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Biología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Humanidades</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Inglés</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Lectora en Inglés</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Lengua Castellana</a>
                <div class="row">
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Tecnología</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Emprendimiento</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Tecnología</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Educación Física Rereación y Deportes</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Educación Física</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Tiempo Libre</a>

              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Filosofía</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Filosofía</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Artística</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light"> Artística</a>
              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Ciencias Económicas y Políticas</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Economía y política</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Ciencias Religiosas</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light"> Religión</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Matemáticas</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Matemáticas</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Lógica Matemática</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Sociales</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Ciencias Sociales</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">Cátedra de la Paz</a>
              </div>
            </div>
          </div>




        </div>

      </div>
   


  )
}

export default Notas
