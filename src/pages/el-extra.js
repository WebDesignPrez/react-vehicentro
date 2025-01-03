import NavBar from "../NavBar";
import { a } from "react-router-dom";
import Footer from "../components/Footer";
import BannerContacto from "../components/BannerContacto";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import env from "../config";
import FormContactFicha from "../components/FormContactFicha";
import FormContact from "../components/FormContact";
import { NavLink } from "react-router-dom";

let bdc =
  "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXTRA";
let nombreCamion = "";
let nombreSerie = "Serie 100";
let camionSerie = "";
let audio_motor = "../images/10-toneladas/motor.mp3";
let urlMedia = env.url;

function Inicio2() {
  useEffect(() => {
    const motorPlayer = document.getElementById("audioMotorHome");
    motorPlayer.src = audio_motor;

    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        //closeFormContact()
      }
    };

    const imgContainer = document.querySelectorAll(".imgContainerHeader");
    const mouseOverHandler = (event) => {
      imgContainer.forEach((a) => {
        if (!a.classList.contains("img25")) {
          a.classList.add("img25");
          a.querySelector(".linksBox").classList.add("imgHidden");
        }
      });
    };

    const mouseLeaveHandler = (event) => {
      imgContainer.forEach((a) => {
        if (a.classList.contains("img25")) {
          a.classList.remove("img25");
          a.querySelector(".linksBox").classList.remove("imgHidden");
        }
      });
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="landing">
      <Landingmenu />
      <Block3 />
      <Block4 />
      <Banner />
      <Modal />
      <Landingfooter />
    </div>
  );
}

function Landingmenu() {
  return (
    <>
      <div className="menuHome">
        <div className="logoHome">
          <img
            src={urlMedia + "vehicentro-logo-blanco.png"}
            width="230"
            height="80"
            alt="Vehicentro"
          />
        </div>
      </div>
    </>
  );
}

function Landingfooter() {
  return (
    <>
      <div className="menuHome">
        <div className="logoHome">
          <img
            src={urlMedia + "vehicentro-logo-blanco.png"}
            width="230"
            height="80"
            alt="Vehicentro"
          />
        </div>
      </div>
    </>
  );
}

function Block1() {
  return <></>;
}

function Block2() {
  return <></>;
}

