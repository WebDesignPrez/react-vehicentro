import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
let bdc
let nombreCamion
let nombreSerie
let camionSerie

function Trabaja_con_nosotros() {
    return (
        <>
            <Helmet>
                <title>Trabaja con Nosotros | Vehicentro</title>
                <meta name="description" content="Trabaja con Nosotros" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (<>
        <div className="boxesIni posRelative trabajanosotros">
            <div className="centrado">
                <img src="./images/trabaja-con-nosotros/trabaja-con-nosotros.webp"  />
            </div>
            <div className="" >
                <FormContact url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            </div>
        </div>
    </>
    )
} 

export default Trabaja_con_nosotros