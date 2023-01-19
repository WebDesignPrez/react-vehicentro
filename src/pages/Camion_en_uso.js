import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact"
import BannerContacto from '../components/BannerContacto'
import Footer from '../components/Footer'
import '../stylesIn.css';
import { useParams } from "react-router"
import { Helmet } from "react-helmet";

let bdc
let imagen 
let nombreCamion
let nombreSerie
let camionSerie

function Camion_en_uso() {




    switch ((useParams("id").id)) {

        case "camion-de-48-toneladas":
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHUSO"
            imagen = ["../images/camion-en-uso/48-ton/uso-3-camion-48-ton.webp", "../images/camion-en-uso/48-ton/uso-4-camion-48-ton.webp", "../images/camion-en-uso/48-ton/uso-1-camion-48-ton.webp", "../images/camion-en-uso/48-ton/uso-2-camion-48-ton.webp", "../images/camion-en-uso/48-ton/uso-5-camion-48-ton.webp"]
            nombreCamion = "Camion de 48 toneladas | C7H-540"
            camionSerie = ""
            nombreSerie = "Serie C7H"
            break;

        default:
            break;
    }



    return <>
        <Helmet>
            <title>Camión en uso: {camionSerie} | Vehicentro</title>
            <meta name="description" content={nombreCamion} />
        </Helmet>
        <NavBarTop />
        <PrimeraSeccion />
        <SegundaSeccion />
        <BannerContacto />
        <Footer />

    </>


}





function PrimeraSeccion() {
    return (

        <div className="boxesIniHeader main fondonegro">
            <div className="boxLeftHeader">
                <img className="complete"  src={imagen[4]} />
            </div>
            <div className="boxRightHeader inside" >
                <div className="boxLeftHeader complete" >
                    <img className="complete"  src={imagen[1]} />
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img className="complete"  src={imagen[2]} />
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img className="complete"  src={imagen[3]} />
                </div>
            </div>


        </div>
    )
}

function SegundaSeccion() {
    return (
        <div className="boxesIniHeader main fondonegro contacto">
            <div className="boxLeftHeader">
                <FormContact url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            </div>
            <div className="boxRightHeader inside imagenContacto">
                <img className="complete contact" src={imagen[0]} />
            </div>
        </div>
    )
}

export default Camion_en_uso