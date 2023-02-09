import NavBar from "../NavBar"
import { a } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import env from '../config';

let bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBINICIO"
let nombreCamion = ""
let nombreSerie = "Serie 100"
let camionSerie = ""
let audio_motor = "../images/10-toneladas/motor.mp3"
let urlMedia = env.url

function Inicio2() {

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

    return (
        <div className="landing">
            <Landingmenu />
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Banner />
            <Modal />
            <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            <Landingfooter />
        </div>
    )
}

function Landingmenu() {
    return (
        <>
            <div className="menuHome">
                <div className="logoHome">
                    <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
                </div>
            </div>
        </>
    )
}

function Landingfooter() {
    return (
        <>
            <div className="menuHome">
                <div className="logoHome">
                    <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
                </div>
            </div>
            <div className="social row">
                <div className="flex-row imgMain">
                    <p>AMBATO, MATRIZ<br></br>
                        Av. Indoamérica Km 3 1/2 Vía a Quito<br></br>
                        Línea directa 032-994740 | 0992048229
                    </p></div>

            </div>
        </>
    )
}

function Block1() {
    return (
        <div className="block1 boxBlock" height="1080">
            <div id="videoContainer">
                <div className="boxRight tecnologia" height="1080">
                    <div className="boxLeft c7h">
                        <video autoPlay={true} width="930" height="1080" preload="none" playsInline={true} controls loop muted id="myVideo" src={urlMedia + "home/camiones.mp4"} className="videoWidth produ" />
                    </div>
                </div>
                <div className="overlayBox" height="200">
                    <p className="titleBox">PRODUCTOS</p>
                    <div className="linksBox">
                        <a>SERIE <span className="boldserie">100</span></a>
                        <a src="" to="/serie/t5g">SERIE <span className="boldserie">T5G</span></a>
                        <a src="" to="/serie/t7h">SERIE <span className="boldserie">T7H</span></a>
                        <a src="" to="/serie/c7h">SERIE <span className="boldserie">C7H</span></a>
                    </div>
                </div>
            </div>
            <div className="imgContainerHeader imgHeader1" height="600">

                <div className="overlayBox" height="200">
                    <p className="titleBox "><span className="rojo">R</span>ESPALDO - <span className="rojo">R</span>EPUESTOS</p>
                    <div className="linksBox testimonio test">
                        <a to="/garantia" src="">LA MEJOR GARANTIA DEL PAÍS</a>
                    </div>
                </div>
            </div>
            <div className="imgContainerHeader imgHeader2" height="600">
                <div className="overlayBox" height="200">
                    <a className="titleBox">SINOTRUKEROS</a>
                    <div className="linksBox testimonio">
                        <a className="line2" src="">TESTIMONIOS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Block2() {
    return (
        < div className="block2" >
            <video width="1920" height="1076" controls autoPlay={true} playsInline={true} muted loop src={urlMedia + "home/vehinstein-tv.mp4"} className="videoWidth" />
        </div >
    )
}


function Block3() {
    return (
        <>
            <div className="block3 boxBlock">
                <div>
                    <a><img src={urlMedia + "home/serie-100.webp"} width="500" height="389" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/100">100</a>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/camion-de-3-5-toneladas-1057" >3.5 TON</a>
                            <a className="line2" to="/camiones/camion-de-3-6-toneladas" >3.6 TON</a>
                            <a className="line2" to="/camiones/camion-de-5-toneladas-1067">5 TON</a>
                            <a className="line2" to="/camiones/camion-de-6-toneladas-1067">6 TON</a>
                            <a className="line2" to="/camiones/camion-8-toneladas-1147">8 TON</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a><img src={urlMedia + "home/serie-t5g.webp"} width="900" height="700" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/t5g">T5G</a>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/camion-de-9-toneladas">9 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-10-toneladas-t5g-1167">10 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-12-toneladas-t5g-1167">12 TON</a>
                            <a className="line2" to="/camiones/camion-13-toneladas-t5g-1167">13 TON 280HP</a><br></br>
                            <a className="line2" to="/camiones/camion-13-toneladas-t5g-1167-330hp">13 TON 330HP</a>
                            <a className="line2" to="/camiones/camion-de-18-toneladas-t5g-1257">18 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-de-19-toneladas-t5g-1257">19.5 TON</a><br></br>
                            <a className="line2" to="/cabezales/cabezal-t5g-4187">24 TON</a>

                        </div>
                    </div>
                </div>
                <div>
                    <a > <img src={urlMedia + "home/serie-t7h.webp"} width="900" height="700" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/t7h">T7H</a>
                        <div className="linksBox">
                            <a className="line2" to="/cabezales/cabezal-t7h-390-28-toneladas">28 TON</a>
                            <a className="line2" to="/cabezales/cabezal-t7h-390-42-toneladas">42 TON</a>
                            <a className="line2" to="/cabezales/cabezal-t7h-430-45-toneladas">45 TON</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <a > <img src={urlMedia + "home/serie-c7h.webp"} width="900" height="700" alt="Vehicentro" /> </a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/c7h">C7H</a>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/camion-20-toneladas-1256">20 TON</a>
                            <a className="line2" to="/cabezales/cabezal-c7h-540">48 TON</a>
                            <a className="line2" to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">48 TON - CATALINAS</a>
                        </div>
                    </div>
                </div>
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
                            <img src={urlMedia + "home/tecnologia-alemana.webp"} width="590" height="170" alt="Tecnologia Alemana" />
                        </div>
                        <div className="boxPlayerMotor audiohome">
                            <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
                        </div>
                        <div className="linksBox iniciocentrado">
                            <a className="line2" src="">ESCUCHA TU MOTOR</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a><img src={urlMedia + "home/serie-volquetas.webp"} width="900" height="700" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <a className="titleBox2" to="/serie/volquetas">VOLQUETAS</a>
                        <div className="linksBox">
                            <a className="line2" src="" to="/volquetas/volqueta-t5g-280">8-9 m3</a>
                            <a className="line2" src="" to="/volquetas/volqueta-t7h-430">10-14 m3</a>
                            <a className="line2" src="" to="/proximamente">20 m3</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <img src={urlMedia + "home/sector-ganadero.webp"} width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <a className="titleBox2" to="/proximamente-hidromek">HIDROMEK</a>
                        <div className="linksBox">
                            <a className="line2" src="" to="/proximamente-hidromek">EXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek">RETROEXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek">MINI EXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek">RODILLO</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={urlMedia + "home/mixer.webp"} width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">MIXER</p>
                        <div className="linksBox">
                            <a className="line2" src="" to="/mixer/mixer-a7-1257">A7 8-9 m3</a>
                            <a className="line2" src="" to="/proximamente">C7H 12 m3</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={urlMedia + "home/sunward.webp"} width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">SUNWARD</p>
                        <div className="linksBox">
                            <a className="line2" src="" to="/excavadoras/swe210">SWE210</a>
                            <a className="line2" src="" to="/excavadoras/swe365e">SWE365E</a>
                        </div>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Block4() {
    return (
        <div className="block4 boxBlock boxesIni posRelative content3">
            <div className="boxLeft playMotor colorLinksSobreTexto">

                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-sinotruk-basura.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-con-balde.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-verde-basura.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                </Slide>
                <div className="boxText flex-table row linksBox">
                    <a><div className="flex-row textMain textMain2">VEHÍCULOS ESPECIALES</div></a>
                </div>
            </div>
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} playsInline={true} muted loop src={urlMedia + "home/tamara2.mp4"} className="videoWidth" />
                </div>
            </div>
        </div>
    )
}

function Menu2() {
    return (
        <nav className="menu2 home2">
            <ul className="nav-links-h">
                <li><a className="sunward mouseA" option="sinotruk">CAMIONES</a></li>
                <li><a className="sinotruk mouseA" option="sunward">MAQUINARIA</a></li>
                <li><a className="mouseA">VEHÍCULOS</a></li>
                <li><a className="tecnologia mouseA" option="tecnologia">TECNOLOGÍA</a></li>
                <li><a to="/camion-en-uso/camion-de-48-toneladas" className="camionesCss">CAMIONES EN USO</a></li>
                <li><a to="/concesionarios" className="concesionarios mouseA">CONCESIONARIOS</a></li>
            </ul>
            <a className="telefonoInicio">032994740</a>
        </nav>
    )
}

function Banner() {
    return (
        <div className="posRelative banner">
            <img className="desktopImg slideMain" src={urlMedia + "home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp"} width="1790" height="590" alt="Punto de Venta" />
            <img className="movilImg slideMain" src={urlMedia + "home/vehicentro-concesionarios-mobil.webp"} width="2432" height="1675" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <a><div className="flex-row textMain textMain2 noResponsive">Puntos Vehicentro a nivel Nacional</div></a>
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