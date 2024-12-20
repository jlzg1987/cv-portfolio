import React from 'react'
import '../styles/telecomuniaciones.css'

function Telecomunicaciones() {

    return (
        <>
            <div className='containerRed'>
                <h1>Telecomunicaciones</h1>
                <div className='telec'>
                    <div className='red '>
                        <i class='bx bx-wifi iconT'></i>
                        <div className='textT'>
                          <h2 className='tituloT'>Redes Inalambricas</h2>  
                          <p className='parraf'>- Construcción de Estructuras para Torres de Telecomunicaciones</p>
                          <p className='parraf'>- Diseño y Construcción de Redes Inalambricas</p>
                          <p className='parraf'>- Instalación de Antenas y Sistemas de Transmisión</p>
       
                        </div>
                        
                        
                    </div>
                    <div className='red '>
                        <i class='bx bxs-server' ></i>
                    </div>
                    <div className='red '>
                        <i class='bx bxs-server' ></i>
                    </div>
                    <div className='red '>
                        <i class='bx bxs-server' ></i>
                    </div>
                    <div className='red '>
                        <i class='bx bxs-server' ></i>
                    </div>

                </div>


            </div>

        </>
    )
}
export default Telecomunicaciones;