import React from 'react'
import style from './JavieraHoy.css'
import estudiantado from '../../components/imagenes/estudiantado.jpg'
import estudiantado1 from '../../components/imagenes/estudiantado1.jpg'
import estudiantado2 from '../../components/imagenes/estudiantado2.jpg'
import estudiantado3 from '../../components/imagenes/estudiantado3.jpg'
import estudiantado4 from '../../components/imagenes/estudiantado4.jpg'
import estudiantado5 from '../../components/imagenes/estudiantado5.jpg'
import estudiantado6 from '../../components/imagenes/estudiantado6.jpg'
import estudiantado7 from '../../components/imagenes/estudiantado7.jpg'

const JavieraHoy = () => {
    return (
        <div className='texto'>
            <div className='fecha'>
                <h5 className='titulo'>Hoy</h5>
                <div>
                    <p>En estás fechas estamos empezando un evento de los estudiantes para los estudiantes donde fomentamos el compromiso y los valores. Esperamos que con esto los estudiantes tengan una relación más íntegra unos con otros y logren entender la importancia de mantener una sana convivencia en los espacios de la javiera.</p>
                    <img className='e5' src={estudiantado5}/>
                </div>
            </div>
            <div className='fecha'>
                <h5 className='titulo'>Ayer</h5>
                <p>En estás fechas estamos empezando un evento de los estudiantes para los estudiantes donde fomentamos el compromiso y los valores. Esperamos que con esto los estudiantes tengan una relación más íntegra unos con otros y logren entender la importancia de mantener una sana convivencia en los espacios de la javiera.</p>
            </div>
        </div>
    )
}

export default JavieraHoy