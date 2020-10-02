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
  foro
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



import Navbar from './components/Menu/Navbar';
import Menu from './components/Menu/Menu'


function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Menu/>
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

      </Switch>
    </BrowserRouter>

  );
}

export default App;