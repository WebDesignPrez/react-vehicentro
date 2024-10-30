import NavBar from "../NavBar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import BannerContacto from "../components/BannerContacto";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import env from "../config";
import { Helmet } from "react-helmet";
import PopUp from "../components/PopUp";
import PopUpAvisoLegal from "../components/PopUpAvisoLegal";
import NavBarTop from "../NavBarTop";
import PromoPopUp from "../components/PromoPopUp";
import { CarouselHome } from "../components/CarouselHome";
import { CarouselHome2 } from "../components/CarouselHome2";
import { CarouselHome3 } from "../components/CaroselHome3";

let bdc =
  "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHBOTONCOT";
let nombreCamion = "";
let nombreSerie = "Serie 100";
let camionSerie = "";
let audio_motor = "../images/10-toneladas/motor.mp3";
let urlMedia = env.url;

function Inicio2() {
  const navigate = useNavigate();

  const [modalFormIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    // const motorPlayer = document.getElementById("audioMotorHome");
    // motorPlayer.src = audio_motor;

    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeFormContact();
      }
    };
    const videoContainer = document.getElementById("videoContainer");
    const imgContainer = document.querySelectorAll(".imgContainerHeader");
    const mouseOverHandler = (event) => {
      if (!videoContainer.classList.contains("video50"))
        videoContainer.classList.add("video50");

      imgContainer.forEach((a) => {
        if (!a.classList.contains("img25")) {
          a.classList.add("img25");
          a.querySelector(".linksBox").classList.add("imgHidden");
        }
      });
    };

    const mouseLeaveHandler = (event) => {
      if (videoContainer.classList.contains("video50")) {
        videoContainer.classList.remove("video50");
      }
      imgContainer.forEach((a) => {
        if (a.classList.contains("img25")) {
          a.classList.remove("img25");
          a.querySelector(".linksBox").classList.remove("imgHidden");
        }
      });
    };

    videoContainer.addEventListener("mouseenter", mouseOverHandler);
    videoContainer.addEventListener("mouseleave", mouseLeaveHandler);

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  function openFormContact() {
    setFormIsOpen(true);
  }

  function closeFormContact() {
    setFormIsOpen(false);
  }

  const [showPopup2, setShowPopup2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup2(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };

  return (
    <>
      <Helmet>
        <title>Vehicentro - Venta de Camiones y Maquinaria en Ecuador</title>
        <link rel="canonical" href="https://vehicentro.com/"></link>
        <meta
          name="keywords"
          content="camion, camiones, venta de camiones, camiones en ecuador, Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja."
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador. Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja. "
        ></meta>
        <meta property="og:locale" content="es_EC"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Vehicentro - Venta de Camiones y Maquinaria en Ecuador"
        ></meta>
        <meta
          property="og:description"
          content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."
        ></meta>
        <meta
          property="og:url"
          content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"
        ></meta>
        <meta property="og:site_name" content="Vehicentro"></meta>
        <meta
          property="article:modified_time"
          content="2023-07-26T12:00:00+00:00"
        ></meta>
        <meta
          property="og:image"
          content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:description"
          content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. VISÍTANOS EN AMBATO, QUITO, GUAYAQUIL, RIOBAMBA, CUENCA Y MACHALA. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."
        ></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>
      <PopUpAvisoLegal />
      {/* {showPopup2 && <PromoPopUp onClose={handleClosePopup2} />} */}
      <NavBar />
      {/* <NewBlock /> */}
      <Block1 />
      <Slider />
      <Menu2 />
      <Block3 />
      <Banner />
      <BannerContacto
        url={bdc}
        camion={nombreCamion}
        serie={nombreSerie}
        camionSerie={camionSerie}
      />
      <Footer />
      <Modal />
      {/* <Modal2 /> */}
    </>
  );
}
function NewBlock() {
  return (
    <>
      <div className="nuevoBlock">
        <div className="bloqueArriba">
          <div className="bloqueA1">
            <video
              preload="none"
              autoPlay={true}
              playsInline={true}
              controls
              loop
              muted
              id="myVideo"
              src="https://www.vehicentro.com/images/home/540New.mp4"
              className="videoWidth produ"
            />
          </div>
          <div className="bloqueA2">
            <h1 className="tituloSinotruk">SINOTRUK ECUADOR</h1>
            <h2 className="textoInicio">
              Camiones, vehículos SUV, cabezales, volquetas, contretera y
              maquinaria pesada: excavadora, minicargadoras con tecnología de
              vanguardia
            </h2>
          </div>
          <div className="bloqueA3"></div>
          <div className="bloqueA4"></div>
        </div>
        <div className="bloqueAbajo">
          <div className="bloqueAb1">
            <div className="boxTitulo">
              <p className="tituloPro">PRODUCTOS</p>
            </div>
            <p className="camionText">CAMIONES</p>
            <div className="">
              <div className="seriesHead">
                <a href="/serie/n">Serie N </a>
                <p className="espacios"> |</p>
                <a href="/serie/100"> Serie 100 </a>
                <p className="espacios"> |</p>
                <a href="/serie/t5g"> Serie T5G</a>
              </div>
              <div className="seriesHead">
                <a href="/serie/t7h">Serie T7H </a>{" "}
                <p className="espacios"> |</p>
                <a href="/serie/c7h"> Serie C7H</a>
              </div>
            </div>
            <p className="camionText">VEHÍCULOS</p>
            <div className="seriesHead">
              <a href="/sinotruk/autos/u70">U70 FULL </a>
              <p className="espacios"> |</p>
              <a href="/sinotruk/autos/u70pro"> U70 PRO</a>
            </div>
          </div>
          <div className="bloqueAb2"></div>
          <div className="bloqueAb3">
            <div className="cotizarBlock">
              <a href="">COTIZAR</a>
            </div>
            <div className="wpBlock">
              <img
                className="wpLogo"
                src="https://vehicentro.com/images/wp.png"
              ></img>
            </div>
            <div className="cotizarBlock">
              <a href="">
                CAMIONES <br /> EN USO
              </a>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </>
  );
}

