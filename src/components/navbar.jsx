// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/navbar.css';
import IrASeccion from '../utilities/scrollFunction';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="navbar-nav text-center">
                        <a className="nav-link" onClick={() => IrASeccion('inicio')}>Inicio</a>
                        <a className="nav-link" onClick={() => IrASeccion('nosotros')}>Nosotros</a>
                        <a className="nav-link" onClick={() => IrASeccion('servicios')}>Servicios</a>
                        <a className="nav-link" onClick={() => IrASeccion('contacto')}>Contacto</a>
                    </div>
                </div>
                {/* El enlace "Soporte" sólo aparece en pantallas grandes */}
                <div className='navbar-nav ml-auto'>
                    <a className="nav-link d-none d-lg-block">
                        Soporte
                    </a>
                </div>
                {/* El botón verde con el ícono de engranaje sólo aparece en pantallas pequeñas */}
            </div>
            {/* Botón verde fijo en la esquina inferior derecha para pantallas pequeñas */}
            <div className="fixed-button d-lg-none">
                <a className="custom-button">
                    <i className="fa-solid fa-gear"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navigation;
