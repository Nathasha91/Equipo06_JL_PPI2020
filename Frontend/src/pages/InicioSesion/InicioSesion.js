import React from 'react'
import style from './InicioSesion.css'
import image from '../../components/imagenes/masculino.png'
const InicioSesion = () => {
    return (
        <div className="m-5">
          <p class="text-secondary text-center">"Comprendiendo y viviendo la educación</p>
          <p class="text-secondary text-center">como derecho-deber".</p>
          <img height="150px" src={image} className="rounded mx-auto d-block" height="150px" alt="..."></img>
          <div className="container containerIS">
            <form className=" form col-12 col-md-5">
                <div className="form-group">
                  <label for="inputEmail">Usuario</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Usuario" required></input>
                </div>
                <div className="form-group">
                  <label for="inputEmail">I.D</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="I.D" required></input>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputCity">Contraseña</label>
                    <input type="text" className="form-control" id="inputCity"  placeholder="Contraseña" required></input>
                  </div> 
                </div>
                <div className="Boton1 btnform">
                <div className="form-group col-md-6"></div>
                  <a href="/javieraHoy" className="btn text-light btn-warning col-12">Ingresar</a>
                </div>
                <div className="Boton2 btnform1">
                <div className="form-group col-md-6"></div>
                    <a href="/matriculas" className="btn text-light btn-warning col-12">Matrículas</a>
                </div>
              </form>
           </div>
        </div>
    )
}

export default InicioSesion