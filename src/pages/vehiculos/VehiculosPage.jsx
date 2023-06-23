import { useEffect, useState, React } from "react";
import Interior from './componentes/Interior'
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import Galeria from './componentes/Galeria'
import Detalles from './componentes/Detalles'
import Vehiculo from './componentes/Vehiculo'
import CompraMenu from './componentes/CompraMenu'
import Footer from '../../components/Footer'

import { Helmet } from "react-helmet";
import FormularioMenu from '../../pages/vehiculos/componentes/FormularioMenu'



function VehiculosPage() {
  return (
    <>
      <Helmet>
        <title> U70PRO - Vehicentro</title>
        <meta name="description" content={'Venta del suv mas largo de Ecuador'} />
        <meta name="keywords" content="autos, SUV, venta de SUV, suv en ecuador"></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>


      <NavBarTop />

      <Hero />
      <CompraMenu />

      <Vehiculo />
      <Galeria />

      <Interior />
      <FormularioMenu />
      
      {/* <Detalles /> */}


      <Footer />
    </>
  )
}

export default VehiculosPage 