function Block3() {
  const [modalFormIsOpen, setFormIsOpen] = useState(false);

  function openFormContact(cam) {
    console.log(cam);

    switch (cam) {
      //2.5 toneladas
      case "camion-de-2-5-toneladas":
        nombreCamion = "Camión de 2.5 toneladas";
        camionSerie = "2.5 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX2.5TON";

        break;

      case "camion-20-toneladas-catalinas-1256":
        nombreCamion = "Camión de 20 toneladas con Catalinas | C7H-1256";
        camionSerie = "C7H 1256 / 20 TON con Catalinas";
        nombreSerie = "Serie C7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX20TONCAT";

        break;

      //10 toneladas
      case "camion-10-toneladas-t5g-1167":
        nombreCamion = "Camión de 10 toneladas | T5G-1167";
        camionSerie = "T5G 1167 / 10 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX10TON";

        break;

      //9 toneladas
      case "camion-de-9-toneladas":
        nombreCamion = "Camión de 9 toneladas | T5G-1167";
        camionSerie = "T5G 1167 / 9 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX9TON";

        break;

      //12 toneladas
      case "camion-12-toneladas-t5g-1167":
        console.log("12 toneladas");
        nombreCamion = "Camión de 12 toneladas | T5G-1167";
        camionSerie = "T5G 1167 / 12 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX12TON";

        break;

      //13 toneladas
      case "camion-13-toneladas-t5g-1167":
        console.log("13 toneladas");
        nombreCamion = "Camión de 13 toneladas | T5G-1167";
        camionSerie = "T5G 1167 / 13 TON (280HP)";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX13TON280";

        break;

      //13 toneladas 330hp
      case "camion-13-toneladas-t5g-1167-330hp":
        console.log("13 toneladas 330Hp");
        nombreCamion = "Camión de 13 toneladas 330Hp | T5G-1167";
        camionSerie = "T5G 1167 / 13 TON (330HP)";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX13TON330";

        break;

      //18 toneladas
      case "camion-de-18-toneladas-t5g-1257":
        console.log("18 toneladas");
        nombreCamion = "Camión de 18 toneladas | T5G-1257";
        camionSerie = "T5G 1257 / 18 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX18TON";

        break;

      //19 toneladas
      case "camion-de-19-toneladas-t5g-1257":
        console.log("19 toneladas");
        nombreCamion = "Camión de 19 toneladas | T5G-1257";
        camionSerie = "T5G 1257 / 19.5 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX19.5TON";

        break;

      //3.5 toneladas
      case "camion-de-3-5-toneladas-1057":
        console.log("3.5 toneladas");
        nombreCamion = "Camión de 3.5 toneladas | 1057";
        camionSerie = "1057 / 3.5 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX3.5TON";

        break;

      //3.6 toneladas
      case "camion-de-3-6-toneladas":
        console.log("3.6 toneladas");
        nombreCamion = "Camión de 3.6 toneladas | 1047";
        camionSerie = "1047 / 3.6 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX3.6TON";

        break;

      //5 toneladas
      case "camion-de-5-toneladas-1067":
        console.log("5 toneladas");
        nombreCamion = "Camión de 5 toneladas | 1067";
        camionSerie = "1067 / 5 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX5TON";

        break;

      //6 toneladas
      case "camion-de-6-toneladas-1067":
        console.log("6 toneladas");
        nombreCamion = "Camión de 6 toneladas | 1067";
        camionSerie = "1067 / 6 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX6TON";

        break;

      //8 toneladas
      case "camion-8-toneladas-1147":
        console.log("8 toneladas");
        nombreCamion = "Camión de 8 toneladas | 1147";
        camionSerie = "1147 / 8 TON";
        nombreSerie = "Serie 100";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX8TON";

        break;

      //20 toneladas
      case "camion-20-toneladas-1256":
        console.log("20 toneladas");
        nombreCamion = "Camión de 20 toneladas | C7H-1256";
        camionSerie = "C7H 1256 / 20 TON";
        nombreSerie = "Serie C7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX20TON";

        break;

      case "swe210":
        console.log("24 ton");
        nombreCamion = "Excavadora SWE210";
        camionSerie = "SWE210";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXSWE210";

        break;

      case "swe370e":
        console.log("24 ton");
        nombreCamion = "Excavadora SWE370E";
        camionSerie = "SWE370E";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXSW365E";

        break;

      case "cabezal-t5g-4187":
        console.log("24 ton");
        nombreCamion = "Camión de 24 toneladas | T5G-4187";
        camionSerie = "T5G 4187 / 24 TON";
        nombreSerie = "Serie T5G";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX24TON";

        break;

      //28 toneladas
      case "cabezal-t7h-390-28-toneladas":
        console.log("28 ton");
        nombreCamion = "Camión de 28 toneladas | T7H-390";
        camionSerie = "T7H 390 / 28 TON";
        nombreSerie = "Serie T7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX28TON";

        break;

      //28 toneladas retardador
      case "cabezal-28-toneladas-retardador":
        console.log("28 ton retardador");
        nombreCamion = "Camión de 28 toneladas | T7H-390";
        camionSerie = "T7H 390 / 28 TON con retardador";
        nombreSerie = "Serie T7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA";

        break;

      //42 toneladas
      case "cabezal-t7h-390-42-toneladas":
        console.log("42 ton");
        nombreCamion = "Camión de 42 toneladas | T7H-390";
        camionSerie = "T7H 390 / 42 TON";
        nombreSerie = "Serie T7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX42TON";

        break;

      //45 toneladas
      case "cabezal-t7h-430-45-toneladas":
        console.log("45 ton");
        nombreCamion = "Camión de 45 toneladas | T7H-430";
        camionSerie = "T7H 430 / 45 TON";
        nombreSerie = "Serie T7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX45TON";

        break;

      //48 toneladas
      case "cabezal-c7h-540":
        console.log("48 ton");
        nombreCamion = "Camión de 48 toneladas | C7H-540";
        camionSerie = "C7H 540 / 48 TON";
        nombreSerie = "Serie C7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX48TON";

        break;

      //48 toneladas con catalinas
      case "cabezal-c7h-540-catalinas-48-toneladas":
        console.log("48 ton con catalinas");
        nombreCamion = "Camión de 48 toneladas con Catalinas | C7H-540";
        camionSerie = "C7H 540 / 48 TON con Catalinas";
        nombreSerie = "Serie C7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX48TONCAT";

        break;

      case "volqueta-t5g-280":
        console.log("volqueta 330");
        nombreCamion = "Volqueta | T5G-330";
        camionSerie = "VOLQUETA T5G-330 8-9M3";
        nombreSerie = "Especiales";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXVOLQ89M3";

        break;

      //volqueta 430
      case "volqueta-t7h-430":
        console.log("volqueta T7H-430");
        nombreCamion = "Volqueta | T7H-430";
        camionSerie = "VOLQUETA T5G 430-330 10-14M3";
        nombreSerie = "Especiales";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXVOLQ1014M3";

        break;

      case "mixer-a7-1257":
        console.log("mixer 1257");
        nombreCamion = "Mixer A7 1257";
        camionSerie = "A7 1257 / MIXER";
        nombreSerie = "Especiales";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXMX89M3";

        break;

      //Nuevas variables
      case "volqueta-20-m3":
        nombreCamion = "Volqueta 20 m3";
        camionSerie = "VOLQUETA 20M3";
        nombreSerie = "Especiales";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXVOLQ20M3";

        break;

      case "EXCAVADORA":
        nombreCamion = "EXCAVADORA";
        camionSerie = "EXCAVADORA";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXHDEXCA";

        break;

      case "RETROEXCAVADORA":
        nombreCamion = "RETROEXCAVADORA";
        camionSerie = "RETROEXCAVADORA";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXHDRETROEXCA";

        break;

      case "MINI-EXCAVADORA":
        console.log("MINI-EXCAVADORA");
        nombreCamion = "MINI EXCAVADORA";
        camionSerie = "MINI EXCAVADORA";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXHDMINIEXCA";

        break;

      case "RODILLO":
        nombreCamion = "RODILLO";
        camionSerie = "RODILLO";
        nombreSerie = "Excavadora";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXHDRO";

        break;

      case "mixer-c7h-12m3":
        nombreCamion = "C7H 12M3 / MIXER";
        camionSerie = "C7H 12M3 / MIXER";
        nombreSerie = "Especiales";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEXMX12M3";

        break;
      case "cabezal-c7h-540-catalinas-48-toneladas-nueva-version":
        nombreCamion =
          "Cabezal de 48 toneladas con Catalinas | C7H-540 Nueva Versión";
        camionSerie =
          "Cabezal de 48 toneladas con Catalinas | C7H-540 Nueva Versión";
        nombreSerie = "Serie C7H";
        bdc =
          "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDEX48TONCATNEW";

        break;

      default:
        break;
    }

    setFormIsOpen(true);
  }

  function closeFormContact() {
    setFormIsOpen(false);
  }

  return (
    <>
      <div className="block3 boxBlock">
        <div>
          <a>
            <img
              src={urlMedia + "home/nuevasPortadas/nls.jpg"}
              width="500"
              height="389"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2">N</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/landing/el-extra/camion/2-5-ton">
                NLS 2.5 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/3-5-ton">
                <span></span>3.5 TON ( LIVIANO )
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="/landing/el-extra/camion/camion-de-3-6-nks"
              >
                <span></span> NKS 3.6 TON ( PESADO )
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/100">
            <img
              src={urlMedia + "home/serie-100.webp"}
              width="500"
              height="389"
              alt="Camiones de carga liviana en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2">100</NavLink>
            <div className="linksBox">
              {/* <NavLink className="line2" to="/landing/el-extra/camion/3-6-ton" >3.6 TON</NavLink><p style={{ opacity: '30%' }}>|</p> */}
              <NavLink className="line2" to="/landing/el-extra/camion/5-ton">
                5 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/6-ton">
                6 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/8-ton">
                8 TON
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/t5g">
            <img
              src={urlMedia + "home/serie-t5g.webp"}
              width="900"
              height="700"
              alt="Camiones de carga pesada en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2">T5G</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/landing/el-extra/camion/9-ton">
                9 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/10-ton">
                10 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/12-ton">
                12 TON
              </NavLink>
              <NavLink className="line2" to="/landing/el-extra/camion/13-ton">
                13 TON 280HP
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="/landing/el-extra/camion/13-ton-330"
              >
                13 TON 330HP
              </NavLink>
              <NavLink className="line2" to="/landing/el-extra/camion/18-ton">
                18 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/camion/19-ton">
                19.5 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/cabezal/24-ton">
                24 TON
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="block3 boxBlock row2">
        <div>
          <a href="/serie/t7h">
            {" "}
            <img
              src={urlMedia + "home/serie-t7h.webp"}
              width="900"
              height="700"
              alt="Cabezales de venta en Ecuador"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2">T7H</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/landing/el-extra/cabezal/28-ton">
                28 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="/landing/el-extra/cabezal/cabezal-28-toneladas-retardador"
              >
                28 ton - retardador
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/cabezal/42-ton">
                42 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/cabezal/45-ton">
                45 TON
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Slide duration={2000}>
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage: `url(../images/home/motor.webp)`,
                    height: `23.2vw`,
                  }}
                ></div>
              </div>
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage: `url(../images/home/veinstein.webp)`,
                    height: `23.2vw`,
                  }}
                ></div>
              </div>
            </Slide>
            <div className="bottomContainer">
              <div className="bannerTec">
                <img
                  src={urlMedia + "alemania_blanco.webp"}
                  width="1000"
                  height="270"
                  alt="Tecnologia Alemana"
                />
              </div>
              <div className="boxPlayerMotor audiohome">
                <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
              </div>
              <div className="linksBox iniciocentrado">
                <a className="line2" src="">
                  ESCUCHA TU MOTOR
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/c7h">
            {" "}
            <img
              src={urlMedia + "home/serie-c7h.webp"}
              width="900"
              height="700"
              alt="Cabezales de venta en Ecuador"
            />{" "}
          </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2">C7H</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/landing/el-extra/camion/20-ton">
                20 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="/landing/el-extra/camion/20-ton-catalinas"
              >
                20 TON CATALINAS
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink className="line2" to="/landing/el-extra/cabezal/48-ton">
                48 TON
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="/landing/el-extra/cabezal/48-ton-catalinas"
              >
                48 TON CATALINAS
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                to="./cabezal/cabezal-c7h-540-catalinas-48-toneladas-nueva-version"
              >
                <span className="nuevoCamion">NUEVA VERSIÓN</span> 48 TON
                CATALINAS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="block3 boxBlock row2">
        <div>
          <a>
            <img
              src={urlMedia + "home/serie-volquetas.webp"}
              width="900"
              height="700"
              alt="Vehicentro"
            />
          </a>
          <div className="bottomContainer">
            <p className="titleBox"></p>
            <a className="titleBox2">VOLQUETAS</a>
            <div className="linksBox">
              <a
                className="line2"
                src=""
                href="/landing/el-extra/volqueta/volqueta-t5g-280"
              >
                T5G 8-9 m3
              </a>
              <p style={{ opacity: "30%" }}>|</p>
              <a
                className="line2"
                src=""
                href="/landing/el-extra/volqueta/volqueta-t7h-430"
              >
                T7H 10-14 m3
              </a>
              <p style={{ opacity: "30%" }}>|</p>
              <a
                className="line2"
                href="/landing/el-extra/volqueta/volqueta-t7h-430-20m3"
              >
                T7H 430 20 m3
              </a>
              <p style={{ opacity: "30%" }}>|</p>
              <a
                className="line2"
                href="/landing/el-extra/volqueta/volqueta-c7h-540"
              >
                C7H 540 20 m3
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src={urlMedia + "home/mixer.webp"}
            width="900"
            height="700"
            alt="Vehicentro"
          />
          <div className="bottomContainer">
            <p className="titleBox"></p>
            <p className="titleBox2">MIXER</p>
            <div className="linksBox">
              <a
                className="line2"
                src=""
                href="/landing/el-extra/mixer/mixer-a7-1257"
              >
                A7 8-9 m3
              </a>
              <p style={{ opacity: "30%" }}>|</p>
              <a
                className="line2"
                src=""
                href="el-extra/mixer/mixer-12-14m3-c7h-430"
              >
                {" "}
                C7H 12-14 m3
              </a>
            </div>
          </div>
        </div>

        <div>
          <Slide duration={2000}>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(../images/home/sunwardNew.webp)`,
                  height: `23.2vw`,
                }}
              ></div>
            </div>
            <div className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(../images/home/minicargadoraNew.webp)`,
                  height: `23.2vw`,
                }}
              ></div>
            </div>
          </Slide>

          <div className="bottomContainer">
            <p className="titleBox"></p>
            <NavLink className="titleBox2">MAQUINARIA SUNWARD</NavLink>
            <div className="linksBox">
              <NavLink
                className="line2"
                src=""
                to="/landing/el-extra/excavadora/swe210"
              >
                EXCAVADORA SWE210 21 Ton
              </NavLink>
              <p style={{ opacity: "30%" }}>|</p>
              <NavLink
                className="line2"
                src=""
                to="/landing/el-extra/excavadora/swe370e"
              >
                EXCAVADORA SWE370E 37 Ton Heavy Duty{" "}
                <span style={{ opacity: "30%" }}>|</span>
              </NavLink>
              <NavLink
                className="line2"
                src=""
                to="/landing/el-extra/minicargadoras/swl3220"
              >
                MINICARGADORA SWL3220
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {modalFormIsOpen && (
        <FormContactFicha
          url={bdc}
          camion={nombreCamion}
          serie={nombreSerie}
          camionSerie={camionSerie}
          close={closeFormContact}
        />
      )}
    </>
  );
}

