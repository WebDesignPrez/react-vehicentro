import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
import { useEffect, useState } from "react";
import '../modalContact.css';
import FormContactFicha from "../components/FormContactFicha";
import { Helmet } from "react-helmet";

let imagen
let images
let motor
let caracteristicas
let cabina
let marcas
let internas1
let internas2
let internas2b
let internas1b
let internas
let medidas
let medidasMovil
let audio_motor
let garantia
let textoMotor1
let textoMotor2
let textoMotor3
let precio
let contenedorMarcas
let tecnologia
let slide3
let slide3b
let contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
let nombreCamion
let bdc
let camionSerie
let nombreSerie
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"


function Camion() {
    const [modalFormIsOpen, setFormIsOpen] = useState(false);

    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor

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
    //Comparacion paginas
    switch ((useParams("id").id)) {

        //volqueta 280 330
        case "volqueta-t5g-280":
            console.log('volqueta 330')
            nombreCamion = "Volqueta | T5G-330"
            camionSerie = "VOLQUETA T5G-330 8-9M2"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVOLQUETA330"
            images = [
                "../images/volqueta-280/volqueta-blanca-sinotruk-de-venta-en-ecuador.webp",
                "../images/volqueta-280/volqueta-blanca-de-frente-sinotruk-de-venta-en-ecuador.webp"
            ];
            textoMotor1 = "330 HP"
            textoMotor2 = "Modelo T5G-330"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img src="../images/volqueta-280/logo-sinotruk.webp" /></div>
            motor = "../images/volqueta-280/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = "../images/volqueta-280/5-anos-de-garantia.webp"
            tecnologia = "../images/volqueta-280/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/volqueta-280/volqueta-con-potencia-340hp.webp",
                "../images/volqueta-280/volqueta-cilindraje.webp",
                "../images/volqueta-280/volqueta-con-freno-a-las-valvulas.webp",
                "../images/volqueta-280/inyeccion.webp"
            ]
            cabina = "../images/volqueta-280/cabina-de-volqueta-sinotruk-ecuador.webp"
            marcas = "../images/volqueta-280/marcas-vehicentro.webp"
            internas1 = [
                "../images/volqueta-280/volante-deportivo.webp",
                "../images/volqueta-280/wabco.webp",
                "../images/volqueta-280/control-en-cabina.webp",
                "../images/volqueta-280/hidraulico.webp",
                "../images/volqueta-280/portavasos.webp",
                "../images/volqueta-280/cabina-con-litera.webp"
            ];
            internas2 = [
                "../images/volqueta-280/climatizador.webp",
                "../images/volqueta-280/radio-mp5.webp",
                "../images/volqueta-280/asiento-neumatico.webp",
                "../images/volqueta-280/elevavidrios-electrico.webp",
                "../images/volqueta-280/palanca.webp"
            ];

            medidas = "../images/volqueta-280/dimensiones-de-volqueta-de-8-9-m3-sinotruk.webp"
            medidasMovil = "../images/volqueta-280/dimensiones-de-volqueta-de-8-9-m3-sinotruk-responsive.webp"
            audio_motor = "../images/volqueta-280/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //volqueta 430
        case "volqueta-t7h-430":
            console.log('volqueta T7H-430')
            nombreCamion = "Volqueta | T7H-430"
            camionSerie = "VOLQUETA T5G 430-330 10-14M2"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVOLQUETA430"
            images = [
                "../images/volqueta-430/volqueta-blanca-sinotruk-de-venta-en-ecuador.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T7H-430"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img src="../images/volqueta-430/logo-sinotruk.webp" /></div>
            motor = "../images/volqueta-430/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = "../images/volqueta-430/5-anos-de-garantia.webp"
            tecnologia = "../images/volqueta-430/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/volqueta-430/volqueta-con-potencia-430hp.webp",
                "../images/volqueta-430/volqueta-cilindraje.webp",
                "../images/volqueta-430/volqueta-con-freno-a-las-valvulas.webp",
                "../images/volqueta-430/inyeccion.webp"
            ]
            cabina = "../images/volqueta-430/cabina-de-volqueta-sinotruk-ecuador.webp"
            marcas = "../images/volqueta-430/marcas-vehicentro.webp"
            internas1 = [
                "../images/volqueta-430/volante.webp",
                "../images/volqueta-430/vidrios-electricos.webp",
                "../images/volqueta-430/control-en-tablero-dos.webp",
                "../images/volqueta-430/control-en-tablero.webp",
                "../images/volqueta-430/nevera.webp",
                "../images/volqueta-430/cabina-amplia.webp"
            ];
            internas2 = [
                "../images/volqueta-430/compartimentos.webp",
                "../images/volqueta-430/componente.webp",
                "../images/volqueta-430/wabco-dos.webp",
                "../images/volqueta-430/wabco.webp",
                "../images/volqueta-430/palanca.webp"
            ];

            medidas = "../images/volqueta-430/dimensiones-de-volqueta-de-10-14-m3-sinotruk.webp"
            medidasMovil = "../images/volqueta-430/dimensiones-de-volqueta-de-10-14-m3-sinotruk-responsive.webp"
            audio_motor = "../images/volqueta-430/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        default:
            break;
    }



    switch ((useParams("id").id)) {

        case "volqueta-t5g-280":
            imagen = "../images/volqueta-280/volqueta-en-la-carretera.webp"
            break;

        case "volqueta-t7h-430":
            imagen = "../images/volqueta-430/volqueta-en-la-carretera.webp"
            break;

        default:
            break;
    }

    //loop primer slide
    let slide1 = images.map((image) =>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${image})`, height: `41vw` }}>
            </div>
        </div>
    );
    //loop segundo slide

    let slide2 = internas1.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    let slide2b = internas2.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );
    //loop slide movil
    let slide2c = internas.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    // ---- PÁGINA ----
    return <>
        <Helmet>
            <title>{nombreCamion} - Vehicentro</title>
            <meta name="description" content={nombreCamion} />
        </Helmet>
        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
                {images.length > 1 &&
                    <Slide>
                        {slide1}
                    </Slide>
                }
                {images.length == 1 &&
                    <img src={images[0]} alt="" />
                }
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row textoSobrepuesto">
                    <div onClick={openFormContact} className="flex-row  textoMotor1">{textoMotor1}</div>
                    <div onClick={openFormContact} className="flex-row  textoMotor2">{textoMotor2}</div>
                    <div onClick={openFormContact} className="flex-row  textoMotor3">{textoMotor3}</div>
                    <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src="../images/arrow-rojo.png" alt="arrow" /></div>
                    <div className="flex-row  textoMotor4">Escucha tu motor</div>
                </div>
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls></audio>
                </div>
            </div>

        </div>
        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    <p className='precioCamiones' >{precio}</p>
                </div>

                <div className="boxRightHeader  half icon_center" >
                    <div className="banner"><img src={tecnologia} /></div>
                </div>

                <div className="boxRightHeader  half text_icon_center" >
                    <p className='vidaUtil'>{contenedorVidaUtil}</p>
                </div>

                <div className="boxRightHeader  half icon_right">
                    <div className="banner"><img src={garantia} /></div>
                </div>

            </div>


            <div className="boxesIni posRelative partesbg">

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[0]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[1]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[2]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[3]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

            </div>

            <div className="boxesIni posRelative">
                <div className="marcasbg">
                    <img src={cabina} width="1500" height="1500" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="marcasbg" style={{ display: `flex`, 'flexWrap': `wrap` }}>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        {internas1.length > 1 &&
                            <Fade>
                                {slide2}
                            </Fade>
                        }
                        {internas1.length == 1 &&
                            <img src={internas1[0]} alt="" />
                        }
                    </div>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                        {internas2.length > 1 &&
                            <Fade>
                                {slide2b}
                            </Fade>
                        }
                        {internas2.length == 1 &&
                            <img src={internas2[0]} alt="" />
                        }
                    </div>
                    <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                        {internas.length > 1 &&
                            <Fade>
                                {slide2c}
                            </Fade>
                        }
                        {internas.length == 1 &&
                            <img src={internas[0]} alt="" />
                        }
                    </div>
                    {contenedorMarcas}

                </div>


            </div>

            <div className="bannerMedidas noResponsive"><img src={medidas} /></div>
            <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
        </div>
        <div className="boxesIni posRelative">
            <div className="centrado">
                <img src={imagen} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
            <div>
                <FormContact url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            </div>
        </div>
        <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
        <Footer />

        {modalFormIsOpen &&
            <FormContactFicha url={bdcFicha} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </>
}

export default Camion