import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';

let urlMedia = env.url +"/vehiculos/"

function Hero() {

  return (
    <>
    <div className='vehiculosBox'>
        <div className='tituloVehiculos'>
        </div>
       <div className='headHero'>
         <p className='tituloHeadHero'>U 70 Pro</p>
         <p>____</p>
         <p className='tituloHeadHero mas'>La perfección en movimiento</p>
         <p className='tituloHeadHero2 mas'>Descubra qué hizo de este automóvil de edicion limitada un artículo de colección instantáneo</p>
       </div>
    </div>

    </>
  )
}

export default Hero