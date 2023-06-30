import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';


function Hero({ path }) {
  let urlMedia = env.url + path


  return (
    <div className='hero '>
      <img src={urlMedia + "hero.png"} alt="U70" />
    </div>
  )
}

export default Hero