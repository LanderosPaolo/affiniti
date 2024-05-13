import '../stylesheets/contacto.css'
import inicial from '../imgs/logoInicial-removebg-preview.png'

function Contacto() {
    return (
        <div className='principal d-flex justify-content-evenly p-5'>
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
            <div className='tarjeta-contacto'>
                <div className='imgen-titulo text-center'>
                    <div className='imagen bg-black'>
                        <img src={inicial} alt="" />
                    </div>
                    <div className='titulo-tarjeta'>
                        <h3><b>A</b>ffini<b>ti</b></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;