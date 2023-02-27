import NavBar from "../NavBar"
import { a } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import env from '../config';
import FormContactFicha from "../components/FormContactFicha";
import FormContact from "../components/FormContact";

let bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"
let nombreCamion = ""
let nombreSerie = "Serie 100"
let camionSerie = ""
let audio_motor = "../images/10-toneladas/motor.mp3"
let urlMedia = env.url

function Inicio2() {

    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotorHome')
        motorPlayer.src = audio_motor

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                //closeFormContact()
            }
        };

        const imgContainer = document.querySelectorAll('.imgContainerHeader')
        const mouseOverHandler = event => {

            imgContainer.forEach(a => {
                if (!a.classList.contains("img25")) {
                    a.classList.add("img25")
                    a.querySelector('.linksBox').classList.add("imgHidden")
                }
            })
        }

        const mouseLeaveHandler = event => {
            imgContainer.forEach(a => {
                if (a.classList.contains("img25")) {
                    a.classList.remove("img25")
                    a.querySelector('.linksBox').classList.remove("imgHidden")
                }
            })
        }



        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
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
        </>
    )
}

function Block1() {
    return (
        <></>
    )
}

function Block2() {
    return (
        <></>
    )
}


function Block3() {

    const [modalFormIsOpen, setFormIsOpen] = useState(false);

    function openFormContact(cam) {
        console.log(cam)

        switch (cam) {

            //10 toneladas
            case "camion-10-toneladas-t5g-1167":
                nombreCamion = "Camion de 10 toneladas | T5G-1167"
                camionSerie = "T5G 1167 / 10 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //9 toneladas
            case "camion-de-9-toneladas":
                nombreCamion = "Camion de 9 toneladas | T5G-1167"
                camionSerie = "T5G 1167 / 9 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"


                break;

            //12 toneladas
            case "camion-12-toneladas-t5g-1167":
                console.log('12 toneladas')
                nombreCamion = "Camion de 12 toneladas | T5G-1167"
                camionSerie = "T5G 1167 / 12 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //13 toneladas
            case "camion-13-toneladas-t5g-1167":
                console.log('13 toneladas')
                nombreCamion = "Camion de 13 toneladas | T5G-1167"
                camionSerie = "T5G 1167 / 13 TON (280HP)"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //13 toneladas 330hp
            case "camion-13-toneladas-t5g-1167-330hp":
                console.log('13 toneladas 330Hp')
                nombreCamion = "Camion de 13 toneladas 330Hp | T5G-1167"
                camionSerie = "T5G 1167 / 13 TON (330HP)"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //18 toneladas
            case "camion-de-18-toneladas-t5g-1257":
                console.log('18 toneladas')
                nombreCamion = "Camion de 18 toneladas | T5G-1257"
                camionSerie = "T5G 1257 / 18 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //19 toneladas
            case "camion-de-19-toneladas-t5g-1257":
                console.log('19 toneladas')
                nombreCamion = "Camion de 19 toneladas | T5G-1257"
                camionSerie = "T5G 1257 / 19.5 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //3.5 toneladas
            case "camion-de-3-5-toneladas-1057":
                console.log('3.5 toneladas')
                nombreCamion = "Camion de 3.5 toneladas | 1057"
                camionSerie = "1057 / 3.5 TON"
                nombreSerie = "Serie 100"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //3.6 toneladas
            case "camion-de-3-6-toneladas":
                console.log('3.6 toneladas')
                nombreCamion = "Camion de 3.6 toneladas | 1047"
                camionSerie = "1047 / 3.6 TON"
                nombreSerie = "Serie 100"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;


            //5 toneladas
            case "camion-de-5-toneladas-1067":
                console.log('5 toneladas')
                nombreCamion = "Camion de 5 toneladas | 1067"
                camionSerie = "1067 / 5 TON"
                nombreSerie = "Serie 100"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //6 toneladas
            case "camion-de-6-toneladas-1067":
                console.log('6 toneladas')
                nombreCamion = "Camion de 6 toneladas | 1067"
                camionSerie = "1067 / 6 TON"
                nombreSerie = "Serie 100"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //8 toneladas
            case "camion-8-toneladas-1147":
                console.log('8 toneladas')
                nombreCamion = "Camion de 8 toneladas | 1147"
                camionSerie = "1147 / 8 TON"
                nombreSerie = "Serie 100"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //20 toneladas
            case "camion-20-toneladas-1256":
                console.log('20 toneladas')
                nombreCamion = "Camion de 20 toneladas | C7H-1256"
                camionSerie = "C7H 1256 / 20 TON"
                nombreSerie = "Serie C7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "swe210":
                console.log('24 ton')
                nombreCamion = "Excavadora SWE210"
                camionSerie = "SWE210"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "swe365e":
                console.log('24 ton')
                nombreCamion = "Excavadora SWE365E"
                camionSerie = "SWE365E"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "cabezal-t5g-4187":
                console.log('24 ton')
                nombreCamion = "Camion de 24 toneladas | T5G-4187"
                camionSerie = "T5G 4187 / 24 TON"
                nombreSerie = "Serie T5G"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //28 toneladas
            case "cabezal-t7h-390-28-toneladas":
                console.log('28 ton')
                nombreCamion = "Camion de 28 toneladas | T7H-390"
                camionSerie = "T7H 390 / 28 TON"
                nombreSerie = "Serie T7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //28 toneladas retardador
            case "cabezal-28-toneladas-retardador":
                console.log('28 ton retardador')
                nombreCamion = "Camion de 28 toneladas | T7H-390"
                camionSerie = "T7H 390 / 28 TON con retardador"
                nombreSerie = "Serie T7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //42 toneladas
            case "cabezal-t7h-390-42-toneladas":
                console.log('42 ton')
                nombreCamion = "Camion de 42 toneladas | T7H-390"
                camionSerie = "T7H 390 / 42 TON"
                nombreSerie = "Serie T7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //45 toneladas
            case "cabezal-t7h-430-45-toneladas":
                console.log('45 ton')
                nombreCamion = "Camion de 45 toneladas | T7H-430"
                camionSerie = "T7H 430 / 45 TON"
                nombreSerie = "Serie T7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //48 toneladas
            case "cabezal-c7h-540":
                console.log('48 ton')
                nombreCamion = "Camion de 48 toneladas | C7H-540"
                camionSerie = "C7H 540 / 48 TON"
                nombreSerie = "Serie C7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //48 toneladas con catalinas
            case "cabezal-c7h-540-catalinas-48-toneladas":
                console.log('48 ton con catalinas')
                nombreCamion = "Camion de 48 toneladas con Catalinas | C7H-540"
                camionSerie = "C7H 540 / 48 TON con Catalinas"
                nombreSerie = "Serie C7H"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "volqueta-t5g-280":
                console.log('volqueta 330')
                nombreCamion = "Volqueta | T5G-330"
                camionSerie = "VOLQUETA T5G-330 8-9M2"
                nombreSerie = "Especiales"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //volqueta 430
            case "volqueta-t7h-430":
                console.log('volqueta T7H-430')
                nombreCamion = "Volqueta | T7H-430"
                camionSerie = "VOLQUETA T5G 430-330 10-14M2"
                nombreSerie = "Especiales"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "mixer-a7-1257":
                console.log('mixer 1257')
                nombreCamion = "Mixer A7 1257"
                camionSerie = "A7 1257 / MIXER"
                nombreSerie = "Especiales"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            //Nuevas variables
            case "volqueta-20-m3":
                nombreCamion = "Volqueta 20 m3"
                camionSerie = "VOLQUETA 20M2"
                nombreSerie = "Especiales"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "EXCAVADORA":
                nombreCamion = "EXCAVADORA"
                camionSerie = "EXCAVADORA"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "RETROEXCAVADORA":
                nombreCamion = "RETROEXCAVADORA"
                camionSerie = "RETROEXCAVADORA"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "MINI-EXCAVADORA":
                console.log('MINI-EXCAVADORA')
                nombreCamion = "MINI EXCAVADORA"
                camionSerie = "MINI EXCAVADORA"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "RODILLO":
                nombreCamion = "RODILLO"
                camionSerie = "RODILLO"
                nombreSerie = "Excavadora"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

            case "mixer-c7h-12m3":
                nombreCamion = "C7H 12M3 / MIXER"
                camionSerie = "C7H 12M3 / MIXER"
                nombreSerie = "Especiales"
                bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHLDEXTRA"

                break;

                
            default:
                break;
        }


        setFormIsOpen(true)
    }

    function closeFormContact() {
        setFormIsOpen(false)
    }

    return (
        <>
            <div className="block3 boxBlock landing">
                <div>
                    <a><img src={urlMedia + "home/serie-100.webp"} width="500" height="389" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/100">100</a>
                        <div className="linksBox">
                            <a className="line2"  href="/landing/el-extra/camion/3-5-ton">3.5 TON</a>
                            <a className="line2" to="/camiones/camion-de-3-6-toneladas" onClick={() => { openFormContact("camion-de-3-6-toneladas") }}>3.6 TON</a>
                            <a className="line2" to="/camiones/camion-de-5-toneladas-1067" onClick={() => { openFormContact("camion-de-5-toneladas-1067") }}>5 TON</a>
                            <a className="line2" to="/camiones/camion-de-6-toneladas-1067" onClick={() => { openFormContact("camion-de-6-toneladas-1067") }}>6 TON</a>
                            <a className="line2" to="/camiones/camion-8-toneladas-1147" onClick={() => { openFormContact("camion-8-toneladas-1147") }}>8 TON</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a><img src={urlMedia + "home/serie-t5g.webp"} width="900" height="700" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/t5g">T5G</a>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/camion-de-9-toneladas" onClick={() => { openFormContact("camion-de-9-toneladas") }}>9 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-10-toneladas-t5g-1167" onClick={() => { openFormContact("camion-10-toneladas-t5g-1167") }}>10 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-12-toneladas-t5g-1167" onClick={() => { openFormContact("camion-12-toneladas-t5g-1167") }}>12 TON</a>
                            <a className="line2" to="/camiones/camion-13-toneladas-t5g-1167" onClick={() => { openFormContact("camion-13-toneladas-t5g-1167") }}>13 TON 280HP</a><br></br>
                            <a className="line2" to="/camiones/camion-13-toneladas-t5g-1167-330hp" onClick={() => { openFormContact("camion-13-toneladas-t5g-1167-330hp") }}>13 TON 330HP</a>
                            <a className="line2" to="/camiones/camion-de-18-toneladas-t5g-1257" onClick={() => { openFormContact("camion-de-18-toneladas-t5g-1257") }}>18 TON</a><br></br>
                            <a className="line2" to="/camiones/camion-de-19-toneladas-t5g-1257" onClick={() => { openFormContact("camion-de-19-toneladas-t5g-1257") }}>19.5 TON</a><br></br>
                            <a className="line2" to="/cabezales/cabezal-t5g-4187" onClick={() => { openFormContact("cabezal-t5g-4187") }}>24 TON</a>

                        </div>
                    </div>
                </div>
                <div>
                    <a > <img src={urlMedia + "home/serie-t7h.webp"} width="900" height="700" alt="Vehicentro" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <a className="titleBox2" to="/serie/t7h">T7H</a>
                        <div className="linksBox">
                            <a className="line2" to="/cabezales/cabezal-t7h-390-28-toneladas" onClick={() => { openFormContact("cabezal-t7h-390-28-toneladas") }}>28 TON</a>
                            <a className="line2" to="/cabezales/cabezal-t7h-390-42-toneladas" onClick={() => { openFormContact("cabezal-t7h-390-42-toneladas") }}>42 TON</a>
                            <a className="line2" to="/cabezales/cabezal-t7h-430-45-toneladas" onClick={() => { openFormContact("cabezal-t7h-430-45-toneladas") }}>45 TON</a>
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
                            <a className="line2" to="/camiones/camion-20-toneladas-1256" onClick={() => { openFormContact("camion-20-toneladas-1256") }}>20 TON</a>
                            <a className="line2" to="/cabezales/cabezal-c7h-540" onClick={() => { openFormContact("cabezal-c7h-540") }}>48 TON</a>
                            <a className="line2" to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas" onClick={() => { openFormContact("cabezal-c7h-540-catalinas-48-toneladas") }}>48 TON - CATALINAS</a>
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
                            <a className="line2" src="" to="/volquetas/volqueta-t5g-280" onClick={() => { openFormContact("volqueta-t5g-280") }}>8-9 m3</a>
                            <a className="line2" src="" to="/volquetas/volqueta-t7h-430" onClick={() => { openFormContact("volqueta-t7h-430") }}>10-14 m3</a>
                            <a className="line2" src="" to="/proximamente" onClick={() => { openFormContact("volqueta-20-m3") }}>20 m3</a>
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
                            <a className="line2" src="" to="/proximamente-hidromek" onClick={() => { openFormContact("EXCAVADORA") }}>EXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek" onClick={() => { openFormContact("RETROEXCAVADORA") }}>RETROEXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek" onClick={() => { openFormContact("MINI-EXCAVADORA") }}>MINI EXCAVADORA</a>
                            <a className="line2" src="" to="/proximamente-hidromek" onClick={() => { openFormContact("RODILLO") }}>RODILLO</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={urlMedia + "home/mixer.webp"} width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">MIXER</p>
                        <div className="linksBox">
                            <a className="line2" src="" to="/mixer/mixer-a7-1257" onClick={() => { openFormContact("mixer-a7-1257") }}>A7 8-9 m3</a>
                            <a className="line2" src="" to="/proximamente" onClick={() => { openFormContact("mixer-c7h-12m3") }}>C7H 12 m3</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={urlMedia + "home/sunward.webp"} width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">SUNWARD</p>
                        <div className="linksBox">
                            <a className="line2" src="" to="/excavadoras/swe210" onClick={() => { openFormContact("swe210") }}>SWE210</a>
                            <a className="line2" src="" to="/excavadoras/swe365e" onClick={() => { openFormContact("swe365e") }}>SWE365E</a>
                        </div>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
            </div>

            {modalFormIsOpen &&
                <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
            }
        </>
    )
}

function Block4() {
    return (
        <div className="formulariolanding block4 boxBlock boxesIni posRelative content3">
            <div className="boxLeft playMotor colorLinksSobreTexto ">


                <FormContact url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />


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
        <div className="posRelative banner landingbanner">
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