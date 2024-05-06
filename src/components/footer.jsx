import '../stylesheets/footer.css'
import logo from '../imgs/affinitiLogo-removebg.png'

function Footer() {
    return (
        <div className='d-flex flex-row align-items-center justify-content-evenly bg-black text-light'>
            <div className='mt-3'>
                <img className='logo-footer' src={logo} alt="Affiniti" />
                <div className='d-flex flex-column text-center'>
                    <i className="fa-regular fa-copyright"></i>
                    <p>2024</p>
                </div>
            </div>
            <div className='fs-3 d-flex gap-3'>
                <a href='#' target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    )
}

export default Footer;