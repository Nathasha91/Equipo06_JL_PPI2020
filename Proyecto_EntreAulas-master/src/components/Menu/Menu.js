import React from 'react'

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
  <a className="navbar-brand  text-light" href="#">Entre Aulas</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notas
        </a>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
          <a className="dropdown-item text-light" href="#">Periodo 1</a>
          <a className="dropdown-item text-light" href="#">Periodo 2</a>
          <a className="dropdown-item text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle  text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tarea
        </a>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdown">
          <a className="dropdown-item text-light" href="#">Periodo 1</a>
          <a className="dropdown-item text-light" href="#">Periodo 2</a>
          <a className="dropdown-item text-light" href="#">Periodo 3</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Menu