function Slider() {
  return (
    <div className="ocultarMovil">
      <Slide duration={4000}>
        <NavLink to="../sinotruk/autos">
          <img
            src="https://vehicentro.com/images/home/slider1.webp"
            alt="Slider 1"
            style={{ width: "100%", height: "auto" }}
          />
        </NavLink>

        <a href={"#pagina"}>
          <img
            src="https://vehicentro.com/images/home/slider2.webp"
            alt="Slider 2"
            style={{ width: "100%", height: "auto" }}
          />
        </a>

        <img
          src="https://vehicentro.com/images/home/slider3.webp"
          alt="Slider 3"
          style={{ width: "100%", height: "auto" }}
        />
        <img
          src="https://vehicentro.com/images/home/slider4.webp"
          alt="Slider 4"
          style={{ width: "100%", height: "auto" }}
        />
        <img
          src="https://vehicentro.com/images/home/slider5.webp"
          alt="Slider 4"
          style={{ width: "100%", height: "auto" }}
        />
      </Slide>
    </div>
  );
}

function Block1() {
  return (
    <>
      <div className="block1 boxBlock noResponsive" height="1080">
        <div className="imgContainerHeader imgHeader3" height="600">
          <div className="overlayBox" height="100">
            {/* <p className="titleBox">PRODUCTOS</p> */}
            <div className="linksBox series">
              <a href="#irCamiones" className="line2">
                CAMIONES
              </a>
              <a href="#irCamiones" className="line2" src="">
                AUTOS
              </a>
              <a href="/proximamente" className="line2" src="">
                CAMIONETAS
              </a>
              {/* <NavLink to="/serie/n">
                CAMIONES <span className="boldserie">N</span>
              </NavLink>
              <NavLink to="/serie/100">
                SERIE <span className="boldserie">100</span>
              </NavLink>
              <NavLink to="/serie/t5g">
                SERIE <span className="boldserie">T5G</span>
              </NavLink>
              <NavLink to="/serie/t7h">
                SERIE <span className="boldserie">T7H</span>
              </NavLink>
              <NavLink to="/serie/c7h">
                SERIE <span className="boldserie">C7H</span>
              </NavLink>
              <NavLink to="/cabezales/cabezal-48-max">
                SERIE <span className="boldserie">MAX</span>
              </NavLink> */}
            </div>
          </div>
        </div>
        {/* <div id="videoContainer">
          <div className="boxRight tecnologia" height="1080">
            <div className="boxLeft c7h">
              <video
                preload="none"
                autoPlay={true}
                width="930"
                height="1080"
                playsInline={true}
                controls
                loop
                muted
                id="myVideo"
                src="https://www.vehicentro.com/images/home/540New.mp4"
                className="videoWidth produ"
              />
             
            </div>
          </div>
          <div className="overlayBox" height="200">
            <p className="titleBox">PRODUCTOS</p>
            <div className="linksBox series">
              <NavLink to="/serie/n">
                SERIE <span className="boldserie">N</span>
              </NavLink>
              <NavLink to="/serie/100">
                SERIE <span className="boldserie">100</span>
              </NavLink>
              <NavLink to="/serie/t5g">
                SERIE <span className="boldserie">T5G</span>
              </NavLink>
              <NavLink to="/serie/t7h">
                SERIE <span className="boldserie">T7H</span>
              </NavLink>
              <NavLink to="/serie/c7h">
                SERIE <span className="boldserie">C7H</span>
              </NavLink>
              <NavLink to="/cabezales/cabezal-48-max">
                SERIE <span className="boldserie">MAX</span>
              </NavLink>
            </div>
          </div>
        </div> */}
        <div className="ocultarDesktop">
          <Slide duration={4000}>
            <NavLink to="../sinotruk/autos">
              <img
                src="https://vehicentro.com/images/home/slider1c.webp"
                alt="Slider 1"
                style={{ width: "100%", height: "auto" }}
              />
            </NavLink>
            <NavLink>
              <img
                src="https://vehicentro.com/images/home/slider2c.webp"
                alt="Slider 2"
                style={{ width: "100%", height: "auto" }}
              />
            </NavLink>
            <img
              src="https://vehicentro.com/images/home/slider3c.webp"
              alt="Slider 3"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src="https://vehicentro.com/images/home/slider4c.webp"
              alt="Slider 4"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src="https://vehicentro.com/images/home/slider5c.webp"
              alt="Slider 4"
              style={{ width: "100%", height: "auto" }}
            />
          </Slide>
        </div>
        <div
          className="imgContainerHeader imgHeader1"
          height="600"
          // onClick={() => {
          //   window.location = "/repuestos";
          // }}
        >
          <div className="imgContainerHeader imgHeader1" height="600">
            <div className="overlayBox" height="200">
              <div className="linksBox testimonio">
                <a href="#irCase" className="line2" src="">
                  CONSTRUCCIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="videoContainer" className="responsive">
          <div className="boxRight tecnologia" height="1080">
            <a href="/sinotruk/autos">
              <div className="boxLeft c7h">
                <img
                  src="https://www.vehicentro.com/images/home/U70ProCarrusel.webp"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="overlayBox" height="200">
            <a href="/sinotruk/autos" className="titleBox">
              SINOTRUK AUTOS
            </a>
            <div className="linksBox">
              <NavLink src="" to="/sinotruk/autos/u70">
                <span className="boldserie">U70</span>
              </NavLink>
              <NavLink src="" to="/sinotruk/autos/u70pro">
                <span className="boldserie">U70PRO</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainerHeader imgHeader2" height="600">
          <div className="overlayBox" height="200">
            <div className="linksBox testimonio">
              <a href="#irSunward" className="line2" src="">
                MINERÍA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="boxlogos noResponsive">
        <div className="logoHero">
          <a href="#irCamiones">
            <img
              src={urlMedia + "home/sinotruk-logo.png"}
              width="100%"
              height="auto"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
        </div>
        <div className="logoHero">
          <a href="#irCase">
            <img
              src={urlMedia + "home/case-logo.png"}
              width="100%"
              height="auto"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
        </div>
        <div className="logoHero">
          <a href="#irSunward">
            <img
              src={urlMedia + "home/sunware-logo.png"}
              width="100%"
              height="auto"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
        </div>
      </div>
    </>
  );
}

