import React from 'react'
import chat from '../imagenes/chat.png'
import burguer from '../imagenes/burguer.png'
import style from './Navbar.css'

const Menu = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-info bg-blue">
  <a className="navbar-brand text-light" href="/javieraHoy3"><h3>Entre Aulas</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span><img src={burguer} width="50" height="50"/></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/horario3">Horarios</a>
      </li>
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/circulares3">Circulares</a>
      </li>
      <li className="nav-item">
        <a className="nav-padding btn text-light" href="/foro3">Foro</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Menu