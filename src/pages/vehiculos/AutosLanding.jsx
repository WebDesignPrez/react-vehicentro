import BannerContacto from "../../components/BannerContacto";
import Footer from "../../components/Footer";
import NavBarTop from "../../NavBarTop";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../../components/FormContact";
import env from "../../config";
import { useEffect, useState } from "react";
import Detalles from "./componentes/Detalles";
import { Link } from "react-router-dom";

let series;
let nombreCamion;
let camionSerie;
let urlMedia = env.url;

function Excavadora() {
  return (
    <>
      <Helmet>
        <title>Autos | Vehicentro</title>
        <meta name="description" content="Autos Sinotruk." />
        <meta
          name="keywords"
          content="autos, suv, venta de suv, carros en ecuador, carros, sinotruk"
        ></meta>
        <meta name="author" content="Celimo Constante, Anthony Perez, Prez" />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <NavBarTop />
      <Content1 />
      <Content2 />
      <Content3 />
      {/*  <Content4 /> */}
      <Content5 />
      <Detalles />
      <Footer />
    </>
  );
}

function Content1() {
  return (
    <>
      <div className="block2">
        <video
          preload
          playsInline
          width="1920"
          height="1076"
          controls
          autoPlay
          muted
          loop
          src="https://www.vehicentro.com/images/home/u70proVideo.mp4"
          className="videoWidth"
        />
      </div>
    </>
  );
}

function Content2() {
  series = [
    {
      serie: "SUV",
      modelo: "U70-FULL",
      url: "/sinotruk/autos/u70",
    },
    {
      serie: "SUV",
      modelo: "U70 Pro",
      url: "/sinotruk/autos/u70pro",
    },
    {
      serie: "SUV",
      modelo: "U70 Pro Amt",
      url: "/sinotruk/autos/u70pro",
    },
  ];

  const urlMedia = "https://www.vehicentro.com/images/vehiculos/";

  const [selectedImage, setSelectedImage] = useState(urlMedia + "blanco.png");

  const handleButtonClick = (newImage) => {
    setSelectedImage(urlMedia + newImage + ".png");
  };

  return (
    <>
      <div className="serieContainerAutos">
        <div className="containerAutos">
          <div className="sinotrukContainer">
            <img src="https://www.vehicentro.com/images/sinotruckAutosPruebas2.webp" />
          </div>

          <div className="serieSinotrukAutos">
            <div className="contenedorAuto1">
              <Link to="../sinotruk/autos/u70">
                <img
                  className="logos"
                  src="https://www.vehicentro.com/images/u70Logo22.webp"
                  alt="Logo Sinotruk U70"
                />
              </Link>
            </div>
            <div className="contenedorAuto2">
              <Link to="../sinotruk/autos/u70pro">
                <img
                  className="logos"
                  src="https://www.vehicentro.com/images/u70proLogoFlechasRoja2.webp"
                  alt="Logo Sinotruk U70PRO"
                />
              </Link>
            </div>
          </div>
          <div className="serieSinotrukAutos">
            <div className="contenedorAuto2">
              <Link to="../sinotruk/autos/U70ProAmt">
                <img
                  className="logos"
                  src="https://www.vehicentro.com/images/LOGOAMT.webp"
                  alt="Logo Sinotruk U70PRO"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="vehiculos fondoautos">
          <img className="carImage" src={selectedImage} alt="U70PRO" />

          <div className="description">
            <p>COLORES</p>
            <div className="buttons">
              <button
                className="blanco"
                onClick={() => handleButtonClick("blanco")}
              ></button>
              <button
                className="bluesky"
                onClick={() => handleButtonClick("bluesky")}
              ></button>
              <button
                className="conchevino"
                onClick={() => handleButtonClick("conchevino")}
              ></button>
              <button
                className="gris"
                onClick={() => handleButtonClick("gris")}
              ></button>
              <button
                className="negro"
                onClick={() => handleButtonClick("negro")}
              ></button>
              <button
                className="plateado"
                onClick={() => handleButtonClick("plateado")}
              ></button>
            </div>
          </div>
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
            <div className="banner images autos1">
              <img src={urlMedia + "bosch.png"} alt="Tecnología Bosch" />
            </div>
          </div>

          <div className="boxRightHeader  half text_icon_center series">
            <div className="banner images autos2">
              <img src={urlMedia + "delphi.png"} alt="Tecnología Delphi" />
            </div>
          </div>

          <div className="boxRightHeader  half icon_right series">
            <div className="banner images autos3">
              <img
                src={urlMedia + "magnettiAzul.png"}
                alt="Tecnología Magnetti"
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
    <div className="boxesIni posRelative">
      <div className="centrado">
        <img
          src={urlMedia + "vehiculos/imgForm.png"}
          width="1400"
          height="1000"
          className="slideMain"
          alt="Punto de Venta"
        />
      </div>
      <div>
        <FormContact
          url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIEAUTOS"
          camion={nombreCamion}
          serie="autos"
          camionSerie={camionSerie}
        />
      </div>
    </div>
  );
}

export default Excavadora;
