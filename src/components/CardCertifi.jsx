
import Utelvt from '../images/utelvt.jpeg'
import TechU from '../images/tech.PNG'
import Academlo from '../images/academlo.png'
import React, { useState, useEffect } from "react";
import '../styles/cardcertificado.css'

function CardCertifi() {
  const images = [
    Utelvt,TechU,Academlo
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambia cada 15 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);
  return (
    <div style={styles.carouselContainer}>
       <h3 className='titulo'>Mis Estudios</h3>
    <img className='imgcard'
      src={images[currentIndex]}
      alt={`Imagen ${currentIndex + 1}`}
      style={styles.image}
    />
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
    width: "250px",
    height: "400px",
    margin: "auto",
    overflow: "hidden",
  },
  image: {
    
    width: "85%",
    height: "70%",
    objectFit: "cover",
    borderRadius:"20%",
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