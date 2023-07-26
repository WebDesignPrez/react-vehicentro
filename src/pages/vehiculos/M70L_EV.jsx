import { useEffect, useState, React } from "react";
import NavBarTop from '../../NavBarTop'
import './componentes/styles/galeria.css'
import Carousel from 'better-react-carousel'
import CompraMenu from './componentes/AmenidadesU70Pro'
import Footer from '../../components/Footer'
import InteriorU70Pro from './componentes/InteriorU70Pro'
import './componentes/styles/detalles.css'

import { Helmet } from "react-helmet";

import './componentes/styles/vehiculo.css';

import env from '../../config';

import FormContact from '../../../src/components/FormContact';

let urlMedia = env.url + "/vehiculos/"




function M70L_EV() {



  return (
    <>

      <Helmet>
        <title> M70L-EV - Vehicentro</title>
        <meta name="description" content={'Venta de furgonetas en Ecuador'} />
        <meta name="keywords" content="autos, SUV, venta de SUV, suv en ecuador"></meta>
        <meta name="author" content="Celimo Constante, Anthony Perez, Prez" />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>


      <NavBarTop />

      <Hero />

      {/* Characteristics */}
      <AmenidadesU70Pro />

      {/* Colors of car (Tecnologies) */}
      {/*       <Vehiculo/> */}

      {/* Two pages of three images */}
      {/* <Galeria/> */}

      {/* Component for interior images */}


      <FormularioU70ProMedios />

      {/* Security */}
      {/* <Detalles2 /> */}

      <Footer />


    </>
  )
}

function Hero() {



  return (
    < div className="block2" >
      <video playsInline preload width="1920" height="1076" controls autoPlay muted loop src="https://www.vehicentro.com/images/furgonetas/keitonVideo.mp4" className="videoWidth" />
    </div >
  )
}

function AmenidadesU70Pro() {
  let urlMedia = env.url + "/vehiculos/"
  let urlMedia2 = "https://www.vehicentro.com/images/m70lev/";
  return (
    <>
      <div className='compraBox'>

        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia2 + "bateria.png"} alt='Batería CATL' />
              <p>Batería CATL</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia2 + "controlEstabilidad.png"} alt='ESC -Control de Estabilidad' />
              <p>Control de Estabilidad</p>
            </div>
            <div className='izquierda'>
              <img src={urlMedia2 + "ac.png"} alt='Aire Acondicionado' />
              <p>Aire Acondicionado</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia2 + "freanado.png"} alt='EBD - Distribución Electrónica de Frenado' />
              <p>Distribución Electrónica de Frenado</p>
            </div>
          </div>
          <div className='dos furgo'>
            <div className='izquierda2'>
              <img className='suvCarro' src={urlMedia2 + "abs.png"} alt='ABS - Sistema Antibloqueo de Frenos' />
              <p>Sistema Antibloqueo de Frenos</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia2 + "eps.png"} alt='EPS - Dirección Asistida Eléctricamente' />
              <p>Dirección Asistida Eléctricamente</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia2 + "carga.png"} alt='Carga Rápida y Lenta' />
              <p>Carga Rápida y Lenta</p>
            </div>
          </div>
        </div>
        <div className='image'>
          <img src="https://www.vehicentro.com/images/m70lev/M70LEVBLANCA.png" />
        </div>
      </div>
      <div className='compraBox responsive'>
        <div className='option'>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia2 + "bateria.png"} alt='Batería CATL' />
              <p>Batería CATL</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia2 + "controlEstabilidad.png"} alt='ESC -Control de Estabilidad' />
              <p>Control de Estabilidad</p>
            </div>
          </div>
          <div className='uno'>
            <div className='izquierda'>
              <img src={urlMedia2 + "ac.png"} alt='Aire Acondicionado' />
              <p>Aire Acondicionado</p>
            </div>
            <div className='derecha'>
              <img src={urlMedia2 + "freanado.png"} alt='EBD - Distribución Electrónica de Frenado' />
              <p>Distribución Electrónica de Frenado</p>
            </div>
          </div>
          <div className='dos'>
            <div className='izquierda2'>
              <img className='suvCarro' src={urlMedia2 + "abs.png"} alt='ABS - Sistema Antibloqueo de Frenos' />
              <p>Sistema Antibloqueo de Frenos</p>
            </div>
            <div className='derecha2'>
              <img src={urlMedia2 + "eps.png"} alt='EPS - Dirección Asistida Eléctricamente' />
              <p>Dirección Asistida Eléctricamente</p>
            </div>
          </div>
          <div className='dos'>
            <div className='derecha2'>
              <img src={urlMedia2 + "carga.png"} alt='Carga Rápida y Lenta' />
              <p>Carga Rápida y Lenta</p>
            </div>
            <div className='derecha2'>
            </div>
          </div>
        </div>




        <div className='image'>
          <img src="https://www.vehicentro.com/images/m70l/KeytonBlanca.png" />
        </div>


      </div>
    </>
  )
}


const Vehiculo = () => {


  return (
    <div className='todo'>
      <div className='vehiculos'>

        <img className='carImage' src="" alt="U70PRO" />


        <div className='description'>
          <p>COLORES</p>
          <div className='buttons'>

          </div>
        </div>
      </div>

      <div className='textoVehiculos'>
        <img src='tecnologia.jpg' alt='Suv colores' />
      </div>

    </div>

  );
};




