import '../stylesheets/footer.css'
import logo from '../imgs/affinitiLogo-removebg.png'

function Footer() {
    return (
        <div className='d-flex flex-row align-items-center justify-content-evenly bg-black text-light'>
            <div className='mt-3 d-flex flex-column align-items-center'>
                <img className='logo-footer' src={logo} alt="Affiniti" />
                <div className='d-flex flex-column'>
                    <p><i className="fa-regular fa-copyright mx-1"></i>Copyrights 2021 Diseñado por AffiniTI Labs</p>
                </div>
            </div>
            <div className='fs-3 d-flex flex-wrap gap-3'>
                <a href='#' target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
                <a href='#' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Footer;