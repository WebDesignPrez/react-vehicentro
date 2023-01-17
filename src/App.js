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
function App() {
  /*   
    <BrowserRouter basename="/reactjs/">
    */
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
          <Route path="/requisitos-de-calidad" element={<Requisitos_de_calidad/>} />
          <Route path="/cabina" element={<Cabina/>} />
          <Route path="/motor-mc" element={<Motor_mc/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App