import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../imgs/affinitiLogo-removebg.png';
import '../stylesheets/navbar.css';
import IrASeccion from '../utilities/scrollFunction'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                {/* <a className="navbar-brand">
                    <img className='logo-img' src={logo} alt="Logo" />
                </a> */}
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
            </div>
        </nav>
    )
}

export default Navigation;