function Block3() {
  return (
    <>
      {/* <div className="fraseInicio">NUEVO</div>
      <div className="block3 boxBlock" id="pagina">
        <div>
          <a href="/camiones/camion-de-2-5-toneladas">
            <img
              src={urlMedia + "home/1.webp"}
              width="500"
              height="389"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">NLS</p>
            <NavLink
              className="titleBox2"
              to="/camiones/camion-de-2-5-toneladas"
            >
              2.5 TON
            </NavLink>
          </div>
        </div>
        <div>
          <a href="/camiones/camion-de-3-5-toneladas-1057">
            <img
              src={urlMedia + "home/2.webp"}
              width="500"
              height="389"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">NKS</p>
            <NavLink
              className="titleBox2"
              to="/camiones/camion-de-3-5-toneladas-1057"
            >
              3.5 TON
            </NavLink>
          </div>
        </div>
        <div>
          <a href="/cabezales/cabezal-48-max">
            <img
              src={urlMedia + "home/3.webp"}
              width="900"
              height="700"
              alt="Camiones de carga pesada en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">MAX</p>
            <NavLink className="titleBox2" to="/cabezales/cabezal-48-max">
              48 TON
            </NavLink>
          </div>
        </div>
      </div>
      <div className="fraseInicio">SERIES</div> */}
      <div id="irCamiones">
        <div className="logobanner">
          <img
            src={urlMedia + "home/sinotruk-logo.png"}
            width="25%"
            height="auto"
            alt="Camiones de carga liviana en Ecuador"
          />
        </div>
        <CarouselHome />
      </div>
      <div id="irCase">
        <div className="logobanner">
          <img
            src={urlMedia + "home/case-logo.png"}
            width="25%"
            height="auto"
            alt="Camiones de carga liviana en Ecuador"
          />
        </div>
        <CarouselHome2 />
      </div>
      <div id="irSunward">
        <div className="logobanner">
          <img
            src={urlMedia + "home/sunware-logo.png"}
            width="25%"
            height="auto"
            alt="Camiones de carga liviana en Ecuador"
          />
        </div>
        <CarouselHome3 />
      </div>
    </>
  );
}

