import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';


function Hero({ path }) {
  let urlMedia = env.url + path


  return (
    <div className='hero '>
      <img src={urlMedia + "webU70Hero.webp"} alt="auto 7 pasajeros" title='auto 7 pasajeros' />
    </div>
  )
}

export default Hero