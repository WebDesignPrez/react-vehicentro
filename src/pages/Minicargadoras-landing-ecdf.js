import { useEffect, useState } from "react";
import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
import '../modalContact.css';
import FormContactFicha from "../components/FormContactFicha";
import { Helmet } from "react-helmet";
import env from '../config';
import precios from '../precios';

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
let medidasMovilDos
let medidasDos
let camionSerie
let nombreSerie
let cuotas
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"
let urlMedia = env.url

function Camion() {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //SWL3220
        case "swl3220":
            console.log('swl3220')
            nombreCamion = "MINICARGADORA SWL3220"
            camionSerie = "SWL3220"
            nombreSerie = "miniCargadoras"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDECDFSWL3220"
            images = [
                urlMedia + "swl3220/WEB-MINICARGADOR-1.webp"
            ];
            textoMotor1 = "SUNWARD"
            textoMotor2 = "SWL3220"
            textoMotor3 = "MINICARGADORA"
            precio = precios.me_SWL3220
            cuotas = `Cuotas desde: ${precios.me_SWL3220_cuota}`
            motor = urlMedia + "swl3220/motorMinicargadora.webp"
            garantia = urlMedia + "swe210/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "swl3220/WEB-LOGO-SUNWARD-1.png"
            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "swl3220/kubotaBomba.png"} /></div>

            caracteristicas = [
                urlMedia + "swe210/camion-de-24-toneladas-potencia-340hp.webp",
                urlMedia + "swe210/camion-de-24-toneladas-cilindraje.webp",
                urlMedia + "swe210/camion-de-24-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "swe210/inyeccion.webp"
            ]
            cabina = urlMedia + "swl3220/MiniInterna.webp"
            marcas = urlMedia + "swe210/asiento.webp"
            internas1 = [
                urlMedia + "swl3220/miniInterna1.webp",
            ];
            internas2 = [
                urlMedia + "swl3220/miniInterna2.webp"
            ];
            internas1b = [
                urlMedia + "swl3220/miniInterna3.webp"
            ];
            internas2b = [
                urlMedia + "swl3220/internaMini4.webp"
            ];

            medidas = urlMedia + "swl3220/medidasPc.webp"
            medidasDos = urlMedia + "swl3220/medidasMinicargadorResponsive2.webp"
            medidasMovil = urlMedia + "swl3220/medidasResposive.webp"
            medidasMovilDos = urlMedia + "swl3220/medidasMinicargador2.webp"
            audio_motor = urlMedia + "swe210/motor.wav"

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
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    {internas1b.length > 1 &&
                        <Fade>
                            {slide3}
                        </Fade>
                    }
                    {internas1b.length == 1 &&
                        <img src={internas1b[0]} alt="" />
                    }
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    {internas2b.length > 1 &&
                        <Fade>
                            {slide3b}
                        </Fade>
                    }
                    {internas2b.length == 1 &&
                        <img src={internas2b[0]} alt="" />
                    }
                </div>
            </div>
            break;
        default:
            break;
    }

    switch ((useParams("id").id)) {

        case "swl3220":
            imagen = urlMedia + "swl3220/minicargadorForm.webp"
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
            <meta name="description" content={'Venta de la ' + nombreCamion + ' Sinotruk de la serie Maquinaria en Ecuador'} />
            <meta name="keywords" content="minicargadora, minicargadoraw, venta de minicargadoras, minicargadoras en ecuador"></meta>
            <meta name="robots" content="index, follow"></meta>
        </Helmet>
        <NavBarTop />
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
                    <div onClick={openFormContact} className="flex-row textoMotor2"><h1>{`Minicargadora ${textoMotor2}`}</h1></div>
                    <div onClick={openFormContact} className="flex-row  textoMotor3">Ficha técnica</div>
                    <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt="arrow" /></div>
                </div>
            </div>

        </div>
        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    <p className='vidaUtil'>DESDE</p>
                    <p className='precioExcavadora' >{precio}</p>
                    <p className='cuotas'>{cuotas}</p>
                </div>

                <div className="boxRightHeader  half icon_center" >
                    <div className="banner"><img src={tecnologia} /></div>
                    {/*           <p className="tecJaponesa">Tecnología Japonesa</p> */}
                </div>

                <div className="boxRightHeader  half text_icon_center" >
                    <p className='vidaUtil'>{contenedorVidaUtil}</p>
                {/*     <p className="bombaKawa">Bombas Rexroth (Bosch)</p> */}
                </div>

                <div className="boxRightHeader  half icon_right">
                    <div className="banner"><img src={garantia} /></div>
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
            {/* <div className="bannerMedidas noResponsive mini"><img src={medidasDos} /></div> */}
            <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
            {/* <div className="bannerMedidas responsive"><img src={medidasMovilDos} /></div> */}
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