function Menu2() {
  return (
    <nav className="menu2 home2" style={{ display: "none" }}>
      <ul className="nav-links-h">
        <li>
          <a className="sunward mouseA" option="sinotruk">
            CAMIONES
          </a>
        </li>
        <li>
          <a className="sinotruk mouseA" option="sunward">
            MAQUINARIA
          </a>
        </li>
        <li>
          <a className="mouseA" href="/sinotruk/autos">
            VEHÍCULOS
          </a>
        </li>
        <li>
          <a className="tecnologia mouseA" option="tecnologia">
            TECNOLOGÍA
          </a>
        </li>
        <li>
          <NavLink
            to="/camion-en-uso/camion-de-48-toneladas"
            className="camionesCss"
          >
            CAMIONES EN USO
          </NavLink>
        </li>
        <li>
          <NavLink to="/concesionarios" className="concesionarios mouseA">
            CONCESIONARIOS
          </NavLink>
        </li>
      </ul>
      <a href="tel:+59332994740" className="telefonoInicio">
        032994740
      </a>
    </nav>
  );
}

function Banner() {
  return (
    <div className="posRelative banner">
      <a href="/concesionarios">
        <img
          className="desktopImg slideMain"
          src={urlMedia + "/home/pruebaweb2.webp"}
          width="1790"
          height="590"
          alt="Puntos de Venta de Camiones Sinotruk en Ecuador"
        />
      </a>
      <img
        className="movilImg slideMain"
        src={urlMedia + "/home/pruebamovil2.webp"}
        width="2432"
        height="1675"
        alt="Punto de Venta"
      />
      <div className="boxText flex-table row">
        <a href="/concesionarios">
          <div className="flex-row textMain textMain2 noResponsive">
            Puntos Vehicentro a nivel Nacional
          </div>
        </a>
      </div>
    </div>
  );
}

function Modal() {
  return <div id="modalContainer"></div>;
}

export default Inicio2;
