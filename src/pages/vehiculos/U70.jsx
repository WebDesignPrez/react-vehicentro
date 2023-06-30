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
  const path = 'u70/'
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
      <AmenidadesU70 />

      <Vehiculo path={path} />
      <Galeria />

      <Interior />
      <FormularioMenu />

      <Detalles />


      <Footer />
    </>
  )
}

export default U70