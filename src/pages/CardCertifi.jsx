
import Utelvt from '../images/utelvt.jpeg'
import TechU from '../images/tech.png'
import Academlo from '../images/academlo.png'
import React, { useState, useEffect } from "react";
import '../styles/cardcertificado.css'

function CardCertifi() {
  const images = [{
    "imgA": Utelvt,
    "titulo": "Ingeneria en Sistema",
    "uni": "Universidad Tecnica Luis Vargas Torres"
  }
    , {
    "imgA": TechU,
    "titulo": "Maestria Ingeneria en Telecomunicaciones",
    "uni": "Universidad Tecnoligica TECH"
  }, {
    "imgA": Academlo,
    "titulo": "Developer FullStack",
    "uni": "Academia Academlo"
  }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Cambia cada 8 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);
  return (
    <div className='skill' style={styles.carouselContainer}>
      <h3 className='titulo'>Mis Estudios</h3>
      <img className='imgcard'
        src={images[currentIndex].imgA}
        alt={`Imagen ${currentIndex + 1}`}
        style={styles.image}
      />
      <span className='univ'>{images[currentIndex].uni}</span>
      <span className='title'>{images[currentIndex].titulo}</span>
      <div style={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: index === currentIndex ? "blue" : "gray",
            }}
          >


          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  carouselContainer: {
    position: "relative",
    width: "300px",
    height: "450px",
    margin: "auto",
    overflow: "hidden",
  },

  image: {
    margin: "0",
    width: "85%",
    height: "70%",
    objectFit: "cover",

    marginBottom: "10px",
    padding: "5px",
    borderRadius: "20%",
    border: "3px solid chocolate",
    boxShadow: "5px 5px 15px chocolate",

  },


  indicators: {
    position: "absolute",
    bottom: "10px",
    left: "45%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",

  },

  indicator: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "gray",
    cursor: "pointer",
  },
};
export default CardCertifi;