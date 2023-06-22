import React, { useState } from 'react';
import env from './../../../config';
import './styles/vehiculo.css';

const Vehiculo = () => {
  const urlMedia = env.url + 'vehiculos/';

  const [selectedImage, setSelectedImage] = useState(urlMedia + 'blanco.png');

  const handleButtonClick = (newImage) => {
    setSelectedImage(urlMedia + newImage + '.png');
  };

  return (
    <div className='todo'>
        <div className='vehiculos'>
  
        <img className='carImage' src={selectedImage} alt="" />

  
          <div className='description'>
            <p>COLORES</p>
            <div className='buttons'>
              <button className='blanco' onClick={() => handleButtonClick('blanco')}></button>
              <button className='bluesky' onClick={() => handleButtonClick('bluesky')}></button>
              <button className='conchevino' onClick={() => handleButtonClick('conchevino')}></button>
              <button className='gris' onClick={() => handleButtonClick('gris')}></button>
            </div>
           </div>
        </div>
    <div className='textoVehiculos'>
      <div className='boxtexto'>
        <p className='titulo'>Lorem ipsum dolor</p>
        <p className='frase'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    
    </div>

  );
};

export default Vehiculo;
