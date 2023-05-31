import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"


function PoliticaPrivacidad() {
    return (
        <>
            <Helmet>
                <title>Política | Vehicentro</title>
                <meta name="description" content="Politica de uso de datos" />
            </Helmet>
            <NavBarTop />
            <div className="privaty">
                <div className="texto">
                    <h1>Política de uso de datos</h1>
                    <br/>
                    <br/>
                    <p>Mediante esta declaración, expreso mi consentimiento voluntario e informado y autorizó a Vehicentro y sus marcas, junto con sus empresas filiales y relacionadas en general, para el almacenamiento, acceso, uso y verificación de los datos personales que he proporcionado de manera voluntaria. Esta autorización abarca el uso de dichos datos para fines estadísticos, comerciales, informativos, seguimiento de productos, marketing, notificaciones y contacto con el cliente en campañas de seguridad, satisfacción, marketing relacional y otros similares, así como para la oferta de planes comerciales y financieros destinados a la adquisición de productos y/o servicios de las marcas comercializadas por Vehicentro. Se garantiza el cumplimiento de la privacidad y confidencialidad establecidas por las leyes ecuatorianas. Declaro que la información proporcionada es clara, suficiente y veraz.
</p>
                    </div>
            </div>
            <BannerContacto />
            <Footer />
        </>
    )
}

export default PoliticaPrivacidad

