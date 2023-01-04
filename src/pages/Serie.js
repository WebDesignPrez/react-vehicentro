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
import { NavLink } from "react-router-dom";

let imagen
let imagen2
let images
let series
let nombreSerieInd
let motor
let video

let cabina
let marcas
let internas1
let internas2
let internas3
let internas4

let audio_motor
let garantia

let tecnologia
let contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
let nombreCamion
let bdc
let nombreSerie
let camionSerie

function Serie() {
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

        //10 toneladas
        case "t5g":
            video = "../images/t5g/video.webm"
            imagen = "../images/t5g/contacto.webp"
            imagen2 = "../images/t5g/camion.webp"
            motor = "../images/t5g/motor.webp"
            nombreSerie = "Serie T5G"
            nombreSerieInd = "T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB10TT5G1167"
            series = [{
                serie: "T5G 1167",
                modelo: "9 TON",
                url: "/camiones/camion-de-9-toneladas"
            }, {
                serie: "T5G 1167",
                modelo: "10.8 TON",
                url: "/camiones/camion-10-toneladas-t5g-1167"
            }, {
                serie: "T5G 1167",
                modelo: "12 TON",
                url: "/camiones/camion-12-toneladas-t5g-1167"
            }, {
                serie: "T5G 1167",
                modelo: "13 TON",
                url: "/camiones/camion-13-toneladas-t5g-1167"
            }, {
                serie: "T5G 1167",
                modelo: "13 TON 330HP",
                url: "/camiones/camion-13-toneladas-t5g-1167-330hp"
            }, {
                serie: "T5G 1167",
                modelo: "18 TON",
                url: "/camiones/camion-de-18-toneladas-t5g-1257"
            }, {
                serie: "T5G 1167",
                modelo: "19.5 TON",
                url: "/camiones/camion-de-19-toneladas-t5g-1257"
            }, {
                serie: "T5G 4187",
                modelo: "24 TON",
                url: "/cabezales/cabezal-t5g-4187"
            }]

            console.log('10 Toneladas')
            images = [
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador-de-frente.webp"
            ];

            garantia = "../images/10-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/10-toneladas/tecnologia-alemana.webp"

            cabina = "../images/10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = "../images/10-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/asiento-neumatico-dos.webp"
            ];
            internas2 = [
                "../images/10-toneladas/climatizador.webp",
                "../images/10-toneladas/radio-touch-mp5.webp"
            ];
            internas3 = [
                "../images/10-toneladas/eleva-vidrios-electricos.webp",
                "../images/10-toneladas/radio-touch-mp5.webp"
            ];

            internas4 = [
                "../images/10-toneladas/cabina.webp",
                "../images/10-toneladas/portavasos.webp"
            ];

            audio_motor = "../images/10-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"


            break;

        //9 toneladas
        case "t7h":
            video = "../images/t7h/video.webm"
            imagen = "../images/t7h/contacto.webp"
            imagen2 = "../images/t7h/camion.webp"
            motor = "../images/t7h/motor.webp"
            nombreSerie = "Serie T7H"
            nombreSerieInd = "T7H"
            series = [{
                serie: "T7H 390",
                modelo: "28 TON",
                url: "/cabezales/cabezal-t7h-390-28-toneladas"
            }, {
                serie: "T7H 390",
                modelo: "42 TON",
                url: "/cabezales/cabezal-t7h-390-42-toneladas"
            }, {
                serie: "T7H 430",
                modelo: "45 TON",
                url: "/cabezales/cabezal-t7h-430-45-toneladas"
            }]


            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHCR9T1167"
            console.log('9 toneladas')
            images = [
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador.webp",
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador-de-frente.webp"
            ];

            garantia = "../images/9-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/9-toneladas/tecnologia-alemana.webp"

            cabina = "../images/9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = "../images/9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/9-toneladas/volante-deportivo-de-camion-de-9-toneladas.webp",
                "../images/9-toneladas/palanca-de-cambios-de-camion-de-9-toneladas.webp"
            ];
            internas2 = [
                "../images/9-toneladas/climatizador.webp",
                "../images/9-toneladas/radio-touch-mp5.webp"
            ];
            internas3 = [
                "../images/9-toneladas/cabina.webp",
                "../images/9-toneladas/portavasos.webp"
            ];

            internas4 = [
                "../images/9-toneladas/asiento-neumatico.webp",
                "../images/9-toneladas/eleva-vidrios-electricos.webp"
            ];

            audio_motor = "../images/9-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        //12 toneladas
        case "c7h":
            console.log('12 toneladas')
            video = "../images/t7h/video.webm"
            imagen = "../images/t7h/contacto.webp"
            imagen2 = "../images/t7h/camion.webp"
            motor = "../images/t7h/motor.webp"
            nombreSerie = "Serie C7H"
            nombreSerieInd = "C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB20TC7H1256"

            series = [{
                serie: "C7H 1256",
                modelo: "20 TON",
                url: "/camiones/camion-20-toneladas-1256"
            }, {
                serie: "C7H 540",
                modelo: "48 TON",
                url: "/cabezales/cabezal-c7h-540"
            }, {
                serie: "C7H 540 CATALINAS",
                modelo: "48 TON",
                url: "/cabezales/cabezal-c7h-540-catalinas-48-toneladas"
            }]


            garantia = "../images/12-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/12-toneladas/tecnologia-alemana.webp"

            cabina = "../images/20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = "../images/20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/20-toneladas/palanca-de-cambios.webp",
                "../images/20-toneladas/litera-de-descanso.webp",
                "../images/20-toneladas/asiento-neumatico.webp"
            ];
            internas2 = [
                "../images/20-toneladas/volante-deportivo.webp",
                "../images/20-toneladas/radio-touch-mp5.webp",
                "../images/20-toneladas/componentes-wabco.webp"

            ];
            internas3 = [
                "../images/20-toneladas/comportamiento-en-el-panel.webp",
                "../images/20-toneladas/climatizador-y-mandos.webp"
            ];

            internas4 = [
                "../images/20-toneladas/retardador.webp",
                "../images/20-toneladas/bodega.webp"
            ];

            audio_motor = "../images/12-toneladas/motor.mp3"

            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        default:
            break;
    }

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

    let slide2c = internas3.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    let slide2d = internas4.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    // ---- PÁGINA ----
    return <>
        <Helmet>
            <title>{nombreSerie} - Vehicentro</title>
            <meta name="description" content={nombreSerie} />
        </Helmet>

        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
            <div className="boxLeft c7h">
                    <video width="320" height="240" controls autoPlay={true} muted loop src={video} className="videoWidth" />
                </div>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls type="audio/mpeg"></audio>
                </div>
            </div>
        </div>
        <div className="boxesIni posRelative content2">

            <div className="boxRight nomSeries">
                <div className="serieTitle serieBox">
                    <p className="serieTitle1">SERIE</p>
                    <p>{nombreSerieInd}</p>
                </div>
                <div className="serieList serieBox">
                    {series.map((item, index) => (
                        <NavLink className="serieContainer" to={item.url}>
                            <p className="nombreSerie">
                                {item.serie}
                            </p>
                            <span className="modeloSerie">
                                {item.modelo}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={imagen2} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
        </div>
        <div className="serieMarcas marcasbg textoImagenesProducto" >

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
        <div className="marcasSeries">
            <img src="../images/marcasSeries.png" alt="Marcas Series" width="1532" height="355" />
        </div>

        <div className="boxesIni posRelative">
            <div className="marcasbg">
                <img src={cabina} width="1500" height="1500" className="slideMain" alt="Punto de Venta" />
            </div>

            <div className="marcasbg" style={{ display: `flex`, 'flexWrap': `wrap` }}>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Fade >
                        {slide2}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2b}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2c}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2d}
                    </Fade>
                </div>
            </div>
        </div>

        <div className="boxesIni posRelative centrado">
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
            <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </>
}

export default Serie