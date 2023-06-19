import React from 'react'
import Interior from './componentes/Interior'
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import CompraMenu from './componentes/CompraMenu'


function VehiculosPage() {
  return (
    <>
      <NavBarTop />
      <Hero />
      <CompraMenu/>
      <Interior />
    </>
  )
}

export default VehiculosPage 