import React from 'react';
import '../stylesheets/servicios.css';
import servicio1 from '../imgs/servicio1.png';
import servicio2 from '../imgs/servicio2.png';
import servicio3 from '../imgs/servicio3.png';
import servicio4 from '../imgs/servicio4.png';
import servicio5 from '../imgs/servicio5.png';
import servicio6 from '../imgs/servicio6.png';
import servicio7 from '../imgs/servicio7.png';

const servicios = [
    {
        imagen: servicio1,
        titulo: 'Redes de contenido distribuido',
        descripcion: 'Optimiza y protege el contenido frente a ataques de denegación o intrusión de servicios.'
    },
    {
        imagen: servicio2,
        titulo: 'Seguridad de redes',
        descripcion: 'Proteja el perímetro de su red y recursos internos.'
    },
    {
        imagen: servicio3,
        titulo: 'Detección y explotación de vulnerabilidades',
        descripcion: 'Inspeccionar, rastrear y explotar vulnerabilidades que permitan conocer el estado actual de la infraestructura.'
    },
    {
        imagen: servicio4,
        titulo: 'Entrega de contenido',
        descripcion: 'Gestionamos plataformas que permiten balancear sus aplicaciones web generando rendimientos óptimos y estables en sus servicios.'
    },
    {
        imagen: servicio5,
        titulo: 'Consultorías',
        descripcion: 'Asesoramiento profesional con el objetivo de poder solventar problemáticas presentadas a las reales necesidades de nuestros clientes.'
    },
    {
        imagen: servicio6,
        titulo: 'Proyectos',
        descripcion: 'AFFINITI brindará toda su experiencia para llevar a cabo proyectos que permitan completar satisfactoriamente su solución.'
    },
    {
        imagen: servicio7,
        titulo: 'Servicios gestionados',
        descripcion: 'Comprende la gestión avanzada de los dispositivos de red y tecnologías de seguridad. AFFINITI se basa en procesos claros enfocados en la gestión.'
    }
];

function Services() {
    return (
        <div className='color-bg'>
            <div className="d-flex flex-column justify-content-center text-center pt-5" id='hacer'>
                <h2 className='titulo'>Nuestros Servicios</h2>
            </div>
            <div className='wrap my-3'>
                <div className='d-flex servicio-container'>
                    {servicios.map((servicio, index) => (
                        <div className="tarjeta-wrap" key={index}>
                            <div className="tarjeta">
                                <div className="delantera">
                                    <i className="fa-solid fa-repeat icono-repeticion"></i>
                                    <div className="imagen-fondo" style={{ backgroundImage: `url(${servicio.imagen})` }}></div>
                                    <h3 className="titulo-servicio">{servicio.titulo}</h3>
                                </div>
                                <div className="trasera d-flex flex-column justify-content-center text-center">
                                    <h3><b>{servicio.titulo}</b></h3>
                                    <p>{servicio.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;