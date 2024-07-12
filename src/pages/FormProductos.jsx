import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import FormNewProductos from "../components/FormNewProductos"


function FormProductos() {
  return (
    <>
      <Helmet>
        <title>Cotizar | Vehicentro</title>
        <meta name="description" content="Términos y Condiciones" />
      </Helmet>
      {/* <NavBarTop /> */}
      <FormNewProductos />
      {/* <BannerContacto /> */}
      {/* <Footer /> */}
    </>
  )
}

export default FormProductos

