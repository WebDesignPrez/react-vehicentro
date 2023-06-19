import React from 'react'
import "../../../vehiculos.css";
import env from '../../../config';

let urlMedia = env.url +"/vehiculos/"

function Hero() {

  return (
    <>
    <div className='vehiculosBox'>
        <img src={urlMedia + "fondoVehiculo.webp"} alt="" />
    </div>

    </>
  )
}

export default Hero