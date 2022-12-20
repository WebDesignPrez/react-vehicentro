import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Repuestos() {
  return (
    <>
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
        <img src="./images/repuestos/aceite-sinotruk.webp" />
      </div>
      <div className="boxRightHeader inside" >
        <img src="./images/repuestos/repuestos-vehicentro.webp" />
      </div>
    </div>
  )
}
function Content2() {
  return (

    <div className="boxesIni posRelative news repuesto">
      <div className="boxNews companiaimg2">
        <img src="./images/compania/logo-sinotruk.webp" width="1000" height="760" className="slideMain" alt="Series100" />
      </div>
      <div className="boxNews companiaimg2">
        <img src="./images/compania/logo-keyton.webp" width="1000" height="760" className="slideMain" alt="Mixer" />
      </div>
      <div className="boxNews companiaimg2">
        <img src="./images/compania/logo-sunward.webp" width="1000" height="760" className="slideMain" alt="Excavadora" />
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
      <img src="./images/repuestos/talleres-y-repuestros-sinotruk.webp" width="1000" height="760" className="slideMain" alt="Excavadora" />
    </div>
  )
}
export default Repuestos