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

    //swe210
    case "swe210":
      nombreCamion = "Excavadora SWE210"
      camionSerie = "SWE210"
      nombreSerie = "Excavadora"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB210SUNWARD"
      images = [
        urlMedia + "persNuevo/210.jpg"
      ];
      textoMotor1 = "SUNWARD"
      textoMotor2 = "SWE210"
      textoMotor3 = "Excavadora"
      precio = precios.e_210
      //cuotas = `Cuotas desde: ${precios.e_210_cuota}`
      motor = urlMedia + "swe210/motor.webp"
      garantia = urlMedia + "swe210/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "swe210/jpn.png"
      contenedorVidaUtil = <div className="banner"><img src={urlMedia + "swe210/isuzu.webp"} /></div>

      caracteristicas = [
        urlMedia + "swe210/camion-de-24-toneladas-potencia-340hp.webp",
        urlMedia + "swe210/camion-de-24-toneladas-cilindraje.webp",
        urlMedia + "swe210/camion-de-24-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "swe210/inyeccion.webp"
      ]
      cabina = urlMedia + "swe210/cabina.webp"
      marcas = urlMedia + "swe210/asiento.webp"
      internas1 = [
        urlMedia + "swe210/motor-giro.webp",
        urlMedia + "swe210/sunroof.webp"
      ];
      internas2 = [
        urlMedia + "swe210/cluster.webp",
        urlMedia + "swe210/asiento.webp"
      ];
      internas1b = [
        urlMedia + "swe210/bomba.webp"
      ];
      internas2b = [
        urlMedia + "swe210/radio.webp"
      ];

      medidas = urlMedia + "swe210/medidas.webp"
      medidasDos = urlMedia + "swe210/medidas-2.webp"
      medidasMovil = urlMedia + "swe210/medidas-movil.webp"
      medidasMovilDos = urlMedia + "swe210/medidas-movil-2.webp"
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
          {internas1b.length === 1 &&
            <img src={internas1b[0]} alt="" />
          }
        </div>
        <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
          {internas2b.length > 1 &&
            <Fade>
              {slide3b}
            </Fade>
          }
          {internas2b.length === 1 &&
            <img src={internas2b[0]} alt="" />
          }
        </div>
      </div>

      break;

    case "swe370e":
      nombreCamion = "Excavadora SWE370E"
      camionSerie = "SWE370E"
      nombreSerie = "Excavadora"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB365SUNWARD"
      images = [
        urlMedia + "persNuevo/SUNWARD_SWE370E.jpg"
      ];
      textoMotor1 = "SUNWARD"
      textoMotor2 = "SWE370E"
      textoMotor3 = "Excavadora"
      precio = precios.e_365
      //cuotas = `Cuotas desde: ${precios.e_365_cuota}`
      motor = urlMedia + "swe365e/motor.webp"
      garantia = urlMedia + "swe365e/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "swe365e/japonesa.png"
      contenedorVidaUtil = <div className="banner"><img src={urlMedia + "swe365e/isuzu.webp"} /></div>

      caracteristicas = [
        urlMedia + "swe365e/camion-de-24-toneladas-potencia-340hp.webp",
        urlMedia + "swe365e/camion-de-24-toneladas-cilindraje.webp",
        urlMedia + "swe365e/camion-de-24-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "swe365e/inyeccion.webp"
      ]
      cabina = urlMedia + "swe365e/cabina.webp"
      marcas = urlMedia + "swe365e/asiento.webp"
      internas1 = [
        urlMedia + "swe365e/motor-giro.webp",
        urlMedia + "swe365e/sunroof.webp"
      ];
      internas2 = [
        urlMedia + "swe365e/cluster.webp",
        urlMedia + "swe365e/asiento.webp"
      ];
      internas1b = [
        urlMedia + "swe365e/bomba.webp"
      ];
      internas2b = [
        urlMedia + "swe365e/radio.webp"
      ];

      medidas = urlMedia + "swe365e/medidas.webp"
      medidasDos = urlMedia + "swe365e/medidas-2.webp"
      medidasMovil = urlMedia + "swe365e/medidas-movil.webp"
      medidasMovilDos = urlMedia + "swe365e/medidas-movil-2.webp"
      audio_motor = urlMedia + "swe365e/motor.wav"

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

    case "swe600":
      nombreCamion = "Excavadora SWE600"
      camionSerie = "SWE600"
      nombreSerie = "Excavadora"
      bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB600SUNWARD"
      images = [
        urlMedia + "swe600/tresCuartos.webp"
      ];
      textoMotor1 = "SUNWARD"
      textoMotor2 = "SWE600"
      textoMotor3 = "Excavadora"
      precio = 'Bombas Kawasaki'
      //cuotas = `Cuotas desde: ${precios.e_365_cuota}`
      motor = urlMedia + "swe600/motor.webp"
      garantia = urlMedia + "swe365e/5-anos-de-garantia.webp"
      tecnologia = urlMedia + "swe365e/japonesa.png"
      contenedorVidaUtil = <div className="banner"><img src={urlMedia + "swe365e/isuzu.webp"} /></div>

      caracteristicas = [
        urlMedia + "swe365e/camion-de-24-toneladas-potencia-340hp.webp",
        urlMedia + "swe365e/camion-de-24-toneladas-cilindraje.webp",
        urlMedia + "swe365e/camion-de-24-toneladas-freno-a-las-valvulas.webp",
        urlMedia + "swe365e/inyeccion.webp"
      ]
      cabina = urlMedia + "swe600/cabina.webp"
      marcas = urlMedia + "swe365e/asiento.webp"
      internas1 = [
        urlMedia + "swe600/det1.webp",
        urlMedia + "swe600/det2.webp"
      ];
      internas2 = [
        urlMedia + "swe600/det3.webp",
        urlMedia + "swe600/det7.webp"
      ];
      internas1b = [
        urlMedia + "swe600/det5.webp",
      ];
      internas2b = [
        urlMedia + "swe600/det6.webp"
      ];

      medidas = urlMedia + "swe600/medidas.webp"
      medidasDos = urlMedia + "swe600/medidas2.webp"
      medidasMovil = urlMedia + "swe600/medidas-movil.webp"
      medidasMovilDos = urlMedia + "swe600/medidas-movil-2.webp"
      audio_motor = urlMedia + "swe365e/motor.wav"

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

    case "swe210":
      imagen = urlMedia + "swe210/excavadora-en-carretera-vehicentro-ecuador.webp"
      break;

    case "swe370e":
      imagen = urlMedia + "swe365e/excavadora-en-carretera-vehicentro-ecuador.webp"
      break;

    case "swe600":
      imagen = urlMedia + "swe600/form.jpg"
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
      <meta name="keywords" content="excavadora, excavadoras, venta de excavadoras, excavadoras en ecuador"></meta>
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
          <div onClick={openFormContact} className="flex-row textoMotor1">{textoMotor1}</div>
          <div onClick={openFormContact} className="flex-row textoMotor2"><h1 className="excavadoraH1">{`Excavadora ${textoMotor2}`}</h1></div>
          <div onClick={openFormContact} className="flex-row textoMotor3">Ficha técnica</div>
          <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt="arrow" /></div>
        </div>
      </div>

    </div>
    <div className="contentProduct">

      <div className="marcasbg textoImagenesProducto" >

        <div className="boxRightHeader  half text_icon_left" >
          {nombreCamion != "Excavadora SWE600" &&
            <p className='vidaUtil'>DESDE</p>
          }
          <p className='precioExcavadora' >{precio}</p>
          <p className='cuotas'>{cuotas}</p>
        </div>

        <div className="boxRightHeader  half icon_center" >
          <div className="banner"><img src={tecnologia} /></div>
          {/*           <p className="tecJaponesa">Tecnología Japonesa</p> */}
        </div>

        <div className="boxRightHeader  half text_icon_center" >
          <p className='vidaUtil'>{contenedorVidaUtil}</p>
          {nombreCamion != "Excavadora SWE600" &&
            <p className="bombaKawa">Bombas Kawasaki</p>
          }
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
      <div className="bannerMedidas noResponsive"><img src={medidasDos} /></div>
      <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
      <div className="bannerMedidas responsive"><img src={medidasMovilDos} /></div>
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