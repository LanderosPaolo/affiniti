// Importamos su respectiva hoja de estilo
import '../stylesheets/nosotros.css'

function Nosotros() {
    return (
        <div className="p-5 nosotros" id='nosotros'>
            <h2 className="text-center">¿Quiénes Somos?</h2>
            <div className="row text-light">
                <div className="col-md-6">
                    <h3 className='text-center mt-4'>Sobre AFFINITI</h3>
                    <p className='text-center mt-4'>Affiniti se fundó con la visión de ingenieros con una vasta experiencia en seguridad informática y de redes.
                        Esta sólida base nos capacita para garantizar la excelencia en nuestros servicios y cultivar la confianza de nuestros clientes
                    </p>
                </div>
                <div className="col">
                    <div>
                        <h3 className='text-center mt-4'>Nuestras Virtudes</h3>
                        <ul className='mt-4'>
                            <li><i className="fa-solid fa-square-check mx-1"></i>Compromiso y enfoque centrado en el cliente.</li>
                            <li><i className="fa-solid fa-square-check mx-1"></i>Formación continua en diversas áreas del desarrollo de la seguridad de la información</li>
                            <li><i className="fa-solid fa-square-check mx-1"></i>Dedicación y actitud positiva ante cada desafío</li>
                        </ul>
                    </div>
                    <div className='mt-2'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Misión
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fw-medium text-light">
                                        Nuestra misión es garantizar la seguridad de la información de nuestros clientes mediante soluciones de vanguardia que les brinden tranquilidad en la continuidad de sus negocios.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Visión
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body fw-medium text-light">
                                    Como empresa, aspiramos a trascender en el tiempo gracias al reconocimiento y prestigio que obtenemos por nuestros servicios. Nos esforzamos por convertirnos en un contribuyente destacado en la mejora de la seguridad de la información a nivel nacional.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;