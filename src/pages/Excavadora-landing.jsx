import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import NavBarTop from "../NavBarTop";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
import env from "../config";
import { useEffect, useState } from "react";

let series;
let nombreCamion;
let camionSerie;
let urlMedia = env.url;
let audio_motor = "../images/10-toneladas/motor.mp3";

function Excavadora() {
  useEffect(() => {
    const motorPlayer = document.getElementById("audioMotor");
    motorPlayer.src = audio_motor;
  }, []);

  return (
    <>
      <Helmet>
        <title>Excavadora | Vehicentro</title>
        <meta
          name="description"
          content="Excavadora SUNWARD, Potencia superior, operación segura y excelente productividad para toda contrucción."
        />
        <meta
          name="keywords"
          content="excavadora, excavadoras, venta de excavadoras, excavadoras en ecuador, SUNWARD, sunward"
        ></meta>
        <meta
          name="author"
          content="Celimo Constante, Anthony Perez, Prez"
        />
        <meta
          name="robots"
          content="index, follow"
        ></meta>
      </Helmet>
      <NavBarTop />
      <Content1 />
      <Content2 />
      <Content3 />
      {/*  <Content4 /> */}
      <Content5 />
      <BannerContacto />
      <Footer />
    </>
  );
}

function Content1() {
  return (
    <>
      <div className="boxesIni posRelative content2 fondonegro">
        <div className="boxRight">
          <div className="boxLeft c7h">
            <img
              src={urlMedia + "swe210/excavadora.webp"}
              width="1400"
              height="1000"
              className="slideMain"
              alt="Punto de Venta"
            />
          </div>
        </div>
        <div className="boxLeft playMotor contenedorTextoSobrepuesto">
          <img
            src={urlMedia + "swe210/motor.webp"}
            width="1400"
            height="1000"
            className="slideMain"
            alt="Punto de Venta"
          />
          <div className="boxPlayerMotor ">
            <audio
              id="audioMotor"
              controls
              type="audio/mpeg"
            ></audio>
          </div>
        </div>
      </div>
    </>
  );
}

function Content2() {
  series = [
    {
      serie: "SW210",
      modelo: "21 Ton",
      url: "/excavadoras/swe210",
    },
    {
      serie: "SW370E",
      modelo: "37 Ton Heavy Duty",
      url: "/excavadoras/swe370e",
    },
  ];

  return (
    <>
      <div className="boxesIni posRelative content2 fondonegro">
        <div className="boxRight nomSeries">
          <div className="serieTitle serieBox">
            <p className="serieTitle1">Excavadoras</p>
            <p>SUNWARD</p>
          </div>

          <div className="serieList serieBox">
            {series.map((item, index) => (
              <NavLink
                className="serieContainer"
                to={item.url}
              >
                <p className="nombreSerie">{item.serie}</p>
                <span className="modeloSerie">{item.modelo}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="boxLeft playMotor contenedorTextoSobrepuesto">
          <img
            src={urlMedia + "swe365e/vehicentroExcavadoraEcuador.webp"}
            width="1400"
            height="1000"
            className="slideMain"
            alt="Punto de Venta"
          />
        </div>
      </div>
    </>
  );
}

function Content3() {
  return (
    <>
      <div className="contentProduct">
        <div className="marcasbg textoImagenesProducto">
          <div className="boxRightHeader  half icon_center series">
            <div className="banner">
              <img
                src={urlMedia + "swe210/jpn.png"}
                alt="Icono Tecnología Japonesa"
              />
            </div>
          </div>

          <div className="boxRightHeader  half text_icon_center series">
            <div className="banner">
              <img
                src={urlMedia + "swe210/isuzu.webp"}
                alt="Icono Izusu"
              />
            </div>
          </div>

          <div className="boxRightHeader  half icon_right series">
            <div className="banner">
              <img
                src={urlMedia + "swe210/5-anos-de-garantia.webp"}
                alt="Garantia"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Content5() {
  return (
    <>
      <div className="boxesIni posRelative">
        <div className="centrado">
          <img
            src={
              urlMedia +
              "swe365e/excavadora-en-carretera-vehicentro-ecuador.webp"
            }
            width="1400"
            height="1000"
            className="slideMain"
            alt="Punto de Venta"
          />
        </div>
        <div>
          <FormContact
            url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIEEXCAVADORA"
            camion={nombreCamion}
            serie="Excavadora"
            camionSerie={camionSerie}
          />
        </div>
      </div>
    </>
  );
}

export default Excavadora;
