import { useEffect, useState, React } from "react";
import Hero from './componentes/Hero'
import NavBarTop from '../../NavBarTop'
import Galeria from './componentes/Galeria'
import Detalles from './componentes/Detalles'
import Vehiculo from './componentes/Vehiculo'
import AmenidadesU70 from './componentes/AmenidadesU70'
import InteriorU70 from './componentes/InteriorU70'
import Footer from '../../components/Footer'

import { Helmet } from "react-helmet";
import FormularioMenu from './componentes/FormularioU70Pro'
import FormularioU70 from './componentes/FormularioU70'



function U70() {

  const path = 'u70/' // ruta de imagenes del u70

  return (
    <>
      <Helmet>
      <meta name="author" content="Celimo Constante, Anthony Perez, Prez"/>
      <title>SUV U70 - auto 7 pasajeros - Sinotruk</title>
      <meta name="description" content="Descubre el SUV, Autos y Carros Sinotruk U70 en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano, auto 7 pasajeros"></meta>
      <meta name="keywords" content="suv, autos, carros, auto 7 pasajeros, venta de suvs, venta de autos, venta de carros, suvs en ecuador, autos en ecuador, carros en ecuador, suvs en venta Ecuador, autos en venta Ecuador, carros en venta Ecuador, venta vehículos Sinotruk, U70, SUV más largo, SUV mercado ecuatoriano"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta property="og:locale" content="es_EC"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="U70 - Venta de SUV, Autos y Carros Sinotruk en Ecuador - Vehicentro"></meta>
      <meta property="og:description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70 en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
      <meta property="og:url" content="https://vehicentro.com/sinotruk/autos/u70"></meta>
      <meta property="og:site_name" content="Vehicentro"></meta>
      <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
      <meta property="og:image" content="https://www.vehicentro.com/images/vehiculos/formu70.jpg"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:description" content="Descubre la venta del SUV, Autos y Carros Sinotruk U70 en Ecuador en Vehicentro. El SUV más largo del mercado ecuatoriano. Amplia selección de vehículos de alta calidad y rendimiento."></meta>
      <meta name="twitter:label1" content="Tiempo de lectura"></meta>
      <meta name="twitter:data1" content="5 minutos"></meta>
      </Helmet>
      <div className="ocultoMomentaneo">
            <h1>SUV U70 - auto 7 pasajeros - Sinotruk</h1>	
            <p>¿Necesitas un vehículo espacioso y versátil para llevar a tu familia o grupo de amigos en Ecuador? Nuestra selección de autos de 7 pasajeros es la respuesta perfecta a tus necesidades de transporte. Con un equilibrio perfecto entre comodidad, seguridad y capacidad, nuestros vehículos están diseñados para hacer que tus viajes sean inolvidables. Ya sea para aventuras familiares o escapadas con amigos, nuestros autos de 7 pasajeros ofrecen un amplio espacio interior y las últimas características de seguridad y entretenimiento. Descubre una forma más conveniente y emocionante de viajar por Ecuador. Encuentra el auto de tus sueños entre nuestra gama de opciones y comienza a planificar tus próximas aventuras en grande. ¡Explora nuestra selección hoy y descubre por qué somos la elección preferida de aquellos que buscan la máxima comodidad y estilo en sus viajes en grupo!</p>
      </div>

      <NavBarTop />

      <Hero path={path}/>

      {/* Characteristics */}
      <AmenidadesU70 />

      {/* Colors of car (Technologies) */}
      {/* TODO: Add path for u70 */}
      <Vehiculo path={path} />

      {/* Two pages of three images */}
      <Galeria path={path} />

      {/* Component for interior images */}
      <InteriorU70 />

      <FormularioU70 />

      {/* Security */}
      <Detalles />


      <Footer />
    </>
  )
}

export default U70