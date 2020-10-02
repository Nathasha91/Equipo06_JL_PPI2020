import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  
} from 'react-router-dom'
import {
  login,
  matriculas,
  tareas,
  tareasHechas,
  tareasPendientes,
  calificaciones,
  circulares,
  horario,
  horarioProfesores,
  javieraHoy,
  notas,
  observaciones,
  foro,



  login2,
  matriculas2,
  tareas2,
  tareasHechas2,
  tareasPendientes2,
  calificaciones2,
  circulares2,
  horario2,
  horarioProfesores2,
  javieraHoy2,
  notas2,
  observaciones2,
  foro2
} from './config/routes'
import InicioSesion from './pages/InicioSesion/InicioSesion'
import Matriculas from './pages/Matrículas/Matrículas'
import Tareas from './pages/Tarea/Tareas'
import TareasH from './pages/Tarea/TareasH'
import TareasP from './pages/Tarea/TareasP'
import Calificaciones from './pages/Calificaciones/Calificaciones'
import Circulares from './pages/Circulares/CircularesOp'
import Horario from './pages/Horario/Horario'
import HorarioP from './pages/Horario/HorarioP'
import JavieraHoy from './pages/JavieraHoy/JavieraHoy'
import Notas from './pages/Notas/Notas'
import Observaciones from './pages/Observaciones/Observaciones'
import Foro from './pages/Foro/Foro'

import Navbar from './componentsTwo/Menu/Navbar';
import Menu from './componentsTwo/Menu/Menu'

import InicioSesion2 from './pagesTwo/InicioSesion/InicioSesion'
import Matriculas2 from './pagesTwo/Matrículas/Matrículas'
import Tareas2 from './pagesTwo/Tarea/Tareas'
import TareasH2 from './pagesTwo/Tarea/TareasH'
import TareasP2 from './pagesTwo/Tarea/TareasP'
import Calificaciones2 from './pagesTwo/Calificaciones/Calificaciones'
import Circulares2 from './pagesTwo/Circulares/CircularesOp'
import Horario2 from './pagesTwo/Horario/Horario'
import HorarioP2 from './pagesTwo/Horario/HorarioP'
import JavieraHoy2 from './pagesTwo/JavieraHoy/JavieraHoy'
import Notas2 from './pagesTwo/Notas/Notas'
import Observaciones2 from './pagesTwo/Observaciones/Observaciones'
import Foro2 from './pagesTwo/Foro/Foro'

import Menu2 from './componentsTwo/Menu/Menu'


function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Menu2/>
      <Switch>
        <Route 
         path={'/'} exact>
           <InicioSesion />
        </Route>

        <Route 
         path={matriculas()} exact>
           <Matriculas />
        </Route>

        <Route 
         path={login()} exact>
           <InicioSesion />
        </Route>

        <Route 
         path={tareas()} exact>
           <Tareas />
        </Route>

        <Route 
         path={tareasHechas()} exact>
           <TareasH />
        </Route>

        <Route 
         path={tareasPendientes()} exact>
           <TareasP />
        </Route>

        <Route 
         path={calificaciones()} exact>
           <Calificaciones />
        </Route>

        <Route 
         path={circulares()} exact>
           <Circulares />
        </Route>

        <Route 
         path={horario()} exact>
           <Horario />
        </Route>

        <Route 
         path={horarioProfesores()} exact>
           <HorarioP />
        </Route>

        <Route 
         path={javieraHoy()} exact>
           <JavieraHoy />
        </Route>

        <Route 
         path={notas()} exact>
           <Notas />
        </Route>

        <Route 
         path={observaciones()} exact>
           <Observaciones />
        </Route>

        <Route 
         path={foro()} exact>
           <Foro />
        </Route>





        <Route 
         path={matriculas2()} exact>
           <Matriculas2 />
        </Route>

        <Route 
         path={login2()} exact>
           <InicioSesion2 />
        </Route>

        <Route 
         path={tareas2()} exact>
           <Tareas2 />
        </Route>

        <Route 
         path={tareasHechas2()} exact>
           <TareasH2 />
        </Route>

        <Route 
         path={tareasPendientes2()} exact>
           <TareasP2 />
        </Route>

        <Route 
         path={calificaciones2()} exact>
           <Calificaciones2 />
        </Route>

        <Route 
         path={circulares2()} exact>
           <Circulares2 />
        </Route>

        <Route 
         path={horario2()} exact>
           <Horario2 />
        </Route>

        <Route 
         path={horarioProfesores2()} exact>
           <HorarioP2 />
        </Route>

        <Route 
         path={javieraHoy2()} exact>
           <JavieraHoy2 />
        </Route>

        <Route 
         path={notas2()} exact>
           <Notas2 />
        </Route>

        <Route 
         path={observaciones2()} exact>
           <Observaciones2 />
        </Route>

        <Route 
         path={foro2()} exact>
           <Foro2 />
        </Route>


      </Switch>
    </BrowserRouter>

  );
}

export default App;