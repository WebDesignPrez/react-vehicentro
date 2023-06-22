import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';

let urlMedia = env.url + "/vehiculos/"

function Hero() {

  return (
    <>
      <div className='vehiculosBox'>

        <div className='imagenesLogos'>
          <img src={urlMedia + "iconosinotruk.webp"}></img>
          <img className='u70' src={urlMedia + "U70prologo.webp"}></img>

          <div className='headHero'>
            <p className='tituloHeadHero mas'>Desde</p>
            <p className='tituloHeadHero'>$20.990</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hero