import video1 from '../videos/loop.mp4'
import video2 from '../videos/eye-12452.gif'
import logo from '../imgs/affinitiLogo-removebg.png';
import '../stylesheets/banner.css'

function Banner() {
    return (
        <div className="banner">
            {/* <video className="video-background" preload='auto' playsInline loop muted autoPlay>
                <source src={video2} type="video/mp4" />
                Tu navegador no soporta video.
            </video> */}
            <img className="video-background "src={video2} alt="" />
            <div className='logo-container'>
                <img className="logo" src={logo} alt="Affiniti" />
                <p className='text-center'>Brindamos soluciones para su empresa</p>
            </div>
        </div>
    );
}

export default Banner