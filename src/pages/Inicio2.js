import NavBar from "../NavBar"
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import env from '../config';
import { Helmet } from "react-helmet";
import PopUp from "../components/PopUp";
import PopUpAvisoLegal from "../components/PopUpAvisoLegal";
import NavBarTop from "../NavBarTop";
import PromoPopUp from "../components/PromoPopUp";




let bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHBOTONCOT"
let nombreCamion = ""
let nombreSerie = "Serie 100"
let camionSerie = ""
let audio_motor = "../images/10-toneladas/motor.mp3"
let urlMedia = env.url

function Inicio2() {

  const navigate = useNavigate();

  const [modalFormIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    const motorPlayer = document.getElementById('audioMotorHome')
    motorPlayer.src = audio_motor

    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeFormContact()
      }
    };
    const videoContainer = document.getElementById('videoContainer')
    const imgContainer = document.querySelectorAll('.imgContainerHeader')
    const mouseOverHandler = event => {
      if (!videoContainer.classList.contains("video50"))
        videoContainer.classList.add("video50");

      imgContainer.forEach(a => {
        if (!a.classList.contains("img25")) {
          a.classList.add("img25")
          a.querySelector('.linksBox').classList.add("imgHidden")
        }
      })
    }

    const mouseLeaveHandler = event => {
      if (videoContainer.classList.contains("video50")) {
        videoContainer.classList.remove("video50");
      }
      imgContainer.forEach(a => {
        if (a.classList.contains("img25")) {
          a.classList.remove("img25")
          a.querySelector('.linksBox').classList.remove("imgHidden")
        }
      })
    }



    videoContainer.addEventListener('mouseenter', mouseOverHandler);
    videoContainer.addEventListener('mouseleave', mouseLeaveHandler);


    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };

  }, []);
  function openFormContact() {
    setFormIsOpen(true)
  }

  function closeFormContact() {
    setFormIsOpen(false)
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
        <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador, Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja."></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador. Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja. "></meta>
        <meta property="og:locale" content="es_EC"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Vehicentro - Venta de Camiones y Maquinaria en Ecuador"></meta>
        <meta property="og:description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."></meta>
        <meta property="og:url" content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"></meta>
        <meta property="og:site_name" content="Vehicentro"></meta>
        <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
        <meta property="og:image" content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. VISÍTANOS EN AMBATO, QUITO, GUAYAQUIL, RIOBAMBA, CUENCA Y MACHALA. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>
      <PopUpAvisoLegal />
      {showPopup2 && <PromoPopUp onClose={handleClosePopup2} />}
      <NavBar />
      <Block1 />
      <Slider />
      <Menu2 />
      <Block3 />
      <Banner />
      <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
      <Footer />
      <Modal />
      {/* <Modal2 /> */}
    </>
  )
}

function Slider() {
  return (
    <div className="ocultarMovil" >
      <Slide duration={4000} >
        <NavLink to='../sinotruk/autos'><img src='https://vehicentro.com/images/home/slider1.webp' alt='Slider 1' style={{ width: '100%', height: 'auto' }} /></NavLink>

        <a href={'#pagina'}><img src='https://vehicentro.com/images/home/slider2.webp' alt='Slider 2' style={{ width: '100%', height: 'auto' }} /></a>

        <img src='https://vehicentro.com/images/home/slider3.webp' alt='Slider 3' style={{ width: '100%', height: 'auto' }} />
        <img src='https://vehicentro.com/images/home/slider4.webp' alt='Slider 4' style={{ width: '100%', height: 'auto' }} />
        <img src='https://vehicentro.com/images/home/slider5.webp' alt='Slider 4' style={{ width: '100%', height: 'auto' }} />
      </Slide>
    </div>
  )
}

