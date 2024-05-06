import '../stylesheets/servicios.css'
import servicio1 from '../imgs/servicio1.png'
import servicio2 from '../imgs/servicio2.png'
import servicio3 from '../imgs/servicio3.png'
import servicio4 from '../imgs/servicio4.png'

function Services() {
    return (
        <div className='color-bg'>
            <div className="h2-container text-center pt-5" id='hacer'>
                <h2>Nuestros Servicios</h2>
            </div>
            <div className='wrap my-3'>
                <div className='servicio-container'>
                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="delantera">
                                <i className="fa-solid fa-repeat icono-repeticion"></i>
                                <img src={servicio1} alt="Redes de contenidos distribuido" />
                                <h3>Redes de contenido distribuido</h3>
                            </div>
                            <div className="trasera">
                                <h3><b>Redes de contenido distribuido</b></h3>
                                <p>Optimiza y protege el contenido frente a ataques de denegación o intrusión de servicios.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="delantera">
                                <i className="fa-solid fa-repeat icono-repeticion"></i>
                                <img src={servicio2} alt="Seguridad de redes" />
                                <h3>Seguridad de redes</h3>
                            </div>
                            <div className="trasera">
                                <h3><b>Seguridad de redes</b></h3>
                                <p>Proteja el perimetro de su red y recursos internos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="delantera">
                                <i className="fa-solid fa-repeat icono-repeticion"></i>
                                <img src={servicio3} alt="Detección y explotación de vulnerabilidades" />
                                <h3>Detección y explotación de vulnerabilidades</h3>
                            </div>
                            <div className="trasera">
                                <h3><b>Detección y explotación de vulnerabilidades</b></h3>
                                <p>Inspeccionar, rastrear y explotar vulnerabilidades que permitan conocer el estado actual de la infraestructura.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="delantera">
                                <i className="fa-solid fa-repeat icono-repeticion"></i>
                                <img src={servicio4} alt="Entrega dee contenido" />
                                <h3>Entrega de contenido</h3>
                            </div>
                            <div className="trasera">
                                <h3 className='mb-4'><b>Entrega de contenido</b></h3>
                                <p>Gestionamos plataformas que permiten balancear sus aplicaciones web generando rendimientos óptimos y estables en sus servicios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;