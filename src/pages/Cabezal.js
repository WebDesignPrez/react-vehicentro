import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
import { useEffect } from "react";
import { nodeName } from "jquery";
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
let cuotas


function Camion() {

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //24 toneladas
        case "cabezal-t5g-4187":
            console.log('24 ton')
            nombreCamion = "Camion de 24 toneladas | T5G-4187"
            camionSerie = "T5G 4187 / 24 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB24TT5G4187"
            images = [
                "../images/24-toneladas/camion-blanco-sinotruk-de-24-toneladas-ecuador.webp",
                "../images/24-toneladas/camion-blanco-sinotruk-de-24-toneladas-ecuador.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-4187 - 24 Ton"
            textoMotor3 = "Ficha técnica"
            precio = "$61.990"
            cuotas = 'Cuotas desde: $1.117,00'
            motor = "../images/24-toneladas/motor-sinotruk-de-camion-de-24-toneladas-ecuador.webp"
            garantia = "../images/24-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/24-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/24-toneladas/camion-de-24-toneladas-potencia-340hp.webp",
                "../images/24-toneladas/camion-de-24-toneladas-cilindraje.webp",
                "../images/24-toneladas/camion-de-24-toneladas-freno-a-las-valvulas.webp",
                "../images/24-toneladas/inyeccion.webp"
            ]
            cabina = "../images/24-toneladas/cabina-de-camion-de-24-toneladas-sinotruk.webp"
            marcas = "../images/24-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/24-toneladas/volante-deportivo.webp",
                "../images/24-toneladas/cabina-con-litera.webp",
                "../images/24-toneladas/radio-touch-mp5.webp",
                "../images/24-toneladas/elevavidrios-electricos.webp",
                "../images/24-toneladas/control-hidraulico.webp",
                "../images/24-toneladas/componentes-wabco.webp"
            ];
            internas2 = [
                "../images/24-toneladas/automatica.webp",
                "../images/24-toneladas/palanca-de-cambios.webp",
                "../images/24-toneladas/mandos-al-volante.webp",
                "../images/24-toneladas/asiento-neumatico.webp",
                "../images/24-toneladas/portavasos.webp",
                "../images/24-toneladas/climatizador.webp"
            ];

            medidas = "../images/24-toneladas/dimensiones-de-camion-de-24-toneladas-sinotruk.webp"
            medidasMovil = "../images/24-toneladas/dimensiones-de-camion-de-24-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/24-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            contenedorVidaUtil = <div className="ajustetextovidautil"><p>Disponible en AMT</p></div>

            break;

        //28 toneladas
        case "cabezal-t7h-390-28-toneladas":
            console.log('28 ton')
            nombreCamion = "Camion de 28 toneladas | T7H-390"
            camionSerie = "T7H 390 / 28 TON"
            nombreSerie = "Serie T7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/Web28TT7H390"
            images = [
                "../images/28-toneladas/camion-blanco-sinotruk-de-28-toneladas-ecuador.webp",
                "../images/28-toneladas/camion-blanco-sinotruk-de-28-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "390 HP"
            textoMotor2 = "Modelo T7H-390"
            textoMotor3 = "Ficha técnica"
            precio = "$69.990"
            cuotas = 'Cuotas desde: $1.258,00'
            motor = "../images/28-toneladas/motor-sinotruk-de-camion-de-28-toneladas-ecuador.webp"
            garantia = "../images/28-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/28-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/28-toneladas/camion-de-28-toneladas-potencia-390hp.webp",
                "../images/28-toneladas/camion-de-28-toneladas-cilindraje.webp",
                "../images/28-toneladas/camion-de-28-toneladas-freno-a-las-valvulas.webp",
                "../images/28-toneladas/inyeccion.webp"
            ]
            cabina = "../images/28-toneladas/cabina-de-camion-de-28-toneladas-sinotruk.webp"
            marcas = "../images/28-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/28-toneladas/volante-deportivo.webp",
                "../images/28-toneladas/pantalla-android.webp",
                "../images/28-toneladas/palanca.webp",
                "../images/28-toneladas/computadora-bosch.webp",
                "../images/28-toneladas/wabco-dos.webp"
            ];
            internas2 = [
                "../images/28-toneladas/uneta.webp",
                "../images/28-toneladas/wabco.webp",
                "../images/28-toneladas/bloqueo.webp",
                "../images/28-toneladas/control-hidraulico.webp"
            ];

            medidas = "../images/28-toneladas/dimensiones-de-camion-de-28-toneladas-sinotruk.webp"
            medidasMovil = "../images/28-toneladas/dimensiones-de-camion-de-28-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/28-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            contenedorVidaUtil = "Disponible con retardador"
            break;

        //42 toneladas
        case "cabezal-t7h-390-42-toneladas":
            console.log('42 ton')
            nombreCamion = "Camion de 42 toneladas | T7H-390"
            camionSerie = "T7H 390 / 42 TON"
            nombreSerie = "Serie T7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB42TT7H390"
            images = [
                "../images/42-toneladas/camion-blanco-sinotruk-de-42-toneladas-ecuador.webp",
                "../images/42-toneladas/camion-blanco-sinotruk-de-42-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "390 HP"
            textoMotor2 = "Modelo T7H-390"
            textoMotor3 = "Ficha técnica"
            precio = "$81.990"
            cuotas = 'Cuotas desde: $1.469,00'
            motor = "../images/42-toneladas/motor-sinotruk-de-camion-de-42-toneladas-ecuador.webp"
            garantia = "../images/42-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/42-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/42-toneladas/camion-de-42-toneladas-potencia-390hp.webp",
                "../images/42-toneladas/camion-de-42-toneladas-cilindraje.webp",
                "../images/42-toneladas/camion-de-42-toneladas-freno-a-las-valvulas.webp",
                "../images/42-toneladas/inyeccion.webp"
            ]
            cabina = "../images/42-toneladas/cabina-de-camion-de-42-toneladas-sinotruk.webp"
            marcas = "../images/42-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/42-toneladas/volante-deportivo.webp",
                "../images/42-toneladas/pantalla-android.webp",
                "../images/42-toneladas/palanca.webp",
                "../images/42-toneladas/computadora-bosch.webp",
                "../images/42-toneladas/wabco-dos.webp"
            ];
            internas2 = [
                "../images/42-toneladas/uneta.webp",
                "../images/42-toneladas/wabco.webp",
                "../images/42-toneladas/bloqueo.webp",
                "../images/42-toneladas/control-hidraulico.webp"
            ];

            medidas = "../images/42-toneladas/dimensiones-de-camion-de-42-toneladas-sinotruk.webp"
            medidasMovil = "../images/42-toneladas/dimensiones-de-camion-de-42-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/42-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

            break;

        //45 toneladas
        case "cabezal-t7h-430-45-toneladas":
            console.log('45 ton')
            nombreCamion = "Camion de 45 toneladas | T7H-430"
            camionSerie = "T7H 430 / 45 TON"
            nombreSerie = "Serie T7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB45TT7H430"
            images = [
                "../images/45-toneladas/camion-blanco-sinotruk-de-45-toneladas-ecuador.webp",
                "../images/45-toneladas/camion-blanco-sinotruk-de-45-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo T7H-430"
            textoMotor3 = "Ficha técnica"
            precio = "$89.990"
            cuotas = 'Cuotas desde: $1.610,00'
            motor = "../images/45-toneladas/motor-sinotruk-de-camion-de-45-toneladas-ecuador.webp"
            garantia = "../images/45-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/45-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/45-toneladas/camion-de-45-toneladas-potencia-430hp.webp",
                "../images/45-toneladas/camion-de-45-toneladas-cilindraje.webp",
                "../images/45-toneladas/camion-de-45-toneladas-freno-a-las-valvulas.webp",
                "../images/45-toneladas/inyeccion.webp"
            ]
            cabina = "../images/45-toneladas/cabina-de-camion-de-45-toneladas-sinotruk.webp"
            marcas = "../images/45-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/45-toneladas/volante-deportivo.webp",
                "../images/45-toneladas/pantalla-android.webp",
                "../images/45-toneladas/palanca.webp",
                "../images/45-toneladas/computadora-bosch.webp",
                "../images/45-toneladas/wabco-dos.webp"
            ];
            internas2 = [
                "../images/45-toneladas/uneta.webp",
                "../images/45-toneladas/wabco.webp",
                "../images/45-toneladas/bloqueo.webp",
                "../images/45-toneladas/control-hidraulico.webp"
            ];

            medidas = "../images/45-toneladas/dimensiones-de-camion-de-45-toneladas-sinotruk.webp"
            medidasMovil = "../images/45-toneladas/dimensiones-de-camion-de-45-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/45-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

            break;

        //48 toneladas
        case "cabezal-c7h-540":
            console.log('48 ton')
            nombreCamion = "Camion de 48 toneladas | C7H-540"
            camionSerie = "C7H 540 / 48 TON"
            nombreSerie = "Serie C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB48TC7H540"
            images = [
                "../images/48-toneladas/camion-amarillo-sinotruk-de-48-toneladas-ecuador.webp",
                "../images/48-toneladas/camion-amarillo-sinotruk-de-48-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "540 HP"
            textoMotor2 = "Modelo C7H-540"
            textoMotor3 = "Ficha técnica"
            precio = "102.990"
            cuotas = 'Cuotas desde: $1.840,00'
            motor = "../images/48-toneladas/motor-sinotruk-de-camion-de-48-toneladas-ecuador.webp"
            garantia = "../images/48-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/48-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/48-toneladas/camion-de-48-toneladas-potencia-540hp.webp",
                "../images/48-toneladas/camion-de-48-toneladas-cilindraje.webp",
                "../images/48-toneladas/camion-de-48-toneladas-freno-a-las-valvulas.webp",
                "../images/48-toneladas/inyeccion.webp"
            ]
            cabina = "../images/48-toneladas/cabina-de-camion-de-48-toneladas-sinotruk.webp"
            marcas = "../images/48-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/48-toneladas/nevera.webp",
                "../images/48-toneladas/palanca-de-cambios.webp",
                "../images/48-toneladas/control-en-tablero.webp",
                "../images/48-toneladas/control-en-el-tablero-dos.webp",
                "../images/48-toneladas/volante-deportivo.webp",
                "../images/48-toneladas/vidrios-electricos.webp"
            ];
            internas2 = [
                "../images/48-toneladas/cabina-con-litera.webp",
                "../images/48-toneladas/compartimientos.webp",
                "../images/48-toneladas/bloqueo.webp",
                "../images/48-toneladas/puerto-usb.webp",
                "../images/48-toneladas/transmision-automatica.webp"
            ];

            medidas = "../images/48-toneladas/dimensiones-de-camion-de-48-toneladas-sinotruk.webp"
            medidasMovil = "../images/48-toneladas/dimensiones-de-camion-de-48-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/48-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = <div className="ajustetextovidautil"><p>Disponible en AMT</p></div>

            break;

        //48 toneladas con catalinas
        case "cabezal-c7h-540-catalinas-48-toneladas":
            console.log('48 ton con catalinas')
            nombreCamion = "Camion de 48 toneladas con Catalinas | C7H-540"
            camionSerie = "C7H 540 / 48 TON con Catalinas"
            nombreSerie = "Serie C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB48TC7H540OFFROAD"
            images = [
                "../images/48-toneladas-catalinas/camion-blanco-sinotruk-de-48-toneladas-ecuador.webp",
                "../images/48-toneladas-catalinas/camion-blanco-sinotruk-de-48-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "540 HP"
            textoMotor2 = "Modelo C7H-540"
            textoMotor3 = "Ficha técnica"
            precio = "106.990"
            cuotas = 'Cuotas desde: $1.910,00'
            motor = "../images/48-toneladas-catalinas/motor-sinotruk-de-camion-de-48-toneladas-ecuador.webp"
            garantia = "../images/48-toneladas-catalinas/5-anos-de-garantia.webp"
            tecnologia = "../images/48-toneladas-catalinas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/48-toneladas-catalinas/camion-de-48-toneladas-potencia-540hp.webp",
                "../images/48-toneladas-catalinas/camion-de-48-toneladas-cilindraje.webp",
                "../images/48-toneladas-catalinas/camion-de-48-toneladas-freno-a-las-valvulas.webp",
                "../images/48-toneladas-catalinas/inyeccion.webp"
            ]
            cabina = "../images/48-toneladas-catalinas/cabina-de-camion-de-48-toneladas-sinotruk.webp"
            marcas = "../images/48-toneladas-catalinas/marcas-vehicentro.webp"
            internas1 = [
                "../images/48-toneladas-catalinas/nevera.webp",
                "../images/48-toneladas-catalinas/palanca-de-cambios.webp",
                "../images/48-toneladas-catalinas/control-en-tablero.webp",
                "../images/48-toneladas-catalinas/control-en-el-tablero-dos.webp",
                "../images/48-toneladas-catalinas/volante-deportivo.webp",
                "../images/48-toneladas-catalinas/vidrios-electricos.webp"
            ];
            internas2 = [
                "../images/48-toneladas-catalinas/cabina-con-litera.webp",
                "../images/48-toneladas-catalinas/compartimientos.webp",
                "../images/48-toneladas-catalinas/bloqueo.webp",
                "../images/48-toneladas-catalinas/puerto-usb.webp",
                "../images/48-toneladas-catalinas/catalinas.webp"
            ];

            medidas = "../images/48-toneladas-catalinas/dimensiones-de-camion-de-48-toneladas-sinotruk.webp"
            medidasMovil = "../images/48-toneladas-catalinas/dimensiones-de-camion-de-48-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/48-toneladas-catalinas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

            break;


        default:
            break;
    }





    switch ((useParams("id").id)) {

        case "cabezal-t5g-4187":
            imagen = "../images/24-toneladas/camion-de-24-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "cabezal-t7h-390-28-toneladas":
            imagen = "../images/28-toneladas/camion-de-28-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "cabezal-t7h-390-42-toneladas":
            imagen = "../images/42-toneladas/camion-de-42-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "cabezal-t7h-430-45-toneladas":
            imagen = "../images/45-toneladas/camion-de-45-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "cabezal-c7h-540":
            imagen = "../images/48-toneladas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "cabezal-c7h-540-catalinas-48-toneladas":
            imagen = "../images/48-toneladas-catalinas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
            break;


        default:
            break;
    }


    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor
    })

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
                <Slide>
                    {slide1}
                </Slide>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row textoSobrepuesto">
                    <div className="flex-row  textoMotor1">{textoMotor1}</div>
                    <div className="flex-row  textoMotor2">{textoMotor2}</div>
                    <div className="flex-row  textoMotor3">{textoMotor3}</div>
                    <div className="flex-row textoMotorFlecha"><img src="../images/arrow-rojo.png" alt="arrow" /></div>
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
                    <p className='vidaUtil'>DESDE</p>
                    <p className='precioCamiones' >{precio}</p>
                    <p className='cuotas'>{cuotas}</p>
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
                        <Slide >
                            {slide2}
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                        <Slide >
                            {slide2b}
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                        <Slide >
                            {slide2c}
                        </Slide>
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
    </>
}

export default Camion