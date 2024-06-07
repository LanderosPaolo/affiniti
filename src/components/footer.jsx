// Importamos el logo y lo asignamos a su respectiva variable
import logo from '../imgs/affinitiLogo-removebg.png'
// Importamos su respectiva hoja de estilo
import '../stylesheets/footer.css'

function Footer() {
    return (
        <div className='d-flex flex-row align-items-center justify-content-evenly bg-black text-light'>
            <div className='mt-3 d-flex flex-column align-items-center'>
                <img className='logo-footer' src={logo} alt="Affiniti" />
                <div className='d-flex flex-column'>
                    <p><i className="fa-regular fa-copyright mx-1"></i>Copyrights 2021 Diseñado por AffiniTI Labs</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;