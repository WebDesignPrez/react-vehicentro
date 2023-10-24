import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet"
import env from '../config';
let urlMedia = env.url

function Compania() {
    return (
        <>
            <Helmet>
                <title>Compañia | Vehicentro</title>
                <meta name="description" content="Compañia" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <BannerContacto />
            <Footer />

        </>
    )
}

function Content1() {
    return (
        <div className="boxesIniHeader main compania">
            <div className="boxLeftHeader">
                <img src={urlMedia+"compania/conpania-vehicentro.webp"} />
                <p className="companiatexto">Empresa Ecuatoriana con 15 años de experiencia en el
                    mercado. Contamos con una red de 18 concesionarios a
                    nivel nacional, 10 talleres de mantenimiento vehicular y el
                    stock de repuestos más amplio y completo de Sinotruk</p>
            </div>
            <div className="boxRightHeader inside" >
                <img className="companiavehicentro" src={urlMedia+"compania/vehicentro.webp"} width="400" />
                <p className="companiatexto">Distribuidores #1 a Nivel Nacional de SINOTRUK, contamos
                    con Talleres especializados y amplio stock de repuestos,
                    siempre pensando en nuestros clientes</p>
                <img src={urlMedia+"compania/conpania-vehicentro-2.webp"} />
            </div>
        </div>
    )
}

function Content2() {
    return (

        <div className="boxesIni posRelative news compania">
            <div className="boxNews companiatext2">
                <p className="companiatexto2">DISTRIBUIMOS</p>
            </div>
            <div className="boxNews companiaimg2 fif">
                <img src={urlMedia+"sinotrukNew.webp"} width="1000" height="760" className="slideMain" alt="Series100" />
            </div>
            <div className="boxNews companiaimg2 fif">
                <img src={urlMedia+"compania/logo-keyton.webp"} width="1000" height="760" className="slideMain" alt="Mixer" />

            </div>
            <div className="boxNews companiaimg2 fif">
                <img src={urlMedia+"compania/logo-sunward.webp"} width="1000" height="760" className="slideMain" alt="Excavadora" />

            </div>
        </div>
    )
}

function Content3() {
    return (
        <div className="boxesIni posRelative news compania b">
            <div className="boxNews companiatext2">
                <p className="companiatexto2 b">COOPERACIÓN INTERNACIONAL</p>
            </div>

            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/continental.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/hendrickson.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/behr.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/wabco.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/tmd.png"} />
            </div>


            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/skf.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/cargotex.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/voss.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/valeo.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/actuant.png"} />
            </div>


            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/zf.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/denso.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/bosch.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/meritor.png"} />
            </div>
            <div className="boxNews companiaimg2 b">
                <img src={urlMedia+"compania/sachs.png"} />
            </div>


            <div className="boxNews companiaimg2 b" style={{ 'order': `4` }}>
            </div>
            <div className="boxNews companiaimg2 b" style={{ 'order': `0` }}>
                <img src={urlMedia+"compania/mann.png"} />
            </div>
            <div className="boxNews companiaimg2 b" style={{ 'order': `2` }}>
            </div>
            <div className="boxNews companiaimg2 b " style={{ 'order': `1` }}>
                <img src={urlMedia+"compania/vdo.png"} />
            </div>
            <div className="boxNews companiaimg2 b " style={{ 'order': `3` }}>
            </div>

        </div>

    )
}

function Content4() {
    return (
        <div className="boxesIni posRelative news compania c">
            <div className="boxNews companiaimg2 c">
                <img src={urlMedia+"compania/vehicentro.webp"} />
                <p className="companiatexto2 c">CERTIFICADO ISO 9001:2015<br />
                    DE CALIDAD</p>
            </div>
            <div className="boxNews companiaimg2 c d">
                <img src={urlMedia+"compania/iso.webp"} />
            </div>
        </div>
    )
}

export default Compania
