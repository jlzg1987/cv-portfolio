import React from "react";
import "../styles/piepagina.css";
function Piepagina() {
    return (
        <>
            <div className="piepagina">
                <div className="social2">
                    <div > <a href="https://www.linkedin.com/in/jlzg/" target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}>
                            <i className='icoC bx bxl-linkedin ' style={{ fontSize: "48px" }}></i></a>

                        <a href="https://github.com/jlzg1987" target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}>
                            <i className='ico bx bxl-github' style={{ fontSize: "48px" }}></i>

                        </a>
                        <a href="https://www.facebook.com/althair1987?locale=es_LA" style={{ textDecoration: "none", color: "inherit" }}>
                        <i className='bx bxl-facebook-square icoC' style={{ fontSize: "48px" }}></i>
                        </a>
                        <a href="https://app.netlify.com/teams/jlzg1987/sites"style={{ textDecoration: "none", color: "inherit" }}>
                        <i className='bx bxl-netlify ico' style={{ fontSize: "48px" }}></i>
                        </a>
                        <a href="https://wa.me/593990445117?text=Hola,%20quiero%20programar%20una%20Entrvista%20de%20Trabajo." target="_blank"  rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                        <i className='bx bxl-whatsapp ico' style={{ fontSize: "48px" }}></i>
                        </a>
                    </div>
                </div>
                <h3 className="text1">Hecho con ❤ por José Luis Zambrano González </h3>
            </div>
        </>
    );
}

export default Piepagina;
