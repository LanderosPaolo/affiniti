// Importamos el logo y el video y lo asignamos a sus respectivas variables
import video1 from '../videos/dots.gif'
import logo from '../imgs/affinitiLogo-removebg.png';
// Importamos la hoja de estilo para banner.jsx
import '../stylesheets/banner.css'

function Banner() {
    return (
        <div className="banner" id='inicio'>
            <img className="video-background " src={video1} alt="" />
            <div className='logo-container'>
                <img className="logo" src={logo} alt="Affiniti" />
                <p className='text-center'>Brindamos soluciones: Protegemos Su Mundo Digital</p>
            </div>
        </div>
    );
}

export default Banner;