import React from 'react'
import style from './Tarea2.css'

const TareasH = () => {
    return (

        <div>
          <div className="card text-center mb-3 tareas">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Hechas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-warning" href="/tareasPendientes">Pendientes</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title text-coral">Hechas</h5>
              <div className="Div-cards">

{/* ----------------------------- TALLER 1 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°1</h5>
                    <h6 className="card-subtitle mb-2 text-coral">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Nota: 4.5</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop1">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-coral negrita" id="staticBackdropLabel">Taller N°1</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-danger">Emprendimiento</h5>
                            <p className="card-text Parrafo-top text-muted">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <p className="card-text">Muy bien desarrollados los diferentes puntos, se nota que prestó atención en clase. En el punto número dos le hice una pequeña corrección, para que esté más pendiente de esos detalles en el futuro.</p>
                            <h5 className="card-title text-coral">Nota: 4,5</h5>
                            <a href="#" class="btn btn-warning botones text-light">Taller N°1</a>
                            <a href="#" class="btn btn-warning botones text-light">Mi Taller</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Entregado el 15/02/2020</p>
                              <p className="card-text Parrafos">Publicado el 10/02/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <a href="#" class="btn btn-danger botones text-light">Reclamar</a>
                            <button type="button" class="btn btn-warning botones text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 1 -----------------------------*/}

{/* ----------------------------- TALLER 2 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°2</h5>
                    <h6 className="card-subtitle mb-2 text-coral">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Nota: 4.5</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop2">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-coral negrita" id="staticBackdropLabel">Taller N°2</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-danger">Emprendimiento</h5>
                            <p className="card-text Parrafo-top text-muted">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <p className="card-text">Muy bien desarrollados los diferentes puntos, se nota que prestó atención en clase. En el punto número dos le hice una pequeña corrección, para que esté más pendiente de esos detalles en el futuro.</p>
                            <h5 className="card-title text-coral">Nota: 4,5</h5>
                            <a href="#" class="btn btn-warning botones text-light">Taller N°2</a>
                            <a href="#" class="btn btn-warning botones text-light">Mi Taller</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Entregado el 15/03/2020</p>
                              <p className="card-text Parrafos">Publicado el 10/03/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <a href="#" class="btn btn-danger botones text-light">Reclamar</a>
                            <button type="button" class="btn btn-warning botones text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 2 -----------------------------*/}

{/* ----------------------------- TALLER 3 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°3</h5>
                    <h6 className="card-subtitle mb-2 text-coral">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Nota: 4.5</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop3">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop3" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-coral negrita" id="staticBackdropLabel">Taller N°3</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-danger">Emprendimiento</h5>
                            <p className="card-text Parrafo-top text-muted">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <p className="card-text">Muy bien desarrollados los diferentes puntos, se nota que prestó atención en clase. En el punto número dos le hice una pequeña corrección, para que esté más pendiente de esos detalles en el futuro.</p>
                            <h5 className="card-title text-coral">Nota: 4,5</h5>
                            <a href="#" class="btn btn-warning botones text-light">Taller N°3</a>
                            <a href="#" class="btn btn-warning botones text-light">Mi Taller</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Entregado el 15/04/2020</p>
                              <p className="card-text Parrafos">Publicado el 10/04/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <a href="#" class="btn btn-danger botones text-light">Reclamar</a>
                            <button type="button" class="btn btn-warning botones text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 3 -----------------------------*/}

              </div>
            </div>
          </div>
        </div>
    )
}

export default TareasH