function Block1() {
  return (
    <>
      <div className="block1 boxBlock" height="1080">
        <div id="videoContainer">
          <div className="boxRight tecnologia" height="1080">
            <div className="boxLeft c7h">
              <video preload="none" autoPlay={true} width="930" height="1080" playsInline={true} controls loop muted id="myVideo" src="https://www.vehicentro.com/images/home/540New.mp4" className="videoWidth produ" />
            </div>
          </div>
          <div className="overlayBox" height="200">
            <p className="titleBox">PRODUCTOS</p>
            <div className="linksBox series">
              <NavLink to="/serie/n">SERIE <span className="boldserie">N</span></NavLink>
              <NavLink to="/serie/100">SERIE <span className="boldserie">100</span></NavLink>
              <NavLink to="/serie/t5g">SERIE <span className="boldserie">T5G</span></NavLink>
              <NavLink to="/serie/t7h">SERIE <span className="boldserie">T7H</span></NavLink>
              <NavLink to="/serie/c7h">SERIE <span className="boldserie">C7H</span></NavLink>
            </div>
          </div>
        </div>
        <div className="ocultarDesktop">
          <Slide duration={4000}>
            <NavLink to='../sinotruk/autos'><img src='https://vehicentro.com/images/home/slider1c.webp' alt='Slider 1' style={{ width: '100%', height: 'auto' }} /></NavLink>
            <NavLink><img src='https://vehicentro.com/images/home/slider2c.webp' alt='Slider 2' style={{ width: '100%', height: 'auto' }} /></NavLink>
            <img src='https://vehicentro.com/images/home/slider3c.webp' alt='Slider 3' style={{ width: '100%', height: 'auto' }} />
            <img src='https://vehicentro.com/images/home/slider4c.webp' alt='Slider 4' style={{ width: '100%', height: 'auto' }} />
            <img src='https://vehicentro.com/images/home/slider5c.webp' alt='Slider 4' style={{ width: '100%', height: 'auto' }} />
          </Slide>
        </div>
        <div className="imgContainerHeader imgHeader1" height="600" onClick={() => {
          window.location = '/repuestos';

        }}>
          <p className="titleBox "><span className="rojo"></span><span className="rojo"></span></p>
          <div className="linksBox testimonio test">
          </div>
        </div>
        <div id="videoContainer" className="responsive">
          <div className="boxRight tecnologia" height="1080">
            <a href="/sinotruk/autos">
              <div className="boxLeft c7h">
                <img src="https://www.vehicentro.com/images/home/U70ProCarrusel.webp" alt="" />
              </div>
            </a>
          </div>
          <div className="overlayBox" height="200">
            <a href="/sinotruk/autos" className="titleBox">SINOTRUK AUTOS</a>
            <div className="linksBox">
              <NavLink src="" to="/sinotruk/autos/u70"><span className="boldserie">U70</span></NavLink>
              <NavLink src="" to="/sinotruk/autos/u70pro"><span className="boldserie">U70PRO</span></NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainerHeader imgHeader2 noResponsive" height="600">
          <div className="overlayBox" height="200">
            <a href="/experiencia" className="titleBox">SINOTRUKEROS</a>
            <div className="linksBox testimonio">
              <a href="/experiencia" className="line2" src="">VIDEOS TESTIMONIALES</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function Block3() {
  return (
    <>
      <div className="block3 boxBlock" id="pagina">
        <div>
          <a href="/camiones/camion-de-2-5-toneladas"><img src={urlMedia + "home/homeNLS.png"} width="500" height="389" alt="Camiones de carga liviana en Ecuador" /></a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2" to="/serie/n">N</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/camiones/camion-de-2-5-toneladas" >NLS 2.5 TON</NavLink>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/100"><img src={urlMedia + "home/serie-100.webp"} width="500" height="389" alt="Camiones de carga liviana en Ecuador" /></a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2" to="/serie/100">100</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/camiones/camion-de-3-5-toneladas-1057" ><span></span>3.5 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-de-3-6-toneladas" >3.6 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-de-5-toneladas-1067">5 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-de-6-toneladas-1067">6 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-8-toneladas-1147">8 TON</NavLink>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/t5g"><img src={urlMedia + "home/serie-t5g.webp"} width="900" height="700" alt="Camiones de carga pesada en Ecuador" /></a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2" to="/serie/t5g">T5G</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/camiones/camion-de-9-toneladas">9 TON</NavLink><br></br>
              <NavLink className="line2" to="/camiones/camion-10-toneladas-t5g-1167">10 TON</NavLink><br></br>
              <NavLink className="line2" to="/camiones/camion-12-toneladas-t5g-1167">12 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-13-toneladas-t5g-1167">13 TON 280HP</NavLink><br></br>
              <NavLink className="line2" to="/camiones/camion-13-toneladas-t5g-1167-330hp">13 TON 330HP</NavLink>
              <NavLink className="line2" to="/camiones/camion-de-18-toneladas-t5g-1257">18 TON</NavLink><br></br>
              <NavLink className="line2" to="/camiones/camion-de-19-toneladas-t5g-1257">19.5 TON</NavLink><br></br>
              <NavLink className="line2" to="/cabezales/cabezal-t5g-4187">24 TON</NavLink>

            </div>
          </div>
        </div>

      </div>

      <div className="block3 boxBlock row2">
        <div>
          <a href="/serie/t7h"> <img src={urlMedia + "home/serie-t7h.webp"} width="900" height="700" alt="Cabezales de venta en Ecuador" /></a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>

            <NavLink className="titleBox2" to="/serie/t7h">T7H</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/cabezales/cabezal-t7h-390-28-toneladas">28 TON</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-28-toneladas-retardador">28 TON con retardador</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-t7h-340-28-toneladas">28 TON Weichai</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-t7h-390-42-toneladas">42 TON</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-t7h-430-45-toneladas">45 TON</NavLink>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Slide duration={2000}>

              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/motor.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/veinstein.webp)`, height: `23.2vw` }}>
                </div>
              </div>
            </Slide>
            <div className="bottomContainer">
              <div className="bannerTec">
                <img src={urlMedia + "pruebaTA.webp"} width="1000" height="270" alt="Tecnologia Alemana" />
              </div>
              <div className="boxPlayerMotor audiohome">
                <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
              </div>
              <div className="linksBox iniciocentrado">
                <a className="line2" src="">ESCUCHA TU MOTOR</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="/serie/c7h"> <img src={urlMedia + "home/serie-c7h.webp"} width="900" height="700" alt="Cabezales de venta en Ecuador" /> </a>
          <div className="bottomContainer">
            <p className="titleBox">SERIE</p>
            <NavLink className="titleBox2" to="/serie/c7h">C7H</NavLink>
            <div className="linksBox">
              <NavLink className="line2" to="/camiones/camion-20-toneladas-1256">20 TON</NavLink>
              <NavLink className="line2" to="/camiones/camion-20-toneladas-catalinas-1256">20 TON CATALINAS</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-c7h-540">48 TON</NavLink>
              <NavLink className="line2" to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">48 TON CATALINAS</NavLink>
            </div>
          </div>
        </div>

      </div>
      <div className="block3 boxBlock row2">
        <div>
          <a href="/sinotruk/autos">
            <Slide duration={2000}>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/U70Carrusel.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/U70ProCarrusel.webp)`, height: `23.2vw` }}>
                </div>
              </div>
            </Slide>
          </a>

          <div className="bottomContainer">
            <p className="titleBox"></p>
            <NavLink className="titleBox2" to="/sinotruk/autos">SUV'S</NavLink>
            <div className="linksBox">
              <NavLink className="line2" src="" to="/sinotruk/autos/u70">U70</NavLink>
              <NavLink className="line2" src="" to="/sinotruk/autos/u70pro">U70 PRO</NavLink>
            </div>
          </div>
        </div>


        <div>
          <a href="/volquetas/volqueta-c7h-540">
            <Slide duration={2000}>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/mixer.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/serie-volquetas.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/volqueta7.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/volquetaC7HNew.webp)`, height: `23.2vw` }}>
                </div>
              </div>
            </Slide>
          </a>

          <div className="bottomContainer">
            <p className="titleBox"></p>
            <NavLink className="titleBox2" to="/serie/volquetas">VOLQUETAS / MIXER</NavLink>
            <div className="linksBox">
              <div className="arribacol">
                <div className="nombreIni">
                  <p>Volquetas:</p>
                </div>
                <div className="linksVol">
                  <NavLink className="line2" src="" to="/volquetas/volqueta-t5g-280">T5G 8-9 m3</NavLink>
                  <NavLink className="line2" src="" to="/volquetas/volqueta-t7h-430">T7H 10-14 m3</NavLink>
                </div>
              </div>
              <div className="abajoCol">
                <div className="nombreIni"></div>
                <div className="linksVol">
                  <NavLink className="line2" src="" to="/volquetas/volqueta-t7h-430-20m3">T7H 430 20 m3</NavLink>
                  <NavLink className="line2" src="" to="/volquetas/volqueta-c7h-540">C7H 540 20 m3</NavLink>
                </div>
              </div>
              <div>
                <p>Mixer:</p>
                <NavLink className="line2" src="" to="/mixer/mixer-a7-1257"> A7 8-9 m3</NavLink>
                <NavLink className="line2" src="" to="/mixer/mixer-12-14m3-c7h-430"> C7H 12-14 m3</NavLink>
              </div>
            </div>
          </div>

        </div>


        <div>
          <a href="/excavadoras/swe370e">
            <Slide duration={2000}>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/sunwardNew.webp)`, height: `23.2vw` }}>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(../images/home/minicargadoraNew.webp)`, height: `23.2vw` }}>
                </div>
              </div>
            </Slide>
          </a>


          <div className="bottomContainer">
            <p className="titleBox"></p>
            <NavLink className="titleBox2">MAQUINARIA SUNWARD</NavLink>
            <div className="linksBox">
              <NavLink className="line2" src="" to="/excavadoras/swe210">EXCAVADORA SW210 21 Ton</NavLink>
              <NavLink className="line2" src="" to="/excavadoras/swe370e">EXCAVADORA SW370E 37 Ton Heavy Duty</NavLink>
              <NavLink className="line2" src="" to="/minicargadoras/swl3220">MINICARGADORA SWL3220</NavLink>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

function Menu2() {
  return (
    <nav className="menu2 home2" style={{ display: 'none' }}>
      <ul className="nav-links-h">
        <li><a className="sunward mouseA" option="sinotruk">CAMIONES</a></li>
        <li><a className="sinotruk mouseA" option="sunward">MAQUINARIA</a></li>
        <li><a className="mouseA" href="/sinotruk/autos">VEHÍCULOS</a></li>
        <li><a className="tecnologia mouseA" option="tecnologia">TECNOLOGÍA</a></li>
        <li><NavLink to="/camion-en-uso/camion-de-48-toneladas" className="camionesCss">CAMIONES EN USO</NavLink></li>
        <li><NavLink to="/concesionarios" className="concesionarios mouseA">CONCESIONARIOS</NavLink></li>
      </ul>
      <a href="tel:+59332994740" className="telefonoInicio">032994740</a>
    </nav>
  )
}

function Banner() {
  return (
    <div className="posRelative banner">
      <a href="/concesionarios"><img className="desktopImg slideMain" src={urlMedia + "/home/pruebaweb2.webp"} width="1790" height="590" alt="Puntos de Venta de Camiones Sinotruk en Ecuador" /></a>
      <img className="movilImg slideMain" src={urlMedia + "/home/pruebamovil2.webp"} width="2432" height="1675" alt="Punto de Venta" />
      <div className="boxText flex-table row">
        <a href="/concesionarios"><div className="flex-row textMain textMain2 noResponsive">Puntos Vehicentro a nivel Nacional</div></a>
      </div>
    </div>
  )
}

function Modal() {
  return (
    <div id="modalContainer"></div>
  )
}

export default Inicio2