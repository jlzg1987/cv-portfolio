import React, { useState } from 'react'
import '../styles/varstyles.css'

function Var() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (

    <div className='ContainetVar'>
        <div id='inicio' className='NameInicio'>
          <a href="#aboutMe">
            <h2 className='name'>José Luis Zambrano González</h2>
          </a>
            
        </div>
        <div className='MenuBar'>
            <ul className='Menu'>
                <li> <a className='MenuLinks' href='#aboutMe'>Acerca de mí</a> </li>
                <li><a className='MenuLinks' href='#habilidades'>Habilidades</a></li> 
                <li><a className='MenuLinks' href='#PortafolioA'>Portafolio</a></li>
                <li><a className='MenuLinks' href="#telecomunicacionT">Telecomunicaciones</a></li>
                <li><a className='MenuLinks' href='#contacto'>Contacto</a></li>
                
            </ul>
        </div>
        <div className='menuScrunPhone'>
          <button className='menuRalla' onClick={toggleMenu}>
          {isMenuVisible ? <i className='bx bx-menu  Mostrar '></i>: <i className='bx bx-menu Ocultar '></i>}
          
           </button>
        </div>
        <div className={isMenuVisible ? 'visible' : 'hidden'}>
           <ul className='MenuColunna'>
                <li> <a className='MenuLinks' href='#aboutMe'>Acerca de mí</a> </li>
                <li><a className='MenuLinks' href='#habilidades'>Habilidades</a></li> 
                <li><a className='MenuLinks' href='#PortafolioA'>Portafolio</a></li>
                <li><a className='MenuLinks' href="#telecomunicacionT">Telecomunicaciones</a></li>
                <li><a className='MenuLinks' href='#contacto'>Contacto</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Var