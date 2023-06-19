import React from 'react'
import Interior from './componentes/Interior'
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import Galeria from './componentes/Galeria'
import Detalles from './componentes/Detalles'
import Vehiculo from './componentes/Vehiculo'

function VehiculosPage() {
  return (
    <>
      <NavBarTop />
      <Hero />
      <Vehiculo />
      <Interior />
      <Galeria />
      <Detalles />
    </>
  )
}

export default VehiculosPage 