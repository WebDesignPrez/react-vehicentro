/* import React, { useState, useEffect } from 'react';

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Mostrar el popup al iniciar la aplicación
  }, []);

  return (
    <div className={`popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">
        <div className='logo_vh'>
          <img src='https://vehicentro.com/images/logo-vehicentro.png' />
        </div>
        <div className='banderas'>
          <a className='linkEcuador' onClick={closePopup}>
            <div className='ecuador'>
              <img className='mapaEc' src='https://vehicentro.com/images/mapa-ecuador-prendido.png' />
              <img className='ecuadorBandera' src='https://vehicentro.com/images/ecuador-vehicentro.png' />
            </div>
          </a>
          <a className='linkColombia' href='https://vehicentro.com/co/'>
            <div className='colombia'>
              <img className='mapaCo' src='https://vehicentro.com/images/mapa-colombia-prendido.png' />
              <img className='colombiaBandera' src='https://vehicentro.com/images/colombia-vehicentro.png' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
 */

import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../popUp.css';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Abrir el pop-up al iniciar la aplicación
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = () => {
    window.location.href = 'https://vehicentro.com/co/';
  };

  return (
    <div>
      {isOpen && (
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
                  src="https://vehicentro.com/images/mapa-ecuador-prendido.png"
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
                  src="https://vehicentro.com/images/mapa-colombia-prendido.png"
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