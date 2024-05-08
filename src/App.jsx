import Navigation from "./components/navbar";
import Servicios from "./components/servicios";
import Nosotros from "./components/nosotros";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Contacto from "./components/contacto";

function App() {

  return (
    <>
      <Navigation />
      <Banner />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
