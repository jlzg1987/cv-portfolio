import React from 'react'
import '../styles/varstyles.css'

function Var() {
  return (

    <div className='ContainetVar'>
        <div id='inicio' className='NameInicio'>
          <a href="#aboutMe">
            <h2 className='name'>José Luis Zambrano</h2>
          </a>
            
        </div>
        <div className='MenuBar'>
            <ul className='Menu'>
                <li> <a className='MenuLinks' href='#aboutMe'>Acerca de mi</a> </li>
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