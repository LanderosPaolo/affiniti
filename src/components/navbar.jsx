import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/navbar.css';
import IrASeccion from '../utilities/scrollFunction';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <a href="https://servicios.affiniti.cl/" target='_blank' rel='noopener noreferrer'>
                    <button className={`custom-button ${scrolled ? 'scrolled' : ''}`}>
                        {scrolled ? <i className="fa-solid fa-gear"></i> : 'Soporte técnico'}
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navigation;
