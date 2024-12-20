import React from "react";
import "../styles/toolbar.css";
function ToolBar() {
    return (
        <>
             <div className="middle">
            <a  href="#inicio" className="  btn btn0"><i class='bx bxs-home' ></i> <span className='tool'>Home</span></a>
            <a href="#aboutMe" className="btn btn1"><i class='bx bxs-user' ></i><span className='tool'>Sobre mí</span></a>
            <a href="#habilidades" className="btn btn2"><i class='bx bx-chip' ></i><span className='tool'>Habilidades</span></a>
            <a href="#PortafolioA" className="btn btn3"><i class='bx bxs-folder-open' ></i><span className='tool'>Portafolio</span></a>
            <a href="#telecomunicacionT" className="btn btn5"> <i class='bx bx-wifi'></i><span className='tool'>Telecomunicaciones</span></a>
            <a href="#contacto" className="btn btn4"><i class='bx bxs-contact'></i><span className='tool'>Contacto</span></a>
           

        </div>
        </>
          );
        }
        
        export default ToolBar;

