import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { useEffect } from 'react';
import env from '../config';
let urlMedia = env.url

function Repuestos() {
  return (
    <>
      <Helmet>
        <title>Repuestos | Vehicentro</title>
        <meta name="description" content="Repuestos" />
      </Helmet>
      <NavBarTop />
      <Content1 />
      <Content2 />
      <Content3 />
      <BannerContacto />
      <Footer />
    </>
  )
}
function Content1() {
  return (
    <div className="boxesIniHeader main compania rep">
      <div className="boxLeftHeader">
        <img src={urlMedia+"repuestos/aceite-sinotruk.webp"} />
      </div>
      <div className="boxRightHeader inside" >
        <img src={urlMedia+"repuestos/repuestos-vehicentro.webp"} />
      </div>
    </div>
  )
}
function Content2() {
  return (

    <div className="boxesIni posRelative news repuesto">
      <div className="boxNews companiatext2 btn">
        <p></p>
        <p className="tituloConcesionario">COTIZA TUS REPUESTOS</p>
      <div className="btnConcesionarios">
        <a className='btn6' option="Ambato" href='https://api.whatsapp.com/send?phone=593991374302&text=Hola,%20necesito%20m%C3%A1s%20informaci%C3%B3n.'>WhatsApp</a>
      </div>
      </div>
      <div className="boxNews companiaimg2">
        <img src={urlMedia+"repuestos/logo-sinotruk.webp"} width="1000" height="760" className="slideMain" alt="Series100" />
      </div>
      <div className="boxNews companiaimg2">
        <img src={urlMedia+"repuestos/logo-keyton.webp"} width="1000" height="760" className="slideMain" alt="Mixer" />
      </div>
      <div className="boxNews companiaimg2">
        <img src={urlMedia+"repuestos/logo-sunward.webp"} width="1000" height="760" className="slideMain" alt="Excavadora" />
      </div>
      <div className="boxNews companiatext2">
        <p className="repuestotexto">Contamos con una red de 14 concesionarios a nivel nacional, 5 talleres de mantenimiento vehicular y el stock de repuestos más amplio y completo del pais.</p>
      </div>
    </div>
  )
}

function Content3() {
  return (
    <div className="boxesIni posRelative news repuesto grad">
      <div className="boxLeft c7h repuestos">
        <video preload="none" autoPlay={true} playsInline={true} controls loop muted src={urlMedia+"repuestos/repuestos.webm"} className="videoWidthRepuesto" />
      </div>
    </div>
  )
}
export default Repuestos