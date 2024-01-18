import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../popUp.css';
import { useCookies } from 'react-cookie';
import { Helmet } from "react-helmet";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  useEffect(() => {
    setIsOpen(true); // Abrir el pop-up al iniciar la aplicación
    unlockScroll(); // Desbloquear el desplazamiento al cerrar el pop-up

    if (cookies.location) {

      if (cookies.location === 'CO') {
        window.location.href = 'https://vehicentro.com/co/';
        setIsOpen(false)
      }

      if (cookies.location === 'EC') {
        window.location.href = '../home';
        setIsOpen(false)
      }

    }
  }, []);

  useEffect(() => {
    if (location === 'EC') {
      setIsOpen(!isOpen);
      window.location.href = '../home';
      setCookie('location', "EC", { maxAge: 180 })
    } else if (location === 'CO') {
      window.location.href = 'https://vehicentro.com/co/';
      setCookie('location', "CO", { maxAge: 180 })
    }


  }, [location])



  return (
    <>
      <Helmet>
        <title>Vehicentro - Venta de Camiones y Maquinaria en Ecuador</title>
        <link rel="canonical" href="https://vehicentro.com/"></link>
        <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador, Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja."></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador. Sinoman, El sueño Ecuador, Camiones Ambato, Cabezales Ambato, 
        Camiones Ibarra, Cabezales Ibarra, Camiones Quito Carapungo, Cabezales Quito Carapungo, Camiones Quito El Colibrí, Cabezales Quito El Colibrí, Camiones Quito Sur, Cabezales Quito Sur, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Quito Pifo, Cabezales Quito Pifo, Camiones Manta, Cabezales Manta, Camiones Guayaquil, Cabezales Guayaquil,
        Camiones Riobamba, Cabezales Riobamba, Camiones Cuenca, Cabezales Cuenca, Camiones Gualaceo, Cabezales Gualaceo, Camiones Machala, Cabezales Machala, Camiones Loja, Cabezales Loja. "></meta>
        <meta property="og:locale" content="es_EC"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Vehicentro - Venta de Camiones y Maquinaria en Ecuador"></meta>
        <meta property="og:description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."></meta>
        <meta property="og:url" content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"></meta>
        <meta property="og:site_name" content="Vehicentro"></meta>
        <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
        <meta property="og:image" content="https://www.vehicentro.com/images/vehicentro-logo-blanco.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content="Encuentra los mejores camiones de la marca Sinotruk en Ecuador. VISÍTANOS EN AMBATO, QUITO, GUAYAQUIL, RIOBAMBA, CUENCA Y MACHALA. Vehicentro te ofrece una amplia selección de camiones y maquinaria para tus necesidades comerciales. Mantente al día con nuestras ofertas y novedades en el sector automotriz en Ecuador."></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>
      <div>
        {isOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className='vhContainer'>
                <img
                  src="https://vehicentro.com/images/logo-vehicentro.webp"
                  alt="Logo Vehicentro venta de camiones Ecuador"
                  className="popup-image"
                  width="300" height="200"
                  loading="lazy"
                />
              </div>

              <div className="containerBanderas">

                <div className="popup-left" onClick={() => setLocation("EC")}>
                  <img
                    src="https://vehicentro.com/images/mapa-ecuador-prendido-nuevo.webp"
                    alt="Mapa Ecuador Vehicentro venta de camiones"
                    className="popup-left-image1"
                    width="300" height="200"
                    loading="lazy"
                  />
                  <img
                    src="https://vehicentro.com/images/ecuador-vehicentro.webp"
                    alt="Bandera Ecuador Vehicentro venta de camiones"
                    className="popup-left-image2"
                    width="300" height="200"
                    loading="lazy"
                  />
                </div>

                <div className="popup-right" onClick={() => setLocation("CO")}>
                  <img
                    src="https://vehicentro.com/images/mapa-colombia-prendido-nuevo.webp"
                    alt="Mapa Colombia Vehicentro venta de camiones"
                    className="popup-right-image1"
                    width="300" height="200"
                    loading="lazy"
                  />
                  <img
                    src="https://vehicentro.com/images/colombia-vehicentro.webp"
                    alt="Mapa Colombia Vehicentro venta de camiones"
                    className="popup-right-image2"
                    width="300" height="200"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PopUp;