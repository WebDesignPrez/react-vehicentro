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
      <img src={urlMedia + 'marca2.jpg'}/>
    </div>
    
    </div>

  );
};

export default Vehiculo;
