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
import FormularioU70Pro from './componentes/FormularioU70Pro'



function U70Pro() {

  const path = 'vehiculos/' //ruta de imagenes del u70pro

  return (
    <>
      <Helmet>
        <meta name="author" content="Celimo Constante, Anthony Perez, Prez"/>
        <title>U70PRO - Venta de SUV, Autos y Carros Sinotruk en Ecuador - Vehicentro</title>
        <meta name="description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70PRO en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
        <meta name="keywords" content="suv, autos, carros, venta de suvs, venta de autos, venta de carros, suvs en ecuador, autos en ecuador, carros en ecuador, suvs en venta Ecuador, autos en venta Ecuador, carros en venta Ecuador, venta vehículos Sinotruk, U70PRO, SUV más largo, SUV mercado ecuatoriano"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:locale" content="es_EC"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="U70PRO - Venta de SUV, Autos y Carros Sinotruk en Ecuador - Vehicentro"></meta>
        <meta property="og:description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70PRO en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
        <meta property="og:url" content="https://vehicentro.com/sinotruk/autos/u70pro"></meta>
        <meta property="og:site_name" content="Vehicentro"></meta>
        <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
        <meta property="og:image" content="https://www.vehicentro.com/images/vehiculos/imgForm.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70PRO en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>


      <NavBarTop />

      <Hero path={path} />

      {/* Characteristics */}
      <CompraMenu />

      {/* Colors of car (Tecnologies) */}
      <Vehiculo path={path} />

      {/* Two pages of three images */}
      <Galeria path={path} />

      {/* Component for interior images */}
      <InteriorU70Pro />

      <FormularioU70Pro />

      {/* Security */}
      <Detalles />


      <Footer />
    </>
  )
}

export default U70Pro 