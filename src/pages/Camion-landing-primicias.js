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
import precios from '../precios';

let imagen
let images
let motor
let caracteristicas
let cabina
let marcas
let internas1
let internas2
let internas1b
let internas2b
let internas
let medidas
let medidasMovil
let audio_motor
let garantia
let textoMotor1
let textoMotor2
let textoMotor3
let precio
let nombreBusqueda
let contenedorMarcas
let tecnologia
let slide3
let slide3b
let contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
let nombreCamion
let bdc
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"
let nombreSerie
let camionSerie
let cuotas
let urlMedia = env.url

function Camion() {

    useEffect(() => {
        // Esta función se ejecutará después de que el componente se monte
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Opcional: agrega una animación de desplazamiento suave
        });
    }, []);

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

        case "2-5-ton":
            nombreCamion = "Camión de 2.5 toneladas"
            nombreBusqueda = "Camión de 2.5 toneladas"
            camionSerie = "2.5 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM2.5TON"
            images = [
                urlMedia + "2.5-toneladas/2.5_TON_3_4.webp",
                urlMedia + "2.5-toneladas/2.5_TON_FRONTAL.webp"
            ];
            textoMotor1 = "110HP"
            textoMotor2 = "NLS"
            textoMotor3 = "Ficha técnica"
            precio = precios.dos_cinco
            cuotas = `Cuotas desde: ${precios.dos_cinco_cuota}`
            motor = urlMedia + "2.5-toneladas/2.5_TON_MOTOR.webp"
            garantia = urlMedia + "3.5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "2.5-toneladas/frenos.png"

            caracteristicas = [
                urlMedia + "palancas/6mas1.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "2.5-toneladas/cabina2.5.jpg"
            marcas = ""
            internas1 = [
                urlMedia + "2.5-toneladas/volante2.5.jpg"
            ];
            internas2 = [
                urlMedia + "2.5-toneladas/vidrios2.5.jpg"
            ];
            internas1b = [
                urlMedia + "2.5-toneladas/radio2.5.jpg",
            ];
            internas2b = [
                urlMedia + "2.5-toneladas/palanca2.5.jpg"
            ];
            medidas = urlMedia + "2.5-toneladas/2.5_WEB_MEDIDAS.webp"
            medidasMovil = urlMedia + "medidas/2.5_TON_CEL.webp"
            audio_motor = urlMedia + "2.5-toneladas/2.5_TON_SM1.mp3"



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

                        <Fade><img src={internas1b[0]} alt="" /></Fade>

                    </div>
                }
                {internas1b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas1b[0]} alt="" />
                    </div>
                }

                {internas2b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade><img src={internas2b[0]} alt="" /></Fade>
                    </div>
                }
                {internas2b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas2b[0]} alt="" />
                    </div>
                }
            </div>

            contenedorVidaUtil = "Caja EATON"

            break;
        //10 toneladas
        case "10-ton":
            nombreCamion = "Camion de 10 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 10 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM10TON"
            images = [
                urlMedia + "portadasSinSorteo/10_TON_3_4.webp",
                urlMedia + "principal/10TON_FRONTAL.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Modelo T5G-1167 - 10 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.diez
            cuotas = `Cuotas desde: ${precios.diez_cuota}`
            motor = urlMedia + "10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            garantia = urlMedia + "10-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "10-toneladas/camion-de-10-toneladas-potencia-240hp.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = urlMedia + "10-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/asiento-neumatico-dos.webp",
                urlMedia + "10-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "10-toneladas/climatizador.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp",
                urlMedia + "10-toneladas/cabina.webp",
                urlMedia + "10-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "10-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>


            break;

        //9 toneladas
        case "9-ton":
            nombreCamion = "Camion de 9 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 9 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM9TON"
            images = [
                urlMedia + "portadasSinSorteo/9_TON_3_4.webp",
                urlMedia + "principal/9TON_FRONTAL.webp"
            ];
            textoMotor1 = "210 HP"
            textoMotor2 = "Modelo T5G-1167 - 9 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.nueve
            cuotas = `Cuotas desde: ${precios.nueve_cuota}`
            motor = urlMedia + "9-toneladas/motor-sinotruk-de-camion-de-9-toneladas-ecuador.webp"
            garantia = urlMedia + "9-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "9-toneladas/camion-de-9-toneladas-potencia-210hp.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-4-cilindros-en-linea.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = urlMedia + "9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "9-toneladas/volante-deportivo-de-camion-de-9-toneladas.webp",
                urlMedia + "9-toneladas/palanca-de-cambios-de-camion-de-9-toneladas.webp",
                urlMedia + "9-toneladas/asiento-neumatico.webp",
                urlMedia + "9-toneladas/eleva-vidrios-electricos.webp"
            ];
            internas2 = [
                urlMedia + "9-toneladas/climatizador.webp",
                urlMedia + "9-toneladas/radio-touch-mp5.webp",
                urlMedia + "9-toneladas/cabina.webp",
                urlMedia + "9-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "9-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //12 toneladas
        case "12-ton":
            console.log('12 toneladas')
            nombreCamion = "Camión de 12 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 12 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM12TON"
            images = [
                urlMedia + "portadasSinSorteo/12_TON_3_4.webp",
                urlMedia + "principal/12TON_FRONTAL.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Modelo T5G-1167 - 12 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.doce
            cuotas = `Cuotas desde: ${precios.doce_cuota}`
            motor = urlMedia + "12-toneladas/motor-sinotruk-de-camion-de-12-toneladas-ecuador.webp"
            garantia = urlMedia + "12-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "12-toneladas/camion-de-12-toneladas-potencia-240hp.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "12-toneladas/cabina-de-camion-de-12-toneladas-sinotruk.webp"
            marcas = urlMedia + "12-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "12-toneladas/volante-deportivo-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/palanca-de-cambios-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/asiento-neumatico-dos.webp",
                urlMedia + "12-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "12-toneladas/climatizador.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp",
                urlMedia + "12-toneladas/cabina.webp",
                urlMedia + "12-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "12-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //13 toneladas
        case "13-ton":
            console.log('13 toneladas')
            nombreCamion = "Camión de 13 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 13 TON (280HP)"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM13TON280"
            images = [
                urlMedia + "portadasSinSorteo/13_280_TON3_4.webp",
                urlMedia + "principal/13_280_TON_FRONTAL.webp"
            ];
            textoMotor1 = "280 HP"
            textoMotor2 = "Modelo T5G-1167 - 13 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.trece
            cuotas = `Cuotas desde: ${precios.trece_cuota}`
            motor = urlMedia + "13-toneladas/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = urlMedia + "13-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "13-toneladas/camion-de-13-toneladas-potencia-280hp.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "13-toneladas/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = urlMedia + "13-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "13-toneladas/volante-deportivo-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas/asiento-neumatico.webp",
                urlMedia + "13-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "13-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "13-toneladas/climatizador.webp",
                urlMedia + "13-toneladas/radio-touch-mp5.webp",
                urlMedia + "13-toneladas/cabina.webp",
                urlMedia + "13-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "13-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //13 toneladas 330hp
        case "13-ton-330":
            console.log('13 toneladas 330Hp')
            nombreCamion = "Camión de 13 toneladas 330Hp | T5G-1167"
            camionSerie = "T5G 1167 / 13 TON (330HP)"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM13TON330"
            images = [
                urlMedia + "portadasSinSorteo/13_330_TON3_4.webp",
                urlMedia + "principal/13_330_TON_FRONTAL.webp"
            ];
            textoMotor1 = "330 HP"
            textoMotor2 = "Modelo T5G-1167 - 13 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.trece_330
            cuotas = `Cuotas desde: ${precios.trece_330_cuota}`
            motor = urlMedia + "13-toneladas-330/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = urlMedia + "13-toneladas-330/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-potencia-330hp.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "13-toneladas-330/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = urlMedia + "13-toneladas-330/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "13-toneladas-330/volante-deportivo-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas-330/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas-330/asiento-neumatico.webp",
                urlMedia + "13-toneladas-330/eleva-vidrios-electricos.webp",
                urlMedia + "13-toneladas-330/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "13-toneladas-330/climatizador.webp",
                urlMedia + "13-toneladas-330/radio-touch-mp5.webp",
                urlMedia + "13-toneladas-330/cabina.webp",
                urlMedia + "13-toneladas-330/portavasos.webp"
            ];
            medidas = urlMedia + "13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "13-toneladas-330/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //18 toneladas
        case "18-ton":
            console.log('18 toneladas')
            nombreCamion = "Camión de 18 toneladas | T5G-1257"
            camionSerie = "T5G 1257 / 18 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM18TON"
            images = [
                urlMedia + "portadasSinSorteo/18_TON_FRONTAL.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-1257 - 18 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.d_ocho
            cuotas = `Cuotas desde: ${precios.d_ocho_cuota}`
            motor = urlMedia + "18-toneladas/motor-sinotruk-de-camion-de-18-toneladas-ecuador.webp"
            garantia = urlMedia + "18-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "18-toneladas/camion-de-18-toneladas-potencia-340hp.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "18-toneladas/cabina-de-camion-de-18-toneladas-sinotruk.webp"
            marcas = urlMedia + "18-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "18-toneladas/volante-deportivo-de-camion-de-18-toneladas.webp",
                urlMedia + "18-toneladas/palanca-de-cambios-de-camion-de-18-toneladas.webp",
                urlMedia + "18-toneladas/asiento-neumatico.webp",
                urlMedia + "18-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "18-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "18-toneladas/eje.webp",
                urlMedia + "18-toneladas/climatizador.webp",
                urlMedia + "18-toneladas/radio-touch-mp5.webp",
                urlMedia + "18-toneladas/cabina.webp",
                urlMedia + "18-toneladas/portavasos.webp"
            ];
            medidas = urlMedia + "18-toneladas/dimensiones-de-camion-de-18-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "18-toneladas/dimensiones-de-camion-de-18-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "18-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //19 toneladas
        case "19-ton":
            console.log('19 toneladas')
            nombreCamion = "Camión de 19 toneladas | T5G-1257"
            camionSerie = "T5G 1257 / 19.5 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM19.5TON"
            images = [
                urlMedia + "portadasSinSorteo/19_TON_BLANCO3_4.webp",
                urlMedia + "principal/19TON_AMARILLO_3_4.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-1257"
            textoMotor3 = "Ficha técnica"
            precio = precios.d_nueve
            cuotas = `Cuotas desde: ${precios.d_nueve_cuota}`
            motor = urlMedia + "19-toneladas/motor-sinotruk-de-camion-de-19-toneladas-ecuador.webp"
            garantia = urlMedia + "19-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "19-toneladas/camion-de-19-toneladas-potencia-340hp.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "19-toneladas/cabina-de-camion-de-19-toneladas-sinotruk.webp"
            marcas = urlMedia + "19-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "19-toneladas/volante-deportivo-de-camion-de-19-toneladas.webp",
                urlMedia + "19-toneladas/palanca-de-cambios-de-camion-de-19-toneladas.webp",
                urlMedia + "19-toneladas/asiento-neumatico.webp",
                urlMedia + "19-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "19-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "19-toneladas/climatizador.webp",
                urlMedia + "19-toneladas/radio-touch-mp5.webp",
                urlMedia + "19-toneladas/cabina.webp",
                urlMedia + "19-toneladas/portavasos.webp"
            ];
            medidas = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "19-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //3.5 toneladas
        case "3-5-ton":
            nombreCamion = "Camión de 3.5 toneladas | 1057"
            nombreBusqueda = "Camión de 3.5 toneladas"
            camionSerie = "NKS 3.5 TON"
            nombreSerie = "Serie N"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM3.5TON"
            images = [
                urlMedia + "3.5-toneladas/nuevo/3.5TON_3_4.webp",
                urlMedia + "3.5-toneladas/nuevo/3.5TON_FRONTAL.webp"
            ];
            textoMotor1 = "100% Aire"
            textoMotor2 = "Modelo 1057 - 3.5 Ton NKS"
            textoMotor3 = "Ficha técnica"
            precio = precios.tres_cinco
            cuotas = `Cuotas desde: ${precios.tres_cinco_cuota}`
            motor = urlMedia + "3.5-toneladas/motor-sinotruk-de-camion-de-3.5-toneladas-ecuador.webp"
            garantia = urlMedia + "3.5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "3.5-toneladas/nuevo/serie-100.webp"

            caracteristicas = [
                urlMedia + "palancas/6mas1.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "3.5-toneladas/cabina-de-camion-de-3.5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "3.5-toneladas/volante-deportivo.webp",
                urlMedia + "3.5-toneladas/ventilacion.webp"
            ];
            internas2 = [
                urlMedia + "3.5-toneladas/palanca-de-cambios.webp",
                urlMedia + "3.5-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "3.5-toneladas/radio-mp5.webp",
                urlMedia + "3.5-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                urlMedia + "3.5-toneladas/cabina.webp"
            ];
            medidas = urlMedia + "3.5-toneladas/nuevo/3.5WEB_MEDIDAS.webp"
            medidasMovil = urlMedia + "3.5-toneladas/nuevo/3.5CELULAR_MEDIDA.webp"
            audio_motor = urlMedia + "3.5-toneladas/motor.mp3"


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
                        <img src={internas1b[0]} alt={`Internas 1 ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
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
                        <img src={internas2b[0]} alt={`Internas 2 ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
                    </div>
                }
            </div>

            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "3.5-toneladas/homologado.webp"} />

            </div>
            break;

        case "camion-de-3-6-nks":
            nombreCamion = "Camión de 3.6 toneladas nks"
            nombreBusqueda = "Camión de 3.6 toneladas"
            camionSerie = "NKS 3.6 TON"
            nombreSerie = "Serie N"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM3.6TON"
            images = [
                urlMedia + "3.5-toneladas/nuevo/3.5TON_3_4.webp",
                urlMedia + "3.6nks/frontal.webp"
            ];
            textoMotor1 = "100% Aire"
            textoMotor2 = "3.6 Ton NKS"
            textoMotor3 = "Ficha técnica"
            precio = precios.tres_cinco
            cuotas = ``
            motor = urlMedia + "3.6nks/motor.webp"
            garantia = urlMedia + "3.5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "3.6nks/serieN.webp"

            caracteristicas = [
                urlMedia + "palancas/6mas1.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "3.5-toneladas/cabina-de-camion-de-3.5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "3.5-toneladas/volante-deportivo.webp",
                urlMedia + "3.5-toneladas/ventilacion.webp"
            ];
            internas2 = [
                urlMedia + "3.5-toneladas/palanca-de-cambios.webp",
                urlMedia + "3.5-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "3.5-toneladas/radio-mp5.webp",
                urlMedia + "3.5-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                urlMedia + "3.5-toneladas/cabina.webp"
            ];
            medidas = urlMedia + "3.6nks/3.6NksPc.webp"
            medidasMovil = urlMedia + "3.6nks/3.6NksCell.webp"
            audio_motor = urlMedia + "3.5-toneladas/motor.mp3"


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
                        <img src={internas1b[0]} alt={`Internas 1 ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
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
                        <img src={internas2b[0]} alt={`Internas 2 ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
                    </div>
                }
            </div>

            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "/3.6nks/Homologado.webp"} />

            </div>
            break;


        //3.6 toneladas
        case "3-6-ton":
            console.log('3.6 toneladas')
            nombreCamion = "Camión de 3.6 toneladas | 1047"
            camionSerie = "1047 / 3.6 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM3.6TON"
            images = [
                urlMedia + "principal/3.6TON_3_4.webp",
                urlMedia + "principal/3.6TON_FRONTAL.webp"
            ];
            textoMotor1 = "100% Aire"
            textoMotor2 = "Modelo 1047 - 3.6 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.tres_seis
            cuotas = `Cuotas desde: ${precios.tres_seis_cuota}`
            motor = urlMedia + "3.6-toneladas/motor-sinotruk-de-camion-de-3.6-toneladas-ecuador.webp"
            garantia = urlMedia + "3.6-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "3.6-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-potencia-87hp.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-cilindraje.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-freno-de-aire.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "3.6-toneladas/cabina-de-camion-de-3.6-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "3.6-toneladas/volante-deportivo.webp",
                urlMedia + "3.6-toneladas/ventilacion.webp"
            ];
            internas2 = [
                urlMedia + "3.6-toneladas/palanca-de-cambios.webp",
                urlMedia + "3.6-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "3.6-toneladas/radio-mp5.webp",
                urlMedia + "3.6-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                urlMedia + "3.6-toneladas/cabina.webp"
            ];
            medidas = urlMedia + "3.6-toneladas/dimensiones-de-camion-de-3.6-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "3.6-toneladas/dimensiones-de-camion-de-3.6-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "3.6-toneladas/motor.mp3"


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

            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "3.6-toneladas/homologado.webp"} /></div>
            break;


        //5 toneladas
        case "5-ton":
            console.log('5 toneladas')
            nombreCamion = "Camión de 5 toneladas | 1067"
            camionSerie = "1067 / 5 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM5TON"
            images = [
                urlMedia + "5-toneladas/5_TON_3_4.png",
                urlMedia + "5-toneladas/5_TON_FRONTAL.png"
            ];
            textoMotor1 = "141 HP"
            textoMotor2 = "Modelo 1067 - 5 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.cinco
            cuotas = `Cuotas desde: ${precios.cinco_cuota}`
            motor = urlMedia + "5-toneladas/motor-sinotruk-de-camion-de-5-toneladas-ecuador.webp"
            garantia = urlMedia + "5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "5-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "5-toneladas/camion-de-5-toneladas-potencia-141hp.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-cilindros.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-freno-de-aire.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "5-toneladas/cabina-de-camion-de-5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "5-toneladas/cabina-media.webp",
                urlMedia + "5-toneladas/cabina-amplia.webp"
            ];
            internas2 = [
                urlMedia + "5-toneladas/radio.webp",
                urlMedia + "5-toneladas/palanca.webp"
            ];
            internas1b = [
                urlMedia + "5-toneladas/mandos-al-volante.webp",
                urlMedia + "5-toneladas/ventilacion.webp"
            ];
            internas2b = [
                urlMedia + "5-toneladas/bloqueo.webp"
            ];
            medidas = urlMedia + "5-toneladas/5tonWeb.jpg"
            medidasMovil = urlMedia + "5-toneladas/5tonCell.jpg"
            audio_motor = urlMedia + "5-toneladas/motor.mp3"


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
            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "5-toneladas/chasisModelos.png"} /></div>


            break;

        //6 toneladas
        case "6-ton":
            console.log('6 toneladas')
            nombreCamion = "Camión de 6 toneladas | 1067"
            camionSerie = "1067 / 6 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM6TON"
            images = [
                urlMedia + "principal/6TON_3_4.webp",
            ];
            textoMotor1 = "154 HP"
            textoMotor2 = "Modelo 1067 - 6 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.seis
            cuotas = `Cuotas desde: ${precios.seis_cuota}`
            motor = urlMedia + "6-toneladas/motor-sinotruk-de-camion-de-6-toneladas-ecuador.webp"
            garantia = urlMedia + "6-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "6-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "6-toneladas/camion-de-6-toneladas-potencia-154hp.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-cilindraje.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-freno-de-aire.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "6-toneladas/cabina-de-camion-de-6-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "6-toneladas/palanca-de-cambios.webp",
                urlMedia + "6-toneladas/Mandos-al-volante.webp",
                urlMedia + "6-toneladas/vidrios-electricos.webp"
            ];
            internas2 = [
                urlMedia + "6-toneladas/frenos-de-aire.webp",
                urlMedia + "6-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "6-toneladas/tablero-con-pantalla.webp",
                urlMedia + "6-toneladas/ventilacion.webp"
            ];
            internas2b = [
                urlMedia + "6-toneladas/radio-android-con-icar.webp",
                urlMedia + "6-toneladas/Litera.webp"
            ];
            medidas = urlMedia + "6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "6-toneladas/motor.mp3"


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
                    <Fade >
                        {slide3}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Fade >
                        {slide3b}
                    </Fade>
                </div>
            </div>

            contenedorVidaUtil = "Disponible con caja Eaton"

            break;

        //8 toneladas
        case "8-ton":
            console.log('8 toneladas')
            nombreCamion = "Camión de 8 toneladas | 1147"
            camionSerie = "1147 / 8 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM8TON"
            images = [
                urlMedia + "principal/8TON_3_4.webp",
                urlMedia + "principal/8TON_FRONTAL.webp"
            ];
            textoMotor1 = "180 HP"
            textoMotor2 = "Modelo 1147 - 8 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.ocho
            cuotas = `Cuotas desde: ${precios.ocho_cuota}`
            motor = urlMedia + "8-toneladas/motor-sinotruk-de-camion-de-8-toneladas-ecuador.webp"
            garantia = urlMedia + "8-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "8-toneladas/camion-de-8-toneladas-potencia-180hp.webp",
                urlMedia + "8-toneladas/camion-de-8-toneladas-cilindraje.webp",
                urlMedia + "8-toneladas/camion-de-8-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "8-toneladas/inyeccion.webp"
            ]
            cabina = urlMedia + "8-toneladas/cabina-de-camion-de-8-toneladas-sinotruk.webp"
            marcas = urlMedia + "8-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "8-toneladas/palanca-de-cambios.webp",
                urlMedia + "8-toneladas/volante-deportivo.webp",
                urlMedia + "8-toneladas/radio-mp5.webp",
                urlMedia + "8-toneladas/cabina-amplia.webp"
            ];
            internas2 = [
                urlMedia + "8-toneladas/mandos-al-volante.webp",
                urlMedia + "8-toneladas/vidrios-amplios.webp",
                urlMedia + "8-toneladas/bloqueo.webp"
            ];
            medidas = urlMedia + "8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "8-toneladas/motor.mp3"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        //20 toneladas
        case "20-ton":
            console.log('20 toneladas')
            nombreCamion = "Camión de 20 toneladas | C7H-1256"
            camionSerie = "C7H 1256 / 20 TON"
            nombreSerie = "Serie C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM20TON"
            images = [
                urlMedia + "portadasSinSorteo/20_TON_3_4.webp",
                urlMedia + "principal/20TON_FRONTAL.webp"
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo C7H-1256"
            textoMotor3 = "20 Ton"
            precio = precios.veinte
            cuotas = `Cuotas desde: ${precios.veinte_cuota}`
            motor = urlMedia + "20-toneladas/motor-sinotruk-de-camion-de-20-toneladas-ecuador.webp"
            garantia = urlMedia + "20-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "20-toneladas/camion-de-20-toneladas-potencia-430hp.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-cilindraje.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "20-toneladas/inyeccion.webp"
            ]
            cabina = urlMedia + "20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = urlMedia + "20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "20-toneladas/palanca-de-cambios.webp",
                urlMedia + "20-toneladas/litera-de-descanso.webp",
                urlMedia + "20-toneladas/asiento-neumatico.webp",
                urlMedia + "20-toneladas/comportamiento-en-el-panel.webp",
                urlMedia + "20-toneladas/climatizador-y-mandos.webp"
            ];
            internas2 = [
                urlMedia + "20-toneladas/volante-deportivo.webp",
                urlMedia + "20-toneladas/radio-touch-mp5.webp",
                urlMedia + "20-toneladas/componentes-wabco.webp",
                urlMedia + "20-toneladas/retardador.webp",
                urlMedia + "20-toneladas/bodega.webp"
            ];
            medidas = urlMedia + "20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "20-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;


        case "20-ton-catalinas":
            nombreCamion = "Camión de 20 toneladas con Catalinas | C7H-1256"
            nombreBusqueda = "Camión de 20 toneladas con Catalinas"
            camionSerie = 'C7H 1256 / 20 TON con Catalinas'
            nombreSerie = "Serie C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDPM20TONCAT"
            images = [
                urlMedia + "portadasSinSorteo/20_C_TON_3_4.webp",
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo C7H-1256"
            textoMotor3 = "Ficha Técnica"
            precio = precios.veinte_catalinas
            cuotas = `Cuotas desde: ${precios.veinte_catalinas_cuota}`
            motor = urlMedia + "20Catalinas/motor20Catalinas.jpg"
            garantia = urlMedia + "20-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "alemania_negro.webp"
            caracteristicas = [
                urlMedia + "20-toneladas/camion-de-20-toneladas-potencia-430hp.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-cilindraje.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "20-toneladas/inyeccion.webp"
            ]
            cabina = urlMedia + "20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = urlMedia + "20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "20-toneladas/palanca-de-cambios.webp",
                urlMedia + "20-toneladas/litera-de-descanso.webp",
                urlMedia + "20-toneladas/asiento-neumatico.webp",
                urlMedia + "20-toneladas/comportamiento-en-el-panel.webp",
                urlMedia + "20-toneladas/climatizador-y-mandos.webp"
            ];
            internas2 = [
                urlMedia + "20-toneladas/volante-deportivo.webp",
                urlMedia + "20-toneladas/radio-touch-mp5.webp",
                urlMedia + "20-toneladas/componentes-wabco.webp",
                urlMedia + "20-toneladas/retardador.webp",
                urlMedia + "20-toneladas/bodega.webp"
            ];
            medidas = urlMedia + "20Catalinas/medidasMovil.jpg"
            medidasMovil = urlMedia + "20Catalinas/medidasCompu.jpg"
            audio_motor = urlMedia + "20-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt={`Tecnologia ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
            </div>

            break;
        default:
            break;
    }




    switch ((useParams("id").id)) {
        case "2-5-ton":
            imagen = urlMedia + "2.5-toneladas/2.5_TON_FOTO.webp"
            break;
        case "camion-de-3-6-nks":
            imagen = urlMedia + "3.5-toneladas/nuevo/3.5.webp"
            break;

        case "3-5-ton":
            imagen = urlMedia + "3.5-toneladas/nuevo/3.5.webp"
            break;

        case "3-6-ton":
            imagen = urlMedia + "postales/3.6TON_FOTO.webp"
            break;

        case "5-ton":
            imagen = urlMedia + "postales/5TON_FOTO.webp"
            break;

        case "6-ton":
            imagen = urlMedia + "postales/6TON_FOTO.webp"
            break;

        case "8-ton":
            imagen = urlMedia + "postales/8TON_FOTO.webp"
            break;

        case "9-ton":
            imagen = urlMedia + "postales/9TON_FOTO.webp"
            break;

        case "10-ton":
            imagen = urlMedia + "postales/10TON_FOTO.webp"
            break;

        case "12-ton":
            imagen = urlMedia + "postales/12TON_FOTO.webp"
            break;

        case "13-ton":
            imagen = urlMedia + "postales/13TON_280_FOTO.webp"
            break;

        case "13-ton-330":
            imagen = urlMedia + "postales/13TON_330_FOTO.webp"
            break;

        case "18-ton":
            imagen = urlMedia + "postales/18TON_FOTO.webp"
            break;

        case "19-ton":
            imagen = urlMedia + "postales/19TON_FOTO.webpp"
            break;

        case "20-ton":
            imagen = urlMedia + "postales/20TON_FOTO.webp"
            break;
        case "20-ton-catalinas":
            imagen = urlMedia + "postales/20_C_TON_FOTO.webp"
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
                    <div onClick={openFormContact} className="flex-row textoMotor1">{textoMotor1}</div>
                    <div onClick={openFormContact} className="flex-row textoMotor2">{textoMotor2}</div>
                    {
                        nombreCamion !== 'Camión de 2.5 toneladas' &&
                        <h2 onClick={openFormContact} className="flex-row textoMotor3">{textoMotor3}</h2>
                    }
                    {
                        nombreCamion == 'Camión de 2.5 toneladas' &&
                        <h2 onClick={openFormContact} className="flex-row textoMotor3 negro">{textoMotor3}</h2>
                    }
                    <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt="arrow" /></div>
                    {
                        nombreCamion !== 'Camión de 2.5 toneladas' &&
                        <div onClick={openFormContact} className="flex-row textoMotor4">Escucha tu motor</div>

                    }
                    {
                        nombreCamion == 'Camión de 2.5 toneladas' &&
                        <div onClick={openFormContact} className="flex-row textoMotor4 negro">Escucha tu motor</div>
                    }
                </div>
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls type="audio/mpeg"></audio>
                </div>
            </div>

        </div>

        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    {nombreCamion !== 'Camión de 2.5 toneladas' &&
                        <p className='vidaUtil'>DESDE</p>
                    }
                    {nombreCamion == 'Camión de 2.5 toneladas' &&
                        <p className='vidaUtil'>PRECIO DE LANZAMIENTO</p>
                    }
                    <p className='precioCamiones' >{precio}</p>
                    <p className='cuotas'>{cuotas}</p>
                </div>

                <div className="boxRightHeader  half icon_center" >
                    <div className="banner"><img src={tecnologia} /></div>
                </div>

                {nombreCamion !== 'Camión de 2.5 toneladas' &&
                    <div className="boxRightHeader  half text_icon_center" >
                        <p className='vidaUtil'>{contenedorVidaUtil}</p>
                    </div>
                }

                {nombreCamion == 'Camión de 2.5 toneladas' &&
                    <div className="boxRightHeader  half text_icon_center" >
                        <p className='vidaUtil newStyle'>{contenedorVidaUtil}</p>
                    </div>
                }


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

            {

                nombreCamion !== 'Camión de 2.5 toneladas' &&


                <div className="boxesIni posRelative">
                    <div className="marcasbg">
                        <img src={cabina} width="1500" height="1500" className="slideMain" alt={`cabina ${nombreBusqueda}`} title={`${nombreBusqueda}`} />
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
                        <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                            <Fade >
                                {slide2c}
                            </Fade>
                        </div>
                        {contenedorMarcas}

                    </div>
                </div>
            }
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
                    <a href="/landing/primicias"><img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a>
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
                    <a href="/landing/primicias"> <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a>
                </div>
            </div>
        </>
    )
}
export default Camion