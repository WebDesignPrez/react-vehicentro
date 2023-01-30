import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
import env from '../config';
let series
let nombreCamion
let camionSerie
let urlMedia = env.url

function Especiales() {
    return (
        <>
            <Helmet>
                <title>Volquetas - Vehicentro</title>
                <meta name="description" content="Volquetas" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">
                <div className="boxRight">
                    <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted src={urlMedia+"especiales/volqueta.mp4"} className="videoWidth" />
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia+"especiales/motor.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    <div className="boxPlayerMotor ">
                        <audio id="audioMotor" controls type="audio/mpeg"></audio>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content2() {

    series = [
        {
        serie: <p>T5G-330 <br></br>8-9 m3</p>,
        modelo: "VOLQUETA",
        url: "/volquetas/volqueta-t5g-280"
    }, {
        serie: <p>T5G-430 <br></br>10-14 m3</p>,
        modelo: "VOLQUETA",
        url: "/volquetas/volqueta-t7h-430"
    }, {
        serie: <p>C7H-540 <br></br>20 m3</p>,
        modelo: "VOLQUETA",
        url: "/proximamente"
    }
    ]

    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxRight nomSeries">
                    <div className="serieTitle serieBox especiales">
                        <p className="serieTitle1"></p>
                        <p>VOLQUETAS</p>
                    </div>

                    <div className="serieList serieBox">
                        {series.map((item, index) => (
                            <NavLink className="serieContainer" to={item.url}>
                                <p className="nombreSerie">
                                    {item.serie}
                                </p>
                                <span className="modeloSerie">
                                    {item.modelo}
                                </span>
                            </NavLink>
                        ))}
                    </div>

                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia+"especiales/especiales.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
            </div>
        </>
    )
}

function Content3() {
    return (
        <>

            <div className="contentProduct">

                <div className="marcasbg textoImagenesProducto" >

                    <div className="boxRightHeader  half icon_center series" >
                        <div className="banner"><img src={urlMedia+"especiales/tecnologia.webp"} /></div>
                    </div>

                    <div className="boxRightHeader  half text_icon_center series" >
                        <p className='vidaUtil'>Vida útil de más de 1.5 MILLONES de kilómetros</p>
                    </div>

                    <div className="boxRightHeader  half icon_right series">
                        <div className="banner"><img src={urlMedia+"especiales/garantia.webp"} /></div>
                    </div>

                </div>


            </div>
        </>
    )
}

function Content4() {
    return (
        <>
            
        <div className="marcasSeries fondonegro">
            <img src={urlMedia+"especiales/marcasSeries.webp"} alt="Marcas Series" width="1532" height="355" />
        </div>
        </>
    )
}

function Content5() {
    return (
        <>
            <div className="boxesIni posRelative centrado">
                <div className="centrado">
                    <img src={urlMedia+"especiales/especiales-lateral.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBSERIEVOLQUETAS" camion={nombreCamion} serie="Especiales" camionSerie={camionSerie} />
                </div>
            </div>
        </>
    )
}

export default Especiales