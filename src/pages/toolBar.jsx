import React from "react";
import "../styles/toolbar.css";
function ToolBar() {
    return (
        <>
             <div className="middle">
            <a href="#inicio" className="btn btn0"><i class='bx bxs-home' ></i></a>
            <a href="#aboutMe" className="btn btn1"><i class='bx bxs-user' ></i></a>
            <a href="#habilidades" className="btn btn2"><i class='bx bx-chip' ></i></a>
            <a href="#PortafolioA" className="btn btn3"><i class='bx bxs-folder-open' ></i></a>
            <a href="#contacto" className="btn btn4"><i class='bx bxs-contact'></i></a>
           

        </div>
        </>
          );
        }
        
        export default ToolBar;

