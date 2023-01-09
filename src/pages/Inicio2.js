import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import { Slide, Fade } from 'react-slideshow-image';


let bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBSINOHOME"
let nombreCamion = ""
let nombreSerie = ""
let camionSerie = ""
let audio_motor = "../images/10-toneladas/motor.mp3"
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
        const mouseOverHandler = event =>{
            if(!videoContainer.classList.contains("video50"))
                videoContainer.classList.add("video50");
            
            imgContainer.forEach(a=>{
                if(!a.classList.contains("img25")){
                    a.classList.add("img25")
                    //a.classList.add("imgHidden")
                    a.querySelector('.linksBox').classList.add("imgHidden")
                    //console.log(a.querySelector('.linksBox').classList)
                }
            })
        }

        const mouseLeaveHandler = event =>{
            if(videoContainer.classList.contains("video50")){
                //console.log("Sale")
                videoContainer.classList.remove("video50");
            }
            imgContainer.forEach(a=>{
                if(a.classList.contains("img25")){
                    a.classList.remove("img25")

                    a.querySelector('.linksBox').classList.remove("imgHidden")
                    //console.log(a.querySelector('.linksBox').classList)
                    
                }
            })
        }
        
        videoContainer.addEventListener('mouseenter', mouseOverHandler);
        videoContainer.addEventListener('mouseleave', mouseLeaveHandler);


        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };



/*         return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }; */
    }, []);


    function openFormContact() {
        setFormIsOpen(true)
    }

    function closeFormContact() {
        setFormIsOpen(false)
    }



    return (
        <>
            <NavBar />
            <Block1 />
            <Menu2 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Banner />
            <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            <Footer />
            <Modal />
        </>
    )
}

