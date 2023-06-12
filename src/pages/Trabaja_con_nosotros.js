import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import FormContact from "../components/formNosotros";
import FormNosotros from "../components/formNosotros";
import env from '../config';
let urlMedia = env.url

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
                <img src={urlMedia+"trabaja-con-nosotros/trabaja-con-nosotros.webp"}  />
            </div>
            <div className="" >
                <FormNosotros />
            </div>
        </div>
    </>
    )
} 

export default Trabaja_con_nosotros