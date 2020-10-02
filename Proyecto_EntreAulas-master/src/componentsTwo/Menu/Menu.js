import React from 'react'
import chat from '../imagenes/chat.png'

const Menu = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-info bg-blue">
  <a className="navbar-brand text-light" href="/javieraHoy2"><h3>Entre Aulas</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notas
        </a>
        <div className="dropdown-menu bg-blue" aria-labelledby="navbarDropdown">
          <a className="dropdown-item btn-blue text-light" href="/notas2">Periodo 1</a>
          <a className="dropdown-item btn-blue text-light" href="#">Periodo 2</a>
          <a className="dropdown-item btn-blue text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tareas
        </a>
        <div className="dropdown-menu bg-blue" aria-labelledby="navbarDropdown">
          <a className="dropdown-item btn-blue text-light" href="/tareas2">Periodo 1</a>
          <a className="dropdown-item btn-blue text-light" href="#">Periodo 2</a>
          <a className="dropdown-item btn text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link btn text-light" href="/horario2">Horario</a>
      </li>
      <li className="nav-item">
        <a className="nav-link btn text-light" href="/circulares2">Circulares</a>
      </li>
      <li className="nav-item">
        <a className="nav-link btn text-light" href="/foro2">Foro</a>
      </li>
    </ul>
    <span class="navbar-text">
      <a class="navbar-brand" href="#">
        <img src={chat} width="50" height="50" alt="" loading="lazy"/>
      </a>
    </span>
  </div>
</nav>
        </div>
    )
}

export default Menu