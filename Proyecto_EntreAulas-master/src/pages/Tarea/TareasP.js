import React from 'react'
import style from './Tarea2.css'


const TareasP = () => {
    return (
        <div>
          <div className="card text-center mb-3 tareas">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs justify-content-center">
                <li className="nav-item">
                  <a className="nav-link text-warning" href="#">Hechas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="#">Pendientes</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title text-warning">Pendientes</h5>
              <div className="Div-cards">
                
{/* ----------------------------- TALLER 4 -----------------------------*/}
                <div className="card theFuckingCard school-card bg-warning text-white">
                  <div className="card-body">
                    <h5 className="card-title negrita">Taller N°4</h5>
                    <h6 className="card-subtitle mb-2">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Nota: 1.0</p>
                    
                    <button type="button" class="btn text-warning btn-light negrita" data-toggle="modal" data-target="#staticBackdrop4">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop4" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-warning negrita" id="staticBackdropLabel">Taller N°4</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-warning">Emprendimiento</h5>
                            <p className="card-text Parrafo-top text-dark">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <p className="card-text text-muted">Me extraña que no haya entregado el taller, ¿Qué pasó?</p>
                            <h5 className="card-title text-warning">Nota: 1,0</h5>
                            <div><a href="#" class="btn btn-warning botones text-light">Taller N°1</a></div>
                            <a href="#" class="btn btn-warning botones text-light">Sube tu taller aquí</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top text-warning negrita">Fecha de Entrega: 20/05/2020</p>
                              <p className="card-text Parrafos text-dark">Publicado: 10/05/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 4 -----------------------------*/}

{/* ----------------------------- TALLER 5 -----------------------------*/}
                <div className="card theFuckingCard school-card bg-warning text-white">
                  <div className="card-body">
                    <h5 className="card-title negrita">Taller N°5</h5>
                    <h6 className="card-subtitle mb-2">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Nota: 1.0</p>
                    
                    <button type="button" class="btn text-warning btn-light negrita" data-toggle="modal" data-target="#staticBackdrop5">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop5" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-warning negrita" id="staticBackdropLabel">Taller N°5</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-warning">Emprendimiento</h5>
                            <p className="card-text Parrafo-top text-dark">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <p className="card-text text-muted">Me extraña que no haya entregado el taller, ¿Qué pasó?</p>
                            <h5 className="card-title text-warning">Nota: 1,0</h5>
                            <div><a href="#" class="btn btn-warning botones text-light">Taller N°1</a></div>
                            <a href="#" class="btn btn-warning botones text-light">Sube tu taller aquí</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top text-warning negrita">Fecha de Entrega: 20/06/2020</p>
                              <p className="card-text Parrafos text-dark">Publicado: 10/06/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 5 -----------------------------*/}

{/* ----------------------------- TALLER 6 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°6</h5>
                    <h6 className="card-subtitle mb-2 text-warning">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Fecha de Entrega: 20/07/2020</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop6">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop6" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-warning negrita" id="staticBackdropLabel">Taller N°6</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-warning">Emprendimiento</h5>
                            <p className="card-text Parrafo-top">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <div><a href="#" class="btn btn-warning botones text-light">Taller N°1</a></div>
                            <a href="#" class="btn btn-warning botones text-light">Sube tu taller aquí</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Fecha de Entrega: 20/07/2020</p>
                              <p className="card-text Parrafos">Publicado: 10/07/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 6 -----------------------------*/}

{/* ----------------------------- TALLER 7 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°7</h5>
                    <h6 className="card-subtitle mb-2 text-warning">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Fecha de Entrega: 20/08/2020</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop7">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop7" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-warning negrita" id="staticBackdropLabel">Taller N°7</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-warning">Emprendimiento</h5>
                            <p className="card-text Parrafo-top">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <div><a href="#" class="btn btn-warning botones text-light">Taller N°1</a></div>
                            <a href="#" class="btn btn-warning botones text-light">Sube tu taller aquí</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Fecha de Entrega: 20/08/2020</p>
                              <p className="card-text Parrafos">Publicado: 10/08/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 7 -----------------------------*/}
                
{/* ----------------------------- TALLER 8 -----------------------------*/}
                <div className="card theFuckingCard school-card">
                  <div className="card-body">
                    <h5 className="card-title text-warning negrita">Taller N°8</h5>
                    <h6 className="card-subtitle mb-2 text-warning">Mauricio Melo Rosas</h6>
                    <p className="card-text Parrafo-top">Fecha de Entrega: 20/09/2020</p>
                    
                    <button type="button" class="btn btn-warning text-light" data-toggle="modal" data-target="#staticBackdrop8">
                      Ver más
                    </button>
                    <div class="modal fade" id="staticBackdrop8" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-warning negrita" id="staticBackdropLabel">Taller N°8</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body modal-margen">

                            <h5 className="card-title text-warning negrita Parrafos">Mauricio Melo Rosas</h5>
                            <h5 className="card-title text-warning">Emprendimiento</h5>
                            <p className="card-text Parrafo-top">Hola chicos, espero y se encuentren muy bien, les comparto el taller con la actividad para esta semana, si se les presenta alguna duda o inquietud pueden escribirme al interno, respetando los tiempos estipulados.</p>
                            <div><a href="#" class="btn btn-warning botones text-light">Taller N°1</a></div>
                            <a href="#" class="btn btn-warning botones text-light">Sube tu taller aquí</a>
                            <div className="derecha">
                              <p className="card-text Parrafos Parrafo-top">Fecha de Entrega: 20/09/2020</p>
                              <p className="card-text Parrafos">Publicado: 10/09/2020</p>
                            </div>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-warning text-light" data-dismiss="modal">Cerrar</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                </div>
{/* ----------------------------- TALLER 8 -----------------------------*/}

              </div>
            </div>
          </div>
        </div>
    )
}

export default TareasP