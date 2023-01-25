import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Proximamente() {
    return (
        <>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <div className="posRelative banner">
            <img className=" slideMain" src="./images/proximamente-2.webp" alt="Punto de Venta" />
        </div>
    )
}

export default Proximamente