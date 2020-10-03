import React from 'react'
import style from './Calificaciones.css'
import images from '../../components/imagenes/trabajo-en-equipo.png'

const Calificaciones = () => {
    return (
        <div className="m-5">
        <div className= "container">
        <img src={images} className="rounded float-left imagen" width="100px" alt="..."></img>
        <div className= "m-5">
        <h3 className="font-weight-bolder text-light-blue mb">Grupo</h3>
        <h6 className="text-violet mb">11-3</h6>
        <h6 className="text-violet"></h6>
        </div>
        <div className="Centrar">
        <table className="m-4 table table-bordered">
            <thead>
                <tr>
                <th scope="col" className="text-light-blue">#</th>
                <th scope="col" className="text-light-blue">Nombre</th>
                <th scope="col" className="text-light-blue">Nota 1</th>
                <th scope="col" className="text-light-blue">Nota 2</th>
                <th scope="col" className="text-light-blue">Nota 3</th>
                <th scope="col" className="text-light-blue">Nota 4</th>
                <th scope="col" className="text-light-blue">Nota 5</th>
                <th scope="col" className="text-light-blue">Nota 6</th>
                <th scope="col" className="text-light-blue">Definitiva</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" className="text-light-blue">1</th>
                <td>Alvarez Gonzalez Melani</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">2</th>
                <td>Alvarez Urrego Melissa</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">3</th>
                <td>Bautista Ruiz Ronaldo Andres</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">4</th>
                <td>Becerrra Perex Liceth Johana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">5</th>
                <td>Caamano Ospina Nathasha</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">6</th>
                <td>Cadavid Hernandez Valeria</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">7</th>
                <td>Castañeda Quintero David</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">8</th>
                <td>Cuellar Narvaez Karol Eliana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">9</th>
                <td>Duque Estrada Valentina</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">10</th>
                <td>Fernandez Zapata Angie Alexandra</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">11</th>
                <td>Giraldo Gaviria Melisa</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">12</th>
                <td>Gutierrez Osorio Yulieth</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">13</th>
                <td>Higuita Lopez Joaquin</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">14</th>
                <td>Hincapie Serna Salome</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">15</th>
                <td>Holmos Rodriguez Jordanis Estela</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">16</th>
                <td>Londoño Quintero Mariana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">17</th>
                <td>Londoño Ramirez Isabela</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">18</th>
                <td>Lopez Gaviria Alejandro</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">19</th>
                <td>Moncada Ruiz Maria Paulina</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">20</th>
                <td>Monroy Bautista Yuri Alejandra</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">21</th>
                <td>Monsalve Arbelaez Angela Maria</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">22</th>
                <td>Motato Hernandez Michel Yulitza</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">23</th>
                <td>Orozco Mariana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">24</th>
                <td>Orozco Cano Andres Felipe</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">25</th>
                <td>Ospina Gallego Manuela</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">26</th>
                <td>Parra Lopera Sebastian</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">27</th>
                <td>Posada Alvarez Mayra Vanessa</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">28</th>
                <td>Restrepo Caicedo Veronica</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">29</th>
                <td>Restrepo Londoño Dahiana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">30</th>
                <td>Restrepo Rodriguez Sarai</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">31</th>
                <td>Rios Rivas Alisson Ximena</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">32</th>
                <td>Soto Maya Mariana</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
                <tr>
                <th scope="row" className="text-light-blue">33</th>
                <td>Tejada Calderon Juanita</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                <td>4.5</td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className="preguntas-modal">
            <div clasName="">
                <a href="/observaciones2" className="btn text-light btn-blue botones-notas">Observaciones</a>
            </div>
            <div clasName="">
                <a href="/notas2" className="btn text-light btn-violet botones-notas">Volver</a>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Calificaciones