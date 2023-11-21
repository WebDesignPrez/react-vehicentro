import React, { useState } from 'react';

const PopUpAvisoLegal = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <span className="close" onClick={handleClose}>×</span>
          <p>
            Hemos actualizado nuestro Aviso de política de privacidad.{' '}
            <a className='aAviso' href="https://vehicentro.com/politicaprivacidad" target="_blank" rel="noopener noreferrer">
              Conoce más.
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default PopUpAvisoLegal;
