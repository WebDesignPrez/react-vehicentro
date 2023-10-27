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
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"
let urlMedia = env.url
let pathUrl
let nombreBusqueda
let nombreBusqueda2
let mercadoObjetivo
let fortalezas
let seo

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

    //24 toneladas
    case "cabezal-t5g-4187":
      pathUrl = "cabezal-t5g-4187"
      nombreCamion = "Cabezal de 24 toneladas | T5G-4187"
      nombreBusqueda = "cabezal 24 toneladas"
      nombreBusqueda2 = "camion 24 toneladas"
      camionSerie = "T5G 4187 / 24 TON"
      nombreSerie = "Serie T5G"
      mercadoObjetivo = "Porta contenedores, niñera, transporte de vehículos, tanquero de combustible, aceite, alimentos, agua, etc carga seca, carga refrigerada, carga en general"
      fortalezas = "Motor man de alta tecnologia, gran experiencia a nivel mundial. Unificación de partes y componentes al estar disponible en otros modelos de la marca"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB24TT5G4187"
      images = [
        urlMedia + "24-toneladas/camion-blanco-sinotruk-de-24-toneladas-ecuador.webp",
        urlMedia + "24-toneladas/camion-sinotruk-de-24-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "340 HP"
      textoMotor2 = "Modelo T5G-4187 - 24 Ton"
      textoMotor3 = "Ficha técnica"
      precio = precios.v_cuatro
      seo = `Descubre el ${nombreBusqueda} de la ${nombreSerie} de Sinotruk en Vehicentro. Imbatibles en precio, capacidad y rentabilidad, con cabina abatible electrónicamente. Precio: ${precio}`
      cuotas = `Cuotas desde: ${precios.v_cuatro_cuota}`
      motor = urlMedia + "24-toneladas/motor-sinotruk-de-camion-de-24-toneladas-ecuador.webp"
      garantia = urlMedia + "24-toneladas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "24-toneladas/camion-de-24-toneladas-potencia-340hp.webp",
        urlMedia + "24-toneladas/camion-de-24-toneladas-cilindraje.webp",
        urlMedia + "24-toneladas/camion-de-24-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "24-toneladas/inyeccion.webp"
      ]
      cabina = urlMedia + "24-toneladas/cabina-de-camion-de-24-toneladas-sinotruk.webp"
      marcas = urlMedia + "24-toneladas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "24-toneladas/volante-deportivo.webp",
        urlMedia + "24-toneladas/cabina-con-litera.webp",
        urlMedia + "24-toneladas/radio-touch-mp5.webp",
        urlMedia + "24-toneladas/elevavidrios-electricos.webp",
        urlMedia + "24-toneladas/control-hidraulico.webp",
        urlMedia + "24-toneladas/componentes-wabco.webp"
      ];
      internas2 = [
        urlMedia + "24-toneladas/automatica.webp",
        urlMedia + "24-toneladas/palanca-de-cambios.webp",
        urlMedia + "24-toneladas/mandos-al-volante.webp",
        urlMedia + "24-toneladas/asiento-neumatico.webp",
        urlMedia + "24-toneladas/portavasos.webp",
        urlMedia + "24-toneladas/climatizador.webp"
      ];

      medidas = urlMedia + "24-toneladas/dimensiones-de-camion-de-24-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "24-toneladas/dimensiones-de-camion-de-24-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "24-toneladas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`Marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>

      contenedorVidaUtil = <div className="ajustetextovidautil"><p>Disponible en AMT</p></div>

      break;

    //28 toneladas
    case "cabezal-t7h-390-28-toneladas":
      pathUrl = ""
      console.log('28 ton')
      nombreCamion = "Cabezal de 28 toneladas | T7H-390"
      nombreBusqueda = "cabezal 28 toneladas"
      nombreBusqueda2 = "camion 28 toneladas"
      camionSerie = "T7H 390 / 28 TON"
      nombreSerie = "Serie T7H"
      mercadoObjetivo = "Niñeras, plataforma"
      fortalezas = "Tiene conexión al ABS de la carreta, modo de conducción eco, medio y potente"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/Web28TT7H390"
      images = [
        urlMedia + "28-toneladas/camion-blanco-sinotruk-de-28-toneladas-ecuador.webp",
        urlMedia + "28-toneladas/camion-blanco-sinotruk-de-28-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "390 HP"
      textoMotor2 = "Modelo T7H-390"
      textoMotor3 = "Ficha técnica"
      precio = precios.v_ocho
      seo = `Ofrecemos ${nombreBusqueda} de la ${nombreSerie} de Sinotruk. Vehicentro, número 1 en venta de cabezales en Ecuador. Mantenimientos al costo, 5 años de garantía con kilometraje ilimitado. Precio: ${precio}`
      cuotas = `Cuotas desde: ${precios.v_ocho_cuota}`
      motor = urlMedia + "28-toneladas/motor-sinotruk-de-camion-de-28-toneladas-ecuador.webp"
      garantia = urlMedia + "28-toneladas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "28-toneladas/camion-de-28-toneladas-potencia-390hp.webp",
        urlMedia + "28-toneladas/camion-de-28-toneladas-cilindraje.webp",
        urlMedia + "28-toneladas/camion-de-28-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "28-toneladas/inyeccion.webp"
      ]
      cabina = urlMedia + "28-toneladas/cabina-de-camion-de-28-toneladas-sinotruk.webp"
      marcas = urlMedia + "28-toneladas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "28-toneladas/volante-deportivo.webp",
        urlMedia + "28-toneladas/pantalla-android.webp",
        urlMedia + "28-toneladas/palanca.webp",
        urlMedia + "28-toneladas/computadora-bosch.webp",
        urlMedia + "28-toneladas/wabco-dos.webp"
      ];
      internas2 = [
        urlMedia + "28-toneladas/uneta.webp",
        urlMedia + "28-toneladas/wabco.webp",
        urlMedia + "28-toneladas/bloqueo.webp",
        urlMedia + "28-toneladas/control-hidraulico.webp"
      ];

      medidas = urlMedia + "28-toneladas/dimensiones-de-camion-de-28-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "28-toneladas/dimensiones-de-camion-de-28-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "28-toneladas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`Marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>

      contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
      break;

    //28 toneladas retardador
    case "cabezal-28-toneladas-retardador":
      pathUrl = ""
      console.log('28 ton retardador')
      nombreCamion = "Cabezal de 28 toneladas | T7H-390"
      nombreBusqueda = "cabezal 28 toneladas"
      nombreBusqueda2 = "camion 28 toneladas"
      camionSerie = "T7H 390 / 28 TON con retardador"
      nombreSerie = "Serie T7H"
      mercadoObjetivo = "Niñeras, plataforma"
      fortalezas = "Tiene conexión al ABS de la carreta, modo de conducción eco, medio y potente"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/Web28TT7H390"
      images = [
        urlMedia + "28-toneladas-retardador/camion-blanco-sinotruk-de-28-toneladas-ecuador.webp",
        urlMedia + "28-toneladas-retardador/camion-blanco-sinotruk-de-28-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "390 HP"
      textoMotor2 = "Modelo T7H-390"
      textoMotor3 = "Ficha técnica"
      precio = precios.v_ocho_r
      cuotas = `Cuotas desde: ${precios.v_ocho_r_cuota}`
      motor = urlMedia + "28-toneladas-retardador/motor-sinotruk-de-camion-de-28-toneladas-ecuador.webp"
      garantia = urlMedia + "28-toneladas-retardador/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "28-toneladas-retardador/camion-de-28-toneladas-potencia-390hp.webp",
        urlMedia + "28-toneladas-retardador/camion-de-28-toneladas-cilindraje.webp",
        urlMedia + "28-toneladas-retardador/camion-de-28-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "28-toneladas-retardador/inyeccion.webp"
      ]
      cabina = urlMedia + "28-toneladas-retardador/cabina-de-camion-de-28-toneladas-sinotruk.webp"
      marcas = urlMedia + "28-toneladas-retardador/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "28-toneladas-retardador/volante-deportivo.webp",
        urlMedia + "28-toneladas-retardador/pantalla-android.webp",
        urlMedia + "28-toneladas-retardador/palanca.webp",
        urlMedia + "28-toneladas-retardador/computadora-bosch.webp",
        urlMedia + "28-toneladas-retardador/wabco-dos.webp"
      ];
      internas2 = [
        urlMedia + "28-toneladas-retardador/uneta.webp",
        urlMedia + "28-toneladas-retardador/wabco.webp",
        urlMedia + "28-toneladas-retardador/bloqueo.webp",
        urlMedia + "28-toneladas-retardador/control-hidraulico.webp"
      ];

      medidas = urlMedia + "28-toneladas-retardador/dimensiones-de-camion-de-28-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "28-toneladas-retardador/dimensiones-de-camion-de-28-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "28-toneladas-retardador/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>

      contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
      break;

    //42 toneladas
    case "cabezal-t7h-390-42-toneladas":
      pathUrl = ""
      console.log('42 ton')
      nombreCamion = "Cabezal de 42 toneladas | T7H-390"
      nombreBusqueda = "cabezal 42 toneladas"
      nombreBusqueda2 = "camion 42 toneladas"
      camionSerie = "T7H 390 / 42 TON"
      nombreSerie = "Serie T7H"
      mercadoObjetivo = "Transporte pesado en general"
      fortalezas = "Frenos de tambor, accionado 100% de aire de doble circuito a todas las ruedas con ABS"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB42TT7H390"
      images = [
        urlMedia + "42-toneladas/camion-blanco-sinotruk-de-42-toneladas-ecuador.webp",
        urlMedia + "42-toneladas/camion-blanco-sinotruk-de-42-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "390 HP"
      textoMotor2 = "Modelo T7H-390"
      textoMotor3 = "Ficha técnica"
      precio = precios.c_dos
      seo = `Ofrecemos ${nombreBusqueda} de la ${nombreSerie} de Sinotruk. Vehicentro, número 1 en venta de cabezales en Ecuador. Mantenimientos al costo, 5 años de garantía con kilometraje ilimitado. Precio: ${precio}`
      cuotas = `Cuotas desde: ${precios.c_dos_cuota}`
      motor = urlMedia + "42-toneladas/motor-sinotruk-de-camion-de-42-toneladas-ecuador.webp"
      garantia = urlMedia + "42-toneladas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "42-toneladas/camion-de-42-toneladas-potencia-390hp.webp",
        urlMedia + "42-toneladas/camion-de-42-toneladas-cilindraje.webp",
        urlMedia + "42-toneladas/camion-de-42-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "42-toneladas/inyeccion.webp"
      ]
      cabina = urlMedia + "42-toneladas/cabina-de-camion-de-42-toneladas-sinotruk.webp"
      marcas = urlMedia + "42-toneladas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "42-toneladas/volante-deportivo.webp",
        urlMedia + "42-toneladas/pantalla-android.webp",
        urlMedia + "42-toneladas/palanca.webp",
        urlMedia + "42-toneladas/computadora-bosch.webp",
        urlMedia + "42-toneladas/wabco-dos.webp"
      ];
      internas2 = [
        urlMedia + "42-toneladas/uneta.webp",
        urlMedia + "42-toneladas/wabco.webp",
        urlMedia + "42-toneladas/bloqueo.webp",
        urlMedia + "42-toneladas/control-hidraulico.webp"
      ];

      medidas = urlMedia + "42-toneladas/dimensiones-de-camion-de-42-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "42-toneladas/dimensiones-de-camion-de-42-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "42-toneladas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>
      contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

      break;

    //45 toneladas
    case "cabezal-t7h-430-45-toneladas":
      pathUrl = "cabezal-t7h-430-45-toneladas"
      console.log('45 ton')
      nombreCamion = "Cabezal de 45 toneladas | T7H-430"
      nombreBusqueda = "cabezal 45 toneladas"
      nombreBusqueda2 = "camion 45 toneladas"
      camionSerie = "T7H 430 / 45 TON"
      nombreSerie = "Serie T7H"
      mercadoObjetivo = "Transporte pesado en general"
      fortalezas = "Frenos de tambor, accionado 100% de aire de doble circuito a todas las ruedas con ABS, freno al escape, con válvula de control electro neumático y freno a las válvulas (EVB)"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB45TT7H430"
      images = [
        urlMedia + "45-toneladas/camion-blanco-sinotruk-de-45-toneladas-ecuador.webp",
        urlMedia + "45-toneladas/camion-blanco-sinotruk-de-45-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "430 HP"
      textoMotor2 = "Modelo T7H-430"
      textoMotor3 = "Ficha técnica"
      precio = precios.c_cinco
      seo = `Ofrecemos ${nombreBusqueda} de la ${nombreSerie} de Sinotruk. Vehicentro, número 1 en venta de cabezales en Ecuador. Mantenimientos al costo, 5 años de garantía con kilometraje ilimitado. Precio: ${precio}`
      cuotas = `Cuotas desde: ${precios.c_cinco_cuota}`
      motor = urlMedia + "45-toneladas/motor-sinotruk-de-camion-de-45-toneladas-ecuador.webp"
      garantia = urlMedia + "45-toneladas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "45-toneladas/camion-de-45-toneladas-potencia-430hp.webp",
        urlMedia + "45-toneladas/camion-de-45-toneladas-cilindraje.webp",
        urlMedia + "45-toneladas/camion-de-45-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "45-toneladas/inyeccion.webp"
      ]
      cabina = urlMedia + "45-toneladas/cabina-de-camion-de-45-toneladas-sinotruk.webp"
      marcas = urlMedia + "45-toneladas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "45-toneladas/volante-deportivo.webp",
        urlMedia + "45-toneladas/pantalla-android.webp",
        urlMedia + "45-toneladas/palanca.webp",
        urlMedia + "45-toneladas/computadora-bosch.webp",
        urlMedia + "45-toneladas/wabco-dos.webp"
      ];
      internas2 = [
        urlMedia + "45-toneladas/uneta.webp",
        urlMedia + "45-toneladas/wabco.webp",
        urlMedia + "45-toneladas/bloqueo.webp",
        urlMedia + "45-toneladas/control-hidraulico.webp"
      ];

      medidas = urlMedia + "45-toneladas/dimensiones-de-camion-de-45-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "45-toneladas/dimensiones-de-camion-de-45-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "45-toneladas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`Marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>
      contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

      break;

    //48 toneladas
    case "cabezal-c7h-540":
      console.log('48 ton')
      nombreCamion = "Camion de 48 toneladas | C7H-540"
      camionSerie = "C7H 540 / 48 TON"
      nombreSerie = "Serie C7H"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO48TON"
      images = [
        urlMedia + "48-toneladas/portadac7h48.jpg",
        urlMedia + "48-toneladas/camion-amarillo-sinotruk-de-48-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "540 HP"
      textoMotor2 = "Modelo C7H-540"
      textoMotor3 = "Ficha técnica"
      precio = precios.c_ocho
      seo = seo = `Ofrecemos ${nombreBusqueda} de la ${nombreSerie} de Sinotruk. Vehicentro, número 1 en venta de cabezales en Ecuador. Mantenimientos al costo, 5 años de garantía con kilometraje ilimitado. Precio: ${precio}`
      console.log(seo)
      cuotas = `Cuotas desde: ${precios.c_ocho_cuota}`
      motor = urlMedia + "48-toneladas/motor-sinotruk-de-camion-de-48-toneladas-ecuador.webp"
      garantia = urlMedia + "48-toneladas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "48-toneladas/camion-de-48-toneladas-potencia-540hp.webp",
        urlMedia + "48-toneladas/camion-de-48-toneladas-cilindraje.webp",
        urlMedia + "48-toneladas/camion-de-48-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "48-toneladas/inyeccion.webp"
      ]
      cabina = urlMedia + "48-toneladas/cabina-de-camion-de-48-toneladas-sinotruk.webp"
      marcas = urlMedia + "48-toneladas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "48-toneladas/nevera.webp",
        urlMedia + "48-toneladas/palanca-de-cambios.webp",
        urlMedia + "48-toneladas/control-en-tablero.webp",
        urlMedia + "48-toneladas/control-en-el-tablero-dos.webp",
        urlMedia + "48-toneladas/volante-deportivo.webp",
        urlMedia + "48-toneladas/vidrios-electricos.webp"
      ];
      internas2 = [
        urlMedia + "48-toneladas/cabina-con-litera.webp",
        urlMedia + "48-toneladas/compartimientos.webp",
        urlMedia + "48-toneladas/bloqueo.webp",
        urlMedia + "48-toneladas/puerto-usb.webp",
        urlMedia + "48-toneladas/transmision-automatica.webp"
      ];

      medidas = urlMedia + "48-toneladas/dimensiones-de-camion-de-48-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "48-toneladas/dimensiones-de-camion-de-48-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "48-toneladas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`Marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>
      contenedorVidaUtil = <div className="ajustetextovidautil"><p>Disponible en AMT</p></div>

      break;



    //48 toneladas con catalinas
    case "cabezal-c7h-540-catalinas-48-toneladas":
      pathUrl = "cabezal-c7h-540-catalinas-48-toneladas"
      console.log('48 ton con catalinas')
      nombreCamion = "Cabezal de 48 toneladas con Catalinas | C7H-540"
      nombreBusqueda = "cabezal 48 toneladas"
      nombreBusqueda2 = "camion 48 toneladas"
      camionSerie = "C7H 540 / 48 TON con Catalinas"
      nombreSerie = "Serie C7H"
      mercadoObjetivo = "Transporte pesado en general"
      fortalezas = "Bajo consumo de combustible, doble tanque de aluminio, aros de alcoa, chasis reforzado, capacidad eje posterior, mayor comodidad cabina, camarote, full extras, Catalinas"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB48TC7H540OFFROAD"
      images = [
        urlMedia + "48-toneladas-catalinas/camion-blanco-sinotruk-de-48-toneladas-ecuador.webp",
        urlMedia + "48-toneladas-catalinas/camion-blanco-sinotruk-de-48-toneladas-de-frente-ecuador.webp"
      ];
      textoMotor1 = "540 HP"
      textoMotor2 = "Modelo C7H-540"
      textoMotor3 = "Ficha técnica"
      precio = precios.c_ocho_c
      seo = seo = `Ofrecemos ${nombreBusqueda} de la ${nombreSerie} de Sinotruk. Vehicentro, número 1 en venta de cabezales en Ecuador. Mantenimientos al costo, 5 años de garantía con kilometraje ilimitado. Precio: ${precio}`
      cuotas = `Cuotas desde: ${precios.c_ocho_c_cuota}`
      motor = urlMedia + "48-toneladas-catalinas/motor-sinotruk-de-camion-de-48-toneladas-ecuador.webp"
      garantia = urlMedia + "48-toneladas-catalinas/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "tecnologiaAlemanaLogoNew.png"
      caracteristicas = [
        urlMedia + "48-toneladas-catalinas/camion-de-48-toneladas-potencia-540hp.webp",
        urlMedia + "48-toneladas-catalinas/camion-de-48-toneladas-cilindraje.webp",
        urlMedia + "48-toneladas-catalinas/camion-de-48-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "48-toneladas-catalinas/inyeccion.webp"
      ]
      cabina = urlMedia + "48-toneladas-catalinas/cabina-de-camion-de-48-toneladas-sinotruk.webp"
      marcas = urlMedia + "48-toneladas-catalinas/marcas-vehicentro.webp"
      internas1 = [
        urlMedia + "48-toneladas-catalinas/nevera.webp",
        urlMedia + "48-toneladas-catalinas/palanca-de-cambios.webp",
        urlMedia + "48-toneladas-catalinas/control-en-tablero.webp",
        urlMedia + "48-toneladas-catalinas/control-en-el-tablero-dos.webp",
        urlMedia + "48-toneladas-catalinas/volante-deportivo.webp",
        urlMedia + "48-toneladas-catalinas/vidrios-electricos.webp"
      ];
      internas2 = [
        urlMedia + "48-toneladas-catalinas/cabina-con-litera.webp",
        urlMedia + "48-toneladas-catalinas/compartimientos.webp",
        urlMedia + "48-toneladas-catalinas/bloqueo.webp",
        urlMedia + "48-toneladas-catalinas/puerto-usb.webp",
        urlMedia + "48-toneladas-catalinas/catalinas.webp"
      ];

      medidas = urlMedia + "48-toneladas-catalinas/dimensiones-de-camion-de-48-toneladas-sinotruk.webp"
      medidasMovil = urlMedia + "48-toneladas-catalinas/dimensiones-de-camion-de-48-toneladas-sinotruk-responsive.webp"
      audio_motor = urlMedia + "48-toneladas-catalinas/motor.mp3"

      internas = internas1.concat(internas2)

      contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
        <img src={marcas} width="1500" height="750" className="slideMain" alt={`Marcas ${nombreBusqueda}, ${nombreBusqueda2}`} />
      </div>
      contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"

      break;


    default:
      break;
  }





  switch ((useParams("id").id)) {

    case "cabezal-t5g-4187":
      imagen = urlMedia + "24-toneladas/camion-de-24-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-t7h-390-28-toneladas":
      imagen = urlMedia + "28-toneladas/camion-de-28-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-28-toneladas-retardador":
      imagen = urlMedia + "28-toneladas/camion-de-28-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-t7h-390-42-toneladas":
      imagen = urlMedia + "42-toneladas/camion-de-42-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-t7h-430-45-toneladas":
      imagen = urlMedia + "45-toneladas/camion-de-45-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-c7h-540":
      imagen = urlMedia + "48-toneladas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
      break;

    case "cabezal-c7h-540-catalinas-48-toneladas":
      imagen = urlMedia + "48-toneladas-catalinas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
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
      <title>{nombreCamion} - Venta de Cabezales {nombreSerie} en Ecuador - Vehicentro</title>
      <meta name="description" content={seo} ></meta>
      <meta name="keywords" content={'cabezal, cabezales, venta de cabezales, cabezales en ecuador, cabezales en venta Ecuador , camiones en ecuador, camiones en venta Ecuador, venta cabezales Sinotruk, ' + nombreCamion + ', ' + nombreSerie + ', ' + nombreBusqueda + ', ' + nombreBusqueda2 + ', ' + camionSerie}></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta property="og:locale" content="es_EC"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={nombreCamion + ' - Venta de Cabezales ' + nombreSerie + ' en Ecuador - Vehicentro'}></meta>
      <meta property="og:description" content={seo}></meta>
      <meta property="og:url" content={'https://vehicentro.com/cabezales/' + pathUrl}></meta>
      <meta property="og:site_name" content="Vehicentro"></meta>
      <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
      <meta property="og:image" content={imagen}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:description" content={seo}></meta>
      <meta name="twitter:label1" content="Tiempo de lectura"></meta>
      <meta name="twitter:data1" content="5 minutos"></meta>
    </Helmet>

    <NavBarTop />

    <div className="boxesIni posRelative content2">
      <h1 style={{ fontSize: 0.01 }}>{nombreBusqueda}</h1>
      <div className="boxRight">
        {images.length > 1 &&
          <Slide>
            {slide1}
          </Slide>
        }
        {images.length == 1 &&
          <img src={images[0]} alt={`Portada ${nombreBusqueda}, ${nombreBusqueda2}`} />
        }
      </div>
      <div className="boxLeft playMotor contenedorTextoSobrepuesto">
        <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
        <div className="boxText flex-table row textoSobrepuesto">
          <div onClick={openFormContact} className="flex-row textoMotor1">{textoMotor1}</div>
          <div onClick={openFormContact} className="flex-row textoMotor2"><p>{`Cabezal ${textoMotor2}`}</p></div>
          <h2 onClick={openFormContact} className="flex-row textoMotor3">{textoMotor3}</h2>
          <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt={`Flecha ${nombreBusqueda}, ${nombreBusqueda2}`} /></div>
          <div onClick={openFormContact} className="flex-row textoMotor4">Escucha tu motor</div>
        </div>
        <div className="boxPlayerMotor ">
          <audio id="audioMotor" controls type="audio/mpeg"></audio>
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
          <div className="banner"><img src={tecnologia} alt={`Tecnologia ${nombreBusqueda}, ${nombreBusqueda2}`} /></div>
        </div>

        <div className="boxRightHeader  half text_icon_center" >
          <p className='vidaUtil'>{contenedorVidaUtil}</p>
        </div>

        <div className="boxRightHeader  half icon_right">
          <div className="banner"><img src={garantia} alt={`Garantia ${nombreBusqueda}, ${nombreBusqueda2}`} /></div>
        </div>

      </div>


      <div className="boxesIni posRelative partesbg">

        <div className="caracteristicasProductos" >
          <img src={caracteristicas[0]} width="1400" height="1000" className="slideMain" alt={`Caracteristicas ${nombreBusqueda}, ${nombreBusqueda2}`} />
        </div>

        <div className="caracteristicasProductos" >
          <img src={caracteristicas[1]} width="1400" height="1000" className="slideMain" alt={`Caracteristicas 2 ${nombreBusqueda}, ${nombreBusqueda2}`} />
        </div>

        <div className="caracteristicasProductos" >
          <img src={caracteristicas[2]} width="1400" height="1000" className="slideMain" alt={`Caracteristicas 3 ${nombreBusqueda}, ${nombreBusqueda2}`} />
        </div>

        <div className="caracteristicasProductos" >
          <img src={caracteristicas[3]} width="1400" height="1000" className="slideMain" alt={`Caracteristicas 4 ${nombreBusqueda}, ${nombreBusqueda2}`} />
        </div>

      </div>

      <div className="boxesIni posRelative">
        <div className="marcasbg">
          <img src={cabina} width="1500" height="1500" className="slideMain" alt={`Cabina ${nombreBusqueda}, ${nombreBusqueda2}`} />
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
      <h2 style={{ paddingLeft: 50, paddingTop: 30 }}>Medidas y dimensiones</h2>
      <h2 style={{ fontSize: 0.01 }}>{nombreSerie}</h2>
      <div className="bannerMedidas noResponsive"><img src={medidas} alt={`Medidas ${nombreBusqueda}, ${nombreBusqueda2}`} /></div>
      <div className="bannerMedidas responsive"><img src={medidasMovil} alt={`Medidas Moviles ${nombreBusqueda}, ${nombreBusqueda2}`} /></div>
    </div>


    <div className="boxesIni posRelative">
      <div className="centrado">
        <img src={imagen} width="1400" height="1000" className="slideMain" alt={`Postal ${nombreBusqueda}, ${nombreBusqueda2}`} />
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
