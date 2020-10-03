import React from 'react'
import chat from '../imagenes/chat.png'
import burguer from '../imagenes/burguer.png'

const Menu = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
  <a className="navbar-brand text-light" href="/javieraHoy"><h3>Entre Aulas</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span><img src={burguer} width="50" height="50"/></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notas
        </a>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
          <a className="dropdown-item btn-warning text-light" href="/notas">Periodo 1</a>
          <a className="dropdown-item btn-warning text-light" href="#">Periodo 2</a>
          <a className="dropdown-item btn-warning text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tareas
        </a>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
          <a className="dropdown-item btn-warning text-light" href="/tareas">Periodo 1</a>
          <a className="dropdown-item btn-warning text-light" href="#">Periodo 2</a>
          <a className="dropdown-item btn text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/horario">Horario</a>
      </li>
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/circulares">Circulares</a>
      </li>
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/foro">Foro</a>
      </li>
    </ul>
    <span class="navbar-text">
      <a class="navbar-brand" href="/join">
        <img src={chat} width="50" height="50" alt="" loading="lazy"/>
      </a>
    </span>
  </div>
</nav>
        </div>
    )
}

export default Menu