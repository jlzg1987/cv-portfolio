import React from 'react'
import '../styles/abautMe.css'
import Phone from "../images/jlzg.jpg";

function abautMe() {

    return (
        <>
            <div id='aboutMe' className='container'>
                <h1>Acerca de Me</h1>

                <div className='fondo'>
                    < img src={Phone} alt="" />
                    <div className='text'>
                        <p>
                            Desarrollador de software con más de 2 años de experiencia en el
                            desarrollo de aplicaciones web. Especializado en [tecnologías
                            clave, como JavaScript, React, Node.js, SQL, Python, .net, Asp
                            .net etc.]. Apasionado por crear soluciones eficientes y escalables,
                            con un fuerte enfoque en la experiencia del usuario. Capaz de
                            trabajar tanto en proyectos individuales como en equipos
                            multifuncionales, con un historial comprobado de entrega de
                            proyectos de alta calidad dentro de los plazos establecidos.
                        </p>
                        <h4>¡Estoy listo para ser parte de tu empresa!...</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default abautMe