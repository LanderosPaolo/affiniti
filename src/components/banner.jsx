import { useState, useEffect } from 'react'
import video1 from '../videos/loop.mp4'
import logo from '../imgs/affinitiLogo-removebg.png';
import '../stylesheets/banner.css'

function Banner() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
    })

    return (
        <div className="banner">
            {videoLoaded ? (
                <video className="video-background" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Tu navegador no soporta video.
                </video>
            ) : null}
            <div className='logo-container'>
                <img className="logo" src={logo} alt="Affiniti" />
                {/* <p className='text-center'>Brindamos soluciones para su empresa</p> */}
                <p className='text-center'>Prueba!!!</p>
            </div>
        </div>
    );
}

export default Banner