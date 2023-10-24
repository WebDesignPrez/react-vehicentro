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
        <meta name="description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70PRO en Ecuador en Vehicentro, auto 7 pasajeros , El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
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
        <meta name="twitter:description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70PRO en Ecuador en Vehicentro. auto 7 pasajeros , El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>
      <div className="ocultoMomentaneo">
            <h1>U70 Pro - Auto 7 Pasajeros</h1>	
            <p>¿Necesitas un vehículo espacioso y versátil para llevar a tu familia o grupo de amigos en Ecuador? Nuestra selección de autos de 7 pasajeros es la respuesta perfecta a tus necesidades de transporte. Con un equilibrio perfecto entre comodidad, seguridad y capacidad, nuestros vehículos están diseñados para hacer que tus viajes sean inolvidables. Ya sea para aventuras familiares o escapadas con amigos, nuestros autos de 7 pasajeros ofrecen un amplio espacio interior y las últimas características de seguridad y entretenimiento. Descubre una forma más conveniente y emocionante de viajar por Ecuador. Encuentra el auto de tus sueños entre nuestra gama de opciones y comienza a planificar tus próximas aventuras en grande. ¡Explora nuestra selección hoy y descubre por qué somos la elección preferida de aquellos que buscan la máxima comodidad y estilo en sus viajes en grupo!</p>
      </div>
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