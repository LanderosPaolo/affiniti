import '../stylesheets/contacto.css'

function Contacto() {
    return (
        <div className="container d-flex justify-content-around box">
            <div>
                <h5>Enviar mensaje</h5>
                <h2 className="fw-bold">Contáctanos</h2>
                <p className="fw-bold">Responderemos a la brevedad</p>
            </div>
            <div>
                <div className="d-flex">
                    <div>
                        <i className="fa-regular fa-envelope mx-2"></i>
                    </div>
                    <p>contacto@affiniti.cl</p>
                </div>
                <div className="d-flex">
                    <div>
                        <i className="fa-solid fa-location-dot mx-2"></i>
                    </div>
                    <p>Guardia Vieja 202 Of 403 4P 403.<br></br>Providencia</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;