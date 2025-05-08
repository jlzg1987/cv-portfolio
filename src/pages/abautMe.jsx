import React from 'react'
import '../styles/abautMe.css'
import Phone from "../images/jlzg.jpg";

function abautMe() {

    return (
        <>
            <div id='aboutMe' className='container'>
                <h1>Acerca de Mí</h1>

                <div className='fondo'>
                    < img src={Phone} alt="" />
                    <div className='text'>
                        <p>
                            Profesional multifacético con sólida experiencia en telecomunicaciones, administración de redes, desarrollo de software y soporte técnico integral.
                            Presidente de Netcomprf S.A.S., empresa ISP donde lidero proyectos de conectividad, infraestructura de red (WAN, LAN, fibra óptica), enlaces punto a punto y configuración avanzada de equipos MikroTik, Cisco, Ubiquiti y Mimosa.
                            Complemento mi perfil con habilidades en desarrollo de aplicaciones web y móviles, usando tecnologías como React, Node.js y Firebase, orientadas a soluciones prácticas y funcionales.
                            Con experiencia en administración de datacenters, servidores VPS, DNS y consumo de APIs, también poseo conocimientos en energía solar y respaldo eléctrico para sistemas críticos.
                        </p>
                        <h4>¡Estoy listo para ser parte de tu empresa!...</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default abautMe