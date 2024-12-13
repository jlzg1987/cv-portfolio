import Ecommer1 from '../images/1.png'
import Ecommer2 from '../images/2.PNG'
import Pokemon from '../images/3.png'
import Lista from '../images/4.png'
import React, { useState, useEffect } from "react";
import '../styles/CardPortafolio.css'

function CardPortafolio() {
    const images = [{
        "imgA": Ecommer1,
        "titulo": "E-commer para la Academlo",
        "detalle": "Se programó solo con fundamento de html, css y js.",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    },
    {
        "imgA": Ecommer2,
        "titulo": "E-commer para tienda de Electrodomesticos",
        "detalle": "Se programó usando VUE,js, React, se consumio una API de Electrodomestico y se uso Redux",
        "url": "https://profound-choux-6e17ee.netlify.app"
    },
    {
        "imgA": Pokemon,
        "titulo": "Pokedex",
        "detalle": "Se programó React, css y js. usando VUE.js, se consumio una API de Electrodomestico y se uso Redux",
        "url": "https://teal-hotteok-d40845.netlify.app"
    },
    {
        "imgA": Lista,
        "titulo": "Ingreso de Datos A una API",
        "detalle": "Se programó en React s",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    },
    {
        "imgA": Ecommer1,
        "titulo": "E-commer para la Academlo",
        "detalle": "Se programó solo con fundamento de html, css y js.",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    },
    {
        "imgA": Ecommer1,
        "titulo": "E-commer para la Academlo",
        "detalle": "Se programó solo con fundamento de html, css y js.",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Cambia cada 15 segundos
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
        width: "250px",
        height: "400px",
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
export default CardPortafolio;