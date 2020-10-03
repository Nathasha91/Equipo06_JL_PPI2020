import React from 'react'
import matriculas from './Matrículas.css'
import Pdf from '../../components/imagenes/pdf.png'
import Libro from '../../components/imagenes/Libro.png'
import foto from '../../components/imagenes/Inscriciones_Javiera_20213.jpeg'

const Matrículas = () => {

  return (

    <div className="rootA">
      <div className="container-tituloA">
        <h2 className="text-coral"> I.E JAVIERA LONDOÑO SOLICITUD DE CUPOS PARA EL AÑO 2021</h2>
        <p>Para IE Javiera Londoño es muy importante que nos seleccione como la institución educativa para promover el futuro de sus niñ@s. la Comunidad Agradece de antemano esa preferencia.</p>
      </div>

      <div className="container1">
        <div className="subcontainer col-6a col-6">
          <h2 className="text-warning">SOLICITUD DE CUPOS 2021</h2>
          <h4 className="text-coral">Apreciados padres de familia, estudiantes y docentes:</h4>
          <p className="parrafo"> La Institución Educativa Javiera Londoño, informa a partir del lunes 7 de septiembre comienzan las inscripciones de solicitud de cupos de 2021 con el fin de garantizar el derecho a la educación, ha dispuesto de canales de atención no presencial para solicitud de cupo escolar 2021.
          Recuerde que la asignación de cupo escolar no tiene ningún costo y se realiza de acuerdo con la disponibilidad del colegio. Para diligenciar el formulario, es necesario contar con un correo electrónico y un numero de contacto.
          Una vez el padre de familia o acudiente diligencie el formulario, la Gestión Matrículas de la Institución se comunicará al número de contacto o al correo electrónico diligenciado para informarle sobre la formalización de matrícula e inicio de clases.
        </p>
        </div>
        <div className="subcontainer2 col-6a col-6">
          <img className="imagea" src={foto} />
        </div>
      </div>
      <div className="container2 col-12 text-center">
        <a className="pdfdescarga col-4 btn btn-coral text-light" target="_blank"
          href="https://www.javiera.edu.co/version_1/documentos/Instructivo%20Diligenciamiento%20Formulario%20Solicitud%20de%20Cupo%202021.pdf"
        >Descargar y leer instructivo de solicitud de cupos </a>

        <div className="row cupos text-center">
          <div className="col-4a col-4">
            <a className="btn btn-warning text-light" target="_blank" alt="No hay cupos">No hay Cupos para Preescolar</a><br></br>
            <a href="https://forms.gle/xhh4hSiRnbk4Tnbi9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 1</a><br></br>
            <a href="https://forms.gle/yK3ZgTq9jcru8KRN9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 2</a><br></br>
            <a href="https://forms.gle/BANbrQXyV97FgQXJ8" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 3</a><br></br>
          </div>


          <div className="col-4a col-4">
            <a href="https://forms.gle/YXxFyXegDcyJuc536" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 4</a><br></br>
            <a className="btn btn-warning text-light" target="_blank">No Hay Cupos para Grado 5</a><br></br>

            <a href="https://forms.gle/aQXyLB4uHRM4Y8MR9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 6</a><br></br>
            <a href="https://forms.gle/9kFZtXPAARBnsRrf9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 7</a><br></br>
          </div>

          <div className="col-4a col-4">
            <a href="https://forms.gle/xhh4hSiRnbk4Tnbi9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 8</a><br></br>
            <a href="https://forms.gle/xhh4hSiRnbk4Tnbi9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 9</a><br></br>
            <a href="https://forms.gle/yK3ZgTq9jcru8KRN9" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 10</a><br></br>
            <a href="https://forms.gle/BANbrQXyV97FgQXJ8" className="btn btn-light btn-flat" target="_blank">Cupos para Grado 11</a><br></br>
          </div>
        </div>
      </div>

      <div className="container3 col-12 container justify-content-center preguntas-modal">
        <div className="Admi text-center col-4a col-3">
          <img className="imagen2" src={Libro} />
          <div className="donate-info">
            <h5>Admisiones y Matrículas</h5>
            <span className="time d-block mb-3"></span>

            <div className="ah">
              <div class="amount"><a className="btn btn-warning text-light buttonA" href="docs/ADMISIONES/ADMISIONES Y MATRÍCULAS.pdf">¡Descargar!</a></div>
            </div>
          </div>
        </div>



        <div className="Admi text-center col-4a col-3">
          <img className="imagen2" src={Libro} />
          <div className="donate-info">
            <h5>Procesos y Admisiones</h5>
            <span class="time d-block mb-3"></span>

            <div className="ah">
              <div class="amount"><a className="btn btn-warning text-light buttonA" href="docs/ADMISIONES/PROCESOS_ADMISIONES_MATRICULAS.pdf">¡Descargar!</a></div>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}
export default Matrículas