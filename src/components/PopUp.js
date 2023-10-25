import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../popUp.css';
import { useCookies } from 'react-cookie';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location ,setLocation] = useState("");
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

    if(cookies.location){

      if(cookies.location === 'CO'){
        window.location.href = 'https://vehicentro.com/co/';
        setIsOpen(false)
      } 

      if(cookies.location === 'EC'){
        setIsOpen(false)
      }

    }
  }, []);

  useEffect(()=>{
    if(location === 'EC'){
      setIsOpen(!isOpen);
      setCookie('location',"EC",{maxAge:180})
    }else if(location ==='CO'){
      window.location.href = 'https://vehicentro.com/co/';
      setCookie('location',"CO",{maxAge:180})
    }


  }, [location])



  return (
    <div>
      {isOpen  &&(
        <div className="popup-overlay">
          <div className="popup-content">
            <div className='vhContainer'>
            <img
              src="https://vehicentro.com/images/logo-vehicentro.png"
              alt="Imagen del pop-up"
              className="popup-image"
            />
            </div>

            <div className="containerBanderas">

              <div className="popup-left" onClick={()=> setLocation("EC")}>
                <img
                  src="https://vehicentro.com/images/mapa-ecuador-prendido-nuevo.png"
                  alt="Imagen izquierda 1"
                  className="popup-left-image1"
                />
                <img
                  src="https://vehicentro.com/images/ecuador-vehicentro.png"
                  alt="Imagen izquierda 2"
                  className="popup-left-image2"
                />
              </div>

              <div className="popup-right" onClick={()=> setLocation("CO")}>
                <img
                  src="https://vehicentro.com/images/mapa-colombia-prendido-nuevo.png"
                  alt="Imagen derecha 1"
                  className="popup-right-image1"
                />
                <img
                  src="https://vehicentro.com/images/colombia-vehicentro.png"
                  alt="Imagen derecha 2"
                  className="popup-right-image2"
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;