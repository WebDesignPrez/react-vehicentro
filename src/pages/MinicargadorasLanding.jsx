import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
import env from '../config';
import { useEffect, useState } from "react";

let series
let nombreCamion
let camionSerie
let urlMedia = env.url

function Excavadora() {

   

    return (
        <>
            <Helmet>
                <meta name="author" content="Celimo Constante, Anthony Perez, Prez"/>
                <title>SWL3220 - Venta de Minicargadoras Sunward en Ecuador - Vehicentro</title>
                <meta name="description" content="Descubre la venta de la minicargadora Sunward SWL3220 en Ecuador en Vehicentro. Amplia selección de minicargadoras de alta calidad y rendimiento."></meta>
                <meta name="keywords" content="minicargadora, minicargadoras, venta de minicargadoras, minicargadoras Sunward, minicargadoras en ecuador, minicargadoras en venta Ecuador, venta minicargadoras Sunward, SWL3220"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta property="og:locale" content="es_EC"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="SWL3220 - Venta de Minicargadoras Sunward en Ecuador - Vehicentro"></meta>
                <meta property="og:description" content="Descubre la venta de la minicargadora Sunward SWL3220 en Ecuador en Vehicentro. Amplia selección de minicargadoras de alta calidad y rendimiento."></meta>
                <meta property="og:url" content="https://vehicentro.com/minicargadoras/swl3220"></meta>
                <meta property="og:site_name" content="Vehicentro"></meta>
                <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
                <meta property="og:image" content="https://www.vehicentro.com/images/swl3220/minicargadorForm.webp"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content="Descubre la venta de la minicargadora Sunward SWL3220 en Ecuador en Vehicentro. Amplia selección de minicargadoras de alta calidad y rendimiento."></meta>
                <meta name="twitter:label1" content="Tiempo de lectura"></meta>
                <meta name="twitter:data1" content="5 minutos"></meta>
            </Helmet>
            <NavBarTop />
            <Content1 />
            <Content2 />
            <Content3 />
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
                        <img src={urlMedia + "swl3220/WEB-MINICARGADOR-1.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia + "swl3220/motorMinicargadora.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                   
                </div>
            </div>
        </>
    )
}

function Content2() {

    series = [{
        serie: "Minicargadora",
        modelo: "SWL3220",
        url: "/minicargadoras/swl3220"
    }
    ]

    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxRight nomSeries">

                    <div className="serieTitle serieBox">
                        <p className="serieTitle1">Minicargadoras</p>
                        <p>SUNWARD</p>
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
                    <img src="https://vehicentro.com/cotizacion/images/minicargadora/imgalado.jpg" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
                        <div className="banner"><img src={urlMedia + "swl3220/kubotaBomba.png"} /></div>
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
        <>
            <div className="boxesIni posRelative">
                <div className="centrado">
                    <img src={urlMedia + "swl3220/minicargadorForm.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIEMINICAR" camion={nombreCamion} serie="Minicargadora" camionSerie={camionSerie} />
                </div>
            </div>
        </>
    )
}

export default Excavadora