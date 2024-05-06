import '../stylesheets/nosotros.css'

function Nosotros() {
    return (
        <div className="p-5 nosotros">
            <h2 className="text-center">Quiénes Somos</h2>
            <div className="row ">
                <div className="col">
                    <h3 className='text-center'>Sobre AFFINITI</h3>
                    <p>Es fundada a finales del año 2020, por dos profesionales idealistas y con fuertes ganas de formar una nueva compañía en la cual puedan desarrollar y ejecutar todas cualidades y habilidades, que han forjado durante los años de experiencia en distintas áreas.</p>
                    <p><i>“Hay muchas malas razones para empezar una empresa. Pero solo hay una buena razón y creo que sabes cuál es: para cambiar el mundo”</i> - Phil Libin, Fundador de Evernote.</p>
                </div>
                <div className="col">
                    <div>
                        <h3 className='text-center'>Nuestras Virtudes</h3>
                        <ul>
                            <li><i class="fa-solid fa-square-check"></i>Seriedad y orientacíon al cliente.</li>
                            <li><i class="fa-solid fa-square-check"></i>Permanente capacitacion en distintas áreas de desarrollo de la seguridad de la información</li>
                            <li><i class="fa-solid fa-square-check"></i>Compromiso y actitud positiva frente a cada desafío</li>
                        </ul>
                    </div>
                    <div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Misión
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Mantener objetivos claros en pro de la seguridad de la información de cada uno de nuestros clientes, a través de gestiones, productos y servicios del siguiente nivel que le garantice la tranquilidad de dejar en nuestras manos la continuidad operacional de sus negocios.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Visión
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Como compañía, queremos trascender a través de los años de la mano del reconocimiento y prestigio por los servicios brindados, además de llegar a ser un aporte positivo en lo que respecta a la seguridad de la información a nivel nacional.
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