function Block4() {
  return (
    <div className="formulariolanding block4 boxBlock boxesIni posRelative content3">
      <div className="boxLeft playMotor colorLinksSobreTexto ">
        <FormContact
          url={bdc}
          camion={nombreCamion}
          serie={nombreSerie}
          camionSerie={camionSerie}
        />
      </div>
      <div className="boxRight tecnologia">
        <div className="boxLeft c7h">
          <video
            width="320"
            height="240"
            controls
            autoPlay={true}
            playsInline={true}
            muted
            loop
            src={urlMedia + "home/tamara2.mp4"}
            className="videoWidth"
          />
        </div>
      </div>
    </div>
  );
}

function Menu2() {
  return (
    <nav className="menu2 home2">
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
          <a to="/camion-en-uso/camion-de-48-toneladas" className="camionesCss">
            CAMIONES EN USO
          </a>
        </li>
        <li>
          <a to="/concesionariosEleccion" className="concesionarios mouseA">
            CONCESIONARIOS
          </a>
        </li>
      </ul>
      <a className="telefonoInicio">032994740</a>
    </nav>
  );
}

function Banner() {
  return (
    <div className="posRelative banner landingbanner">
      <img
        className="desktopImg slideMain"
        src={
          urlMedia +
          "home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp"
        }
        width="1790"
        height="590"
        alt="Punto de Venta"
      />
      <img
        className="movilImg slideMain"
        src={urlMedia + "home/vehicentro-concesionarios-mobil.webp"}
        width="2432"
        height="1675"
        alt="Punto de Venta"
      />
      <div className="boxText flex-table row">
        <a>
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
