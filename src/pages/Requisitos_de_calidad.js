import NavBar from "../NavBar"
import { Helmet } from "react-helmet"
import NavBarTop from "../NavBarTop"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"

function Requisitos_de_calidad() {
    return (
        <>
            <Helmet>
                <title>Requisitos de calidad | Vehicentro</title>
                <meta name="description" content="Requisitos de calidad" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <div className="requisitos">
            <div>
                <h1 className="requisitosUno"><strong>Requisitos de calidad del producto:</strong></h1>
            </div>
            <div className="requisitosDos">
                <ul>
                    <li>
                        <strong>Alta comodidad</strong>, el grado de comodidad de la cabina y el control del ruido definidos significativamente mejores que los camiones de otras marcas, cerca o alcanza los modelos producidos actuales europeos.
                    </li>
                    <li>
                        <strong>Alta fiabilidad</strong>, en la calidad de todo el vehículo, especialmente en el control de la calidad de los detalles y la selección de los componentes se debe garantizar la alta tasa de asistencia del vehículo, se define claramente que el kilometraje de conducción es inferior a 30.000 kilómetros;
                    </li>
                    <li>
                        <strong>Alta seguridad</strong>, se debe cumplir con las normas europeas o llevar a cabo los requisitos de legalizaciónn según las leyes de la región de norma equivalente. Se define claramente que ha aprobado la prueba de confiabilidad y rendimiento de la empresa MAN en Alemania.
                    </li>
                    <li>
                        <strong>Bajo consumo de combustible</strong>, cerca o equivalente al consumo de combustible de los mismos modelos de vehículos en Europa.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Requisitos_de_calidad