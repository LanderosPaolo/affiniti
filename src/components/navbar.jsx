import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../imgs/affinitiLogo-removebg.png';
import '../stylesheets/navbar.css';

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
                {/* Justify-content-end para separar el logo del menú */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    {/* text-center, se aprecia en celular o pantallas pequeñas */}
                    <div className="navbar-nav text-center">
                        <a className="nav-link" >Inicio</a>
                        <a className="nav-link" >Nosotros</a>
                        <a className="nav-link" >Servicios</a>
                        <a className="nav-link" >Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;