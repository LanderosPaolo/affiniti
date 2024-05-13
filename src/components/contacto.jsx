import '../stylesheets/contacto.css'
import inicial from '../imgs/logoInicial-removebg-preview.png'

function Contacto() {
    return (
        <div className='principal d-flex justify-content-evenly align-items-center p-5'>
            <div className='tarjeta-contacto d-flex flex-column justify-content-center align-items-center'>
                <div className='imgen-titulo text-center mt-5'>
                    <div className='imagen bg-black'>
                        <img className='ms-1' src={inicial} alt="Logo-Affiniti" />
                    </div>
                    <div className='titulo-tarjeta'>
                        <h3 className='fw-bold'><b>A</b>ffini<b>ti</b></h3>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='mx-3 fw-bold'>Ofreciendo soluciones empresariales desde 2020</p>
                    </div>
                    <div className='redes text-center m-5'>
                        {/* <a href='#' target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                        <a href='#' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        <a href='#' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                        <a href='#' target='_blank'><i className="fa-brands fa-whatsapp"></i></a> */}
                        <a href='#' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className='mensaje'>
                <div>
                    <p className='mensaje-contacto fw-bold'>Envíanos un mensaje</p>
                    <h2 className='titulo-contacto fw-bold'>Ponte en contacto</h2>
                    <p className='subtitulo-contacto fw-bold mb-5'>Te responderemos en breve.</p>
                </div>
                <div className='canales'>
                    <div className='d-flex mb-4'>
                        <div className='icono'>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <p className='mx-2 mt-1'>contacto@affiniti.cl</p>
                    </div>
                    <div className='d-flex'>
                        <div className='icono'>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p className='mx-2'>Guardia Vieja 202 Of 403 4P 403.<br></br>Providencia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;