import video1 from '../videos/loop.mp4'
import logo from '../imgs/affinitiLogo-removebg.png';
import '../stylesheets/banner.css'

function Banner() {
    return (
        <div className="banner">
            <video className="video-background" autoPlay loop muted>
                <source src={video1} type="video/mp4" />
                Tu navegador no soporta video.
            </video>
            <div className='logo-container'>
                <img className="logo" src={logo} alt="Affiniti" />
                <p className='text-center'>Brindamos soluciones para su empresa</p>
            </div>
        </div>
    );
}

export default Banner