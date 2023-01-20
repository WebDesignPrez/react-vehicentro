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

let cuotas
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


function Mixer() {
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

        //M ixer A7 1257
        case "mixer-a7-1257":
            console.log('mixer 1257')
            nombreCamion = "Mixer A7 1257"
            camionSerie = "A7 1257 / MIXER"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBMIXERA71257"
            images = [
                "../images/a7/camion-blanco-sinotruk-de-3.5-toneladas-ecuador.webp",
                "../images/a7/camion-blanco-sinotruk-de-3.5-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "87 HP"
            textoMotor2 = "Modelo 1047 - 3.5 Ton"
            textoMotor3 = "Ficha técnica"
            precio = <div className="banner"><img src="../images/volqueta-280/logo-sinotruk.webp" /></div>
            cuotas = 'Cuotas desde: $447.00'
            motor = "../images/a7/motor-sinotruk-de-camion-de-3.5-toneladas-ecuador.webp"
            garantia = "../images/a7/5-anos-de-garantia.webp"
            tecnologia = "../images/a7/serie-100.webp"

            caracteristicas = [
                "../images/a7/transmision-10-2.webp",
                "../images/a7/camion-de-3.5-toneladas-cilindraje.webp",
                "../images/a7/camion-de-3.5-toneladas-freno-de-aire.webp",
                "../images/a7/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/a7/cabina-de-camion-de-3.5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                "../images/a7/volante-deportivo.webp",
                "../images/a7/ventilacion.webp"
            ];
            internas2 = [
                "../images/a7/palanca-de-cambios.webp",
                "../images/a7/bloqueo.webp"
            ];
            internas1b = [
                "../images/a7/radio-mp5.webp",
                "../images/a7/vidrios-electricos.webp"
            ];
            internas2b = [
                "../images/a7/cabina.webp"
            ];
            medidas = "../images/a7/dimensiones-de-camion-de-3.5-toneladas-sinotruk.webp"
            medidasMovil = "../images/a7/dimensiones-de-camion-de-3.5-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/a7/motor.mp3"


            internas = ((internas1.concat(internas2)).concat(internas1b)).concat(internas2b)
            //loop slider

            slide3 = internas1b.map((interna) =>
                <div className="each-slide-effect" >
                    <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
                    </div>
                </div>
            );

            slide3b = internas2b.map((interna) =>
                <div className="each-slide-effect" >
                    <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
                    </div>
                </div>
            );

            contenedorMarcas = <div style={{ display: `contents` }} >
                {internas1b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3}
                        </Fade>
                    </div>
                }
                {internas1b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas1b[0]} alt="" />
                    </div>
                }

                {internas2b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3b}
                        </Fade>
                    </div>
                }
                {internas2b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas2b[0]} alt="" />
                    </div>
                }
            </div>

            contenedorVidaUtil = <div className="banner"><img src="../images/3.5-toneladas/homologado.webp" /></div>
            break;

        default:
            break;
    }



    switch ((useParams("id").id)) {

        case "mixer-a7-1257":
            imagen = "../images/a7/volqueta-en-la-carretera.webp"
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

export default Mixer