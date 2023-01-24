import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";


let menuAux = 0
function Inicio2() {

    const [modalFormIsOpen, setFormIsOpen] = useState(false);


    useEffect(() => {

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeFormContact()
            }
        };

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
        <>
            <NavBar />
            <div className="mensaje">Gracias por contactarnos, muy pronto uno de nuestros asesores se comunicará con usted.</div>  
            <Menu2 />
            

            <Footer />
            <Modal />
        </>
    )
}

function Block1() {
    return (
        <div className="block1 boxBlock">
            <div>
                <div className="boxRight tecnologia">
                    <div className="boxLeft c7h">
                        <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/camiones.webm" className="videoWidth" />
                    </div>
                </div>
                <div className="overlayBox">
                    <p className="titleBox">PORTAFOLIO / PRODUCTOS</p>
                    <div className="linksBox">
                        <a src="" option="sinotruk">SERIE <span className="boldserie">100</span></a>
                        <a src="" href="/serie/t5g">SERIE <span className="boldserie">T5G</span></a>
                        <a src="" href="/serie/t7h">SERIE <span className="boldserie">T7H</span></a>
                        <a src="" href="/serie/c7h">SERIE <span className="boldserie">C7H</span></a>
                        <a src="" option="sinotruk">ESPECIALES</a>
                        <a src="" option="sunward">ESCAVADORAS</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="./images/home/repuestos.webp" alt="Vehicentro repuestos" />
                <div className="overlayBox">
                    <p className="titleBox"><span className="rojo">R</span>ESPALDO, <span className="rojo">R</span>ENTABILIDAD Y <span className="rojo">R</span>EPUESTOS</p>
                    <div className="linksBox">
                        <a src="">CONCESIONARIOS</a>
                        <a src="">REPUESTOS Y TALLERES</a>
                        <a src="">CALCULADORA DE RENDIMIENTO</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="./images/home/sinotrukeros.webp" alt="Vehicentro" />
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
            <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/vehinstein-tv.webm" className="videoWidth" />
        </div>
    )
}

function Block3() {
    return (
        <>
            <div className="block3 boxBlock">
                <div>
                    <img src="../images/home/serie-100.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <p className="titleBox2 sbold">100</p>
                        <div className="linksBox">
                            <a className="line2" src="" href="/camiones/camion-de-3-5-toneladas-1057" >3.5 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-de-5-toneladas-1067">5 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-de-6-toneladas-1067">6 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-8-toneladas-1147">8 TON</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-t5g.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <p className="titleBox2">T5G</p>
                        <div className="linksBox">
                            <a className="line2" src="" href="/camiones/camion-de-9-toneladas">9 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-10-toneladas-t5g-1167">10.8 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-12-toneladas-t5g-1167">12 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-13-toneladas-t5g-1167">13 TON 280 HP</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-13-toneladas-t5g-1167-330hp">13 TON 330 HP</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-de-18-toneladas-t5g-1257">18 TON</a><span>/</span>
                            <a className="line2" src="" href="/camiones/camion-de-19-toneladas-t5g-1257">19.5 TON</a><span>/</span>
                            <a className="line2" src="" href="/cabezales/cabezal-t5g-4187">24 TON</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-t7h.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <p className="titleBox2">T7H</p>
                        <div className="linksBox">
                            <a className="line2" src="" href="/cabezales/cabezal-t7h-390-28-toneladas">28 TON</a><span>/</span>
                            <a className="line2" src="" href="/cabezales/cabezal-t7h-390-42-toneladas">42 TON</a><span>/</span>
                            <a className="line2" src="" href="/cabezales/cabezal-t7h-430-45-toneladas">45 TON</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <img src="../images/home/serie-c7h.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <p className="titleBox2">C7H</p>
                        <div className="linksBox">
                            <a className="line2" src="" href="/camiones/camion-20-toneladas-1256">20 TON</a><span>/</span>
                            <a className="line2" src="" href="/cabezales/cabezal-c7h-540">48 TON</a><span>/</span>
                            <a className="line2" src="" href="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">48 TON (CATALINAS)</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/veinstein.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer"><div className="bannerTec"><img src="../images/home/tecnologia-alemana.webp" /></div>
                        <div className="boxPlayerMotor audiohome">
                            <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
                        </div>
                        <div className="linksBox">
                            <a className="line2" src="">ESCUCHA TU MOTOR</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/serie-volquetas.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox"></p>
                        <p className="titleBox2">VOLQUETAS</p>
                        <div className="linksBox">
                            <a className="line2" src="" href="/volquetas/volqueta-t5g-280">8-9 m3</a><span>/</span>
                            <a className="line2" src="" href="/volquetas/volqueta-t7h-430">10-14 m3</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block3 boxBlock row2">
                <div>
                    <img src="../images/home/mixer.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">VEHÍCULOS</p>
                        <p className="titleBox2">ESPECIALES</p>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/sector-ganadero.webp" width="360" height="464" alt="Vehicentro" />
                    <div className="bottomContainer">
                        <p className="titleBox">VEHÍCULOS</p>
                        <p className="titleBox2">SECTOR GANADERIA</p>
                        <div className="linksBox">
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../images/home/sector-publico.webp" width="360" height="464" alt="Vehicentro" />
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
                <img src="../images/home/sunward-banner.webp" alt="Vehicentro venta de excavadoras" />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain">Sunward</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
                    <div className="flex-row textModel"><NavLink to="/excavadoras/swe210">SWE210</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/excavadoras/swe365e">SWE365E</NavLink></div>
                </div>
            </div>
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src="./images/home/tamara.webm" className="videoWidth" />
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
                <li><a className="mouseA" href="/proximamente">VEHÍCULOS</a></li>
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