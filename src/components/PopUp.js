import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../popUp.css';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  }, []);

 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = () => {
    window.location.href = 'https://vehicentro.com/co/';
  };

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
              <div className="popup-left" onClick={togglePopup}>
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
              <div className="popup-right" onClick={handleRedirect}>
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