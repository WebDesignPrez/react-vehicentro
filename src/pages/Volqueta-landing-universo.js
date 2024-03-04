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
import env from '../config';
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
let urlMedia = env.url

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
            camionSerie = "VOLQUETA T5G-330 8-9M3"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDUNVOLQ89M3"
            images = [
                urlMedia + "principal/8-9VOLQUETA_3_4.webp",
                urlMedia + "principal/8-9_VOLQUETA_FRONTAL.webp"
            ];
            textoMotor1 = "330 HP"
            textoMotor2 = "Modelo T5G-330"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img src={urlMedia + "volqueta-280/logo-sinotruk.webp"} /></div>
            motor = urlMedia + "volqueta-280/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = urlMedia + "volqueta-280/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "protectorBlanco.webp"
            caracteristicas = [
                urlMedia + "volqueta-280/volqueta-con-potencia-340hp.webp",
                urlMedia + "volqueta-280/volqueta-cilindraje.webp",
                urlMedia + "volqueta-280/volqueta-con-freno-a-las-valvulas.webp",
                urlMedia + "volqueta-280/inyeccion.webp"
            ]
            cabina = urlMedia + "volqueta-280/cabina-de-volqueta-sinotruk-ecuador.webp"
            marcas = urlMedia + "volqueta-280/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "volqueta-280/volante-deportivo.webp",
                urlMedia + "volqueta-280/wabco.webp",
                urlMedia + "volqueta-280/control-en-cabina.webp",
                urlMedia + "volqueta-280/hidraulico.webp",
                urlMedia + "volqueta-280/portavasos.webp",
                urlMedia + "volqueta-280/cabina-con-litera.webp"
            ];
            internas2 = [
                urlMedia + "volqueta-280/climatizador.webp",
                urlMedia + "volqueta-280/radio-mp5.webp",
                urlMedia + "volqueta-280/asiento-neumatico.webp",
                urlMedia + "volqueta-280/elevavidrios-electrico.webp",
                urlMedia + "volqueta-280/palanca.webp"
            ];

            medidas = urlMedia + "volqueta-280/dimensiones-de-volqueta-de-8-9-m3-sinotruk.webp"
            medidasMovil = urlMedia + "volqueta-280/dimensiones-de-volqueta-de-8-9-m3-sinotruk-responsive.webp"
            audio_motor = urlMedia + "volqueta-280/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //volqueta 430
        case "volqueta-t7h-430":
            console.log('volqueta T7H-430')
            nombreCamion = "Volqueta | T7H-430"
            camionSerie = "VOLQUETA T5G 430-330 10-14M3"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDUNVOLQ1014M3"
            images = [
                urlMedia + "principal/10-14VOLQUETA_3_4.webp"
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo T7H-430"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img src={urlMedia + "volqueta-430/logo-sinotruk.webp"} /></div>
            motor = urlMedia + "volqueta-430/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = urlMedia + "volqueta-430/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "protectorBlanco.webp"
            caracteristicas = [
                urlMedia + "volqueta-430/volqueta-con-potencia-430hp.webp",
                urlMedia + "volqueta-430/volqueta-cilindraje.webp",
                urlMedia + "volqueta-430/volqueta-con-freno-a-las-valvulas.webp",
                urlMedia + "volqueta-430/inyeccion.webp"
            ]
            cabina = urlMedia + "volqueta-430/cabina-de-volqueta-sinotruk-ecuador.webp"
            marcas = urlMedia + "volqueta-430/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "volqueta-430/volante.webp",
                urlMedia + "volqueta-430/vidrios-electricos.webp",
                urlMedia + "volqueta-430/control-en-tablero-dos.webp",
                urlMedia + "volqueta-430/control-en-tablero.webp",
                urlMedia + "volqueta-430/nevera.webp",
                urlMedia + "volqueta-430/cabina-amplia.webp"
            ];
            internas2 = [
                urlMedia + "volqueta-430/compartimentos.webp",
                urlMedia + "volqueta-430/componente.webp",
                urlMedia + "volqueta-430/wabco-dos.webp",
                urlMedia + "volqueta-430/wabco.webp",
                urlMedia + "volqueta-430/palanca.webp"
            ];

            medidas = urlMedia + "volqueta-430/dimensiones-de-volqueta-de-10-14-m3-sinotruk.webp"
            medidasMovil = urlMedia + "volqueta-430/dimensiones-de-volqueta-de-10-14-m3-sinotruk-responsive.webp"
            audio_motor = urlMedia + "volqueta-430/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //volqueta 540
        case "volqueta-c7h-540":
            console.log('volqueta C7H')
            nombreCamion = "Volqueta | C7H-540"
            camionSerie = "VOLQUETA 20M3"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDUNVOLQUETA540"
            images = [
                urlMedia + "principal/20VOLQUETA_3_4.webp"
            ];
            textoMotor1 = "20 m3"
            textoMotor2 = "Modelo C7H-540"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img src={urlMedia + "volqueta-540/logo-sinotruk.webp"} /></div>
            motor = urlMedia + "volqueta-540/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = urlMedia + "volqueta-540/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "protectorBlanco.webp"
            caracteristicas = [
                urlMedia + "volqueta-540/volqueta-con-potencia-430hp.webp",
                urlMedia + "volqueta-540/volqueta-cilindraje.webp",
                urlMedia + "volqueta-540/volqueta-con-freno-a-las-valvulas.webp",
                urlMedia + "volqueta-540/inyeccion.webp"
            ]
            cabina = urlMedia + "volqueta-540/ventilacion.webp"
            marcas = urlMedia + "volqueta-540/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "volqueta-540/asiento.webp",
                urlMedia + "volqueta-540/litera.webp",
                urlMedia + "volqueta-540/camara.webp"
            ];
            internas2 = [
                urlMedia + "volqueta-540/emergencia-540.webp",
                urlMedia + "volqueta-540/caracteristicas-540.webp",
                urlMedia + "volqueta-540/volante-deportivo.webp"
            ];

            medidas = urlMedia + "volqueta-540/dimensiones-de-volqueta-de-10-14-m3-sinotruk.webp"
            medidasMovil = urlMedia + "volqueta-540/dimensiones-de-volqueta-de-10-14-m3-sinotruk-responsive.webp"
            audio_motor = urlMedia + "volqueta-540/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        case "volqueta-t7h-430-20m3":
            nombreCamion = "Volqueta | C7H-430 20m3"
            camionSerie = "VOLQUETA T7H 430 20M3"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDUNVOLQUETAT7H54020M3"
            images = [
                urlMedia + "T7H_3257_VOLQUETA_20M3/frontal.webp"
            ];
            textoMotor1 = "20 m3"
            textoMotor2 = "Modelo T7H-430"
            textoMotor3 = "Ficha técnica"

            precio = <div className="banner"><img className="menosImagenMovile" src={urlMedia + "9-sinotruk_logo.png"} /></div>
            motor = urlMedia + "volqueta-540/motor-sinotruk-de-volqueta-ecuador.webp"
            garantia = urlMedia + "T7H_3257_VOLQUETA_20M3/garantia.webp"
            tecnologia = urlMedia + "protectorBlanco.webp"
            caracteristicas = [
                urlMedia + "T7H_3257_VOLQUETA_20M3/palanca.webp",
                urlMedia + "T7H_3257_VOLQUETA_20M3/cilindros.webp",
                urlMedia + "T7H_3257_VOLQUETA_20M3/valvulas.webp",
                urlMedia + "T7H_3257_VOLQUETA_20M3/inyerccion.webp"
            ]
            cabina = urlMedia + "T7H_3257_VOLQUETA_20M3/cabina.webp"
            marcas = urlMedia + "volqueta-540/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "T7H_3257_VOLQUETA_20M3/inter1.webp",
                urlMedia + "T7H_3257_VOLQUETA_20M3/inter2.webp"
            ];
            internas2 = [
                urlMedia + "T7H_3257_VOLQUETA_20M3/inter3.webp",
                urlMedia + "T7H_3257_VOLQUETA_20M3/inter4.webp",
            ];

            medidas = urlMedia + "T7H_3257_VOLQUETA_20M3/medida.webp"
            medidasMovil = urlMedia + "T7H_3257_VOLQUETA_20M3/medidaCell.webp"
            audio_motor = urlMedia + "volqueta-540/motor.wav"

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
            imagen = urlMedia + "postales/VOLQUETA_330_FOTO.webp"
            break;

        case "volqueta-t7h-430":
            imagen = urlMedia + "postales/VOLQUETA_420_FOTO.webp"
            break;

        case "volqueta-c7h-540":
            imagen = urlMedia + "postales/VOLQUETA_540_FOTO.webp"
            break;

        case "volqueta-t7h-430-20m3":
            imagen = urlMedia + "T7H_3257_VOLQUETA_20M3/postal-Volqueta430.jpg"
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
    return <div className="landing">
        <Helmet>
            <title>{nombreCamion} - Vehicentro</title>
            <meta name="description" content={nombreCamion} />
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
        </Helmet>
        <Landingmenu />
        <div className="boxesIni posRelative content2">
            <div className="boxRight">
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
                    <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt="arrow" /></div>
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

        <Landingfooter />

        {modalFormIsOpen &&
            <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </div>
}

function Landingmenu() {
    return (
        <>
            <div className="menuHome">
                <div className="logoHome">
                    <a href="/landing/el-universo/"><img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a>
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
                    <a href="/landing/el-universo/"> <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a>
                </div>
            </div>
        </>
    )
}

export default Camion