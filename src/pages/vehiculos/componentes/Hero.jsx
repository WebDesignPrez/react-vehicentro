import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';

let urlMedia = env.url +"/vehiculos/"

function Hero() {

  return (
    <>
      <div className='vehiculosBox'>
        <div className='imagenesLogos'>
          <div className='headHero'>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero