import Inicio from "./pages/Inicio"
import Inicio2 from "./pages/Inicio2"
import Repuestos from "./pages/Repuestos"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Tecnologia from "./pages/Tecnologia"
import { useParams } from "react-router";
import Camion from "./pages/Camion"
import Cabezal from "./pages/Cabezal"
import Concesionarios from "./pages/Concesionarios"
import Excavadora from "./pages/Excavadora"
import Minicargadoras from "./pages/Minicargadoras"
import Volqueta from "./pages/Volqueta"
import Camion_en_uso from "./pages/Camion_en_uso"
import Compania from "./pages/Compania"
import Trabaja_con_nosotros from "./pages/Trabaja_con_nosotros"
import Mixer from "./pages/Mixer"
import Serie from "./pages/Serie"
import { Helmet } from "react-helmet"
import Mensaje from "./pages/Mensaje"
import Experiencia from "./pages/Experiencia"
import Requisitos_de_calidad from "./pages/Requisitos_de_calidad"
import Cabina from "./pages/Cabina"
import Motor_mc from "./pages/Motor_mc"
import Bastidor_o_chasis from "./pages/Bastidor_o_chasis"
import Ejes_man from "./pages/Ejes_man"
import Sistema_evb from "./pages/Sistema_evb"
import Serie_100 from "./pages/Serie_100"
import Volquetas from "./pages/Volquetas"
import Garantia from "./pages/Garantia"
import Proximamente from "./pages/Proximamente"
import React from 'react';
import HelpDesk from "./pages/HelpDesk"
import Vehiculos_especiales from "./pages/Vehiculos_especiales"
import Proximamente_hidromek from "./pages/Proximamente-hidromek"
import Rendimiento from "./pages/rendimiento"
import Rendimiento100 from "./pages/rendimiento100"
import Rendimientoc7h from "./pages/rendimientoc7h"
import Rendimientot7h from "./pages/rendimientot7h"
import Patiotuerca from "./pages/patiotuerca"
import El_universo from "./pages/el-universo"
import El_extra from "./pages/el-extra"
import Comercio from "./pages/comercio"
import Buen_viaje from "./pages/buen-viaje"
import Ecdf from "./pages/ecdf"
import Primicias from "./pages/primicias"
import Expresso from "./pages/expresso"
import Revista_motors from "./pages/Revista-motors"
import Serie_mixer from "./pages/Serie-mixer"
import Serie_excavadora from "./pages/Serie-excavadora"
import Camion_landing_extra from "./pages/Camion-landing-extra"
import Camion_landing_comercio from "./pages/Camion-landing-comercio"
import Camion_landing_universo from "./pages/Camion-landing-universo"
import Camion_landing_primicias from "./pages/Camion-landing-primicias"
import Camion_landing_ecdf from "./pages/Camion-landing-ecdf"
import Camion_landing_expresso from "./pages/Camion-landing-expresso"
import Camion_landing_revista_motors from "./pages/Camion-landing-revista-motors"
import Cabezal_landing_extra from "./pages/Cabezal-landing-extra"
import Cabezal_landing_comercio from "./pages/Cabezal-landing-comercio"
import Cabezal_landing_universo from "./pages/Cabezal-landing-universo"
import Cabezal_landing_primicias from "./pages/Cabezal-landing-primicias"
import Cabezal_landing_ecdf from "./pages/Cabezal-landing-ecdf"
import Cabezal_landing_expresso from "./pages/Cabezal-landing-expresso"
import Cabezal_landing_revista_motors from "./pages/Cabezal-landing-revista-motors"
import Excavadora_landing_extra from "./pages/Excavadora-landing-extra"
import Excavadora_landing_comercio from "./pages/Excavadora-landing-comercio"
import Excavadora_landing_universo from "./pages/Excavadora-landing-universo"
import Excavadora_landing_primicias from "./pages/Excavadora-landing-primicias"
import Excavadora_landing_ecdf from "./pages/Excavadora-landing-ecdf"
import Excavadora_landing_expresso from "./pages/Excavadora-landing-expresso"
import Excavadora_landing_revista_motors from "./pages/Excavadora-landing-revista-motors"
import Volqueta_landing_extra from "./pages/Volqueta-landing-extra"
import Volqueta_landing_comercio from "./pages/Volqueta-landing-comercio"
import Volqueta_landing_universo from "./pages/Volqueta-landing-universo"
import Volqueta_landing_primicias from "./pages/Volqueta-landing-primicias"
import Volqueta_landing_ecdf from "./pages/Volqueta-landing-ecdf"
import Volqueta_landing_expresso from "./pages/Volqueta-landing-expresso"
import Volqueta_landing_revista_motors from "./pages/Volqueta-landing-revista-motors"
import Mixer_landing_extra from "./pages/Mixer-landing-extra"
import Mixer_landing_comercio from "./pages/Mixer-landing-comercio"
import Mixer_landing_universo from "./pages/Mixer-landing-universo"
import Mixer_landing_primicias from "./pages/Mixer-landing-primicias"
import Mixer_landing_ecdf from "./pages/Mixer-landing-ecdf"
import Mixer_landing_expresso from "./pages/Mixer-landing-expresso"
import Mixer_landing_revista_motors from "./pages/Mixer-landing-revista-motors"
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad"
import Minicargadoras_landing_comercio from "./pages/Minicargadoras-landing-comercio"
import Minicargadoras_landing_ecdf from "./pages/Minicargadoras-landing-ecdf"
import Minicargadoras_landing_expresso from "./pages/Minicargadoras-landing-expresso"
import Minicargadoras_landing_extra from "./pages/Minicargadoras-landing-extra"
import Minicargadoras_landing_primicias from "./pages/Minicargadoras-landing-primicias"
import Minicargadoras_landing_revista_motors from "./pages/Minicargadoras-landing-revista-motors"
import Minicargadoras_landing_universo from "./pages/Minicargadoras-landing-universo"
import U70Pro from "./pages/vehiculos/U70Pro"
import U70 from "./pages/vehiculos/U70"

