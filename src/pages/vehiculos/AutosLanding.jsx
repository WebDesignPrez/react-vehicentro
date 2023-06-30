import BannerContacto from "../../components/BannerContacto"
import Footer from "../../components/Footer"
import NavBarTop from "../../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../../components/FormContact";
import env from '../../config';
import { useEffect } from "react";

let series
let nombreCamion
let camionSerie
let urlMedia = env.url
let audio_motor = "../images/10-toneladas/motor.mp3"

function Excavadora() {

    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor

    }, []);

    return (
        <>
            <Helmet>
                <title>Autos | Vehicentro</title>
                <meta name="description" content="Autos Sinotruk." />
                <meta name="keywords" content="autos, suv, venta de suv, carros en ecuador, carros, sinotruk"></meta>
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            <NavBarTop />
            <Content1 />
            <Content2 />
            <Content3 />
           {/*  <Content4 /> */}
            <Content5 />
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
                        <img src={urlMedia + "swe210/excavadora.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia + "swe210/motor.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    <div className="boxPlayerMotor ">
                        <audio id="audioMotor" controls type="audio/mpeg"></audio>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content2() {

    series = [{
        serie: "SUV",
        modelo: "U70",
        url: "/sinotruk/autos/u70"
    }, {
        serie: "SUV",
        modelo: "U70 Pro",
        url: "/sinotruk/autos/u70pro"
    }
    ]

    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxRight nomSeries">

                    <div className="serieTitle serieBox">
                        <p className="serieTitle1">SUV</p>
                        <p>SINOTRUK</p>
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
                    <img src={urlMedia + "swe365e/vehicentroExcavadoraEcuador.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
                        <div className="banner"><img src={urlMedia + "swe210/jpn.png"} /></div>
                    </div>

                    <div className="boxRightHeader  half text_icon_center series" >
                        <div className="banner"><img src={urlMedia + "swe210/isuzu.webp"} /></div>
                    </div>

                    <div className="boxRightHeader  half icon_right series">
                        <div className="banner"><img src={urlMedia + "swe210/5-anos-de-garantia.webp"} /></div>
                    </div>

                </div>


            </div>
        </>
    )
}


function Content5() {
    return (
        <div className="boxesIni posRelative">
        <div className="centrado">
            <img src={urlMedia + "vehiculos/imgForm.png"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
        </div>
        <div>
            <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIEMINICAR" camion={nombreCamion} serie="autos" camionSerie={camionSerie} />
        </div>
    </div>
    )
}

export default Excavadora