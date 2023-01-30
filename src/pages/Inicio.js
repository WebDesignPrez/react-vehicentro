import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
function Inicio() {
    return (
        <>
            <NavBar />
            <Slide />
            <Menu2 />
            <Content1 />
            <Content2 />
            <Content3 />
            <News />
            <Banner />
            <BannerContacto />
            <Footer />
            <Modal />
        </>
    )
}

function Slide() {
    return (
        <div className="boxesIniHeader main">

            <div className="boxLeftHeader">
                <img src="./images/home/vehicentro-la-potencia-que-levanta-al-ecuador.webp" width="1400" height="1000" className="slideMain" alt="Header 1" />
            </div>

            <div className="boxRightHeader inside" >
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img src="./images/home/motor-sinotruk-camiones-sinotruk-ecuador.webp" className="slideMain" alt="Header 2" />
                    <div className="boxText flex-table row textoSobrepuesto">
                        <div className="flex-row textMain ">Tecnología <br />Alemana</div>
                    </div>
                </div>

                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img src="./images/home/5-anos-de-garantia-vehicentro-ecuador.webp" className="slideMain" alt="Header 2" />
                    <div className="boxText flex-table row textoSobrepuesto">
                        <div className="flex-row textMain ">Veinstein</div>
                    </div>
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img src="./images/home/sinotrukeros-ecuador-vehicentro-camiones.webp" className="slideMain" alt="Header 2" />
                    <div className="boxText flex-table row textoSobrepuesto">
                        <div className="flex-row textMain ">Sinotrukeros del <br />Ecuador</div>
                    </div>
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp" className="slideMain" alt="Header 2" />
                    <div className="boxText flex-table row textoSobrepuesto">
                        <div className="flex-row textMain ">Repuestos a <br />nivel nacional</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Menu2() {
    return (
        <nav className="menu2">
            <ul className="nav-links-h">
                <li><NavLink to="/">INICIO</NavLink></li>
                <li ><a className="sinotruk mouseA" option="sinotruk">SINOTRUK</a></li>
                <li ><a className="sunward mouseA" option="sunward">SUNWARD</a></li>
                <li ><a className="keyton mouseA" option="keyton">KEYTON</a></li>
                <li ><a className="concesionarios mouseA" option="concesionarios">CONCESIONARIOS</a></li>
                <li className="camionesCss"><NavLink to="/sinotruk">CAMIONES EN USO</NavLink></li>
                <li className="companiaCss"><NavLink to="/compania">COMPAÑIA</NavLink></li>
                <li className="tecnologiaCss"><NavLink to="/sinotruk">TECNOLOGIA</NavLink></li>
            </ul>
        </nav>
    )
}


function Content1() {
    return (
        <div className="boxesIni posRelative content3">

            <div className="boxRight tecnologia">

                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted poster="./images/home/vehicentro-vehinstein-sinotruk-ecuador.webp" src="./images/home/c7h.mp4" className="videoWidth" />
                </div>
            </div>
            <div className="boxLeft playMotor colorLinksSobreTexto">
                <img src="./images/home/marcas-con-las-que-vehicentro-trabaja-en-ecuador.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain">C7H</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
                    <div className="flex-row textModel"><NavLink to="/camion/camion-20-toneladas-1256">C7H 1256</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/cabezales/cabezal-c7h-540">C7H 540</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/cabezales/cabezal-c7h-540-catalinas-48-toneladas">C7H 540 catalinas</NavLink></div>
                </div>
            </div>
        </div>
    )

}

function Content2() {
    return (
        <div className="boxesIni posRelative content2">
            <div className="boxLeft playMotor">
                <img src="./images/home/motor-sinotruk-para-camiones-sinotruk-vehicentro-ecuador.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxPlayer">
                    <audio id="audioMotor" controls></audio>
                </div>

            </div>
            <div className="boxRight tecnologia">

                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted poster="./images/home/vehicentro-vehinstein-sinotruk-ecuador.webp" src="./images/home/vehinstein.mp4" className="videoWidth" />
                </div>
            </div>
        </div>
    )

}



function Content3() {
    return (
        <div className="boxesIni posRelative content3">
            <div className="boxLeft t5g">

                <div className="boxLeft c7h">
                    <video width="320" height="240" preload="none" playsInline={true} controls loop muted poster="./images/home/vehicentro-serie-t5g-camiones-de-venta-en-ecuador-sinotruk.webp" src="./images/home/t5g.mp4" className="videoWidth" />
                </div>
            </div>
            <div>
                <div className="boxRightText colorLinksSobreTexto">
                    <img src="./images/home/camion-naranja-sinotruk-de-venta-en-vehicentro-ecuador.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    <div className="boxText flex-table row" style={{ 'bottom': `40px`, 'left': `105px` }}>
                        <div className="flex-row textMain"> </div>

                        <div className="flex-row textModel"><NavLink to="/camiones/camion-de-9-toneladas">9 TON</NavLink></div>
                        <div className="flex-row textModel"><NavLink to="/camiones/camion-10-toneladas-t5g-1167">10.8 TON</NavLink></div>
                        <div className="flex-row textModel"><NavLink to="/camiones/camion-12-toneladas-t5g-1167">12 TON</NavLink></div>
                        <div className="flex-row textModel"><NavLink to="/camiones/camion-13-toneladas-t5g-1167">13 TON (280 HP)</NavLink></div>
                    </div>
                    <div className="boxText flex-table row">
                        <div className="flex-row textMain">T5G</div>
                        <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>

                        <div className="flex-row textModel"><NavLink to="/camiones/camion-13-toneladas-t5g-1167-330hp">13 TON (330 HP)</NavLink></div>
                        <div className="flex-row textModel"><NavLink to="/camiones/camion-de-19-toneladas-t5g-1257">19.5 TON</NavLink></div>
                        <div className="flex-row textModel"><NavLink to="/cabezales/cabezal-t5g-4187">24 TON</NavLink></div>
                    </div>
                    <div className="boxText"></div>
                </div>
            </div>
        </div>
    )

}

function News() {
    return (
        <div className="boxesIni posRelative news">
            <div className="boxNews colorLinksSobreTexto">
                <img src="./images/home/vehicentro-camion-blanco-serie-100-3-5-6--8-toneladas-sinotruk-ecuador.webp" width="1000" height="760" className="slideMain" alt="Series100" />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain">Serie 100</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-3-5-toneladas-1057">3.5 TON</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-5-toneladas-1067">5 TON</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-6-toneladas-1067">6 TON</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-8-toneladas-1147">8 TON</NavLink></div>
                </div>
            </div>
            <div className="boxNews colorLinksSobreTexto">
                <img src="./images/home/venta-de-volquetas-y-mixer-en-ecuador.webp" width="1000" height="760" className="slideMain" alt="Mixer" />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain textMain2">Volquetas y Mixer</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-3-5-toneladas-1057">T5G 280-330</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-5-toneladas-1067">T5G 430-330</NavLink></div>
                    <div className="flex-row textModel"><NavLink to="/camiones/camion-de-6-toneladas-1067">A7 1257 / MIXER</NavLink></div>

                </div>
            </div>
            <div className="boxNews">
                <img src="./images/home/venta-de-excavadoras-en-ecuador.webp" width="1000" height="760" className="slideMain" alt="Excavadora" />
                <div className="boxText flex-table row">
                    <div className="flex-row textMain textMain2">Excavadora</div>
                    <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
                </div>
            </div>
        </div>
    )
}
function Banner() {
    return (
        <div className="posRelative banner">
            <img src="./images/home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp" width="1790" height="590" className="slideMain" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <div className="flex-row textMain textMain2">Puntos Vehicentro a nivel Nacional</div>
                <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" /></div>
            </div>
        </div>
    )
}
function Contact() {
    return (
        <div className="boxesContact posRelative">
            <p className="buttonContact">QUIERO SER CONTACTADO AHORA</p>
            <p className="textContact">Dejanos tus datos y uno de nuestros asesores se contactara contigo</p>
        </div>
    )
}

function Modal() {
    return (
        <div id="modalContainer"></div>
    )
}

export default Inicio