import React from 'react'
import "../../vehiculos/componentes/styles/hero.css";
import env from '../../../config';

let urlMedia = env.url +"/vehiculos/"

function Hero() {

  return (
    <>
    <div className='vehiculosBox'>
        <div className='tituloVehiculos'>
          <p>Sinotruk</p>
        </div>
       <div className='headHero'>
         <p className='tituloHeadHero'>U 70 Pro</p>
         <p>____</p>
         <p className='tituloHeadHero mas'>El automóvil con prestaciones de alta gama</p>
         <p className='tituloHeadHero2 mas'>Descubra qué hizo de este automóvil de edicion limitada un artículo de colección instantáneo</p>
         <p className='tituloHeadHero3'>Todas las unidades de esta serie limitada están vendidas.</p>
       </div>
    </div>

    </>
  )
}

export default Hero