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
        ><img className="pdff" src={Pdf} /></a>

        <div class="row">
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Décimo</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">10-1</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light"> 10-2</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">10-3</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">10-4</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light"> 10-5</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card cardM">
              <div class="card-body card-bodyM">
                <h5 class="card-title card-titleM text-violet text-center">Once</h5>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">11-1</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">11-2</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">11-3</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">11-4</a>
                <a href="/calificaciones2" class="btn btnb btn-light-blue text-light">11-5</a>
                <div class="row">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
   


  )
}

export default Notas