const Galeria = () => {





  return (
    <>
      <div className='galeria'>
        <h3 className='title'>Exterior</h3>
      </div>

      {

        <div className='carrousel'>
          <Carousel
            cols={3}
            rows={1}
            gap={30}
            loop
          >
            <Carousel.Item>
              <img width="100%" src="" alt="Faro delantero U70PRO" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="" alt="Direccionales U70PRO" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="" alt="Faro trasero U70PRO" />
            </Carousel.Item>

            <Carousel.Item>
              <img width="100%" src="" alt="Rines de 18 pulgadasU70PRO" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="" alt="Techo Panoramico U70PRO" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="" alt="Apertura sin llave U70PRO" />
            </Carousel.Item>


          </Carousel>
        </div>
      }



    </>
  )
}




const FormularioU70ProMedios = () => {







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
  let bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHFURM70L"




  return (
    <div className="boxesIni posRelative">
      <div className="centrado">
        <img src="https://www.vehicentro.com/images/m70lev/M70LEVFondo.jpg" width="1400" height="1000" className="slideMain" alt="SUV U70" />
      </div>
      <div>
        <FormContact url={bdc} camion="M70L" serie="Furgoneta" camionSerie="M70L-EV" />
      </div>
    </div>

  );
};




const Detalles2 = () => {



  return (
    <>
      <div className='page'>


        <div className='imagenes'>
          <img src="" alt="" />
        </div>
        <div className='seguridadBoxes'>
          <h3 className='title'>Sistemas de Seguridad</h3>
          <div className='arriba'>
            <div className='centrado'>
              <img src="seguridad1.png" alt='2 Airbags' />
              <p>2 Airbags</p>
            </div>
            <div className='centrado'>
              <img src="seguridad2.png" alt='Sistema antibloqueo de frenos' />
              <p>Frenos ABS</p>
            </div>
            <div className='centrado'>
              <img src="seguridad3.png" alt='Distribución electrónica fuerza de frenado' />
              <p>EBD Distribución electrónica fuerza de frenado</p>
            </div>
          </div>

          <div className='abajo'>
            <div className='centrado'>
              <img src="seguridad4.png" alt='Asistente de arranque en pendiente' />
              <p>HAC Asistente de arranque en pendiente</p>
            </div>
            <div className='centrado'>
              <img src="seguridad5.png" alt='Programa electrónico de estabilidad' />
              <p>EPS Programa electrónico de estabilidad</p>
            </div>
            <div className='centrado'>
              <img src="seguridad6.png" alt='Control electrónico de tracción' />
              <p>TCS Control electrónico de tracción</p>
            </div>
          </div>
          <div className='abajo'>
            <div className='centrado'>
              <img src="seguridad7.png" alt='Control de asistencia para descenso en pendiente' />
              <p>DAC Control de asistencia para descenso en pendiente</p>
            </div>
            <div className='centrado'>
              <img src="seguridad8.png" alt='Sistema antivuelco' />
              <p>ARP Sistema antivuelco</p>
            </div>
            <div className='centrado'>
              <img src="seguridad9.png" alt='Freno de estacionamiento electrónico' />
              <p>EPB Freno de estacionamiento electrónico</p>
            </div>
          </div>
        </div>

        {/*  Celular */}
        <div className='celular'>
          <h3 className='title'>Sistemas de Seguridad</h3>
          <div className='arribaCelular'>
            <div className='centrado'>
              <img src="seguridad1.png" alt='2 Airbags' />
              <p>2 Airbags</p>
            </div>
            <div className='centrado'>
              <img src="seguridad2.png" alt='Sistema antibloqueo de frenos' />
              <p>Frenos ABS</p>
            </div>

          </div>

          <div className='abajoCelular'>
            <div className='centrado'>
              <img src="seguridad3.png" alt='Distribución electrónica fuerza de frenado' />
              <p>EBD Distribución electrónica fuerza de frenado</p>
            </div>
            <div className='centrado'>
              <img src="seguridad4.png" alt='Asistente de arranque en pendiente' />
              <p>HAC Asistente de arranque en pendiente</p>
            </div>

          </div>
          <div className='abajoCelular'>
            <div className='centrado'>
              <img src="seguridad5.png" alt='Programa electrónico de estabilidad' />
              <p>EPS Programa electrónico de estabilidad</p>
            </div>
            <div className='centrado'>
              <img src="seguridad6.png" alt='Control electrónico de tracción' />
              <p>TCS Control electrónico de tracción</p>
            </div>
          </div>
          <div className='abajoCelular'>
            <div className='centrado'>
              <img src="seguridad7.png" alt='Control de asistencia para descenso en pendiente' />
              <p>DAC Control de asistencia para descenso en pendiente</p>
            </div>
            <div className='centrado'>
              <img src="seguridad8.png" alt='Sistema antivuelco' />
              <p>ARP Sistema antivuelco</p>
            </div>
          </div>
          <div className='abajoCelular ultimo'>
            <div className='centrado'>
              <img src="seguridad9.png" alt='Freno de estacionamiento electrónico' />
              <p>EPB Freno de estacionamiento electrónico</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default M70L_EV