import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';

let urlMedia = env.url + "/vehiculos/"

function Hero() {

  return (
    <div className='hero'>
      <img src="https://vehicentro.com/images/vehiculos/heroU70Pro.jpg" alt="U70PRO" />
    </div>
  )
}

export default Hero