function Block1() {
    return (
        <div className="block1 boxBlock">
            <div id= "videoContainer">
                <div className="boxRight tecnologia">
                    <div className="boxLeft c7h">
                        <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/camiones.mp4" className="videoWidth" />
                    </div>
                </div>
                <div className="overlayBox">
                    <p className="titleBox">PORTAFOLIO / PRODUCTOS</p>
                    <div className="linksBox">
                        <NavLink src="" option="sinotruk">SERIE <span className="boldserie">100</span></NavLink>
                        <NavLink src="" to="/serie/t5g">SERIE <span className="boldserie">T5G</span></NavLink>
                        <NavLink src="" to="/serie/t7h">SERIE <span className="boldserie">T7H</span></NavLink>
                        <NavLink src="" to="/serie/c7h">SERIE <span className="boldserie">C7H</span></NavLink>
                        <NavLink src="" option="sinotruk">ESPECIALES</NavLink>
                        <NavLink src="" option="sunward">ESCAVADORAS</NavLink>
                    </div>
                </div>
            </div>
            <div className="imgContainerHeader imgHeader1">
                
                <div className="overlayBox">
                    <p className="titleBox"><span className="rojo">R</span>ESPALDO, <span className="rojo">R</span>ENTABILIDAD Y <span className="rojo">R</span>EPUESTOS</p>
                    <div className="linksBox">
                        <NavLink to="/concesionarios" src="">CONCESIONARIOS</NavLink>
                        <NavLink to="/concesionarios" src="">REPUESTOS Y TALLERES</NavLink>
                        <NavLink src="">CALCULADORA DE RENDIMIENTO</NavLink>
                    </div>
                </div>
            </div> 
            <div className="imgContainerHeader imgHeader2">
  
                <div className="overlayBox">
                    <p className="titleBox">SINOTRUKEROS</p>
                    <div className="linksBox">
                        <a className="line2" src="">EXPERIENCIA DE‎ ‎ ‎ ‎ ‎ ‎ ‎ <br></br> NUESTROS CLIENTES</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Block2() {
    return (
        <div className="block2">
            <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/vehinstein-tv.mp4" className="videoWidth" />
        </div>
    )
}

function Block3() {
    return (
        <>ƒ
            <div className="block3 boxBlock">
                <div>
                    <img src="../images/home/serie-100.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <p className="titleBox2 sbold">100</p>
                        <div className="linksBox">
                            <NavLink className="line2" to="/camiones/camion-de-3-5-toneladas-1057" >3.5 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-de-5-toneladas-1067">5 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-de-6-toneladas-1067">6 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-8-toneladas-1147">8 TON</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-t5g.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/t5g">T5G</NavLink>
                        <div className="linksBox">
                            <NavLink className="line2" to="/camiones/camion-de-9-toneladas">9 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-10-toneladas-t5g-1167">10.8 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-12-toneladas-t5g-1167">12 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-13-toneladas-t5g-1167">13 TON 280 HP</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-13-toneladas-t5g-1167-330hp">13 TON 330 HP</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-de-18-toneladas-t5g-1257">18 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/camiones/camion-de-19-toneladas-t5g-1257">19.5 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/cabezales/cabezal-t5g-4187">24 TON</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-t7h.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/t7h">T7H</NavLink>
                        <div className="linksBox">
                            <NavLink className="line2" to="/cabezales/cabezal-t7h-390-28-toneladas">28 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/cabezales/cabezal-t7h-390-42-toneladas">42 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/cabezales/cabezal-t7h-430-45-toneladas">45 TON</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <img src="../images/home/serie-c7h.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/c7h">C7H</NavLink>
                        <div className="linksBox">
                            <NavLink className="line2" to="/camiones/camion-20-toneladas-1256">20 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/cabezales/cabezal-c7h-540">48 TON</NavLink><span>/</span>
                            <NavLink className="line2" to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">48 TON (CATALINAS)</NavLink>
                        </div>
                    </div>
                </div>
                <div>


                    <Slide>

                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(../images/home/motor.webp)`, height: `23.2vw` }}>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(../images/home/veinstein.webp)`, height: `23.2vw` }}>
                            </div>
                        </div>
                    </Slide>


                    <div className="bottomContainer"><div className="bannerTec"><img src="../images/home/tecnologia-alemana.webp" width="590" height="170" alt="Tecnologia Alemana" /></div>
                        <div className="boxPlayerMotor audiohome">
                            <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
                        </div>
                        <div className="linksBox">
                            <a className="line2" src="">ESCUCHA TU MOTOR</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-volquetas.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">VOLQUETAS</p>
                        <div className="linksBox">
                            <NavLink className="line2" src="" to="/volquetas/volqueta-t5g-280">8-9 m3</NavLink><span>/</span>
                            <NavLink className="line2" src="" to="/volquetas/volqueta-t7h-430">10-14 m3</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <img src="../images/home/mixer.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">VEHÍCULOS</p>
                        <p className="titleBox2">ESPECIALES</p>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/sector-ganadero.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">VEHÍCULOS</p>
                        <p className="titleBox2">SECTOR GANADERÍA</p>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/sector-publico.webp" width="900" height="700" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">VEHÍCULOS</p>
                        <p className="titleBox2">SECTOR PÚBLICO</p>
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
                <img src="../images/home/sunward-banner.webp" alt="Vehicentro venta de excavadoras" height="1200" width="1395"  />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain">Sunward</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" width="31" height="22" /></div>
                    <div className="flex-row textModel"><NavLink to="/excavadoras/swe210">SWE210</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/excavadoras/swe365e">SWE365E</NavLink></div>
                </div>
            </div>
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/tamara.mp4" className="videoWidth" />
                </div>
            </div>

        </div>
    )
}

function Menu2() {
    return (
        <nav className="menu2 home2">
            <ul className="nav-links-h">
                <li ><a className="sunward mouseA" option="sinotruk">SINOTRUK</a></li>
                <li ><a className="sinotruk mouseA" option="sunward">SUNWARD</a></li>
                <li ><a className="concesionarios mouseA" option="concesionarios">CONCESIONARIOS</a></li>
                <li className="camionesCss"><NavLink to="/camion-en-uso/camion-de-48-toneladas">CAMIONES EN USO</NavLink></li>
                <li className="companiaCss"><NavLink to="/compania">COMPAÑÍA</NavLink></li>
                <li className="tecnologiaCss"><a>TECNOLOGÍA</a></li>
            </ul>
            <span className="telefonoInicio">032994740 - 0992048229</span>
        </nav>
    )
}

function Banner() {
    return (
        <div className="posRelative banner">
            <img src="./images/home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp" width="1790" height="590" className="slideMain" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <a href="/concesionarios"><div className="flex-row textMain textMain2">Puntos Vehicentro a nivel Nacional</div></a>
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