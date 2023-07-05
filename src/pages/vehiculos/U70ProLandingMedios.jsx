import { useEffect, useState, React } from "react";
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import Galeria from './componentes/Galeria'
import Detalles from './componentes/Detalles'
import Vehiculo from './componentes/Vehiculo'
import CompraMenu from './componentes/AmenidadesU70Pro'
import Footer from '../../components/Footer'
import InteriorU70Pro from './componentes/InteriorU70Pro'

import { Helmet } from "react-helmet";
import FormularioU70ProMedios from './componentes/FormularioU70ProMedios'
import HeaderFooterLanding from "../../components/HeaderFooterLanding";



function U70Pro() {

  const path = 'vehiculos/' //ruta de imagenes del u70pro

  return (
    <>
      <Helmet>
        <title> U70PRO - Vehicentro</title>
        <meta name="description" content={'Venta del suv mas largo de Ecuador'} />
        <meta name="keywords" content="autos, SUV, venta de SUV, suv en ecuador"></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>


      <HeaderFooterLanding />

      <Hero path={path} />

      {/* Characteristics */}
      <CompraMenu />

      {/* Colors of car (Tecnologies) */}
      <Vehiculo path={path} />

      {/* Two pages of three images */}
      <Galeria path={path} />

      {/* Component for interior images */}
      <InteriorU70Pro />

      <FormularioU70ProMedios />

      {/* Security */}
      <Detalles />

      <HeaderFooterLanding />

    </>
  )
}

export default U70Pro 