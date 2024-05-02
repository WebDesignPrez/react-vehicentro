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
let audio_motor = "../images/10-toneladas/motor.mp3"

function SerieN() {

  useEffect(() => {
    const motorPlayer = document.getElementById('audioMotor')
    motorPlayer.src = audio_motor

  }, []);

  return (
    <>
      <Helmet>
        <title>Camiones Serie N | Vehicentro</title>
        <meta name="description" content="Camiones de la Serie N de Sinotruk, diseñados para máxima seguridad, confianza y comodidad." />
        <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador, serie 100"></meta>
        <meta name="robots" content="index, follow"></meta>
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
            <img src={urlMedia + "serieN/serieN1.jpg"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
          </div>
        </div>
        <div className="boxLeft playMotor contenedorTextoSobrepuesto">
          <img src={urlMedia + "serieN/serieN2.jpg"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
      serie: "NLS",
      modelo: "2.5 TON",
      url: "/camiones/camion-de-2-5-toneladas"
    },
    {
      serie: "NKS",
      modelo: "3.5 TON",
      url: "/camiones/camion-de-3-5-toneladas-1057"
    }
    ,
    {
      serie: "NKS",
      modelo: "3.6 TON",
      url: "/camiones/camion-de-3-6-nks"
    },
  ]

  return (
    <>
      <div className="boxesIni posRelative content2 fondonegro">

        <div className="boxRight nomSeries">

          <div className="serieTitle serieBox">
            <p className="serieTitle1">SERIE</p>
            <p>N</p>
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
          <img src={urlMedia + "serieN/serieN3.jpg"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
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
            <div className="banner"><img src={urlMedia + "serieN/serie.png"} /></div>
          </div>

          <div className="boxRightHeader  half text_icon_center series" >
            <p className='vidaUtil'>Vida útil de más de 1.5 MILLONES de kilómetros</p>
          </div>

          <div className="boxRightHeader  half icon_right series">
            <div className="banner"><img src={urlMedia + "serie-100/garantia.webp"} /></div>
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
          <img src={urlMedia + "serieN/formSerieN.jpg"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
        </div>
        <div>
          <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIE100" camion='2.5 TON' serie="Serie n" camionSerie={camionSerie} />
        </div>
      </div>
    </>
  )
}

export default SerieN