import React from 'react'
import '../styles/telecomuniaciones.css'
import T1 from '../images/t1.png'

function Telecomunicaciones() {

    return (
        <>
            <div id='telecomunicacionT' className='containerRed'>
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
                        <i class='bx bxs-server iconT' ></i>
                        <div className='textT'>
                            <h2 className='tituloT'>Conocimientos en Centros de Datos (Data Centers)</h2>
                            <p className='parraf'>- Diseño y Administración de Data Centers</p>
                            <p className='parraf dx'>- Configuración y Manejo de Equipos</p>
                              <p className='parraf'>- Creación de Servidores</p>
                            <p className='parraf'>- Servidores VPS</p>

                        </div>
                    </div>
                    <div className='red '>
                    <svg className='iconS' id="Layer_1" viewBox="0 0 24 24"  width="40px"
                            height="40px" fill='white'
                            xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.5 18c0-.279-.034-.549-.082-.813l1.53-.882-1.498-2.6-1.543.889c-.413-.353-.886-.632-1.407-.818v-1.776h-3v1.776c-.522.186-.994.464-1.407.818l-1.543-.889-1.498 2.6 1.53.882c-.049.265-.082.535-.082.813s.034.549.082.813l-1.53.882 1.498 2.6 1.543-.889c.413.353.886.632 1.407.818v1.776h3v-1.776c.522-.186.994-.464 1.407-.818l1.543.889 1.498-2.6-1.53-.882c.049-.265.082-.535.082-.813zm-4.5 1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-9.5 1.5c-3.465 0-5.343-1.106-5.5-1.5v-1.499c1.554.659 3.53.999 5.5.999.521 0 1.043-.024 1.558-.071-.035-.305-.058-.614-.058-.929 0-.734.107-1.442.293-2.118-.545.068-1.131.118-1.793.118-3.465 0-5.343-1.106-5.5-1.5v-1.499c1.554.659 3.53.999 5.5.999.916 0 1.834-.073 2.711-.217 1.245-2 3.343-3.408 5.789-3.713v-5.57c0-2.954-4.276-4.5-8.5-4.5s-8.5 1.546-8.5 4.5v15c0 2.954 4.276 4.5 8.5 4.5 1.291 0 2.586-.146 3.763-.431-.749-.771-1.339-1.694-1.73-2.716-.605.088-1.274.147-2.033.147zm0-18c3.419 0 5.286 1.075 5.485 1.482-.223.456-2.085 1.518-5.485 1.518-3.419 0-5.286-1.075-5.485-1.482.223-.456 2.085-1.518 5.485-1.518zm-5.5 5.001c1.554.659 3.53.999 5.5.999s3.947-.341 5.501-1l.002 1.458c-.173.443-2.049 1.542-5.503 1.542s-5.343-1.106-5.5-1.5z"/></svg>
                    <div className='textT'>
                            <h2 className='tituloT'>Conocimientos en Tecnologías de Consumo de API y Conexiones Remotas</h2>
                            <p className='parraf'>- Consumo de API: MikroTik, Ubiquit, Mimosa, Cisco</p>
                            <p className='parraf dx'>- Conexiones Remotas a Data Servers</p>
                              <p className='parraf'>- Casos de Uso Específicos:</p>
                     </div>
                    </div>
                    <div className='red '>
                    <i class='bx bx-network-chart iconT'></i>
                    <div className='textT'>
                            <h2 className='tituloT'>Conocimientos en Redes Físicas y Estructuradas</h2>
                            <p className='parraf'>- Tendido y Conexión de Redes de Fibra Óptica                            </p>
                            <p className='parraf dx'>- Conocimiento de Redes Locales e Infraestructura</p>
                              <p className='parraf'>- Configuración y Administración</p>

                    </div>
                    </div>
                    

                </div>


            </div>

        </>
    )
}
export default Telecomunicaciones;