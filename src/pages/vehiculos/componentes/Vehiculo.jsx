import React, { useState } from 'react';
import env from './../../../config';
import './styles/vehiculo.css';

const Vehiculo = ({ path }) => {
  const urlMedia = env.url + path;


  const [selectedImage, setSelectedImage] = useState(urlMedia + 'blanco.webp');

  const handleButtonClick = (newImage) => {
    setSelectedImage(urlMedia + newImage + '.webp');
  };

  return (
    <div className='todo'>
      <div className='vehiculos'>

        <img className='carImage' src={selectedImage} alt="U70PRO" />


        <div className='description'>
          <p>COLORES</p>
          <div className='buttons'>
            <button className='blanco' onClick={() => handleButtonClick('blanco')}></button>
            <button className='bluesky' onClick={() => handleButtonClick('bluesky')}></button>
            <button className='conchevino' onClick={() => handleButtonClick('conchevino')}></button>
            <button className='gris' onClick={() => handleButtonClick('gris')}></button>
            <button className='negro' onClick={() => handleButtonClick('negro')}></button>
            <button className='plateado' onClick={() => handleButtonClick('plateado')}></button>
          </div>
        </div>
      </div>

      <div className='textoVehiculos'>
        <img src={urlMedia + 'tecnologia.jpg'} alt='' />
      </div>

    </div>

  );
};

export default Vehiculo;
