import { useEffect, useState, React } from "react";
import Interior from './componentes/Interior'
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import Galeria from './componentes/Galeria'
import Detalles from './componentes/Detalles'
import Vehiculo from './componentes/Vehiculo'
import AmenidadesU70 from './componentes/AmenidadesU70'
import Footer from '../../components/Footer'

import { Helmet } from "react-helmet";
import FormularioMenu from './componentes/FormularioMenu'



function U70() {

  const path = 'u70/' // ruta de imagenes del u70

  return (
    <>
      <Helmet>
        <title> U70 - Vehicentro</title>
        <meta name="description" content={'Venta del suv mas largo de Ecuador'} />
        <meta name="keywords" content="autos, SUV, venta de SUV, suv en ecuador"></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>


      <NavBarTop />

      <Hero path={path} />

      {/* Characteristics */}
      <AmenidadesU70 />

      {/* Colors of car (Technologies) */}
      <Vehiculo path={path} />

      {/* Two pages of three images */}
      <Galeria />

      {/* Component for interior images */}
      <Interior />

      <FormularioMenu />

      {/* Security */}
      <Detalles />


      <Footer />
    </>
  )
}

export default U70