import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";

let series
let nombreCamion
let camionSerie

function Serie_100() {
    return (
        <>
            <Helmet>
                <title>Serie 100 - Vehicentro</title>
                <meta name="description" content="Serie 100" />
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
                        <img src="../images/serie-100/serie-100.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src="../images/serie-100/motor-serie-100.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
        serie: "1057",
        modelo: "3.5 TON",
        url: "/camiones/camion-de-3-5-toneladas-1057"
    }, {
        serie: "1047",
        modelo: "3.6 TON",
        url: "/camiones/camion-de-3-6-toneladas"
    }, {
        serie: "1067",
        modelo: "5 TON",
        url: "/camiones/camion-de-5-toneladas-1067"
    }, {
        serie: "1067",
        modelo: "6 TON",
        url: "/camiones/camion-de-6-toneladas-1067"
    }, {
        serie: "1067",
        modelo: "8 TON",
        url: "/camiones/camion-8-toneladas-1147"
    }
    ]

    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxRight nomSeries">
                    <div className="serieTitle serieBox">
                        <p className="serieTitle1">SERIE</p>
                        <p>100</p>
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
                    <img src="../images/serie-100/serie-100-lateral.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
                        <div className="banner"><img src="../images/serie-100/serie-100-texto.webp" /></div>
                    </div>

                    <div className="boxRightHeader  half text_icon_center series" >
                        <p className='vidaUtil'>Vida útil de más de 1.5 MILLONES de kilómetros</p>
                    </div>

                    <div className="boxRightHeader  half icon_right series">
                        <div className="banner"><img src="../images/serie-100/garantia.webp" /></div>
                    </div>

                </div>


            </div>
        </>
    )
}

function Content4() {
    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">
                
                <div className="boxLeft playMotor contenedorTextoSobrepuesto logoCenter">
                    <img src="../images/serie-100/cumins-logo.webp" width="1400" height="1000" className="slideMain logoSerie" alt="Punto de Venta" />
                </div>
            </div>
        </>
    )
}

function Content5() {
    return (
        <>
            <div className="boxesIni posRelative centrado">
                <div className="centrado">
                    <img src="../images/serie-100/serie-100-en-carretera.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIE100" camion={nombreCamion} serie="Serie 100" camionSerie={camionSerie} />
                </div>
            </div>
        </>
    )
}

export default Serie_100