import Ecommer1 from '../images/1.PNG'
import Ecommer2 from '../images/2.PNG'
import Pokemon from '../images/3.PNG'
import Lista from '../images/4.PNG'
import RickMorte from '../images/5.PNG'
import Clima from '../images/6.PNG'
import '../styles/CardPortafolio.css'

function cardPortafolio() {
    const db = [{
        "id":1,
        "imgA": Ecommer1,
        "titulo": "E-commer para la Academlo",
        "detalle": "Se programó solo con fundamento de html, css y js.",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    },
    {
        "id":2,
        "imgA": Ecommer2,
        "titulo": "E-commer para tienda de Electrodomesticos",
        "detalle": "Se programó usando VUE,js, React, se consumio una API de Electrodomestico y se uso Redux",
        "url": "https://profound-choux-6e17ee.netlify.app"
    },
    {
        "id":3,
        "imgA": Pokemon,
        "titulo": "Pokedex",
        "detalle": "Se programó React, css y js. usando VUE.js, se consumio una API de Electrodomestico y se uso Redux",
        "url": "https://teal-hotteok-d40845.netlify.app"
    },
    {
        "id":4,
        "imgA": Lista,
        "titulo": "Ingreso de Datos A una API",
        "detalle": "Se programó en React y Node js Consumo de API ",
        "url": "https://comfy-sunflower-8982cf.netlify.app"
    },
    {
        "id":5,
        "imgA": RickMorte,
        "titulo": "Rick and Morty",
        "detalle": "Se programó en React , VUE.js consum de API de Rick and Mrty",
        "url": "https://animated-croissant-2b0037.netlify.app"
    },
    {
        "id":6,
        "imgA": Clima,
        "titulo": "Clima ",
        "detalle": "Se programó solo con fundamento de html, css y js. y se consumio un API de Clima",
        "url": "https://chimerical-sawine-a67760.netlify.app"
    }
    ];

    return (
        <>
            <div className='card-container'>
                {db.map((item, index) => (
                    <div key={index} className='card'>
                        <img src={item.imgA} alt={item.titulo} className='card-image' />
                        <h3 className='card-title'>{item.titulo}</h3>
                        <p className='card-detail'>{item.detalle}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className='card-link'>
                            Ver proyecto
                        </a>
                    </div>
                ))}
            </div>
        </>

    );
}

export default cardPortafolio;