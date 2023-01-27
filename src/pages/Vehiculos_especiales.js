import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact"
import BannerContacto from '../components/BannerContacto'
import Footer from '../components/Footer'
import '../stylesIn.css';
import { Helmet } from "react-helmet";
import env from '../config';

let urlMedia = env.url

function Vehiculos_especiales() {
    return (<>
        <Helmet>
            <title>Vehículos Especiales | Vehicentro</title>
            <meta name="description" content="Vehículos Especiales" />
        </Helmet>
        <NavBarTop />
        <PrimeraSeccion />
        <SegundaSeccion />
        <BannerContacto />
        <Footer />
    </>


    )
}


function PrimeraSeccion() {
    return (

        <div className="boxesIniHeader main fondonegro">
            <div className="boxLeftHeader">
                <img className="complete" src={urlMedia+"camion-en-uso/48-ton/uso-3-camion-48-ton.webp"} />
            </div>
            <div className="boxRightHeader inside" >
                <div className="boxLeftHeader complete" >
                    <img className="complete" src={urlMedia+"camion-en-uso/48-ton/uso-3-camion-48-ton.webp"} />
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img className="complete" src={urlMedia+"camion-en-uso/48-ton/uso-3-camion-48-ton.webp"} />
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img className="complete" src={urlMedia+"camion-en-uso/48-ton/uso-3-camion-48-ton.webp"} />
                </div>
            </div>


        </div>
    )
}

function SegundaSeccion() {
    return (
        <div className="boxesIniHeader main fondonegro contacto">
            <div className="boxLeftHeader">
                <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHESPECIALES"  />
            </div>
            <div className="boxRightHeader inside imagenContacto">
                <img className="complete contact" src={urlMedia+"camion-en-uso/48-ton/uso-3-camion-48-ton.webp"} />
            </div>
        </div>
    )
}

export default Vehiculos_especiales