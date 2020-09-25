import React from 'react'
import style from './Navbar.css'
import burguer from '../imagenes/burguer.png'
import chat from '../imagenes/chat.png'
import logo from '../imagenes/escudo.png'

const Navbar = () => {
    return (
        <div>
            <div className='white'>
                <img className='img1' src={logo}/>
                <div  className='txt'>
                    <p className='p1'>Institución Educativa</p>
                    <p className='p2'>Javiera Londoño</p>
                </div>
            </div>
            <div className='yellow'>
                <img className='img2' src={burguer}/>
                <img className='img3' src={chat}/>
            </div> 
        </div>
    )
}

export default Navbar