function App() {

  return (

    <BrowserRouter >
      <Helmet>
        <title>Vehicentro</title>
        <meta name="description" content="Vehicentro" />
      </Helmet>
      <main>
        <Routes>
          <Route path="/" element={<Inicio2 />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/camiones/:id" element={<Camion />} />
          <Route path="/cabezales/:id" element={<Cabezal />} />
          <Route path="/excavadoras/:id" element={<Excavadora />} />
          <Route path="/minicargadoras/:id" element={<Minicargadoras />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/concesionarios" element={<Concesionarios />} />
          <Route path="/volquetas/:id" element={<Volqueta />} />
          <Route path="/camion-en-uso/:id" element={<Camion_en_uso />} />
          <Route path="/compania" element={<Compania />} />
          <Route path="/trabaja-con-nosotros" element={<Trabaja_con_nosotros />} />
          <Route path="/mixer/:id" element={<Mixer />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/serie/:id" element={<Serie />} />
          <Route path="/gracias-por-contactarnos" element={<Mensaje />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/requisitos-de-calidad" element={<Requisitos_de_calidad />} />
          <Route path="/cabina" element={<Cabina />} />
          <Route path="/motor-mc" element={<Motor_mc />} />
          <Route path="/bastidor-o-chasis" element={<Bastidor_o_chasis />} />
          <Route path="/ejes-man" element={<Ejes_man />} />
          <Route path="/sistema-evb" element={<Sistema_evb />} />
          <Route path="/serie/100" element={<Serie_100 />} />
          <Route path="/serie/volquetas" element={<Volquetas />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/proximamente" element={<Proximamente />} />
          <Route path="/soporte" element={<HelpDesk />} />
          <Route path="/serie/especiales" element={<Vehiculos_especiales />} />
          <Route path="/serie/especiales" element={<Vehiculos_especiales />} />
          <Route path="/proximamente-hidromek" element={<Proximamente_hidromek />} />
          <Route path="/rendimiento/t5g" element={<Rendimiento />} />
          <Route path="/rendimiento/100" element={<Rendimiento100 />} />
          <Route path="/rendimiento/c7h" element={<Rendimientoc7h />} />
          <Route path="/rendimiento/t7h" element={<Rendimientot7h />} />
          <Route path="/landing/patiotuerca" element={<Patiotuerca />} />
          <Route path="/landing/el-universo" element={<El_universo />} />
          <Route path="/landing/el-extra" element={<El_extra />} />
          <Route path="/landing/comercio" element={<Comercio />} />
          <Route path="/landing/buen-viaje" element={<Buen_viaje />} />
          <Route path="/landing/ecdf" element={<Ecdf />} />
          <Route path="/landing/primicias" element={<Primicias />} />
          <Route path="/landing/expresso" element={<Expresso />} />
          <Route path="/landing/revista-motors" element={<Revista_motors />} />
          <Route path="/serie/mixer" element={<Serie_mixer />} />
          <Route path="/serie/excavadora" element={<Serie_excavadora />} />
          <Route path="/landing/el-extra/camion/:id" element={<Camion_landing_extra />} />
          <Route path="/landing/el-extra/cabezal/:id" element={<Cabezal_landing_extra />} />
          <Route path="/landing/el-extra/excavadora/:id" element={<Excavadora_landing_extra />} />
          <Route path="/landing/el-extra/volqueta/:id" element={<Volqueta_landing_extra />} />
          <Route path="/landing/el-extra/mixer/:id" element={<Mixer_landing_extra />} />
          <Route path="/landing/el-extra/minicargadoras/:id" element={<Minicargadoras_landing_extra />} />
          <Route path="/landing/comercio/minicargadoras/:id" element={<Minicargadoras_landing_comercio />} />
          <Route path="/landing/comercio/camion/:id" element={<Camion_landing_comercio />} />
          <Route path="/landing/comercio/cabezal/:id" element={<Cabezal_landing_comercio />} />
          <Route path="/landing/comercio/excavadora/:id" element={<Excavadora_landing_comercio />} />
          <Route path="/landing/comercio/volqueta/:id" element={<Volqueta_landing_comercio />} />
          <Route path="/landing/comercio/mixer/:id" element={<Mixer_landing_comercio />} />
          <Route path="/landing/el-universo/camion/:id" element={<Camion_landing_universo />} />
          <Route path="/landing/el-universo/cabezal/:id" element={<Cabezal_landing_universo />} />
          <Route path="/landing/el-universo/excavadora/:id" element={<Excavadora_landing_universo />} />
          <Route path="/landing/el-universo/volqueta/:id" element={<Volqueta_landing_universo />} />
          <Route path="/landing/el-universo/mixer/:id" element={<Mixer_landing_universo />} />
          <Route path="/landing/el-universo/minicargadoras/:id" element={<Minicargadoras_landing_universo />} />
          <Route path="/landing/primicias/camion/:id" element={<Camion_landing_primicias />} />
          <Route path="/landing/primicias/cabezal/:id" element={<Cabezal_landing_primicias />} />
          <Route path="/landing/primicias/excavadora/:id" element={<Excavadora_landing_primicias />} />
          <Route path="/landing/primicias/volqueta/:id" element={<Volqueta_landing_primicias />} />
          <Route path="/landing/primicias/mixer/:id" element={<Mixer_landing_primicias />} />
          <Route path="/landing/primicias/minicargadoras/:id" element={<Minicargadoras_landing_primicias />} />
          <Route path="/landing/ecdf/camion/:id" element={<Camion_landing_ecdf />} />
          <Route path="/landing/ecdf/cabezal/:id" element={<Cabezal_landing_ecdf />} />
          <Route path="/landing/ecdf/excavadora/:id" element={<Excavadora_landing_ecdf />} />
          <Route path="/landing/ecdf/minicargadoras/:id" element={<Minicargadoras_landing_ecdf />} />
          <Route path="/landing/ecdf/volqueta/:id" element={<Volqueta_landing_ecdf />} />
          <Route path="/landing/ecdf/mixer/:id" element={<Mixer_landing_ecdf />} />
          <Route path="/landing/expresso/camion/:id" element={<Camion_landing_expresso />} />
          <Route path="/landing/expresso/cabezal/:id" element={<Cabezal_landing_expresso />} />
          <Route path="/landing/expresso/excavadora/:id" element={<Excavadora_landing_expresso />} />
          <Route path="/landing/expresso/volqueta/:id" element={<Volqueta_landing_expresso />} />
          <Route path="/landing/expresso/mixer/:id" element={<Mixer_landing_expresso />} />
          <Route path="/landing/expresso/minicargadoras/:id" element={<Minicargadoras_landing_expresso />} />
          <Route path="/landing/revista-motors/camion/:id" element={<Camion_landing_revista_motors />} />
          <Route path="/landing/revista-motors/cabezal/:id" element={<Cabezal_landing_revista_motors />} />
          <Route path="/landing/revista-motors/excavadora/:id" element={<Excavadora_landing_revista_motors />} />
          <Route path="/landing/revista-motors/volqueta/:id" element={<Volqueta_landing_revista_motors />} />
          <Route path="/landing/revista-motors/mixer/:id" element={<Mixer_landing_revista_motors />} />
          <Route path="/landing/revista-motors/minicargadoras/:id" element={<Minicargadoras_landing_revista_motors />} />
          <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
          <Route path="/sinotruk/autos/u70pro" element={<U70Pro />} />
          <Route path="/sinotruk/autos/u70" element={<U70 />} />


        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App